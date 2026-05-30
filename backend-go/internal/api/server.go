package api

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"
	"time"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"wagmios/internal/activity"
	"wagmios/internal/auth"
	"wagmios/internal/marketplace"
	"wagmios/internal/system"
)

type Server struct {
	router      *mux.Router
	keyStore    *auth.KeyStore
	rateLimiter *auth.RateLimiter
}

const templatesDir = "/app/data/templates"
const logosDir = "/app/data/logos"
const allowedVolumeRoot = "/app/data/containers"

var namedVolumePattern = regexp.MustCompile(`^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,127}$`)
var allowedImageExt = map[string]bool{".png": true, ".jpg": true, ".jpeg": true, ".webp": true, ".svg": true}

// API Response types
type APIResponse struct {
	Success bool        `json:"success"`
	Data    interface{} `json:"data"`
	Error   *APIError   `json:"error"`
}

type APIError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

func NewServer(ks *auth.KeyStore) *Server {
	s := &Server{
		router:      mux.NewRouter(),
		keyStore:    ks,
		rateLimiter: auth.NewRateLimiter(100, time.Minute),
	}

	// Initialize marketplace client
	marketplaceURL := os.Getenv("WAGMIOS_MARKETPLACE_URL")
	if marketplaceURL == "" {
		marketplaceURL = "https://raw.githubusercontent.com/mentholmike/marketplace/main/manifest.json"
	}
	marketplace.Init(marketplaceURL, "/app/data/marketplace-cache")

	s.registerRoutes()
	return s
}

func (s *Server) Router() http.Handler {
	// CORS — allows all origins for homelab use.
	// For production: restrict AllowedOrigins to your actual domains.
	return cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: []string{"*"},
	}).Handler(s.router)
}

// ---- Route registration ----

