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
		if IsPublicPath(r.URL.Path) {
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

// IsPublicPath returns true for paths that don't need authentication.
var PublicPaths = []string{
	"/api/auth/setup",
	"/api/auth/verify",
	"/api/auth/status",
	"/api/ws/activity", // WebSocket — read-only, no sensitive data
	"/health",
}

func IsPublicPath(path string) bool {
	for _, p := range PublicPaths {
		if path == p {
			return true
		}
	}
	return false
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
	id := encodeApprovalID(scope, action, target, keyID, params)

	approval := &PendingApproval{
		ID:        id,
		Scope:     Scope(scope),
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

// GetApproval decodes approval data from the ID (stateless)
func (as *ApprovalStore) GetApproval(id string) *PendingApproval {
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

// Approve decodes the ID, marks it completed, and returns the approval data
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
		return nil, false
	}
	as.completed[id] = &CompletedApproval{
		ID:         id,
		Approved:   true,
		ApprovedAt: time.Now().UTC(),
	}
	delete(as.pending, id)
	return approval, true
}

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
	data["expires"] = time.Now().Add(24 * time.Hour).Format(time.RFC3339)
	jsonBytes, _ := json.Marshal(data)
	return base64.URLEncoding.EncodeToString(jsonBytes)
}

func decodeApprovalID(id string) map[string]string {
	jsonBytes, err := base64.URLEncoding.DecodeString(id)
	if err != nil {
		return nil
	}
	var data map[string]string
	if err := json.Unmarshal(jsonBytes, &data); err != nil {
		return nil
	}
	if exp := data["expires"]; exp != "" {
		if t, err := time.Parse(time.RFC3339, exp); err == nil && time.Now().After(t) {
			return nil
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