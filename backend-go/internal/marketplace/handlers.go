package marketplace

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"
	"time"

	"github.com/gorilla/mux"
	"gopkg.in/yaml.v3"
	"wagmios/internal/activity"
	"wagmios/internal/auth"
)

const containersDir = "/app/data/containers"

var slugPattern = regexp.MustCompile(`^[a-z0-9][a-z0-9-]{0,62}$`)
var envKeyPattern = regexp.MustCompile(`^[A-Z_][A-Z0-9_]*$`)

// HandleListApps returns the marketplace app list
func HandleListApps(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	meta := auth.GetMetaFromContext(r.Context())
	if !auth.KeyStoreHasScope(meta, auth.ScopeMarketplaceRead) {
		writeError(w, http.StatusForbidden, "SCOPE_REQUIRED", "marketplace:read scope required")
		return
	}

	manifest, err := GetManifest()
	if err != nil {
		writeError(w, http.StatusInternalServerError, "MANIFEST_FETCH_FAILED", err.Error())
		return
	}

	json.NewEncoder(w).Encode(map[string]interface{}{
		"success": true,
		"data":    manifest,
		"error":   nil,
	})
}

// HandleGetApp returns a single app's metadata and raw compose template
func HandleGetApp(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	meta := auth.GetMetaFromContext(r.Context())
	if !auth.KeyStoreHasScope(meta, auth.ScopeMarketplaceRead) {
		writeError(w, http.StatusForbidden, "SCOPE_REQUIRED", "marketplace:read scope required")
		return
	}

	vars := mux.Vars(r)
	appID := vars["id"]

	if appID == "" {
		writeError(w, http.StatusBadRequest, "APP_ID_REQUIRED", "app ID is required")
		return
	}

	manifest, err := GetManifest()
	if err != nil {
		writeError(w, http.StatusInternalServerError, "MANIFEST_FETCH_FAILED", err.Error())
		return
	}

	appMeta := GetAppByID(manifest, appID)
	if appMeta == nil {
		writeError(w, http.StatusNotFound, "APP_NOT_FOUND", fmt.Sprintf("app %q not found in marketplace", appID))
		return
	}

	tmpl, err := GetAppTemplate(appID)
	if err != nil {
		writeError(w, http.StatusInternalServerError, "TEMPLATE_FETCH_FAILED", err.Error())
		return
	}

	json.NewEncoder(w).Encode(map[string]interface{}{
		"success": true,
		"data": map[string]interface{}{
			"meta":         appMeta,
			"template":     tmpl,
			"raw_markdown": tmpl.RawMarkdown,
		},
		"error": nil,
	})
}

// CreateRequest is the body for POST /api/marketplace/create
type CreateRequest struct {
	AppID       string            `json:"app_id"`
	CustomName  string            `json:"custom_name,omitempty"`
	Environment map[string]string `json:"environment,omitempty"`
	Volumes     map[string]string `json:"volumes,omitempty"`
	Ports       map[string]int    `json:"ports,omitempty"`
}

