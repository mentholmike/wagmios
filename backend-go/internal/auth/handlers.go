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
	Scopes     []Scope `json:"scopes"`
	Label      string  `json:"label"`
	SetupToken string  `json:"setup_token"` // One-time token from first-boot wizard
}

// SetupResponse is returned after key generation
type SetupResponse struct {
	Key     string        `json:"key"`
	KeyMeta PublicKeyMeta `json:"meta"`
}

// CreateKeyRequest is the payload for creating a new key (admin only)
type CreateKeyRequest struct {
	Label  string  `json:"label"`
	Scopes []Scope `json:"scopes"`
	Role   KeyRole `json:"role"` // "admin" or "agent", defaults to "agent"
}

// CreateKeyResponse is returned after creating a new key
type CreateKeyResponse struct {
	Key     string        `json:"key"` // Full key — shown only once
	KeyMeta PublicKeyMeta `json:"meta"`
}

// PublicKeyMeta is safe metadata for API responses. It never includes KeyHash.
type PublicKeyMeta struct {
	ID         string  `json:"id"`
	KeyPrefix  string  `json:"key_prefix"`
	Scopes     []Scope `json:"scopes"`
	CreatedAt  string  `json:"created_at"`
	LastUsedAt string  `json:"last_used_at"`
	Label      string  `json:"label"`
	Role       KeyRole `json:"role"`
}

func publicMeta(m *KeyMeta) PublicKeyMeta {
	if m == nil {
		return PublicKeyMeta{}
	}
	return PublicKeyMeta{
		ID:         m.ID,
		KeyPrefix:  m.KeyPrefix + "...",
		Scopes:     m.Scopes,
		CreatedAt:  m.CreatedAt.Format("2006-01-02T15:04:05Z07:00"),
		LastUsedAt: m.LastUsedAt.Format("2006-01-02T15:04:05Z07:00"),
		Label:      m.Label,
		Role:       m.Role,
	}
}

// RegisterAuthHandlers registers auth-related routes
func RegisterAuthHandlers(r *mux.Router, ks *KeyStore) {
	// Public endpoints (no auth required)
	r.HandleFunc("/api/auth/setup", handleSetup(ks)).Methods("POST", "OPTIONS")
	r.HandleFunc("/api/auth/verify", handleVerify(ks)).Methods("POST", "OPTIONS")
	r.HandleFunc("/api/auth/status", handleStatus(ks)).Methods("GET", "OPTIONS")

	// Key management endpoints — admin + keys:write required.
	r.HandleFunc("/api/keys", requireAuthAndScope(ks, ScopeKeysWrite, handleListKeys(ks))).Methods("GET", "OPTIONS")
	r.HandleFunc("/api/keys", requireAuthAndScope(ks, ScopeKeysWrite, handleCreateKey(ks))).Methods("POST", "OPTIONS")
	r.HandleFunc("/api/keys/{id}", requireAuthAndScope(ks, ScopeKeysWrite, handleRevokeKey(ks))).Methods("DELETE", "OPTIONS")

	// Settings endpoints — require auth + self-scope-escalation check
	r.HandleFunc("/api/settings", requireAuth(ks, handleGetSettings(ks))).Methods("GET", "OPTIONS")
	r.HandleFunc("/api/settings/scopes", requireAuth(ks, handleUpdateScopes(ks))).Methods("POST", "OPTIONS")
}

