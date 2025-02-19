package api

import (
        "encoding/json"
        "net/http"
        "github.com/gorilla/mux"
        "github.com/rs/cors"
        "github.com/mikesposito/WagmiOS/backend-go/internal/system"
        "log"
        "io"
        "time"
        "os"
        "fmt"
        "os/exec"
        "path/filepath"
        "io/ioutil"
        "strings"
        "bytes"
)

type Server struct {
        router *mux.Router
}

func NewServer() *Server {
        r := mux.NewRouter()
        
        // Add static file serving for logos
        fs := http.FileServer(http.Dir("data"))
        r.PathPrefix("/logos/").Handler(http.StripPrefix("/logos/", fs))
        
        server := &Server{
                router: r,
        }
        
        // Add routes
        server.routes()
        
        // Print registered routes for debugging
        r.Walk(func(route *mux.Route, router *mux.Router, ancestors []*mux.Route) error {
                pathTemplate, _ := route.GetPathTemplate()
                methods, _ := route.GetMethods()
                log.Printf("Registered route: %v %v", methods, pathTemplate)
                return nil
        })
        
        return server
}

func (s *Server) Router() http.Handler {
        c := cors.New(cors.Options{
                AllowedOrigins:   []string{"http://*:5174"},
                AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
                AllowedHeaders:   []string{"Content-Type", "Accept", "Authorization", "Origin"},
                AllowCredentials: false,
                Debug:           true,
        })
        
        return c.Handler(s.router)
}

// Add all type definitions at the package level
type MarketplaceData struct {
        Categories []string              `json:"categories"`
        Containers []MarketplaceContainer `json:"containers"`
}

type MarketplaceContainer struct {
        ID          string   `json:"id"`
        Name        string   `json:"name"`
        Description string   `json:"description"`
        Category    string   `json:"category"`
        Image       string   `json:"image"`
        Logo        string   `json:"logo"`
        Ports       []string `json:"ports"`
        Volumes     []string `json:"volumes"`
        Env         []EnvVar `json:"env"`
        Popularity  float64  `json:"popularity"`
        Verified    bool     `json:"verified"`
}

type EnvVar struct {
        Key         string `json:"key"`
        Value       string `json:"value"`
        Description string `json:"description,omitempty"`
        Required    bool   `json:"required,omitempty"`
}

type ContainerConfig struct {
        Name         string         `json:"name"`
        Image        string         `json:"image"`
        Ports        []PortMapping  `json:"ports"`
        Volumes      []VolumeMapping `json:"volumes"`
        Env          []EnvVar       `json:"env"`
        Privileged   bool           `json:"privileged"`
        Network      string         `json:"network"`
        Capabilities []string       `json:"capabilities"`
        Devices      []string       `json:"devices"`
}

type PortMapping struct {
        Host      string `json:"host"`
        Container string `json:"container"`
}

type VolumeMapping struct {
        Host      string `json:"host"`
        Container string `json:"container"`
}

type ContainerInstallRequest struct {
        Image       string                 `json:"image"`
        Name        string                 `json:"name"`
        Config      map[string]interface{} `json:"config"`
        ComposeFile string                 `json:"compose_file,omitempty"`
}

type Container struct {
        ID          string        `json:"id"`
        Name        string        `json:"name"`
        Description string        `json:"description"`
        Category    string        `json:"category"`
        Image       string        `json:"image"`
        Logo        string        `json:"logo"`
        Ports       []string      `json:"ports"`
        Volumes     []string      `json:"volumes"`
        Env         []EnvVar      `json:"env"`
        Popularity  float64       `json:"popularity"`
        Verified    bool          `json:"verified"`
}

// Add these new types for container management
type ContainerPort struct {
        Host      string `json:"host"`
        Container string `json:"container"`
}

type ContainerVolume struct {
        Host      string `json:"host"`
        Container string `json:"container"`
}

type ContainerEnv struct {
        Key   string `json:"key"`
        Value string `json:"value"`
}

type ContainerTemplate struct {
        Name         string         `json:"name"`
        Image        string         `json:"image"`
        Ports        []PortMapping  `json:"ports"`
        Volumes      []VolumeMapping `json:"volumes"`
        Env          []EnvVar       `json:"env"`
        Privileged   bool           `json:"privileged"`
        Network      string         `json:"network"`
        Capabilities []string       `json:"capabilities"`
        Devices      []string       `json:"devices"`
}