func (s *Server) registerRoutes() {
	// Apply combined logging + rate limit + auth middleware
	s.router.Use(func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			start := time.Now()
			rec := &statusRecorder{ResponseWriter: w, status: http.StatusOK}
			if r.Body != nil {
				r.Body = http.MaxBytesReader(rec, r.Body, 1<<20)
			}

			// Rate limiting: unauthenticated requests are keyed by client IP, authenticated by key.
			apiKey := r.Header.Get("X-API-Key")
			rateKey := apiKey
			if rateKey == "" {
				rateKey = clientIP(r)
			}
			if !s.rateLimiter.Allow(rateKey) {
				writeJSON(rec, http.StatusTooManyRequests, nil, &APIError{Code: "RATE_LIMITED", Message: "Too many requests"})
				return
			}

			// Skip auth only for explicitly public paths. Everything else requires setup + key.
			if !isPublicPath(r.URL.Path) {
				if !s.keyStore.HasKey() {
					writeJSON(rec, http.StatusUnauthorized, nil, &APIError{Code: "SETUP_REQUIRED", Message: "Run first-boot setup before using this endpoint"})
					return
				}

				// For WebSocket endpoints, also accept ?key= query parameter
				// (browsers can't set custom headers on WebSocket upgrades)
				effectiveKey := apiKey
				if effectiveKey == "" && auth.IsWebSocketPath(r.URL.Path) {
					effectiveKey = r.URL.Query().Get("key")
				}

				if effectiveKey == "" {
					writeJSON(rec, http.StatusUnauthorized, nil, &APIError{Code: "API_KEY_REQUIRED", Message: "X-API-Key header required"})
					return
				}
				meta, err := s.keyStore.ValidateKey(effectiveKey)
				if err != nil {
					writeJSON(rec, http.StatusUnauthorized, nil, &APIError{Code: "INVALID_KEY", Message: "Invalid or expired API key"})
					return
				}
				ctx := auth.WithKeyMeta(r.Context(), meta)
				r = r.WithContext(ctx)
			}

			// Process request
			next.ServeHTTP(rec, r)

			// Log after request with the actual response status.
			duration := time.Since(start).Milliseconds()
			agent := "unauthenticated"
			if meta := auth.GetMetaFromContext(r.Context()); meta != nil {
				agent = meta.KeyPrefix
			}
			activity.LogAPI(r.Method, r.URL.Path, rec.status, agent, duration)
		})
	})

	// Auth routes (includes /api/keys endpoints for key management)
	auth.RegisterAuthHandlers(s.router, s.keyStore)

	// Activity/WebSocket routes
	activity.ActivityAPIHandlers(s.router)

	// System routes
	s.router.HandleFunc("/api/system/metrics", s.requireScope(auth.ScopeSystemRead, s.handleMetrics)).Methods("GET", "OPTIONS")
	s.router.HandleFunc("/api/system/info", s.requireScope(auth.ScopeSystemRead, s.handleSystemInfo)).Methods("GET", "OPTIONS")
	s.router.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(`{"status":"ok"}`))
	}).Methods("GET", "OPTIONS")

	// Container routes
	s.router.HandleFunc("/api/containers", s.requireScope(auth.ScopeContainersRead, s.handleListContainers)).Methods("GET", "OPTIONS")
	s.router.HandleFunc("/api/containers", s.handleCreateContainer).Methods("POST", "OPTIONS")
	s.router.HandleFunc("/api/containers/pull", s.handlePullImage).Methods("POST", "OPTIONS")
	s.router.HandleFunc("/api/containers/templates", s.requireScope(auth.ScopeTemplatesRead, s.handleListTemplates)).Methods("GET", "OPTIONS")
	s.router.HandleFunc("/api/containers/templates", s.handleSaveTemplate).Methods("POST", "OPTIONS")
	s.router.HandleFunc("/api/containers/templates/{name}", s.requireScope(auth.ScopeTemplatesRead, s.handleGetTemplate)).Methods("GET", "OPTIONS")
	s.router.HandleFunc("/api/containers/{id}/start", s.handleContainerStart).Methods("POST", "OPTIONS")
	s.router.HandleFunc("/api/containers/{id}/stop", s.handleContainerStop).Methods("POST", "OPTIONS")
	s.router.HandleFunc("/api/containers/{id}/restart", s.handleContainerRestart).Methods("POST", "OPTIONS")
	s.router.HandleFunc("/api/containers/{id}/delete", s.handleContainerDelete).Methods("POST", "DELETE", "OPTIONS")

	// Marketplace routes — static paths before parameterized paths
	s.router.HandleFunc("/api/marketplace", marketplace.HandleListApps).Methods("GET", "OPTIONS")
	s.router.HandleFunc("/api/marketplace/create", marketplace.HandleCreateApp).Methods("POST", "OPTIONS")
	s.router.HandleFunc("/api/marketplace/start", marketplace.HandleStartApp).Methods("POST", "OPTIONS")
	s.router.HandleFunc("/api/marketplace/installed", marketplace.HandleListInstalled).Methods("GET", "OPTIONS")
	s.router.HandleFunc("/api/marketplace/{id}", marketplace.HandleGetApp).Methods("GET", "OPTIONS")
	s.router.HandleFunc("/api/containers/{id}/logs", s.requireScope(auth.ScopeContainersRead, s.handleContainerLogs)).Methods("GET", "OPTIONS")
	s.router.HandleFunc("/api/containers/{id}/config", s.requireScope(auth.ScopeContainersRead, s.handleGetContainerConfig)).Methods("GET", "OPTIONS")

	// Image routes
	s.router.HandleFunc("/api/images", s.requireScope(auth.ScopeImagesRead, s.handleListImages)).Methods("GET", "OPTIONS")
	s.router.HandleFunc("/api/images/pull", s.handlePullImage).Methods("POST", "OPTIONS")
	s.router.HandleFunc("/api/images/{id}", s.handleDeleteImage).Methods("DELETE", "OPTIONS")

	// Proxy image logos
	s.router.HandleFunc("/api/proxy-image", s.handleProxyImage).Methods("GET", "OPTIONS")

	// Debug/404
	s.router.PathPrefix("/").HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("404: %s %s", r.Method, r.URL.Path)
		http.NotFound(w, r)
	})

	s.logRoutes()
}

func (s *Server) logRoutes() {
	s.router.Walk(func(route *mux.Route, _ *mux.Router, _ []*mux.Route) error {
		path, _ := route.GetPathTemplate()
		methods, _ := route.GetMethods()
		if path != "" && len(methods) > 0 {
			log.Printf("Route: %v %v", methods, path)
		}
		return nil
	})
}

