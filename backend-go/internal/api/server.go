package api

import (
	"encoding/json"
	"net/http"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"github.com/mikesposito/WagmiOS/backend-go/internal/system"
	"log"
)

type Server struct {
	router *mux.Router
}

func NewServer() *Server {
	s := &Server{
		router: mux.NewRouter(),
	}
	s.routes()
	return s
}

func (s *Server) Router() http.Handler {
	// Setup CORS
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:5174"}, // Add your frontend URL
		AllowedMethods: []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders: []string{"*"},
	})

	return c.Handler(s.router)
}

func (s *Server) routes() {
	s.router.HandleFunc("/api/system/metrics", s.handleGetSystemMetrics).Methods("GET")
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