func (s *Server) routes() {
        log.Printf("Registering routes...")
        
        // CORS middleware
        s.router.Use(func(next http.Handler) http.Handler {
                return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
                        w.Header().Set("Access-Control-Allow-Origin", "*")
                        w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
                        w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
                        
                        if r.Method == "OPTIONS" {
                                w.WriteHeader(http.StatusOK)
                                return
                        }
                        next.ServeHTTP(w, r)
                })
        })

        // Register all routes
        s.router.HandleFunc("/api/containers", s.handleListContainers).Methods("GET", "OPTIONS")
        s.router.HandleFunc("/api/containers/pull", s.handlePullImage).Methods("POST", "OPTIONS")
        s.router.HandleFunc("/api/containers/create", s.handleCreateContainer).Methods("POST", "OPTIONS")
        s.router.HandleFunc("/api/containers/templates", s.handleListTemplates).Methods("GET", "OPTIONS")
        s.router.HandleFunc("/api/containers/templates", s.handleSaveTemplate).Methods("POST", "OPTIONS")
        s.router.HandleFunc("/api/containers/templates/{name}", s.handleGetTemplate).Methods("GET", "OPTIONS")
        s.router.HandleFunc("/api/containers/{id}/{action}", s.handleContainerAction).Methods("POST", "OPTIONS")

        // Log all registered routes
        s.router.Walk(func(route *mux.Route, router *mux.Router, ancestors []*mux.Route) error {
                pathTemplate, _ := route.GetPathTemplate()
                methods, _ := route.GetMethods()
                log.Printf("Route: %v Methods: %v", pathTemplate, methods)
                return nil
        })

        // Debug middleware
        s.router.Use(func(next http.Handler) http.Handler {
                return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
                        log.Printf("DEBUG: Incoming request: Method=%s, Path=%s, Origin=%s, Headers=%v", 
                                r.Method, 
                                r.URL.Path, 
                                r.Header.Get("Origin"),
                                r.Header)
                        next.ServeHTTP(w, r)
                })
        })

        // Register all routes
        s.router.HandleFunc("/api/containers/{id}/start", s.handleContainerStart).Methods("POST", "OPTIONS")
        s.router.HandleFunc("/api/containers/{id}/stop", s.handleContainerStop).Methods("POST", "OPTIONS")
        s.router.HandleFunc("/api/containers/{id}/restart", s.handleContainerRestart).Methods("POST", "OPTIONS")
        s.router.HandleFunc("/api/containers/{id}/delete", s.handleContainerDelete).Methods("DELETE", "OPTIONS")
        s.router.HandleFunc("/api/containers/{id}/update", s.handleUpdateContainer).Methods("POST", "OPTIONS")
        s.router.HandleFunc("/api/system/metrics", s.handleMetrics).Methods("GET", "OPTIONS")

        // Delete container endpoint
        s.router.HandleFunc("/api/containers/{id}/delete", func(w http.ResponseWriter, r *http.Request) {
                vars := mux.Vars(r)
                containerID := vars["id"]
                log.Printf("Deleting container: %s", containerID)

                if r.Method == "OPTIONS" {
                        w.WriteHeader(http.StatusOK)
                        return
                }

                // Stop the container first (ignore errors as it might already be stopped)
                stopCmd := exec.Command("docker", "stop", containerID)
                stopCmd.Run()

                // Remove the container
                cmd := exec.Command("docker", "rm", containerID)
                if output, err := cmd.CombinedOutput(); err != nil {
                        log.Printf("Error deleting container: %v\nOutput: %s", err, string(output))
                        http.Error(w, fmt.Sprintf("Failed to delete container: %v", err), http.StatusInternalServerError)
                        return
                }

                w.WriteHeader(http.StatusOK)
                json.NewEncoder(w).Encode(map[string]string{
                        "status": "success",
                        "message": fmt.Sprintf("Container %s deleted successfully", containerID),
                })
        }).Methods("POST", "OPTIONS")

        // Add marketplace routes
        s.router.HandleFunc("/api/marketplace", s.handleGetMarketplace).Methods("GET", "OPTIONS")
        s.router.HandleFunc("/api/marketplace/install", s.handleInstallContainer).Methods("POST", "OPTIONS")

        // Add catch-all route for debugging
        s.router.PathPrefix("/").HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
                log.Printf("404 Not Found: %s %s", r.Method, r.URL.Path)
                http.NotFound(w, r)
        })

        // Add new route for image proxying
        s.router.HandleFunc("/api/proxy-image", s.handleProxyImage).Methods("GET", "OPTIONS")

        // Add new route for container configuration
        s.router.HandleFunc("/api/containers/{id}/config", s.handleGetContainerConfig).Methods("GET", "OPTIONS")

        // Add new route for templates
        s.router.HandleFunc("/api/templates", s.handleListTemplates).Methods("GET", "OPTIONS")
}

