package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"wagmios/internal/api"
	"wagmios/internal/auth"
)

func main() {
	// Get configuration from environment
	port := os.Getenv("PORT")
	if port == "" {
		port = "5179"
	}

	dataDir := os.Getenv("WAGMIOS_DATA_DIR")
	if dataDir == "" {
		dataDir = "/app/data"
	}

	// Initialize key store
	ks, err := auth.NewKeyStore(dataDir)
	if err != nil {
		log.Fatalf("Failed to initialize key store: %v", err)
	}

	// Create server with auth
	server := api.NewServer(ks)

	// Start the server
	addr := fmt.Sprintf("0.0.0.0:%s", port)
	log.Printf("WAGMIOS starting on %s", addr)
	log.Printf("Wizard required: %v", ks.IsWizardRequired())

	if err := http.ListenAndServe(addr, server.Router()); err != nil {
		log.Fatalf("Error starting server: %v", err)
	}
}
