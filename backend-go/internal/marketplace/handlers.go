package marketplace

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"

	"github.com/gorilla/mux"
	"wagmios/internal/activity"
	"wagmios/internal/auth"
)

const containersDir = "/app/data/containers"

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
	if !scopeExists(meta.Scopes, "marketplace:write") {
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
	composeContent := BuildCompose(tmpl, req)

	// Directory: containersDir/{app-id}/{timestamp}/ or containersDir/{custom-name}/
	installID := fmt.Sprintf("%s-%d", req.AppID, time.Now().Unix())
	if req.CustomName != "" {
		safeName := strings.ReplaceAll(strings.ToLower(req.CustomName), " ", "-")
		installID = safeName
	}
	installDir := filepath.Join(containersDir, req.AppID, installID)

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
	ComposePath   string `json:"compose_path"`     // path to docker-compose.yml
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
	if !scopeExists(meta.Scopes, "marketplace:write") {
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
	if req.ComposePath == "" {
		writeError(w, http.StatusBadRequest, "COMPOSE_PATH_REQUIRED", "compose_path is required")
		return
	}

	// Validate compose file exists
	if _, err := os.Stat(req.ComposePath); os.IsNotExist(err) {
		writeError(w, http.StatusNotFound, "COMPOSE_NOT_FOUND", "compose file not found at specified path")
		return
	}

	// Run docker compose up -d with user-specified container name
	cmd := exec.Command("docker", "compose", "-f", req.ComposePath, "-p", req.ContainerName, "up", "-d")
	output, err := cmd.CombinedOutput()
	if err != nil {
		writeError(w, http.StatusInternalServerError, "COMPOSE_UP_FAILED", fmt.Sprintf("%s: %s", err.Error(), string(output)))
		return
	}

	// Log image pull if compose output indicates a pull happened
	outputStr := string(output)
	if strings.Contains(outputStr, "Pulling") || strings.Contains(outputStr, "pull") {
		// Try to extract image name from compose file
		if data, err := os.ReadFile(req.ComposePath); err == nil {
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
			"output":          string(output),
		},
		"error": nil,
	})
}

// HandleListInstalled lists all installed marketplace apps on this host
func HandleListInstalled(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

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
			"app_id":  entry.Name(),
			"path":    appDir,
			"versions": versionsOut,
		})
	}

	json.NewEncoder(w).Encode(map[string]interface{}{
		"success": true,
		"data":    apps,
		"error":   nil,
	})
}

// BuildCompose generates a docker-compose.yml from a template and user overrides
func BuildCompose(tmpl *AppTemplate, req CreateRequest) string {
	// Determine service name: use custom name if provided, otherwise app ID
	serviceName := req.AppID
	if req.CustomName != "" {
		serviceName = strings.ReplaceAll(strings.ToLower(req.CustomName), " ", "-")
	}

	compose := fmt.Sprintf(`services:
  %s:
    image: %s
`, serviceName, tmpl.Image)

	// Add ports
	if len(tmpl.Ports) > 0 || len(req.Ports) > 0 {
		compose += "    ports:\n"
		for _, p := range tmpl.Ports {
			compose += fmt.Sprintf("      - \"%d:%d\"\n", p, p)
		}
		for ext, intPort := range req.Ports {
			compose += fmt.Sprintf("      - \"%d:%d\"\n", ext, intPort)
		}
	}

	// Add environment variables
	if len(tmpl.Environment) > 0 || len(req.Environment) > 0 {
		compose += "    environment:\n"
		for _, env := range tmpl.Environment {
			if env.Required || env.Default != "" {
				val := env.Default
				if v, ok := req.Environment[env.Name]; ok {
					val = v
				}
				if val != "" {
					compose += fmt.Sprintf("      - %s=%s\n", env.Name, val)
				}
			}
		}
		for k, v := range req.Environment {
			compose += fmt.Sprintf("      - %s=%s\n", k, v)
		}
	}

	// Add volumes
	if len(tmpl.Volumes) > 0 || len(req.Volumes) > 0 {
		compose += "    volumes:\n"
		for _, vol := range tmpl.Volumes {
			volPath := vol.Default
			if p, ok := req.Volumes[vol.Name]; ok {
				volPath = p
			}
			_ = volPath
			compose += fmt.Sprintf("      - ./%s/%s:/%s\n", serviceName, vol.Name, vol.Name)
		}
	}

	compose += "    restart: unless-stopped\n"

	return compose
}

// scopeExists checks if a scope is present in the list
func scopeExists(scopes []auth.Scope, target string) bool {
	for _, s := range scopes {
		if string(s) == target {
			return true
		}
	}
	return false
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
