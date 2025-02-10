package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"github.com/mikesposito/WagmiOS/backend-go/internal/api"
)

type Container struct {
	ID     string `json:"id"`
	Name   string `json:"name"`
	Image  string `json:"image"`
	Status string `json:"status"`
}

func main() {
	// Get port from environment variable or use default
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}


	// Create and start the server
	server := api.NewServer()

	// Set up CORS middleware
	corsMiddleware := func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Access-Control-Allow-Origin", "*")
			w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

			if r.Method == "OPTIONS" {
				w.WriteHeader(http.StatusOK)
				return
			}

			next.ServeHTTP(w, r)
		})
	}

	// Create a new mux
	mux := http.NewServeMux()

	// Container routes
	mux.HandleFunc("/api/containers/list", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != "GET" {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		containers := []Container{
			{
				ID:     "1",
				Name:   "Test Container",
				Image:  "nginx",
				Status: "running",
			},
		}
		json.NewEncoder(w).Encode(containers)
	})

	mux.HandleFunc("/api/containers/install", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != "POST" {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(map[string]string{"status": "success"})
	})

	mux.HandleFunc("/api/metrics", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != "GET" {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		metrics := map[string]interface{}{
			"cpu":    50,
			"memory": 60,
			"disk":   70,
		}
		json.NewEncoder(w).Encode(metrics)
	})

	mux.HandleFunc("/api/system", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != "GET" {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		system := map[string]interface{}{
			"hostname": "WagmiOS",
			"platform": "linux",
			"uptime":   3600,
		}
		json.NewEncoder(w).Encode(system)
	})

	// Start server with CORS middleware
	go func() {
		fmt.Printf("Starting server on 0.0.0.0:%s...\n", port)
		handler := corsMiddleware(server.Router())
		if err := http.ListenAndServe("0.0.0.0:"+port, handler); err != nil {
			log.Printf("Server error: %v\n", err)
		}
	}()

	// Setup signal handling for graceful shutdown
	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)

	// Wait for shutdown signal
	sig := <-sigChan
	fmt.Printf("\nReceived signal %v, shutting down...\n", sig)

	// Perform cleanup if needed
	fmt.Println("Server shutdown complete")
} 
