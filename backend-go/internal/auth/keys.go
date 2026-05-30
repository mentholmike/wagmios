package auth

import (
	"crypto/rand"
	"crypto/sha256"
	"crypto/subtle"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"time"

	"github.com/google/uuid"
)

// Key scopes
type Scope string

const (
	ScopeContainersRead   Scope = "containers:read"
	ScopeContainersWrite  Scope = "containers:write"
	ScopeContainersDelete Scope = "containers:delete"
	ScopeImagesRead       Scope = "images:read"
	ScopeImagesWrite      Scope = "images:write"
	ScopeTemplatesRead    Scope = "templates:read"
	ScopeTemplatesWrite   Scope = "templates:write"
	ScopeMarketplaceRead  Scope = "marketplace:read"
	ScopeMarketplaceWrite Scope = "marketplace:write"
	ScopeSecretsWrite     Scope = "secrets:write"
	ScopeSystemRead       Scope = "system:read"
	ScopeKeysWrite        Scope = "keys:write" // Can create/list/revoke other keys
)

// Dangerous scopes that require approval even if granted
var DangerousScopes = map[Scope]bool{
	ScopeContainersDelete: true,
	ScopeSecretsWrite:     true,
}

// KeyRole determines whether a key is an admin key or an agent key
type KeyRole string

const (
	RoleAdmin KeyRole = "admin"
	RoleAgent KeyRole = "agent"
)

// KeyMeta stores metadata about an API key (not the key itself)
type KeyMeta struct {
	ID         string    `json:"id"`
	KeyPrefix  string    `json:"key_prefix"` // Last 8 chars for display
	KeyHash    string    `json:"key_hash"`   // SHA256 of full key (for validation)
	Scopes     []Scope   `json:"scopes"`
	CreatedAt  time.Time `json:"created_at"`
	LastUsedAt time.Time `json:"last_used_at"`
	Label      string    `json:"label"`
	Role       KeyRole   `json:"role"` // admin or agent
}

// KeyStore manages API keys — supports multiple keys
type KeyStore struct {
	mu         sync.RWMutex
	dataDir    string
	keysDir    string
	keys       map[string]*KeyMeta // id -> KeyMeta
	setupToken string              // One-time token for first-boot setup
}

// NewKeyStore initializes or loads an existing key store
func NewKeyStore(dataDir string) (*KeyStore, error) {
	keysDir := filepath.Join(dataDir, "keys")
	if err := os.MkdirAll(keysDir, 0700); err != nil {
		return nil, fmt.Errorf("failed to create keys dir: %w", err)
	}

	ks := &KeyStore{
		dataDir: dataDir,
		keysDir: keysDir,
		keys:    make(map[string]*KeyMeta),
	}

	// Load existing keys — first try multi-key format, then migrate from single-key
	if err := ks.loadKeys(); err != nil {
		return nil, fmt.Errorf("failed to load keys: %w", err)
	}

	// Generate a setup token if no key exists yet (first-boot)
	if len(ks.keys) == 0 {
		if err := ks.generateSetupToken(); err != nil {
			return nil, fmt.Errorf("failed to generate setup token: %w", err)
		}
	}

	return ks, nil
}