func isPublicPath(path string) bool {
	return auth.IsPublicPath(path)
}

// ---- Response helpers ----

func writeJSON(w http.ResponseWriter, status int, data interface{}, err *APIError) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(APIResponse{
		Success: err == nil,
		Data:    data,
		Error:   err,
	})
}

func getMeta(r *http.Request) *auth.KeyMeta {
	return auth.GetMetaFromContext(r.Context())
}

// ---- Container helpers ----

// containerInspectData represents the structured response from docker inspect.
// Used instead of raw map[string]interface{} assertions that can panic.
type containerInspectData struct {
	ID     string              `json:"id"`
	Name   string              `json:"name"`
	Image  string              `json:"image"`
	Status string              `json:"status"`
	Ports  []map[string]string `json:"ports"`
}

// inspectContainer runs docker inspect and safely extracts container info.
// Returns nil if the container is not found or data is malformed.
func inspectContainer(id string) *containerInspectData {
	cmd := dockerCommand(context.Background(), 10*time.Second, "inspect", id)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return nil
	}

	var data []map[string]interface{}
	if err := json.Unmarshal(output, &data); err != nil || len(data) == 0 {
		return nil
	}

	c := data[0]

	// Safe extraction with fallbacks for each field
	containerID, _ := c["Id"].(string)
	name, _ := c["Name"].(string)
	name = strings.TrimPrefix(name, "/")

	image := ""
	if cfg, ok := c["Config"].(map[string]interface{}); ok {
		image, _ = cfg["Image"].(string)
	}

	status := ""
	if state, ok := c["State"].(map[string]interface{}); ok {
		status, _ = state["Status"].(string)
	}

	if containerID == "" {
		return nil // essential field missing
	}

	return &containerInspectData{
		ID:     containerID,
		Name:   name,
		Image:  image,
		Status: status,
		Ports:  extractPorts(c),
	}
}

// extractPorts safely extracts port mappings from Docker inspect data.
func extractPorts(c map[string]interface{}) []map[string]string {
	ports := make([]map[string]string, 0)
	ns, ok := c["NetworkSettings"].(map[string]interface{})
	if !ok {
		return ports
	}
	pb, ok := ns["Ports"].(map[string]interface{})
	if !ok {
		return ports
	}
	for containerPort, bindings := range pb {
		bindingList, ok := bindings.([]interface{})
		if !ok {
			continue
		}
		for _, b := range bindingList {
			bm, ok := b.(map[string]interface{})
			if !ok {
				continue
			}
			hostPort, _ := bm["HostPort"].(string)
			parts := strings.SplitN(containerPort, "/", 2)
			cp := parts[0]
			proto := "tcp"
			if len(parts) == 2 {
				proto = parts[1]
			}
			ports = append(ports, map[string]string{
				"host":      hostPort,
				"container": cp,
				"protocol":  proto,
			})
		}
	}
	return ports
}

// validateVolumePath allows Docker named volumes or host paths under the WAGMIOS managed containers directory.
// Docker socket access is root-equivalent; never allow arbitrary host paths such as /, /etc, /home, /var, etc.
func validateVolumePath(hostPath string) error {
	if hostPath == "" {
		return fmt.Errorf("host path required")
	}
	if strings.ContainsAny(hostPath, "\x00\n\r") {
		return fmt.Errorf("host path contains control characters")
	}
	if !strings.Contains(hostPath, "/") && !strings.Contains(hostPath, "\\") {
		if namedVolumePattern.MatchString(hostPath) && hostPath != "." && hostPath != ".." {
			return nil
		}
		return fmt.Errorf("invalid Docker named volume")
	}

	absRoot, err := filepath.Abs(allowedVolumeRoot)
	if err != nil {
		return err
	}
	absPath, err := filepath.Abs(hostPath)
	if err != nil {
		return err
	}
	rel, err := filepath.Rel(absRoot, absPath)
	if err != nil {
		return err
	}
	if rel == ".." || strings.HasPrefix(rel, ".."+string(os.PathSeparator)) || filepath.IsAbs(rel) {
		return fmt.Errorf("host path must be under %s", allowedVolumeRoot)
	}
	return nil
}