// HandleCreateApp fetches the compose template and writes it to disk for review.
// No container is started — user reviews and then calls /start to deploy.
func HandleCreateApp(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	meta := auth.GetMetaFromContext(r.Context())
	if meta == nil {
		writeError(w, http.StatusUnauthorized, "UNAUTHORIZED", "authentication required")
		return
	}
	if !auth.KeyStoreHasScope(meta, auth.ScopeMarketplaceWrite) {
		writeError(w, http.StatusForbidden, "SCOPE_REQUIRED", "marketplace:write scope required")
		return
	}

	if r.Method != http.MethodPost {
		writeError(w, http.StatusMethodNotAllowed, "METHOD_NOT_ALLOWED", "POST only")
		return
	}

	var req CreateRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		writeError(w, http.StatusBadRequest, "INVALID_REQUEST", "invalid JSON body")
		return
	}

	if req.AppID == "" {
		writeError(w, http.StatusBadRequest, "APP_ID_REQUIRED", "app_id is required")
		return
	}
	if err := validateSlug("app_id", req.AppID); err != nil {
		writeError(w, http.StatusBadRequest, "INVALID_APP_ID", err.Error())
		return
	}
	if req.CustomName != "" {
		if err := validateSlug("custom_name", slugify(req.CustomName)); err != nil {
			writeError(w, http.StatusBadRequest, "INVALID_CUSTOM_NAME", err.Error())
			return
		}
	}
	if err := validateCreateRequest(req); err != nil {
		writeError(w, http.StatusBadRequest, "INVALID_REQUEST", err.Error())
		return
	}
	if len(req.Volumes) > 0 {
		writeError(w, http.StatusBadRequest, "VOLUME_OVERRIDES_UNSUPPORTED", "marketplace volume overrides are not supported yet")
		return
	}

	manifest, err := GetManifest()
	if err != nil {
		writeError(w, http.StatusInternalServerError, "MANIFEST_FETCH_FAILED", err.Error())
		return
	}

	appMeta := GetAppByID(manifest, req.AppID)
	if appMeta == nil {
		writeError(w, http.StatusNotFound, "APP_NOT_FOUND", fmt.Sprintf("app %q not found", req.AppID))
		return
	}

	tmpl, err := GetAppTemplate(req.AppID)
	if err != nil {
		writeError(w, http.StatusInternalServerError, "TEMPLATE_FETCH_FAILED", err.Error())
		return
	}

	// Build compose content with user overrides
	composeContent, err := BuildCompose(tmpl, req)
	if err != nil {
		writeError(w, http.StatusBadRequest, "COMPOSE_BUILD_FAILED", err.Error())
		return
	}

	// Directory: containersDir/{app-id}/{timestamp}/ or containersDir/{custom-name}/
	installID := fmt.Sprintf("%s-%d", req.AppID, time.Now().Unix())
	if req.CustomName != "" {
		installID = slugify(req.CustomName)
	}
	installDir, err := safePathUnder(containersDir, filepath.Join(req.AppID, installID))
	if err != nil {
		writeError(w, http.StatusBadRequest, "INVALID_INSTALL_PATH", err.Error())
		return
	}

	if err := os.MkdirAll(installDir, 0755); err != nil {
		writeError(w, http.StatusInternalServerError, "INSTALL_DIR_FAILED", err.Error())
		return
	}

	composePath := filepath.Join(installDir, "docker-compose.yml")
	if err := os.WriteFile(composePath, []byte(composeContent), 0644); err != nil {
		writeError(w, http.StatusInternalServerError, "COMPOSE_WRITE_FAILED", err.Error())
		return
	}

	readmeContent := "# " + appMeta.Name + "\n\n" +
		"Installed via Container Marketplace.\n\n" +
		"**App:** " + appMeta.Name + "\n" +
		"**ID:** " + installID + "\n" +
		"**Created:** " + time.Now().Format(time.RFC3339) + "\n\n" +
		"## Deploy\n\n" +
		"```bash\ncd " + installDir + "\ndocker compose up -d\n```\n\n" +
		"## Original Template\n\n" + tmpl.RawMarkdown + "\n"

	if err := os.WriteFile(filepath.Join(installDir, "README.md"), []byte(readmeContent), 0644); err != nil {
		writeError(w, http.StatusInternalServerError, "README_WRITE_FAILED", err.Error())
		return
	}

	json.NewEncoder(w).Encode(map[string]interface{}{
		"success": true,
		"data": map[string]interface{}{
			"app_id":       req.AppID,
			"app_name":     appMeta.Name,
			"install_dir":  installDir,
			"compose_path": composePath,
			"compose":      composeContent,
			"status":       "created",
		},
		"error": nil,
	})
}

// StartRequest is the body for POST /api/marketplace/start
type StartRequest struct {
	ContainerName string `json:"container_name"` // required: user-provided name
	ComposePath   string `json:"compose_path"`   // path to docker-compose.yml
}

