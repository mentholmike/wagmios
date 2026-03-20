package auth

import (
	"context"
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"net/http"
	"sync"
	"time"
)

// Context keys
type ContextKey string

const (
	ContextKeyMeta ContextKey = "auth_key_meta"
)

// WithKeyMeta returns a new context with the key metadata
func WithKeyMeta(ctx context.Context, meta *KeyMeta) context.Context {
	return context.WithValue(ctx, ContextKeyMeta, meta)
}

// GetMetaFromContext extracts key metadata from a context
func GetMetaFromContext(ctx context.Context) *KeyMeta {
	meta, _ := ctx.Value(ContextKeyMeta).(*KeyMeta)
	return meta
}

// AuthHandler is a middleware that authenticates requests
type AuthHandler struct {
	keyStore *KeyStore
}

func NewAuthHandler(ks *KeyStore) *AuthHandler {
	return &AuthHandler{keyStore: ks}
}

// Middleware returns an HTTP middleware for authentication
func (h *AuthHandler) Middleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Skip auth for public paths
		if isPublicPath(r.URL.Path) {
			next.ServeHTTP(w, r)
			return
		}

		// If no key configured, reject authenticated requests
		if !h.keyStore.HasKey() {
			http.Error(w, `{"success":false,"error":{"code":"SETUP_REQUIRED","message":"Run POST /api/auth/setup first"}}`, http.StatusUnauthorized)
			return
		}

		// Extract API key
		apiKey := r.Header.Get("X-API-Key")
		if apiKey == "" {
			http.Error(w, `{"success":false,"error":{"code":"API_KEY_REQUIRED","message":"X-API-Key header required"}}`, http.StatusUnauthorized)
			return
		}

		// Validate key
		meta, err := h.keyStore.ValidateKey(apiKey)
		if err != nil {
			http.Error(w, `{"success":false,"error":{"code":"INVALID_KEY","message":"Invalid or expired API key"}}`, http.StatusUnauthorized)
			return
		}

		// Inject into context and continue
		ctx := WithKeyMeta(r.Context(), meta)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

// isPublicPath returns true for paths that don't need authentication
func isPublicPath(path string) bool {
	public := []string{
		"/api/auth/setup",
		"/api/auth/verify",
		"/api/auth/status",
		"/api/ws/activity",
		"/api/system/info",
		"/health",
		"/",
	}
	for _, p := range public {
		if path == p || path == p+"/*" {
			return true
		}
	}
	return false
}

// AuthRequired is a middleware that requires authentication
func AuthRequired(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		meta := GetMetaFromContext(r.Context())
		if meta == nil {
			http.Error(w, `{"success":false,"error":{"code":"UNAUTHORIZED","message":"Authentication required"}}`, http.StatusUnauthorized)
			return
		}
		next.ServeHTTP(w, r)
	})
}

// RateLimiter implements a per-key rate limiter
type RateLimiter struct {
	mu       sync.Mutex
	requests map[string][]time.Time
	limit    int
	window   time.Duration
}

// NewRateLimiter creates a new rate limiter
func NewRateLimiter(limit int, window time.Duration) *RateLimiter {
	return &RateLimiter{
		requests: make(map[string][]time.Time),
		limit:    limit,
		window:   window,
	}
}

// Allow checks if a request is allowed under the rate limit
func (rl *RateLimiter) Allow(key string) bool {
	rl.mu.Lock()
	defer rl.mu.Unlock()

	now := time.Now()
	cutoff := now.Add(-rl.window)

	var valid []time.Time
	for _, t := range rl.requests[key] {
		if t.After(cutoff) {
			valid = append(valid, t)
		}
	}

	if len(valid) >= rl.limit {
		rl.requests[key] = valid
		return false
	}

	valid = append(valid, now)
	rl.requests[key] = valid
	return true
}

// ApprovalStore manages human approvals for dangerous actions
type ApprovalStore struct {
	mu        sync.RWMutex
	pending   map[string]*PendingApproval
	completed map[string]*CompletedApproval
}