// Add this new handler function
func (s *Server) handleListContainers(w http.ResponseWriter, r *http.Request) {
        log.Printf("Container list endpoint hit: %s %s", r.Method, r.URL.Path)

        // Test Docker connection first
        testCmd := exec.Command("docker", "ps", "-a")
        testOutput, testErr := testCmd.CombinedOutput()
        log.Printf("Raw docker test output: %s", string(testOutput))
        
        if testErr != nil {
                log.Printf("Error running docker ps: %v", testErr)
                http.Error(w, "Failed to list containers", http.StatusInternalServerError)
                return
        }

        // Now try to list containers with JSON format
        cmd := exec.Command("docker", "ps", "-a", "--format", `{"ID":"{{ .ID }}", "name":"{{ .Names }}", "image":"{{ .Image }}", "status":"{{ .Status }}"}`)
        output, err := cmd.CombinedOutput()
        if err != nil {
                log.Printf("Error getting containers with format: %v\nOutput: %s", err, string(output))
                http.Error(w, "Failed to get containers", http.StatusInternalServerError)
                return
        }

        log.Printf("Raw docker formatted output: %s", string(output))
        
        // Split and parse output
        lines := strings.Split(strings.TrimSpace(string(output)), "\n")
        containers := make([]map[string]interface{}, 0)

        for _, line := range lines {
                if line == "" {
                        continue
                }
                var container map[string]interface{}
                if err := json.Unmarshal([]byte(line), &container); err != nil {
                        log.Printf("Error parsing container JSON: %v for line: %s", err, line)
                        continue
                }
                containers = append(containers, container)
        }

        log.Printf("Sending response with %d containers", len(containers))
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(containers)
}

func (s *Server) handleGetSystemMetrics(w http.ResponseWriter, r *http.Request) {
        // Allow frontend's local development server port
        w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5174")
        w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
        w.Header().Set("Access-Control-Allow-Headers", "*")

        // Handle preflight
        if r.Method == "OPTIONS" {
                w.WriteHeader(http.StatusOK)
                return
        }

        metrics, err := system.GetSystemMetrics()
        if err != nil {
                log.Printf("Error getting metrics: %v", err)
                http.Error(w, err.Error(), http.StatusInternalServerError)
                return
        }

        // Log the metrics before sending
        log.Printf("Sending metrics: CPU: %.2f%%, Memory: %d/%d, Disk: %d/%d, Eliza: %v",
                metrics.CPU,
                metrics.Memory.Used, metrics.Memory.Total,
                metrics.Disk.Used, metrics.Disk.Total,
                metrics.ElizaStatus)

        w.Header().Set("Content-Type", "application/json")
        if err := json.NewEncoder(w).Encode(metrics); err != nil {
                log.Printf("Error encoding metrics: %v", err)
                http.Error(w, err.Error(), http.StatusInternalServerError)
                return
        }
}

func (s *Server) handleGetMarketplace(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/json")

        // Update to your correct GitHub repository URL with refs/heads/
        marketplaceURL := "https://raw.githubusercontent.com/mentholmike/wagmios-marketplace/refs/heads/main/marketplace.json"

        client := &http.Client{
                Timeout: time.Second * 10,
        }

        resp, err := client.Get(marketplaceURL)
        if err != nil {
                log.Printf("Error fetching marketplace: %v", err)
                // Improved error logging
                log.Printf("Attempting to fallback to local marketplace")
                localMarketplace, err := os.ReadFile("data/marketplace.json")
                if err != nil {
                        log.Printf("Local marketplace fallback failed: %v", err)
                        http.Error(w, "Marketplace unavailable", http.StatusServiceUnavailable)
                        return
                }
                w.Write(localMarketplace)
                return
        }
        defer resp.Body.Close()

        if resp.StatusCode != http.StatusOK {
                log.Printf("Marketplace returned status: %d", resp.StatusCode)
                // Improved error handling with more detailed message
                http.Error(w, fmt.Sprintf("Marketplace unavailable (Status: %d)", resp.StatusCode), resp.StatusCode)
                return
        }

        // Add cache headers
        w.Header().Set("Cache-Control", "public, max-age=300") // Cache for 5 minutes
        w.Header().Set("ETag", resp.Header.Get("ETag"))

        // Forward the response
        if _, err := io.Copy(w, resp.Body); err != nil {
                log.Printf("Error sending marketplace data: %v", err)
                http.Error(w, "Failed to send marketplace data", http.StatusInternalServerError)
                return
        }
}

