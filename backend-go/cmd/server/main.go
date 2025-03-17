package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"wagmios/internal/api"
)

func main() {
	// Get port from environment variable or use default
	port := os.Getenv("PORT")
	if port == "" {
		port = "5179"
	}

	// Create and start the server
	server := api.NewServer()

	// Start the server
	addr := fmt.Sprintf("0.0.0.0:%s", port)
	log.Printf("Server starting on %s", addr)
	
	// Use the server's router with CORS middleware
	if err := http.ListenAndServe(addr, server.Router()); err != nil {
		log.Fatalf("Error starting server: %v", err)
	}
} 