type PendingApproval struct {
	ID        string
	Scope     Scope
	Action    string
	Target    string
	KeyID     string
	CreatedAt time.Time
	Token     string
	// Params stores action-specific data needed to execute on approval
	// e.g. for "delete": {"container_id": "..."}
	Params map[string]string
}

type CompletedApproval struct {
	ID         string
	Approved   bool
	ApprovedAt time.Time
	ApprovedBy string
}

// Global approval store instance
var globalApprovalStore = &ApprovalStore{
	pending:   make(map[string]*PendingApproval),
	completed: make(map[string]*CompletedApproval),
}

// ApprovalStoreInstance returns the global approval store
func ApprovalStoreInstance() *ApprovalStore {
	return globalApprovalStore
}

// RequestApproval creates a new pending approval request
func (as *ApprovalStore) RequestApproval(scope Scope, action, target, keyID string, params map[string]string) *PendingApproval {
	as.mu.Lock()
	defer as.mu.Unlock()

	token := generateToken()
	// Encode all params into the ID so approval survives restarts (stateless)
	id := encodeApprovalID(scope, action, target, keyID, params)

	approval := &PendingApproval{
		ID:        id,
		Scope:     scope,
		Action:    action,
		Target:    target,
		KeyID:     keyID,
		CreatedAt: time.Now().UTC(),
		Token:     token,
		Params:    params,
	}

	as.pending[id] = approval
	return approval
}

// GetApproval decodes approval data from the ID (stateless - params are encoded in the ID)
func (as *ApprovalStore) GetApproval(id string) *PendingApproval {
	// Decode params from ID (stateless)
	params := decodeApprovalID(id)
	if params == nil {
		return nil
	}
	return &PendingApproval{
		ID:     id,
		Scope:  Scope(params["scope"]),
		Action: params["action"],
		Target: params["target"],
		KeyID:  params["key_id"],
		Params: params,
	}
}

// Approve decodes the ID, marks it completed, and returns the approval data for execution
func (as *ApprovalStore) Approve(id string) (*PendingApproval, bool) {
	params := decodeApprovalID(id)
	if params == nil {
		return nil, false
	}

	approval := &PendingApproval{
		ID:     id,
		Scope:  Scope(params["scope"]),
		Action: params["action"],
		Target: params["target"],
		KeyID:  params["key_id"],
		Params: params,
	}

	as.mu.Lock()
	defer as.mu.Unlock()
	if _, exists := as.completed[id]; exists {
		return nil, false // already approved
	}
	as.completed[id] = &CompletedApproval{
		ID:         id,
		Approved:   true,
		ApprovedAt: time.Now().UTC(),
	}
	delete(as.pending, id) // remove from pending so it stops showing up
	return approval, true
}

// encodeApprovalID creates a stateless approval ID containing all params
func encodeApprovalID(scope Scope, action, target, keyID string, params map[string]string) string {
	data := map[string]string{
		"scope":   string(scope),
		"action":  action,
		"target":  target,
		"key_id":  keyID,
	}
	for k, v := range params {
		data[k] = v
	}
	// Include expiry (24 hours from now)
	data["expires"] = time.Now().Add(24 * time.Hour).Format(time.RFC3339)
	jsonBytes, _ := json.Marshal(data)
	return base64.URLEncoding.EncodeToString(jsonBytes)
}

// decodeApprovalID extracts params from a stateless approval ID
func decodeApprovalID(id string) map[string]string {
	jsonBytes, err := base64.URLEncoding.DecodeString(id)
	if err != nil {
		return nil
	}
	var data map[string]string
	if err := json.Unmarshal(jsonBytes, &data); err != nil {
		return nil
	}
	// Check expiry
	if exp := data["expires"]; exp != "" {
		if t, err := time.Parse(time.RFC3339, exp); err == nil && time.Now().After(t) {
			return nil // expired
		}
	}
	return data
}

// Deny marks an approval as denied
func (as *ApprovalStore) Deny(id string) {
	as.mu.Lock()
	defer as.mu.Unlock()
	delete(as.pending, id)
}

func generateToken() string {
	b := make([]byte, 16)
	rand.Read(b)
	return base64URLEncode(b)
}