// loadKeys loads all keys from disk. Migrates from single-key format if needed.
func (ks *KeyStore) loadKeys() error {
	// Try multi-key directory format first
	entries, err := os.ReadDir(ks.keysDir)
	if err != nil {
		return err
	}

	for _, entry := range entries {
		if entry.IsDir() || !strings.HasSuffix(entry.Name(), ".json") {
			continue
		}
		// Skip non-key files
		if entry.Name() == "meta.json" || entry.Name() == "setup-token" {
			continue
		}

		filePath := filepath.Join(ks.keysDir, entry.Name())
		data, err := os.ReadFile(filePath)
		if err != nil {
			log.Printf("Warning: failed to read key file %s: %v", filePath, err)
			continue
		}

		var meta KeyMeta
		if err := json.Unmarshal(data, &meta); err != nil {
			log.Printf("Warning: failed to parse key file %s: %v", filePath, err)
			continue
		}

		ks.keys[meta.ID] = &meta
	}

	// Migrate from single-key meta.json if it exists and no keys loaded yet
	if len(ks.keys) == 0 {
		metaPath := filepath.Join(ks.keysDir, "meta.json")
		if data, err := os.ReadFile(metaPath); err == nil {
			var meta KeyMeta
			if err := json.Unmarshal(data, &meta); err == nil {
				// Assign admin role to the first key (was the only key)
				meta.Role = RoleAdmin
				ks.keys[meta.ID] = &meta

				// Save in new format
				if err := ks.saveKeyToDisk(&meta); err != nil {
					log.Printf("Warning: failed to migrate key to new format: %v", err)
				} else {
					// Remove old meta.json
					os.Remove(metaPath)
					log.Printf("Migrated single key %s to multi-key format", meta.ID)
				}
			}
		}
	}

	return nil
}

// HasKey returns true if at least one key has been set up
func (ks *KeyStore) HasKey() bool {
	ks.mu.RLock()
	defer ks.mu.RUnlock()
	return len(ks.keys) > 0
}

// HasAdminKey returns true if at least one admin key exists
func (ks *KeyStore) HasAdminKey() bool {
	ks.mu.RLock()
	defer ks.mu.RUnlock()
	for _, k := range ks.keys {
		if k.Role == RoleAdmin {
			return true
		}
	}
	return false
}

// IsWizardRequired returns true if first-boot setup is needed
func (ks *KeyStore) IsWizardRequired() bool {
	ks.mu.RLock()
	defer ks.mu.RUnlock()
	return len(ks.keys) == 0
}

// GenerateKey creates a new API key with the given configuration
func (ks *KeyStore) GenerateKey(scopes []Scope, label string, role KeyRole) (string, *KeyMeta, error) {
	ks.mu.Lock()
	defer ks.mu.Unlock()

	return ks.generateKeyLocked(scopes, label, role)
}

// generateKeyLocked creates a key while already holding the lock
func (ks *KeyStore) generateKeyLocked(scopes []Scope, label string, role KeyRole) (string, *KeyMeta, error) {
	// Generate 32 random bytes -> base64url encoded
	raw := make([]byte, 32)
	if _, err := rand.Read(raw); err != nil {
		return "", nil, fmt.Errorf("failed to generate key: %w", err)
	}

	// Encode to base64url (URL-safe base64)
	keyStr := "wag_live_" + base64URLEncode(raw)

	// Hash the full key for storage
	keyHash := hashKey(keyStr)

	// KeyPrefix = last 8 chars for display
	last8 := keyStr
	if len(keyStr) > 8 {
		last8 = keyStr[len(keyStr)-8:]
	}

	meta := &KeyMeta{
		ID:         uuid.New().String(),
		KeyPrefix:  last8,
		KeyHash:    keyHash,
		Scopes:     scopes,
		CreatedAt:  time.Now().UTC(),
		LastUsedAt: time.Now().UTC(),
		Label:      label,
		Role:       role,
	}

	if err := ks.saveKeyToDisk(meta); err != nil {
		return "", nil, fmt.Errorf("failed to save key: %w", err)
	}

	ks.keys[meta.ID] = meta
	return keyStr, meta, nil
}

// ValidateKey checks an API key and returns its metadata if valid
func (ks *KeyStore) ValidateKey(key string) (*KeyMeta, error) {
	ks.mu.Lock()
	defer ks.mu.Unlock()

	if len(ks.keys) == 0 {
		return nil, fmt.Errorf("no key configured")
	}

	// Check prefix format
	if !strings.HasPrefix(key, "wag_live_") {
		return nil, fmt.Errorf("invalid key format")
	}

	// Hash the provided key and compare against all stored keys
	hash := hashKey(key)
	for _, meta := range ks.keys {
		if subtle.ConstantTimeCompare([]byte(hash), []byte(meta.KeyHash)) == 1 {
			// Update last used
			meta.LastUsedAt = time.Now().UTC()
			ks.saveKeyToDisk(meta)
			return meta, nil
		}
	}

	return nil, fmt.Errorf("invalid key")
}