func (s *Server) handleMetrics(w http.ResponseWriter, r *http.Request) {
	metrics, err := system.GetSystemMetrics()
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, nil, &APIError{Code: "METRICS_ERROR", Message: err.Error()})
		return
	}
	writeJSON(w, http.StatusOK, metrics, nil)
}

func (s *Server) handleSystemInfo(w http.ResponseWriter, r *http.Request) {
	cmd := dockerCommand(r.Context(), 10*time.Second, "info", "--format", "{{.DockerRootDir}}")
	output, err := cmd.CombinedOutput()
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, nil, &APIError{Code: "DOCKER_ERROR", Message: err.Error()})
		return
	}
	info := map[string]string{"docker_root": strings.TrimSpace(string(output))}
	writeJSON(w, http.StatusOK, info, nil)
}

func (s *Server) handleListContainers(w http.ResponseWriter, r *http.Request) {
	cmd := dockerCommand(r.Context(), 15*time.Second, "ps", "-a", "--format", "{{.ID}}")
	output, err := cmd.CombinedOutput()
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, nil, &APIError{Code: "DOCKER_ERROR", Message: err.Error()})
		return
	}

	ids := strings.Split(strings.TrimSpace(string(output)), "\n")
	containers := make([]interface{}, 0)
	for _, id := range ids {
		if id == "" {
			continue
		}
		if info := inspectContainer(id); info != nil {
			containers = append(containers, info)
		}
	}
	writeJSON(w, http.StatusOK, containers, nil)
}

func (s *Server) handleContainerStart(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["id"]
	meta := getMeta(r)

	if !auth.KeyStoreHasScope(meta, auth.ScopeContainersWrite) {
		writeJSON(w, http.StatusForbidden, nil, &APIError{Code: "SCOPE_REQUIRED", Message: "containers:write scope required"})
		return
	}

	cmd := dockerCommand(r.Context(), 30*time.Second, "start", id)
	output, err := cmd.CombinedOutput()
	agent := agentFromMeta(meta)
	if err != nil {
		activity.LogContainerAction("start", id, id, agent, false, string(output))
		writeJSON(w, http.StatusInternalServerError, nil, &APIError{Code: "DOCKER_ERROR", Message: err.Error()})
		return
	}
	activity.LogContainerAction("start", id, id, agent, true, "")
	writeJSON(w, http.StatusOK, map[string]string{"status": "started"}, nil)
}

func (s *Server) handleContainerStop(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["id"]
	meta := getMeta(r)

	if !auth.KeyStoreHasScope(meta, auth.ScopeContainersWrite) {
		writeJSON(w, http.StatusForbidden, nil, &APIError{Code: "SCOPE_REQUIRED", Message: "containers:write scope required"})
		return
	}

	cmd := dockerCommand(r.Context(), 30*time.Second, "stop", id)
	output, err := cmd.CombinedOutput()
	agent := agentFromMeta(meta)
	if err != nil {
		activity.LogContainerAction("stop", id, id, agent, false, string(output))
		writeJSON(w, http.StatusInternalServerError, nil, &APIError{Code: "DOCKER_ERROR", Message: err.Error()})
		return
	}
	activity.LogContainerAction("stop", id, id, agent, true, "")
	writeJSON(w, http.StatusOK, map[string]string{"status": "stopped"}, nil)
}

func (s *Server) handleContainerRestart(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["id"]
	meta := getMeta(r)

	if !auth.KeyStoreHasScope(meta, auth.ScopeContainersWrite) {
		writeJSON(w, http.StatusForbidden, nil, &APIError{Code: "SCOPE_REQUIRED", Message: "containers:write scope required"})
		return
	}

	cmd := dockerCommand(r.Context(), 45*time.Second, "restart", id)
	output, err := cmd.CombinedOutput()
	agent := agentFromMeta(meta)
	if err != nil {
		activity.LogContainerAction("restart", id, id, agent, false, string(output))
		writeJSON(w, http.StatusInternalServerError, nil, &APIError{Code: "DOCKER_ERROR", Message: err.Error()})
		return
	}
	activity.LogContainerAction("restart", id, id, agent, true, "")
	writeJSON(w, http.StatusOK, map[string]string{"status": "restarted"}, nil)
}

