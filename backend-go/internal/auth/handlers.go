package auth

import (
	"encoding/json"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

// APIError represents an API error response
type APIError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

// SetupRequest is the payload for first-boot key setup
type SetupRequest struct {
	Scopes []Scope `json:"scopes"`
	Label  string  `json:"label"`
}

// SetupResponse is returned after key generation
type SetupResponse struct {
	Key     string   `json:"key"`
	KeyMeta *KeyMeta `json:"meta"`
}

// RegisterAuthHandlers registers auth-related routes
func RegisterAuthHandlers(r *mux.Router, ks *KeyStore) {
	// Public endpoints (no auth required)
	r.HandleFunc("/api/auth/setup", handleSetup(ks)).Methods("POST", "OPTIONS")
	r.HandleFunc("/api/auth/verify", handleVerify(ks)).Methods("POST", "OPTIONS")
	r.HandleFunc("/api/auth/status", handleStatus(ks)).Methods("GET", "OPTIONS")

	// Settings endpoints — require auth + self-scope-escalation check
	r.HandleFunc("/api/settings/scopes", requireAuth(ks, handleUpdateScopes(ks))).Methods("POST", "OPTIONS")
}

// handleSetup creates the first API key (first boot only)
func handleSetup(ks *KeyStore) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		// Check if already set up
		if ks.HasKey() {
			writeError(w, http.StatusConflict, "ALREADY_SETUP", "API key already exists. Setup is one-time only — manage permissions in Settings.")
			return
		}

		var req SetupRequest
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			writeError(w, http.StatusBadRequest, "INVALID_REQUEST", "Invalid JSON payload")
			return
		}

		// Validate scopes
		if len(req.Scopes) == 0 {
			writeError(w, http.StatusBadRequest, "SCOPES_REQUIRED", "At least one scope is required")
			return
		}

		key, meta, err := ks.GenerateKey(req.Scopes, req.Label)
		if err != nil {
			writeError(w, http.StatusInternalServerError, "KEY_GENERATION_FAILED", err.Error())
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{
			"success": true,
			"data": SetupResponse{
				Key:     key,
				KeyMeta: meta,
			},
			"error": nil,
		})
	}
}

// handleVerify checks if an API key is valid
func handleVerify(ks *KeyStore) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		var req struct {
			Key string `json:"key"`
		}
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			writeError(w, http.StatusBadRequest, "INVALID_REQUEST", "Invalid JSON payload")
			return
		}

		meta, err := ks.ValidateKey(req.Key)
		if err != nil {
			writeError(w, http.StatusUnauthorized, "INVALID_KEY", "API key is invalid or expired")
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{
			"success": true,
			"data": map[string]interface{}{
				"valid":     true,
				"key_id":    meta.ID,
				"key_label": meta.Label,
				"scopes":    meta.Scopes,
			},
			"error": nil,
		})
	}
}

// handleStatus returns the current setup status
func handleStatus(ks *KeyStore) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		meta := ks.GetMeta()
		
		status := map[string]interface{}{
			"wizard_required": meta == nil,
			"has_key":         ks.HasKey(),
		}
		
		if meta != nil {
			status["meta"] = map[string]interface{}{
				"id":           meta.ID,
				"key_prefix":   meta.KeyPrefix + "...",
				"label":        meta.Label,
				"created_at":   meta.CreatedAt,
				"last_used_at": meta.LastUsedAt,
				"scopes":       meta.Scopes,
			}
		}

		json.NewEncoder(w).Encode(map[string]interface{}{
			"success": true,
			"data":    status,
			"error":   nil,
		})
	}
}

// handleGetSettings returns current settings (auth required)
func handleGetSettings(ks *KeyStore) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		meta := ks.GetMeta()
		
		if meta == nil {
			writeError(w, http.StatusNotFound, "NOT_SETUP", "No API key configured")
			return
		}

		json.NewEncoder(w).Encode(map[string]interface{}{
			"success": true,
			"data": map[string]interface{}{
				"id":          meta.ID,
				"key_prefix":  meta.KeyPrefix + "...",
				"label":       meta.Label,
				"created_at":  meta.CreatedAt,
				"last_used_at": meta.LastUsedAt,
				"scopes":      meta.Scopes,
			},
			"error": nil,
		})
	}
}

// ---- Scope management ----

// requireAuth wraps a handler to require authentication and pass key meta
func requireAuth(ks *KeyStore, handler func(w http.ResponseWriter, r *http.Request, meta *KeyMeta)) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		apiKey := r.Header.Get("X-API-Key")
		if apiKey == "" {
			writeError(w, http.StatusUnauthorized, "API_KEY_REQUIRED", "X-API-Key header required")
			return
		}
		meta, err := ks.ValidateKey(apiKey)
		if err != nil {
			writeError(w, http.StatusUnauthorized, "INVALID_KEY", "Invalid or expired API key")
			return
		}
		handler(w, r, meta)
	}
}

// handleUpdateScopes updates the key's scopes. Agents can only reduce their own scopes, not escalate.
func handleUpdateScopes(ks *KeyStore) func(w http.ResponseWriter, r *http.Request, meta *KeyMeta) {
	return func(w http.ResponseWriter, r *http.Request, meta *KeyMeta) {
		var req struct {
			Scopes []Scope `json:"scopes"`
		}
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			writeError(w, http.StatusBadRequest, "INVALID_REQUEST", "Invalid JSON payload")
			return
		}

		if len(req.Scopes) == 0 {
			writeError(w, http.StatusBadRequest, "SCOPES_REQUIRED", "At least one scope is required")
			return
		}

		// Self-scope-escalation check: new scopes must be a subset of current scopes.
		// Agents cannot give themselves new permissions — only reduce or maintain.
		currentScopes := make(map[Scope]bool)
		for _, s := range meta.Scopes {
			currentScopes[s] = true
		}
		for _, s := range req.Scopes {
			if !currentScopes[s] {
				writeError(w, http.StatusForbidden, "SCOPE_ESCALATION", "Agents cannot add scopes beyond what the key currently has")
				return
			}
		}

		if err := ks.UpdateScopes(req.Scopes); err != nil {
			writeError(w, http.StatusInternalServerError, "UPDATE_FAILED", err.Error())
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{
			"success": true,
			"data":    ks.GetMeta(),
			"error":   nil,
		})
	}
}

// writeError writes a JSON error response
func writeError(w http.ResponseWriter, status int, code, message string) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(map[string]interface{}{
		"success": false,
		"data":    nil,
		"error": map[string]string{
			"code":    code,
			"message": message,
		},
	})
}

func writeJSON(w http.ResponseWriter, status int, data interface{}, apiErr *APIError) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	resp := map[string]interface{}{
		"success": true,
		"data":    data,
		"error":   nil,
	}
	if apiErr != nil {
		resp["success"] = false
		resp["error"] = map[string]string{"code": apiErr.Code, "message": apiErr.Message}
		resp["data"] = nil
	}
	json.NewEncoder(w).Encode(resp)
}

// GetDataDir returns the WAGMIOS data directory
func GetDataDir() string {
	if dir := os.Getenv("WAGMIOS_DATA_DIR"); dir != "" {
		return dir
	}
	return "/app/data"
}