func (s *Server) handleInstallContainer(w http.ResponseWriter, r *http.Request) {
        log.Printf("Starting container installation process")
        
        var req ContainerInstallRequest
        if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
                log.Printf("Error decoding request: %v", err)
                http.Error(w, fmt.Sprintf("Invalid request format: %v", err), http.StatusBadRequest)
                return
        }

        log.Printf("Installing container: %s with image: %s", req.Name, req.Image)
        log.Printf("Configuration: %+v", req.Config)

        // First pull the image
        pullCmd := exec.Command("docker", "pull", req.Image)
        log.Printf("Executing pull command: docker pull %s", req.Image)
        
        if output, err := pullCmd.CombinedOutput(); err != nil {
                errorMsg := fmt.Sprintf("Error pulling image: %v\nOutput: %s", err, string(output))
                log.Printf(errorMsg)
                http.Error(w, errorMsg, http.StatusInternalServerError)
                return
        }
        log.Printf("Successfully pulled image: %s", req.Image)

        // Prepare docker run command
        args := []string{"run", "-d", "--name", req.Name}

        // Add configuration
        // Add ports
        if ports, ok := req.Config["ports"].([]interface{}); ok {
                for _, port := range ports {
                        if portStr, ok := port.(string); ok {
                                args = append(args, "-p", portStr)
                                log.Printf("Adding port mapping: %s", portStr)
                        }
                }
        }

        // Add volumes
        if volumes, ok := req.Config["volumes"].([]interface{}); ok {
                for _, volume := range volumes {
                        if volumeStr, ok := volume.(string); ok {
                                args = append(args, "-v", volumeStr)
                                log.Printf("Adding volume mapping: %s", volumeStr)
                        }
                }
        }

        // Add environment variables
        if env, ok := req.Config["env"].([]interface{}); ok {
                for _, e := range env {
                        if envMap, ok := e.(map[string]interface{}); ok {
                                name := envMap["name"].(string)
                                if value, ok := envMap["default"].(string); ok {
                                        args = append(args, "-e", fmt.Sprintf("%s=%s", name, value))
                                        log.Printf("Adding env variable: %s", name)
                                }
                        }
                }
        }

        // Add the image name
        args = append(args, req.Image)

        // Execute docker run
        cmd := exec.Command("docker", args...)
        log.Printf("Executing run command: docker %v", args)

        if output, err := cmd.CombinedOutput(); err != nil {
                errorMsg := fmt.Sprintf("Failed to run container: %v\nCommand output: %s", err, string(output))
                log.Printf(errorMsg)
                log.Printf("Full command that failed: docker %v", args)
                http.Error(w, errorMsg, http.StatusInternalServerError)
                return
        }

        log.Printf("Container %s successfully installed", req.Name)

        // Return success response
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(map[string]string{
                "status": "success",
                "message": fmt.Sprintf("Container %s installed successfully", req.Name),
        })
}

func (s *Server) loadMarketplaceData() (*MarketplaceData, error) {
        // First try to read from local file
        data, err := ioutil.ReadFile("data/marketplace.json")
        if err != nil {
                // If local file doesn't exist, fetch from GitHub
                log.Printf("Local marketplace data not found, fetching from GitHub...")
                
                // Update to the correct GitHub URL
                githubURL := "https://raw.githubusercontent.com/mentholmike/wagmios-marketplace/refs/heads/main/marketplace.json"
                log.Printf("Fetching marketplace data from: %s", githubURL)
                
                client := &http.Client{Timeout: 10 * time.Second}
                resp, err := client.Get(githubURL)
                if err != nil {
                        log.Printf("Error fetching from GitHub: %v", err)
                        return nil, fmt.Errorf("failed to fetch marketplace data: %v", err)
                }
                defer resp.Body.Close()

                if resp.StatusCode != http.StatusOK {
                        body, _ := ioutil.ReadAll(resp.Body)
                        log.Printf("GitHub response: Status=%d, Body=%s", resp.StatusCode, string(body))
                        return nil, fmt.Errorf("GitHub returned status %d", resp.StatusCode)
                }

                data, err = ioutil.ReadAll(resp.Body)
                if err != nil {
                        return nil, fmt.Errorf("failed to read marketplace response: %v", err)
                }

                // Log the received data for debugging
                log.Printf("Received marketplace data: %s", string(data))

                // Create data directory if it doesn't exist
                if err := os.MkdirAll("data", 0755); err != nil {
                        log.Printf("Warning: Failed to create data directory: %v", err)
                } else {
                        // Cache the data
                        if err := ioutil.WriteFile("data/marketplace.json", data, 0644); err != nil {
                                log.Printf("Warning: Failed to cache marketplace data: %v", err)
                        } else {
                                log.Printf("Successfully cached marketplace data")
                        }
                }
        } else {
                log.Printf("Using cached marketplace data")
        }

        var marketplace MarketplaceData
        if err := json.Unmarshal(data, &marketplace); err != nil {
                log.Printf("Error parsing marketplace JSON: %v", err)
                log.Printf("Raw JSON data: %s", string(data))
                return nil, fmt.Errorf("failed to parse marketplace data: %v", err)
        }

        log.Printf("Successfully loaded marketplace data with %d containers", len(marketplace.Containers))
        return &marketplace, nil
}

