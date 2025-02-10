package main

import (
	"log"
	"net/http"
	"wagmios/internal/api"
)

func main() {
	server := api.NewServer()
	
	log.Printf("Starting server on :8080")
	if err := http.ListenAndServe(":8080", server.Router()); err != nil {
		log.Fatal(err)
	}
} 