// HandleStartApp runs `docker compose up -d` on a pre-created compose file.
// container_name becomes the container name prefix.
func HandleStartApp(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	meta := auth.GetMetaFromContext(r.Context())
	if meta == nil {
		writeError(w, http.StatusUnauthorized, "UNAUTHORIZED", "authentication required")
		return
	}
	if !auth.KeyStoreHasScope(meta, auth.ScopeMarketplaceWrite) {
		writeError(w, http.StatusForbidden, "SCOPE_REQUIRED", "marketplace:write scope required")
		return
	}

	if r.Method != http.MethodPost {
		writeError(w, http.StatusMethodNotAllowed, "METHOD_NOT_ALLOWED", "POST only")
		return
	}

	var req StartRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		writeError(w, http.StatusBadRequest, "INVALID_REQUEST", "invalid JSON body")
		return
	}

	if req.ContainerName == "" {
		writeError(w, http.StatusBadRequest, "CONTAINER_NAME_REQUIRED", "container_name is required")
		return
	}
	if err := validateSlug("container_name", req.ContainerName); err != nil {
		writeError(w, http.StatusBadRequest, "INVALID_CONTAINER_NAME", err.Error())
		return
	}
	if req.ComposePath == "" {
		writeError(w, http.StatusBadRequest, "COMPOSE_PATH_REQUIRED", "compose_path is required")
		return
	}

	// Validate compose file exists and is within the allowed containers directory
	absPath, err := safePathUnder(containersDir, req.ComposePath)
	if err != nil {
		writeError(w, http.StatusForbidden, "PATH_FORBIDDEN", "compose path must be within the containers directory")
		return
	}
	if filepath.Base(absPath) != "docker-compose.yml" && filepath.Base(absPath) != "compose.yaml" && filepath.Base(absPath) != "compose.yml" {
		writeError(w, http.StatusBadRequest, "INVALID_COMPOSE_FILE", "compose path must point to a compose file")
		return
	}
	if _, err := os.Stat(absPath); os.IsNotExist(err) {
		writeError(w, http.StatusNotFound, "COMPOSE_NOT_FOUND", "compose file not found at specified path")
		return
	}

	// Run docker compose up -d with validated container name
	cmd := dockerCommand(r.Context(), 10*time.Minute, "compose", "-f", absPath, "-p", req.ContainerName, "up", "-d")
	output, err := cmd.CombinedOutput()
	if err != nil {
		writeError(w, http.StatusInternalServerError, "COMPOSE_UP_FAILED", fmt.Sprintf("%s: %s", err.Error(), string(output)))
		return
	}

	// Log image pull if compose output indicates a pull happened
	outputStr := string(output)
	if strings.Contains(outputStr, "Pulling") || strings.Contains(outputStr, "pull") {
		// Try to extract image name from compose file
		if data, err := os.ReadFile(absPath); err == nil {
			if idx := strings.Index(string(data), "image:"); idx >= 0 {
				line := strings.TrimSpace(string(data)[idx+6:])
				if nl := strings.Index(line, "\n"); nl > 0 {
					line = line[:nl]
				}
				imageName := strings.TrimSpace(line)
				activity.LogImagePull(imageName, true, "docker compose up")
			}
		}
	}

	// Log container start
	activity.LogContainerAction("start", "", req.ContainerName, "system", true, "marketplace install")

	json.NewEncoder(w).Encode(map[string]interface{}{
		"success": true,
		"data": map[string]interface{}{
			"container_name": req.ContainerName,
			"compose_path":   req.ComposePath,
			"status":         "started",
			"output":         string(output),
		},
		"error": nil,
	})
}

// HandleListInstalled lists all installed marketplace apps on this host
func HandleListInstalled(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	meta := auth.GetMetaFromContext(r.Context())
	if !auth.KeyStoreHasScope(meta, auth.ScopeMarketplaceRead) {
		writeError(w, http.StatusForbidden, "SCOPE_REQUIRED", "marketplace:read scope required")
		return
	}

	if err := os.MkdirAll(containersDir, 0755); err != nil {
		writeError(w, http.StatusInternalServerError, "CREATE_DIR_FAILED", err.Error())
		return
	}
	entries, err := os.ReadDir(containersDir)
	if err != nil {
		writeError(w, http.StatusInternalServerError, "READ_DIR_FAILED", err.Error())
		return
	}

	var apps []map[string]interface{}
	for _, entry := range entries {
		if !entry.IsDir() {
			continue
		}
		appDir := filepath.Join(containersDir, entry.Name())
		versions, _ := os.ReadDir(appDir)
		var versionsOut []map[string]string
		for _, v := range versions {
			if v.IsDir() {
				versionsOut = append(versionsOut, map[string]string{
					"id":   v.Name(),
					"path": filepath.Join(appDir, v.Name()),
				})
			}
		}
		apps = append(apps, map[string]interface{}{
			"app_id":   entry.Name(),
			"path":     appDir,
			"versions": versionsOut,
		})
	}

	json.NewEncoder(w).Encode(map[string]interface{}{
		"success": true,
		"data":    apps,
		"error":   nil,
	})
}

// ComposeFile is a typed docker-compose document. Marshal with yaml.v3; never concatenate untrusted YAML.
type ComposeFile struct {
	Services map[string]ComposeService `yaml:"services"`
}

type ComposeService struct {
	Image       string   `yaml:"image"`
	Ports       []string `yaml:"ports,omitempty"`
	Environment []string `yaml:"environment,omitempty"`
	Volumes     []string `yaml:"volumes,omitempty"`
	Restart     string   `yaml:"restart,omitempty"`
}

