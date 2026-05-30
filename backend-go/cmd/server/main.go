package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"
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

	// If first-boot setup is needed, log the setup token for the operator
	if ks.IsWizardRequired() && ks.GetSetupToken() != "" {
		log.Printf("============================================")
		log.Printf("SETUP TOKEN (use this for first API key):")
		log.Printf("  %s", ks.GetSetupToken())
		log.Printf("This token is one-time use and will be consumed after setup.")
		log.Printf("============================================")
	}

	httpServer := &http.Server{
		Addr:              addr,
		Handler:           server.Router(),
		ReadHeaderTimeout: 5 * time.Second,
		ReadTimeout:       30 * time.Second,
		WriteTimeout:      2 * time.Minute,
		IdleTimeout:       2 * time.Minute,
	}

	if err := httpServer.ListenAndServe(); err != nil {
		log.Fatalf("Error starting server: %v", err)
	}
}
