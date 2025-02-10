package api

import (
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strings"
)

type PasswordRequest struct {
	Password string `json:"password"`
}

func (s *Server) handleSetPassword(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req PasswordRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request", http.StatusBadRequest)
		return
	}

	// Hash the password
	hasher := sha256.New()
	hasher.Write([]byte(req.Password))
	hashedPassword := hex.EncodeToString(hasher.Sum(nil))

	// Read current .env file
	envContent, err := os.ReadFile(".env")
	if err != nil && !os.IsNotExist(err) {
		http.Error(w, "Server error", http.StatusInternalServerError)
		return
	}

	lines := strings.Split(string(envContent), "\n")
	passwordSet := false
	
	// Update or add DASHBOARD_PASSWORD
	for i, line := range lines {
		if strings.HasPrefix(line, "DASHBOARD_PASSWORD=") {
			lines[i] = fmt.Sprintf("DASHBOARD_PASSWORD=%s", hashedPassword)
			passwordSet = true
			break
		}
	}

	// If password wasn't found, append it
	if !passwordSet {
		lines = append(lines, fmt.Sprintf("DASHBOARD_PASSWORD=%s", hashedPassword))
	}

	// Write back to .env
	newContent := strings.Join(lines, "\n")
	if err := os.WriteFile(".env", []byte(newContent), 0600); err != nil {
		http.Error(w, "Server error", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
}

func (s *Server) handleVerifyPassword(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req PasswordRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request", http.StatusBadRequest)
		return
	}

	// Read stored password from .env
	envContent, err := os.ReadFile(".env")
	if err != nil {
		http.Error(w, "Server error", http.StatusInternalServerError)
		return
	}

	var storedHash string
	lines := strings.Split(string(envContent), "\n")
	for _, line := range lines {
		if strings.HasPrefix(line, "DASHBOARD_PASSWORD=") {
			storedHash = strings.TrimPrefix(line, "DASHBOARD_PASSWORD=")
			break
		}
	}

	if storedHash == "" {
		http.Error(w, "No password set", http.StatusUnauthorized)
		return
	}

	// Hash the provided password
	hasher := sha256.New()
	hasher.Write([]byte(req.Password))
	providedHash := hex.EncodeToString(hasher.Sum(nil))

	if providedHash != storedHash {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	w.WriteHeader(http.StatusOK)
}

func (s *Server) handleCheckPasswordSet(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	envContent, err := os.ReadFile(".env")
	if err != nil {
		http.Error(w, "Server error", http.StatusInternalServerError)
		return
	}

	hasPassword := false
	lines := strings.Split(string(envContent), "\n")
	for _, line := range lines {
		if strings.HasPrefix(line, "DASHBOARD_PASSWORD=") && strings.TrimPrefix(line, "DASHBOARD_PASSWORD=") != "" {
			hasPassword = true
			break
		}
	}

	json.NewEncoder(w).Encode(map[string]bool{"hasPassword": hasPassword})
}

func (s *Server) handleRemovePassword(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodDelete {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Read current .env file
	envContent, err := os.ReadFile(".env")
	if err != nil {
		http.Error(w, "Server error", http.StatusInternalServerError)
		return
	}

	lines := strings.Split(string(envContent), "\n")
	var newLines []string
	
	// Remove DASHBOARD_PASSWORD line
	for _, line := range lines {
		if !strings.HasPrefix(line, "DASHBOARD_PASSWORD=") {
			newLines = append(newLines, line)
		}
	}

	// Write back to .env
	newContent := strings.Join(newLines, "\n")
	if err := os.WriteFile(".env", []byte(newContent), 0600); err != nil {
		http.Error(w, "Server error", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
}

// Add this to your Server struct routes
func (s *Server) setupAuthRoutes() {
	s.router.HandleFunc("/api/settings/password", s.handleSetPassword)
	s.router.HandleFunc("/api/auth/verify", s.handleVerifyPassword)
	s.router.HandleFunc("/api/auth/check", s.handleCheckPasswordSet)
	s.router.HandleFunc("/api/settings/password", s.handleRemovePassword)
} 
