package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"github.com/mikesposito/WagmiOS/backend-go/internal/api"
)

func main() {
	// Get port from environment variable or use default
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Create and start the server
	server := api.NewServer()

	// Start the server
	addr := fmt.Sprintf(":%s", port)
	log.Printf("Server starting on port %s", port)
	
	// Use the server's router with CORS middleware
	if err := http.ListenAndServe(addr, server.Router()); err != nil {
		log.Fatalf("Error starting server: %v", err)
	}
} 