// GetKeyByID returns a key by ID (for admin key listing)
func (ks *KeyStore) GetKeyByID(id string) *KeyMeta {
	ks.mu.RLock()
	defer ks.mu.RUnlock()
	if m, ok := ks.keys[id]; ok {
		m := *m // copy
		return &m
	}
	return nil
}

// ListKeys returns metadata for all keys (without hashes)
func (ks *KeyStore) ListKeys() []KeyMeta {
	ks.mu.RLock()
	defer ks.mu.RUnlock()

	result := make([]KeyMeta, 0, len(ks.keys))
	for _, m := range ks.keys {
		result = append(result, *m)
	}
	return result
}

// RevokeKey deletes a key by ID. Returns error if it's the last admin key.
func (ks *KeyStore) RevokeKey(id string) error {
	ks.mu.Lock()
	defer ks.mu.Unlock()

	meta, ok := ks.keys[id]
	if !ok {
		return fmt.Errorf("key not found")
	}

	// Count admin keys
	adminCount := 0
	for _, k := range ks.keys {
		if k.Role == RoleAdmin {
			adminCount++
		}
	}

	// Don't allow deleting the last admin key
	if meta.Role == RoleAdmin && adminCount <= 1 {
		return fmt.Errorf("cannot revoke the last admin key — at least one admin must remain")
	}

	// Remove from memory
	delete(ks.keys, id)

	// Remove from disk
	keyFile := filepath.Join(ks.keysDir, id+".json")
	os.Remove(keyFile)

	log.Printf("Revoked key %s (label=%s, role=%s)", id, meta.Label, meta.Role)
	return nil
}

// GetMeta returns the first admin key metadata (backward compat)
func (ks *KeyStore) GetMeta() *KeyMeta {
	ks.mu.RLock()
	defer ks.mu.RUnlock()
	// Return admin key if available, otherwise first key
	for _, m := range ks.keys {
		if m.Role == RoleAdmin {
			cp := *m
			return &cp
		}
	}
	// Fallback: return any key
	for _, m := range ks.keys {
		cp := *m
		return &cp
	}
	return nil
}

// UpdateScopes updates the first admin key's scopes (backward compat)
func (ks *KeyStore) UpdateScopes(scopes []Scope) error {
	ks.mu.Lock()
	defer ks.mu.Unlock()

	// Find admin key
	for _, m := range ks.keys {
		if m.Role == RoleAdmin {
			m.Scopes = scopes
			m.LastUsedAt = time.Now().UTC()
			return ks.saveKeyToDisk(m)
		}
	}
	return fmt.Errorf("no admin key to update")
}

// UpdateKeyScopes updates a specific key's scopes
func (ks *KeyStore) UpdateKeyScopes(id string, scopes []Scope) error {
	ks.mu.Lock()
	defer ks.mu.Unlock()

	meta, ok := ks.keys[id]
	if !ok {
		return fmt.Errorf("key not found")
	}

	meta.Scopes = scopes
	meta.LastUsedAt = time.Now().UTC()
	return ks.saveKeyToDisk(meta)
}

// HasScope checks if the current key has a specific scope
func (ks *KeyStore) HasScope(scope Scope) bool {
	ks.mu.RLock()
	defer ks.mu.RUnlock()
	// Check admin key first, then any key
	for _, m := range ks.keys {
		if m.Role == RoleAdmin {
			for _, s := range m.Scopes {
				if s == scope || s == Scope("*") {
					return true
				}
			}
		}
	}
	return false
}

// RequiresApproval checks if an action requires human approval
func (ks *KeyStore) RequiresApproval(scope Scope) bool {
	return DangerousScopes[scope]
}