func (s *Server) handleContainerDelete(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["id"]
	meta := getMeta(r)
	agent := agentFromMeta(meta)

	// Check if the requesting key has delete scope
	if !auth.KeyStoreHasScope(meta, auth.ScopeContainersDelete) {
		writeJSON(w, http.StatusForbidden, nil, &APIError{Code: "SCOPE_REQUIRED", Message: "containers:delete scope required"})
		return
	}

	// Prevent deleting system containers
	systemContainers := map[string]bool{
		"wagmios-backend":  true,
		"wagmios-frontend": true,
	}
	// Resolve container name from ID to check protection
	if nameBytes, err := dockerCommand(r.Context(), 10*time.Second, "inspect", "--format", "{{.Name}}", id).Output(); err == nil {
		name := strings.TrimPrefix(strings.TrimSpace(string(nameBytes)), "/")
		if systemContainers[name] {
			writeJSON(w, http.StatusForbidden, nil, &APIError{Code: "PROTECTED", Message: "Cannot delete system container"})
			return
		}
	}

	// Execute delete
	dockerCommand(r.Context(), 30*time.Second, "stop", id).Run()
	cmd := dockerCommand(r.Context(), 30*time.Second, "rm", id)
	output, err := cmd.CombinedOutput()
	if err != nil {
		activity.LogContainerAction("delete", id, id, agent, false, string(output))
		writeJSON(w, http.StatusInternalServerError, nil, &APIError{Code: "DOCKER_ERROR", Message: err.Error()})
		return
	}
	activity.LogContainerAction("delete", id, id, agent, true, "")
	writeJSON(w, http.StatusOK, map[string]string{"status": "deleted"}, nil)
}

func (s *Server) handleContainerLogs(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["id"]
	tail := 100
	if raw := r.URL.Query().Get("tail"); raw != "" {
		parsed, err := strconv.Atoi(raw)
		if err != nil || parsed < 0 {
			writeJSON(w, http.StatusBadRequest, nil, &APIError{Code: "INVALID_TAIL", Message: "tail must be an integer between 0 and 1000"})
			return
		}
		if parsed > 1000 {
			parsed = 1000
		}
		tail = parsed
	}

	cmd := dockerCommand(r.Context(), 30*time.Second, "logs", id, "--tail", strconv.Itoa(tail))
	output, err := cmd.CombinedOutput()
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, nil, &APIError{Code: "DOCKER_ERROR", Message: err.Error()})
		return
	}
	writeJSON(w, http.StatusOK, map[string]string{"logs": string(output)}, nil)
}

func (s *Server) handleCreateContainer(w http.ResponseWriter, r *http.Request) {
	var config struct {
		Name  string `json:"name"`
		Image string `json:"image"`
		Ports []struct {
			Host      string `json:"host"`
			Container string `json:"container"`
		} `json:"ports"`
		Volumes []struct {
			Host      string `json:"host"`
			Container string `json:"container"`
		} `json:"volumes"`
		Env   []struct{ Key, Value string } `json:"env"`
		Attrs map[string]interface{}        `json:"attrs,omitempty"`
	}
	if err := json.NewDecoder(r.Body).Decode(&config); err != nil {
		writeJSON(w, http.StatusBadRequest, nil, &APIError{Code: "INVALID_REQUEST", Message: err.Error()})
		return
	}

	meta := getMeta(r)
	agent := agentFromMeta(meta)

	if !auth.KeyStoreHasScope(meta, auth.ScopeContainersWrite) {
		writeJSON(w, http.StatusForbidden, nil, &APIError{Code: "SCOPE_REQUIRED", Message: "containers:write scope required"})
		return
	}

	// Validate volume mount paths — allow only Docker named volumes or WAGMIOS-managed host paths.
	for _, v := range config.Volumes {
		if err := validateVolumePath(v.Host); err != nil {
			writeJSON(w, http.StatusForbidden, nil, &APIError{Code: "BLOCKED_VOLUME", Message: fmt.Sprintf("volume path %q is not allowed: %v", v.Host, err)})
			return
		}
	}

	// No container limit — single key, user controls via Delete Control

	// Build args
	args := []string{"run", "-d", "--name", config.Name}
	for _, p := range config.Ports {
		args = append(args, "-p", fmt.Sprintf("%s:%s", p.Host, p.Container))
	}
	for _, v := range config.Volumes {
		args = append(args, "-v", fmt.Sprintf("%s:%s", v.Host, v.Container))
	}
	for _, e := range config.Env {
		args = append(args, "-e", fmt.Sprintf("%s=%s", e.Key, e.Value))
	}
	args = append(args, config.Image)

	cmd := dockerCommand(r.Context(), 60*time.Second, args...)
	output, err := cmd.CombinedOutput()
	if err != nil {
		activity.LogContainerAction("create", config.Name, config.Name, agent, false, string(output))
		writeJSON(w, http.StatusInternalServerError, nil, &APIError{Code: "DOCKER_ERROR", Message: err.Error()})
		return
	}

	containerID := strings.TrimSpace(string(output))
	activity.LogContainerAction("create", containerID, config.Name, agent, true, "")
	writeJSON(w, http.StatusOK, map[string]string{"id": containerID}, nil)
}