func (s *Server) handleContainerAction(w http.ResponseWriter, r *http.Request) {
        vars := mux.Vars(r)
        containerID := vars["id"]
        action := vars["action"]

        log.Printf("Container action request: %s for container %s", action, containerID)

        // Check container exists and status
        inspectCmd := exec.Command("docker", "inspect", "--format", "{{.State.Status}}", containerID)
        status, err := inspectCmd.Output()
        if err != nil {
                http.Error(w, "Container not found", http.StatusNotFound)
                return
        }

        // Execute the action
        var cmd *exec.Cmd
        switch action {
        case "start":
                if strings.TrimSpace(string(status)) == "running" {
                        http.Error(w, "Container is already running", http.StatusBadRequest)
                        return
                }
                cmd = exec.Command("docker", "start", containerID)
        case "stop":
                if strings.TrimSpace(string(status)) == "exited" {
                        http.Error(w, "Container is already stopped", http.StatusBadRequest)
                        return
                }
                cmd = exec.Command("docker", "stop", containerID)
        case "restart":
                cmd = exec.Command("docker", "restart", containerID)
        case "delete":
                if strings.TrimSpace(string(status)) == "running" {
                        http.Error(w, "Cannot delete running container", http.StatusBadRequest)
                        return
                }
                cmd = exec.Command("docker", "rm", containerID)
        default:
                http.Error(w, "Invalid action", http.StatusBadRequest)
                return
        }

        output, err := cmd.CombinedOutput()
        if err != nil {
                log.Printf("Error executing action: %v\nOutput: %s", err, string(output))
                http.Error(w, fmt.Sprintf("Failed to %s container: %v", action, err), http.StatusInternalServerError)
                return
        }

        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(map[string]string{
                "status": "success",
                "message": fmt.Sprintf("Container %s %sed successfully", containerID, action),
        })
}

func (s *Server) handleCreateContainer(w http.ResponseWriter, r *http.Request) {
        var config ContainerConfig
        if err := json.NewDecoder(r.Body).Decode(&config); err != nil {
                log.Printf("Error decoding request body: %v", err)
                http.Error(w, "Invalid request body", http.StatusBadRequest)
                return
        }

        // Special handling for Gluetun
        if strings.Contains(strings.ToLower(config.Name), "gluetun") {
                // Check if Gluetun is already running
                checkCmd := exec.Command("docker", "ps", "-q", "-f", "name=gluetun")
                output, _ := checkCmd.CombinedOutput()
                if len(output) > 0 {
                        errorMsg := "Gluetun is already running. Please stop and remove the existing instance first."
                        log.Printf("Error: %s", errorMsg)
                        http.Error(w, errorMsg, http.StatusConflict)
                        return
                }

                // Create fresh Gluetun container
                args := []string{
                        "run", "-d",
                        "--name", "gluetun",
                        "--restart", "always",
                        "--privileged",
                        "-p", "8388:8388",
                        "-p", "8888:8888",
                        "--cap-add=NET_ADMIN",
                }

                // Add environment variables
                for _, env := range config.Env {
                        args = append(args, "-e", fmt.Sprintf("%s=%s", env.Key, env.Value))
                }

                args = append(args, config.Image)

                log.Printf("Executing Gluetun setup: docker %s", strings.Join(args, " "))
                cmd := exec.Command("docker", args...)
                if output, err := cmd.CombinedOutput(); err != nil {
                        // If the error is about TUN device, provide helpful message
                        if strings.Contains(string(output), "/dev/net/tun") {
                                errorMsg := "Gluetun requires the TUN device. Please run these commands first:\n" +
                                        "sudo mkdir -p /dev/net\n" +
                                        "sudo mknod /dev/net/tun c 10 200\n" +
                                        "sudo chmod 666 /dev/net/tun"
                                log.Printf("Error: %s", errorMsg)
                                http.Error(w, errorMsg, http.StatusInternalServerError)
                                return
                        }
                        errorMsg := fmt.Sprintf("Failed to setup Gluetun: %v\nOutput: %s", err, string(output))
                        log.Printf("Error: %s", errorMsg)
                        http.Error(w, errorMsg, http.StatusInternalServerError)
                        return
                }

                w.WriteHeader(http.StatusOK)
                json.NewEncoder(w).Encode(map[string]string{
                        "status": "success",
                        "message": "Gluetun setup completed successfully",
                })
                return
        }

        // Regular container creation logic for non-Gluetun containers
        // Check if container exists and remove it
        checkCmd := exec.Command("docker", "ps", "-a", "--filter", fmt.Sprintf("name=%s", config.Name), "--format", "{{.ID}}")
        checkOutput, err := checkCmd.CombinedOutput()
        if err == nil && len(checkOutput) > 0 {
                // Container exists, try to remove it
                log.Printf("Found existing container %s, attempting to remove", config.Name)
                removeCmd := exec.Command("docker", "rm", "-f", config.Name)
                if removeErr := removeCmd.Run(); removeErr != nil {
                        log.Printf("Error removing existing container: %v", removeErr)
                        http.Error(w, fmt.Sprintf("Failed to remove existing container: %v", removeErr), http.StatusInternalServerError)
                        return
                }
        }

        // Build docker run command with advanced settings
        args := []string{"run", "-d", "--name", config.Name}

        if config.Privileged {
                args = append(args, "--privileged")
        }

        if config.Network != "" {
                args = append(args, fmt.Sprintf("--network=%s", config.Network))
        }

        for _, cap := range config.Capabilities {
                args = append(args, fmt.Sprintf("--cap-add=%s", cap))
        }

        for _, device := range config.Devices {
                if device != "" {
                        args = append(args, "--device", device)
                }
        }

        for _, port := range config.Ports {
                portMapping := fmt.Sprintf("%s:%s", port.Host, port.Container)
                args = append(args, "-p", portMapping)
        }

        for _, vol := range config.Volumes {
                volumeMapping := fmt.Sprintf("%s:%s", vol.Host, vol.Container)
                args = append(args, "-v", volumeMapping)
        }

        for _, env := range config.Env {
                args = append(args, "-e", fmt.Sprintf("%s=%s", env.Key, env.Value))
        }

        args = append(args, config.Image)

        log.Printf("Executing docker command: docker %s", strings.Join(args, " "))

        cmd := exec.Command("docker", args...)
        output, err := cmd.CombinedOutput()
        if err != nil {
                errorMsg := fmt.Sprintf("Failed to create container: %v\nOutput: %s", err, string(output))
                log.Printf("Error: %s", errorMsg)
                http.Error(w, errorMsg, http.StatusInternalServerError)
                return
        }

        w.WriteHeader(http.StatusOK)
        json.NewEncoder(w).Encode(map[string]string{
                "status": "success",
                "id": strings.TrimSpace(string(output)),
        })
}