// KeyStoreHasScope checks if a key meta has a specific scope
func KeyStoreHasScope(meta *KeyMeta, scope Scope) bool {
	if meta == nil {
		return false
	}
	for _, s := range meta.Scopes {
		if s == scope || s == Scope("*") {
			return true
		}
	}
	return false
}

// ---- Setup token management ----

// generateSetupToken creates a one-time setup token and persists it to disk.
func (ks *KeyStore) generateSetupToken() error {
	raw := make([]byte, 32)
	if _, err := rand.Read(raw); err != nil {
		return fmt.Errorf("failed to generate setup token: %w", err)
	}
	token := "wag_setup_" + base64URLEncode(raw)
	ks.setupToken = token

	// Persist the token so it survives restarts
	tokenPath := filepath.Join(ks.keysDir, "setup-token")
	if err := os.WriteFile(tokenPath, []byte(token), 0600); err != nil {
		return fmt.Errorf("failed to persist setup token: %w", err)
	}
	log.Printf("Setup token generated. Use this token to create the first API key.")
	return nil
}

// loadSetupToken loads an existing setup token from disk.
func (ks *KeyStore) loadSetupToken() error {
	tokenPath := filepath.Join(ks.keysDir, "setup-token")
	data, err := os.ReadFile(tokenPath)
	if err != nil {
		return err
	}
	ks.setupToken = strings.TrimSpace(string(data))
	return nil
}

// ValidateAndConsumeSetupToken checks if the provided token matches the stored
// setup token, and if so, consumes it.
func (ks *KeyStore) ValidateAndConsumeSetupToken(token string) error {
	// If key already exists, no setup token needed
	if ks.HasKey() {
		return nil
	}

	// Try loading token if not in memory
	if ks.setupToken == "" {
		if err := ks.loadSetupToken(); err != nil {
			return fmt.Errorf("no setup token found — restart with WAGMIOS_RESET_KEY=1 to generate one")
		}
	}

	if token != ks.setupToken {
		return fmt.Errorf("invalid setup token")
	}

	// Consume the token — delete the file so it can't be reused
	tokenPath := filepath.Join(ks.keysDir, "setup-token")
	os.Remove(tokenPath)
	ks.setupToken = ""

	return nil
}

// GetSetupToken returns the current setup token (for display in logs/status).
func (ks *KeyStore) GetSetupToken() string {
	return ks.setupToken
}

// ---- Disk persistence ----

// saveKeyToDisk persists a single key to its own file
func (ks *KeyStore) saveKeyToDisk(meta *KeyMeta) error {
	filePath := filepath.Join(ks.keysDir, meta.ID+".json")
	data, err := json.MarshalIndent(meta, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(filePath, data, 0600)
}

// ---- Private helpers ----

func hashKey(key string) string {
	h := sha256.Sum256([]byte(key))
	return hex.EncodeToString(h[:])
}

func base64URLEncode(data []byte) string {
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
	result := make([]byte, (len(data)+2)/3*4)
	for i, j := 0, 0; i < len(data); i, j = i+3, j+4 {
		var val uint32
		switch len(data) - i {
		case 1:
			val = uint32(data[i]) << 16
			result[j] = chars[val>>18&63]
			result[j+1] = chars[val>>12&63]
			result[j+2] = '='
			result[j+3] = '='
		case 2:
			val = uint32(data[i])<<16 | uint32(data[i+1])<<8
			result[j] = chars[val>>18&63]
			result[j+1] = chars[val>>12&63]
			result[j+2] = chars[val>>6&63]
			result[j+3] = '='
		default:
			val = uint32(data[i])<<16 | uint32(data[i+1])<<8 | uint32(data[i+2])
			result[j] = chars[val>>18&63]
			result[j+1] = chars[val>>12&63]
			result[j+2] = chars[val>>6&63]
			result[j+3] = chars[val&63]
		}
	}
	return string(result)
}