// handleSetup creates the first admin API key (first boot only)
func handleSetup(ks *KeyStore) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		// Check if already set up
		if ks.HasKey() {
			writeError(w, http.StatusConflict, "ALREADY_SETUP", "API key already exists. Setup is one-time only — manage keys in Settings.")
			return
		}

		var req SetupRequest
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			writeError(w, http.StatusBadRequest, "INVALID_REQUEST", "Invalid JSON payload")
			return
		}

		// Validate setup token (one-time use)
		if err := ks.ValidateAndConsumeSetupToken(req.SetupToken); err != nil {
			writeError(w, http.StatusForbidden, "INVALID_SETUP_TOKEN", "Valid setup token required. Generate one by restarting with WAGMIOS_RESET_KEY=1")
			return
		}

		// Validate scopes
		if len(req.Scopes) == 0 {
			writeError(w, http.StatusBadRequest, "SCOPES_REQUIRED", "At least one scope is required")
			return
		}

		// First key is always admin
		label := req.Label
		if label == "" {
			label = "admin"
		}

		key, meta, err := ks.GenerateKey(req.Scopes, label, RoleAdmin)
		if err != nil {
			writeError(w, http.StatusInternalServerError, "KEY_GENERATION_FAILED", err.Error())
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{
			"success": true,
			"data": SetupResponse{
				Key:     key,
				KeyMeta: publicMeta(meta),
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
				"role":      meta.Role,
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
		keys := ks.ListKeys()

		status := map[string]interface{}{
			"wizard_required": len(keys) == 0,
			"has_key":         ks.HasKey(),
			"setup_required":  len(keys) == 0,
			"key_count":       len(keys),
		}

		if len(keys) == 0 {
			status["setup_token_available"] = ks.GetSetupToken() != ""
		}

		json.NewEncoder(w).Encode(map[string]interface{}{
			"success": true,
			"data":    status,
			"error":   nil,
		})
	}
}

// handleListKeys returns all keys (admin only)
func handleListKeys(ks *KeyStore) func(w http.ResponseWriter, r *http.Request, caller *KeyMeta) {
	return func(w http.ResponseWriter, r *http.Request, caller *KeyMeta) {
		if caller.Role != RoleAdmin {
			writeError(w, http.StatusForbidden, "ADMIN_REQUIRED", "Only admin keys can list keys")
			return
		}

		keys := ks.ListKeys()

		// Sanitize — don't expose full hashes
		sanitized := make([]map[string]interface{}, 0, len(keys))
		for _, k := range keys {
			sanitized = append(sanitized, map[string]interface{}{
				"id":           k.ID,
				"key_prefix":   k.KeyPrefix + "...",
				"label":        k.Label,
				"role":         k.Role,
				"scopes":       k.Scopes,
				"created_at":   k.CreatedAt,
				"last_used_at": k.LastUsedAt,
			})
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{
			"success": true,
			"data":    sanitized,
			"error":   nil,
		})
	}
}

// handleCreateKey creates a new key with scopes that are a subset of the caller's scopes
func handleCreateKey(ks *KeyStore) func(w http.ResponseWriter, r *http.Request, caller *KeyMeta) {
	return func(w http.ResponseWriter, r *http.Request, caller *KeyMeta) {
		// Only admin keys can create new keys
		if caller.Role != RoleAdmin {
			writeError(w, http.StatusForbidden, "ADMIN_REQUIRED", "Only admin keys can create new keys")
			return
		}

		var req CreateKeyRequest
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			writeError(w, http.StatusBadRequest, "INVALID_REQUEST", "Invalid JSON payload")
			return
		}

		// Default role to agent
		if req.Role == "" {
			req.Role = RoleAgent
		}

		// Only admin and agent roles are valid
		if req.Role != RoleAdmin && req.Role != RoleAgent {
			writeError(w, http.StatusBadRequest, "INVALID_ROLE", "Role must be 'admin' or 'agent'")
			return
		}

		// Validate scopes
		if len(req.Scopes) == 0 {
			writeError(w, http.StatusBadRequest, "SCOPES_REQUIRED", "At least one scope is required")
			return
		}

		// Scope escalation check: new key's scopes must be grantable by the caller.
		for _, s := range req.Scopes {
			if !canGrantScope(caller, s) {
				writeError(w, http.StatusForbidden, "SCOPE_ESCALATION", "Cannot grant scope "+string(s)+" — caller does not have this scope")
				return
			}
		}

		// Default label
		if req.Label == "" {
			req.Label = string(req.Role)
		}

		key, meta, err := ks.GenerateKey(req.Scopes, req.Label, req.Role)
		if err != nil {
			writeError(w, http.StatusInternalServerError, "KEY_GENERATION_FAILED", err.Error())
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{
			"success": true,
			"data": CreateKeyResponse{
				Key:     key,
				KeyMeta: publicMeta(meta),
			},
			"error": nil,
		})
	}
}

// handleRevokeKey deletes a key by ID (admin only)
func handleRevokeKey(ks *KeyStore) func(w http.ResponseWriter, r *http.Request, caller *KeyMeta) {
	return func(w http.ResponseWriter, r *http.Request, caller *KeyMeta) {
		// Only admin keys can revoke keys
		if caller.Role != RoleAdmin {
			writeError(w, http.StatusForbidden, "ADMIN_REQUIRED", "Only admin keys can revoke keys")
			return
		}

		vars := mux.Vars(r)
		id := vars["id"]

		// Prevent self-revocation
		if id == caller.ID {
			writeError(w, http.StatusForbidden, "CANNOT_REVOKE_SELF", "You cannot revoke your own key. Use a different admin key or delete via server CLI.")
			return
		}

		if err := ks.RevokeKey(id); err != nil {
			writeError(w, http.StatusBadRequest, "REVOKE_FAILED", err.Error())
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{
			"success": true,
			"data":    map[string]string{"status": "revoked", "id": id},
			"error":   nil,
		})
	}
}

// handleGetSettings returns current settings (auth required)
func handleGetSettings(ks *KeyStore) func(w http.ResponseWriter, r *http.Request, meta *KeyMeta) {
	return func(w http.ResponseWriter, r *http.Request, meta *KeyMeta) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{
			"success": true,
			"data":    publicMeta(meta),
			"error":   nil,
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

// requireAuthAndScope wraps a handler to require authentication AND a specific scope
func requireAuthAndScope(ks *KeyStore, scope Scope, handler func(w http.ResponseWriter, r *http.Request, meta *KeyMeta)) http.HandlerFunc {
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
		if !KeyStoreHasScope(meta, scope) {
			writeError(w, http.StatusForbidden, "SCOPE_REQUIRED", string(scope)+" scope required")
			return
		}
		handler(w, r, meta)
	}
}

// handleUpdateScopes updates the key's scopes. Agents can only reduce their own scopes.
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

		// Self-scope-escalation check: new scopes must be grantable by current scopes.
		for _, s := range req.Scopes {
			if !canGrantScope(meta, s) {
				writeError(w, http.StatusForbidden, "SCOPE_ESCALATION", "Agents cannot add scopes beyond what the key currently has")
				return
			}
		}

		if err := ks.UpdateKeyScopes(meta.ID, req.Scopes); err != nil {
			writeError(w, http.StatusInternalServerError, "UPDATE_FAILED", err.Error())
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{
			"success": true,
			"data":    publicMeta(ks.GetKeyByID(meta.ID)),
			"error":   nil,
		})
	}
}

func canGrantScope(caller *KeyMeta, requested Scope) bool {
	if requested == Scope("*") {
		return KeyStoreHasScope(caller, Scope("*"))
	}
	return KeyStoreHasScope(caller, Scope("*")) || KeyStoreHasScope(caller, requested)
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