func (s *Server) handleUpdateContainer(w http.ResponseWriter, r *http.Request) {
        vars := mux.Vars(r)
        containerID := vars["id"]
        log.Printf("Update container request received for container: %s", containerID)
        
        var config ContainerConfig
        if err := json.NewDecoder(r.Body).Decode(&config); err != nil {
                log.Printf("Error decoding request body: %v", err)
                http.Error(w, "Invalid request body", http.StatusBadRequest)
                return
        }

        // 1. Stop the container
        stopCmd := exec.Command("docker", "stop", containerID)
        if output, err := stopCmd.CombinedOutput(); err != nil {
                log.Printf("Error stopping container: %v\nOutput: %s", err, string(output))
                http.Error(w, "Failed to stop container", http.StatusInternalServerError)
                return
        }

        // 2. Remove the container
        rmCmd := exec.Command("docker", "rm", containerID)
        if output, err := rmCmd.CombinedOutput(); err != nil {
                log.Printf("Error removing container: %v\nOutput: %s", err, string(output))
                http.Error(w, "Failed to remove container", http.StatusInternalServerError)
                return
        }

        // 3. Create new container with updated config
        args := []string{"run", "-d", "--name", config.Name}

        // Add updated port mappings
        for _, port := range config.Ports {
                portMapping := fmt.Sprintf("%s:%s", port.Host, port.Container)
                args = append(args, "-p", portMapping)
        }

        // Add updated volume mappings
        for _, volume := range config.Volumes {
                volumeMapping := fmt.Sprintf("%s:%s", volume.Host, volume.Container)
                args = append(args, "-v", volumeMapping)
        }

        // Add updated environment variables
        for _, env := range config.Env {
                envVar := fmt.Sprintf("%s=%s", env.Key, env.Value)
                args = append(args, "-e", envVar)
        }

        // Add the image name (reusing the same image)
        args = append(args, config.Image)

        // Create new container
        createCmd := exec.Command("docker", args...)
        if output, err := createCmd.CombinedOutput(); err != nil {
                log.Printf("Error creating updated container: %v\nOutput: %s", err, string(output))
                http.Error(w, "Failed to create updated container", http.StatusInternalServerError)
                return
        }

        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(map[string]string{
                "status": "success",
                "message": fmt.Sprintf("Container %s updated successfully", config.Name),
        })
}

// Add these handler methods to the Server struct
func (s *Server) handleContainerStart(w http.ResponseWriter, r *http.Request) {
        vars := mux.Vars(r)
        containerID := vars["id"]
        log.Printf("Starting container: %s", containerID)

        cmd := exec.Command("docker", "start", containerID)
        if output, err := cmd.CombinedOutput(); err != nil {
                log.Printf("Error starting container: %v\nOutput: %s", err, string(output))
                http.Error(w, "Failed to start container", http.StatusInternalServerError)
                return
        }

        w.WriteHeader(http.StatusOK)
}