func (s *Server) handleGetContainerConfig(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["id"]
	info := inspectContainer(id)
	if info == nil {
		writeJSON(w, http.StatusNotFound, nil, &APIError{Code: "NOT_FOUND", Message: "Container not found"})
		return
	}
	writeJSON(w, http.StatusOK, info, nil)
}

// ---- Image handlers ----

func (s *Server) handleListImages(w http.ResponseWriter, r *http.Request) {
	cmd := dockerCommand(r.Context(), 15*time.Second, "images", "--format", "{{json .}}")
	output, err := cmd.CombinedOutput()
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, nil, &APIError{Code: "DOCKER_ERROR", Message: err.Error()})
		return
	}

	lines := strings.Split(strings.TrimSpace(string(output)), "\n")
	images := make([]map[string]string, 0)
	for _, line := range lines {
		var img map[string]string
		if json.Unmarshal([]byte(line), &img) == nil {
			images = append(images, img)
		}
	}
	writeJSON(w, http.StatusOK, images, nil)
}

func (s *Server) handlePullImage(w http.ResponseWriter, r *http.Request) {
	var req struct{ Image string }
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil || req.Image == "" {
		writeJSON(w, http.StatusBadRequest, nil, &APIError{Code: "INVALID_REQUEST", Message: "Image name required"})
		return
	}

	meta := getMeta(r)
	agent := agentFromMeta(meta)

	if !auth.KeyStoreHasScope(meta, auth.ScopeImagesWrite) {
		writeJSON(w, http.StatusForbidden, nil, &APIError{Code: "SCOPE_REQUIRED", Message: "images:write scope required"})
		return
	}

	activity.Log(activity.Event{Type: "image_pull", Action: "pull", Target: req.Image, Status: "pending", Agent: agent})

	cmd := dockerCommand(r.Context(), 10*time.Minute, "pull", req.Image)
	output, err := cmd.CombinedOutput()
	if err != nil {
		activity.Log(activity.Event{Type: "image_pull", Action: "pull", Target: req.Image, Status: "error", Agent: agent, Details: string(output)})
		writeJSON(w, http.StatusInternalServerError, nil, &APIError{Code: "DOCKER_ERROR", Message: err.Error()})
		return
	}

	activity.Log(activity.Event{Type: "image_pull", Action: "pull", Target: req.Image, Status: "success", Agent: agent})
	activity.IncrementPulls()
	writeJSON(w, http.StatusOK, map[string]string{"status": "pulled", "image": req.Image}, nil)
}

func (s *Server) handleDeleteImage(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["id"]
	meta := getMeta(r)
	agent := agentFromMeta(meta)

	if !auth.KeyStoreHasScope(meta, auth.ScopeImagesWrite) {
		writeJSON(w, http.StatusForbidden, nil, &APIError{Code: "SCOPE_REQUIRED", Message: "images:write scope required"})
		return
	}

	cmd := dockerCommand(r.Context(), 60*time.Second, "rmi", id)
	output, err := cmd.CombinedOutput()
	if err != nil {
		activity.Log(activity.Event{Type: "image_delete", Action: "delete", Target: id, Status: "error", Agent: agent, Details: string(output)})
		writeJSON(w, http.StatusInternalServerError, nil, &APIError{Code: "DOCKER_ERROR", Message: err.Error()})
		return
	}

	activity.Log(activity.Event{Type: "image_delete", Action: "delete", Target: id, Status: "success", Agent: agent})
	writeJSON(w, http.StatusOK, map[string]string{"status": "deleted"}, nil)
}