// BuildCompose generates a docker-compose.yml from a template and user overrides.
func BuildCompose(tmpl *AppTemplate, req CreateRequest) (string, error) {
	serviceName := req.AppID
	if req.CustomName != "" {
		serviceName = slugify(req.CustomName)
	}
	if err := validateSlug("service name", serviceName); err != nil {
		return "", err
	}
	if err := validateScalar("image", tmpl.Image); err != nil {
		return "", err
	}

	service := ComposeService{Image: tmpl.Image, Restart: "unless-stopped"}

	for _, p := range tmpl.Ports {
		if err := validatePort(p); err != nil {
			return "", err
		}
		service.Ports = append(service.Ports, fmt.Sprintf("%d:%d", p, p))
	}
	for ext, intPort := range req.Ports {
		if err := validateScalar("external port", ext); err != nil {
			return "", err
		}
		extPort, err := strconv.Atoi(ext)
		if err != nil {
			return "", fmt.Errorf("port %q must be numeric", ext)
		}
		if err := validatePort(extPort); err != nil {
			return "", err
		}
		if err := validatePort(intPort); err != nil {
			return "", err
		}
		service.Ports = append(service.Ports, fmt.Sprintf("%d:%d", extPort, intPort))
	}

	seenEnv := map[string]bool{}
	for _, env := range tmpl.Environment {
		if !envKeyPattern.MatchString(env.Name) {
			return "", fmt.Errorf("invalid environment key %q", env.Name)
		}
		if env.Required || env.Default != "" {
			val := env.Default
			if v, ok := req.Environment[env.Name]; ok {
				val = v
			}
			if val != "" {
				if err := validateScalar("environment value", val); err != nil {
					return "", err
				}
				service.Environment = append(service.Environment, fmt.Sprintf("%s=%s", env.Name, val))
				seenEnv[env.Name] = true
			}
		}
	}
	for k, v := range req.Environment {
		if seenEnv[k] {
			continue
		}
		if !envKeyPattern.MatchString(k) {
			return "", fmt.Errorf("invalid environment key %q", k)
		}
		if err := validateScalar("environment value", v); err != nil {
			return "", err
		}
		service.Environment = append(service.Environment, fmt.Sprintf("%s=%s", k, v))
	}

	for _, vol := range tmpl.Volumes {
		if err := validateSlug("volume name", vol.Name); err != nil {
			return "", err
		}
		service.Volumes = append(service.Volumes, fmt.Sprintf("./%s/%s:/%s", serviceName, vol.Name, vol.Name))
	}

	out, err := yaml.Marshal(ComposeFile{Services: map[string]ComposeService{serviceName: service}})
	if err != nil {
		return "", err
	}
	return string(out), nil
}

func validateCreateRequest(req CreateRequest) error {
	for k, v := range req.Environment {
		if !envKeyPattern.MatchString(k) {
			return fmt.Errorf("invalid environment key %q", k)
		}
		if err := validateScalar("environment value", v); err != nil {
			return err
		}
	}
	for name, path := range req.Volumes {
		if err := validateSlug("volume name", name); err != nil {
			return err
		}
		if err := validateScalar("volume path", path); err != nil {
			return err
		}
	}
	return nil
}

func validateSlug(field, value string) error {
	if !slugPattern.MatchString(value) {
		return fmt.Errorf("%s must match %s", field, slugPattern.String())
	}
	return nil
}

func slugify(value string) string {
	value = strings.ToLower(strings.TrimSpace(value))
	value = strings.ReplaceAll(value, "_", "-")
	value = strings.ReplaceAll(value, " ", "-")
	return value
}

func validateScalar(field, value string) error {
	if strings.ContainsAny(value, "\x00\n\r") {
		return fmt.Errorf("%s contains control characters", field)
	}
	return nil
}

func validatePort(port int) error {
	if port < 1 || port > 65535 {
		return fmt.Errorf("port %d out of range", port)
	}
	return nil
}

func safePathUnder(root, path string) (string, error) {
	absRoot, err := filepath.Abs(root)
	if err != nil {
		return "", err
	}
	var absPath string
	if filepath.IsAbs(path) {
		absPath, err = filepath.Abs(path)
	} else {
		absPath, err = filepath.Abs(filepath.Join(absRoot, path))
	}
	if err != nil {
		return "", err
	}
	rel, err := filepath.Rel(absRoot, absPath)
	if err != nil {
		return "", err
	}
	if rel == ".." || strings.HasPrefix(rel, ".."+string(os.PathSeparator)) || filepath.IsAbs(rel) {
		return "", fmt.Errorf("path escapes root")
	}
	if realPath, err := filepath.EvalSymlinks(absPath); err == nil {
		realRel, err := filepath.Rel(absRoot, realPath)
		if err != nil || realRel == ".." || strings.HasPrefix(realRel, ".."+string(os.PathSeparator)) || filepath.IsAbs(realRel) {
			return "", fmt.Errorf("path escapes root through symlink")
		}
	}
	return absPath, nil
}

func dockerCommand(ctx context.Context, timeout time.Duration, args ...string) *exec.Cmd {
	cmdCtx, cancel := context.WithTimeout(ctx, timeout)
	cmd := exec.CommandContext(cmdCtx, "docker", args...)
	cmd.WaitDelay = time.Second
	cmd.Cancel = func() error {
		cancel()
		if cmd.Process == nil {
			return nil
		}
		return cmd.Process.Kill()
	}
	return cmd
}

// writeError writes a JSON error response
func writeError(w http.ResponseWriter, status int, code, message string) {
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(map[string]interface{}{
		"success": false,
		"data":    nil,
		"error": map[string]string{
			"code":    code,
			"message": message,
		},
	})
}