func (s *Server) handleContainerStop(w http.ResponseWriter, r *http.Request) {
        vars := mux.Vars(r)
        containerID := vars["id"]
        log.Printf("Stopping container: %s", containerID)

        cmd := exec.Command("docker", "stop", containerID)
        if output, err := cmd.CombinedOutput(); err != nil {
                log.Printf("Error stopping container: %v\nOutput: %s", err, string(output))
                http.Error(w, "Failed to stop container", http.StatusInternalServerError)
                return
        }

        w.WriteHeader(http.StatusOK)
}

func (s *Server) handleContainerRestart(w http.ResponseWriter, r *http.Request) {
        vars := mux.Vars(r)
        containerID := vars["id"]
        log.Printf("Restarting container: %s", containerID)

        cmd := exec.Command("docker", "restart", containerID)
        if output, err := cmd.CombinedOutput(); err != nil {
                log.Printf("Error restarting container: %v\nOutput: %s", err, string(output))
                http.Error(w, "Failed to restart container", http.StatusInternalServerError)
                return
        }

        w.WriteHeader(http.StatusOK)
}

func (s *Server) handleContainerDelete(w http.ResponseWriter, r *http.Request) {
        vars := mux.Vars(r)
        containerID := vars["id"]
        log.Printf("Deleting container: %s", containerID)

        // Stop the container first if it's running
        stopCmd := exec.Command("docker", "stop", containerID)
        stopCmd.Run() // Ignore errors as container might already be stopped

        // Remove the container
        cmd := exec.Command("docker", "rm", containerID)
        if output, err := cmd.CombinedOutput(); err != nil {
                log.Printf("Error deleting container: %v\nOutput: %s", err, string(output))
                http.Error(w, "Failed to delete container", http.StatusInternalServerError)
                return
        }

        w.WriteHeader(http.StatusOK)
}

func (s *Server) handleProxyImage(w http.ResponseWriter, r *http.Request) {
        // Set CSP header to allow images from our domain and GitHub
        w.Header().Set("Content-Security-Policy", "img-src 'self' http://* https://* data:")
        w.Header().Set("Access-Control-Allow-Origin", "*")
        
        imagePath := r.URL.Query().Get("path")
        if imagePath == "" {
                http.Error(w, "No image path provided", http.StatusBadRequest)
                return
        }

        // Remove duplicate "logos" in path if present
        imagePath = strings.TrimPrefix(imagePath, "logos/")
        
        // Construct the full path to the image
        fullPath := filepath.Join("data/logos", imagePath)
        
        // Check if file exists
        if _, err := os.Stat(fullPath); os.IsNotExist(err) {
                http.Error(w, "Image not found", http.StatusNotFound)
                return
        }

        // Serve the file
        http.ServeFile(w, r, fullPath)
}

func (s *Server) handlePullImage(w http.ResponseWriter, r *http.Request) {
        log.Printf("=== Pull Image Request ===")
        log.Printf("URL Path: %s", r.URL.Path)
        log.Printf("Method: %s", r.Method)
        log.Printf("Headers: %v", r.Header)

        var req struct {
                Image string `json:"image"`
        }

        // Read and log the raw request body
        body, err := io.ReadAll(r.Body)
        if err != nil {
                log.Printf("Error reading body: %v", err)
                http.Error(w, "Failed to read request body", http.StatusBadRequest)
                return
        }
        log.Printf("Raw request body: %s", string(body))

        // Restore the body for later use
        r.Body = io.NopCloser(bytes.NewBuffer(body))

        if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
                log.Printf("Error decoding request: %v", err)
                http.Error(w, fmt.Sprintf("Invalid request format: %v", err), http.StatusBadRequest)
                return
        }

        log.Printf("Attempting to pull image: %s", req.Image)
        
        // Construct and log the docker command
        dockerCmd := exec.Command("docker", "pull", req.Image)
        log.Printf("Executing command: docker pull %s", req.Image)
        
        output, err := dockerCmd.CombinedOutput()
        log.Printf("Command output: %s", string(output))
        
        if err != nil {
                errorMsg := fmt.Sprintf("Failed to pull image: %v\nOutput: %s", err, string(output))
                log.Printf("Error: %s", errorMsg)
                http.Error(w, errorMsg, http.StatusInternalServerError)
                return
        }

        log.Printf("Successfully pulled image: %s", req.Image)
        
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(map[string]string{
                "status": "success",
                "message": fmt.Sprintf("Successfully pulled image %s", req.Image),
                "output": string(output),
        })
}