// ---- Template handlers ----

func (s *Server) handleListTemplates(w http.ResponseWriter, r *http.Request) {
	os.MkdirAll(templatesDir, 0755)
	files, err := os.ReadDir(templatesDir)
	if err != nil {
		writeJSON(w, http.StatusOK, []interface{}{}, nil)
		return
	}

	templates := make([]map[string]interface{}, 0)
	for _, f := range files {
		if !f.IsDir() && strings.HasSuffix(f.Name(), ".json") {
			data, _ := os.ReadFile(filepath.Join(templatesDir, f.Name()))
			var t map[string]interface{}
			if json.Unmarshal(data, &t) == nil {
				templates = append(templates, t)
			}
		}
	}
	writeJSON(w, http.StatusOK, templates, nil)
}

func (s *Server) handleGetTemplate(w http.ResponseWriter, r *http.Request) {
	name := mux.Vars(r)["name"]
	path, err := safeFileUnder(templatesDir, name, ".json")
	if err != nil {
		writeJSON(w, http.StatusBadRequest, nil, &APIError{Code: "INVALID_TEMPLATE_NAME", Message: err.Error()})
		return
	}
	data, err := os.ReadFile(path)
	if err != nil {
		writeJSON(w, http.StatusNotFound, nil, &APIError{Code: "NOT_FOUND", Message: "Template not found"})
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(data)
}

func (s *Server) handleSaveTemplate(w http.ResponseWriter, r *http.Request) {
	var template map[string]interface{}
	if err := json.NewDecoder(r.Body).Decode(&template); err != nil {
		writeJSON(w, http.StatusBadRequest, nil, &APIError{Code: "INVALID_REQUEST", Message: err.Error()})
		return
	}

	meta := getMeta(r)
	if !auth.KeyStoreHasScope(meta, auth.ScopeTemplatesWrite) {
		writeJSON(w, http.StatusForbidden, nil, &APIError{Code: "SCOPE_REQUIRED", Message: "templates:write scope required"})
		return
	}

	os.MkdirAll(templatesDir, 0755)
	name, ok := template["name"].(string)
	if !ok {
		name = "untitled"
	}
	if !strings.HasSuffix(name, ".json") {
		name += ".json"
	}

	data, _ := json.MarshalIndent(template, "", "  ")
	path, err := safeFileUnder(templatesDir, name, ".json")
	if err != nil {
		writeJSON(w, http.StatusBadRequest, nil, &APIError{Code: "INVALID_TEMPLATE_NAME", Message: err.Error()})
		return
	}
	if err := os.WriteFile(path, data, 0644); err != nil {
		writeJSON(w, http.StatusInternalServerError, nil, &APIError{Code: "IO_ERROR", Message: err.Error()})
		return
	}
	writeJSON(w, http.StatusOK, map[string]string{"status": "saved"}, nil)
}

// ---- Marketplace ----

func (s *Server) handleGetMarketplace(w http.ResponseWriter, r *http.Request) {
	// Try GitHub first
	resp, err := http.Get("https://raw.githubusercontent.com/mentholmike/wagmios-marketplace/refs/heads/main/marketplace.json")
	if err == nil && resp.StatusCode == http.StatusOK {
		defer resp.Body.Close()
		w.Header().Set("Cache-Control", "public, max-age=300")
		io.Copy(w, resp.Body)
		return
	}
	// Fallback to local cache
	data, err := os.ReadFile("/app/data/marketplace.json")
	if err != nil {
		writeJSON(w, http.StatusServiceUnavailable, nil, &APIError{Code: "MARKETPLACE_ERROR", Message: "Unavailable"})
		return
	}
	w.Write(data)
}

func (s *Server) handleInstallContainer(w http.ResponseWriter, r *http.Request) {
	var req struct {
		Image string `json:"image"`
		Name  string `json:"name"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		writeJSON(w, http.StatusBadRequest, nil, &APIError{Code: "INVALID_REQUEST", Message: err.Error()})
		return
	}

	meta := getMeta(r)
	if !auth.KeyStoreHasScope(meta, auth.ScopeMarketplaceWrite) {
		writeJSON(w, http.StatusForbidden, nil, &APIError{Code: "SCOPE_REQUIRED", Message: "marketplace:write scope required"})
		return
	}

	// Pull image
	cmd := dockerCommand(r.Context(), 10*time.Minute, "pull", req.Image)
	if output, err := cmd.CombinedOutput(); err != nil {
		writeJSON(w, http.StatusInternalServerError, nil, &APIError{Code: "DOCKER_ERROR", Message: string(output)})
		return
	}
	writeJSON(w, http.StatusOK, map[string]string{"status": "pulled"}, nil)
}

func (s *Server) handleProxyImage(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Security-Policy", "img-src 'self' http://* https://* data:")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	path := r.URL.Query().Get("path")
	if path == "" {
		writeJSON(w, http.StatusBadRequest, nil, &APIError{Code: "INVALID_REQUEST", Message: "path required"})
		return
	}

	cleanPath := strings.TrimPrefix(path, "logos/")
	if !allowedImageExt[strings.ToLower(filepath.Ext(cleanPath))] {
		writeJSON(w, http.StatusBadRequest, nil, &APIError{Code: "INVALID_IMAGE", Message: "unsupported image extension"})
		return
	}
	fullPath, err := safePathUnder(logosDir, cleanPath)
	if err != nil {
		writeJSON(w, http.StatusBadRequest, nil, &APIError{Code: "INVALID_PATH", Message: err.Error()})
		return
	}
	if _, err := os.Stat(fullPath); os.IsNotExist(err) {
		writeJSON(w, http.StatusNotFound, nil, &APIError{Code: "NOT_FOUND", Message: "Image not found"})
		return
	}
	http.ServeFile(w, r, fullPath)
}

// ---- Helpers ----

type statusRecorder struct {
	http.ResponseWriter
	status int
}

func (r *statusRecorder) WriteHeader(code int) {
	r.status = code
	r.ResponseWriter.WriteHeader(code)
}

func clientIP(r *http.Request) string {
	if fwd := r.Header.Get("X-Forwarded-For"); fwd != "" {
		return strings.TrimSpace(strings.Split(fwd, ",")[0])
	}
	host, _, err := net.SplitHostPort(r.RemoteAddr)
	if err != nil {
		return r.RemoteAddr
	}
	return host
}

func (s *Server) requireScope(scope auth.Scope, h http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}
		if !auth.KeyStoreHasScope(getMeta(r), scope) {
			writeJSON(w, http.StatusForbidden, nil, &APIError{Code: "SCOPE_REQUIRED", Message: string(scope) + " scope required"})
			return
		}
		h(w, r)
	}
}

func dockerCommand(ctx context.Context, timeout time.Duration, args ...string) *exec.Cmd {
	cmdCtx, cancel := context.WithTimeout(ctx, timeout)
	cmd := exec.CommandContext(cmdCtx, "docker", args...)
	go func() {
		<-cmdCtx.Done()
		cancel()
	}()
	return cmd
}

func safeFileUnder(root, name, suffix string) (string, error) {
	if name == "" {
		return "", fmt.Errorf("empty name")
	}
	if strings.ContainsAny(name, `/\\`) || strings.Contains(name, "..") || strings.ContainsAny(name, "\x00\n\r") {
		return "", fmt.Errorf("path traversal not allowed")
	}
	if suffix != "" && !strings.HasSuffix(name, suffix) {
		name += suffix
	}
	return safePathUnder(root, name)
}

func safePathUnder(root, name string) (string, error) {
	absRoot, err := filepath.Abs(root)
	if err != nil {
		return "", err
	}
	path := filepath.Join(absRoot, filepath.Clean(name))
	rel, err := filepath.Rel(absRoot, path)
	if err != nil {
		return "", err
	}
	if rel == ".." || strings.HasPrefix(rel, ".."+string(os.PathSeparator)) || filepath.IsAbs(rel) {
		return "", fmt.Errorf("path escapes root")
	}
	return path, nil
}

func agentFromMeta(meta *auth.KeyMeta) string {
	if meta == nil {
		return "unknown"
	}
	return meta.KeyPrefix
}