func (s *Server) handleGetContainerConfig(w http.ResponseWriter, r *http.Request) {
        vars := mux.Vars(r)
        containerID := vars["id"]
        
        // Get container info
        inspectCmd := exec.Command("docker", "inspect", containerID)
        output, err := inspectCmd.CombinedOutput()
        if err != nil {
                log.Printf("Error inspecting container: %v\nOutput: %s", err, string(output))
                http.Error(w, "Failed to get container configuration", http.StatusInternalServerError)
                return
        }

        var inspectData []map[string]interface{}
        if err := json.Unmarshal(output, &inspectData); err != nil {
                log.Printf("Error parsing inspect output: %v", err)
                http.Error(w, "Failed to parse container configuration", http.StatusInternalServerError)
                return
        }

        if len(inspectData) == 0 {
                http.Error(w, "Container not found", http.StatusNotFound)
                return
        }

        // Extract relevant configuration
        containerInfo := inspectData[0]
        config := ContainerConfig{
                Name: strings.TrimPrefix(containerInfo["Name"].(string), "/"),
                Image: containerInfo["Config"].(map[string]interface{})["Image"].(string),
        }

        // Extract other configurations (ports, volumes, env, etc.)
        // ... (we'll implement this in the next step)

        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(config)
}

func (s *Server) handleListTemplates(w http.ResponseWriter, r *http.Request) {
        if r.Method != http.MethodGet {
                http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
                return
        }

        // Read all files from templates directory
        files, err := os.ReadDir("templates")
        if err != nil {
                log.Printf("Error reading templates directory: %v", err)
                http.Error(w, "Failed to read templates", http.StatusInternalServerError)
                return
        }

        // Create a slice to hold template info
        templates := []map[string]string{}

        // Add each template file to the list
        for _, file := range files {
                if strings.HasSuffix(file.Name(), ".json") {
                        templates = append(templates, map[string]string{
                                "name": file.Name(),
                        })
                }
        }

        // Send the response
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(templates)
}

func (s *Server) handleGetTemplate(w http.ResponseWriter, r *http.Request) {
        vars := mux.Vars(r)
        templateName := vars["name"]
        
        log.Printf("Loading template: %s", templateName)
        
        // Ensure the template name has .json extension
        if !strings.HasSuffix(templateName, ".json") {
                templateName = templateName + ".json"
        }
        
        // Construct the full path to the template file
        filename := filepath.Join("templates", templateName)
        absPath, _ := filepath.Abs(filename)
        log.Printf("Looking for template file at: %s", absPath)
        
        // List all files in templates directory for debugging
        files, err := os.ReadDir("templates")
        if err == nil {
                log.Printf("Available templates in directory:")
                for _, file := range files {
                        log.Printf("- %s", file.Name())
                }
        }
        
        data, err := os.ReadFile(filename)
        if err != nil {
                log.Printf("Error reading template file: %v", err)
                http.Error(w, fmt.Sprintf("Template not found: %v", err), http.StatusNotFound)
                return
        }
        
        var template ContainerTemplate
        if err := json.Unmarshal(data, &template); err != nil {
                log.Printf("Error parsing template JSON: %v", err)
                http.Error(w, fmt.Sprintf("Invalid template data: %v", err), http.StatusInternalServerError)
                return
        }
        
        log.Printf("Successfully loaded template: %+v", template)
        
        // Ensure all arrays are initialized
        if template.Ports == nil {
                template.Ports = []PortMapping{}
        }
        if template.Volumes == nil {
                template.Volumes = []VolumeMapping{}
        }
        if template.Env == nil {
                template.Env = []EnvVar{}
        }
        if template.Capabilities == nil {
                template.Capabilities = []string{}
        }
        
        // Initialize devices array if nil
        if template.Devices == nil {
                template.Devices = []string{"/dev/net/tun"}
        }
        
        w.Header().Set("Content-Type", "application/json")
        if err := json.NewEncoder(w).Encode(template); err != nil {
                log.Printf("Error encoding template response: %v", err)
                http.Error(w, "Failed to send template", http.StatusInternalServerError)
                return
        }
        
        log.Printf("Template sent successfully")
}

func (s *Server) handleSaveTemplate(w http.ResponseWriter, r *http.Request) {
        if r.Method != http.MethodPost {
                http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
                return
        }

        var template ContainerTemplate
        if err := json.NewDecoder(r.Body).Decode(&template); err != nil {
                log.Printf("Error decoding template: %v", err)
                http.Error(w, "Invalid template data", http.StatusBadRequest)
                return
        }

        // Ensure templates directory exists
        if err := os.MkdirAll("templates", 0755); err != nil {
                log.Printf("Error creating templates directory: %v", err)
                http.Error(w, "Failed to create templates directory", http.StatusInternalServerError)
                return
        }

        // Save template to file
        filename := filepath.Join("templates", template.Name)
        data, err := json.MarshalIndent(template, "", "  ")
        if err != nil {
                log.Printf("Error marshaling template: %v", err)
                http.Error(w, "Failed to format template", http.StatusInternalServerError)
                return
        }

        if err := os.WriteFile(filename, data, 0644); err != nil {
                log.Printf("Error writing template file: %v", err)
                http.Error(w, "Failed to save template", http.StatusInternalServerError)
                return
        }

        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(map[string]string{
                "status": "success",
                "message": "Template saved successfully",
        })
}
