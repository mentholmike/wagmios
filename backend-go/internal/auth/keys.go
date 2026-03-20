package auth

import (
	"crypto/rand"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
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
)

// Dangerous scopes that require approval even if granted
var DangerousScopes = map[Scope]bool{
	ScopeContainersDelete: true,
	ScopeSecretsWrite:    true,
}

// KeyMeta stores metadata about an API key (not the key itself)
type KeyMeta struct {
	ID         string    `json:"id"`
	KeyPrefix  string    `json:"key_prefix"`  // Last 8 chars for display
	KeyHash    string    `json:"key_hash"`    // SHA256 of full key (for validation)
	Scopes     []Scope   `json:"scopes"`
	CreatedAt  time.Time `json:"created_at"`
	LastUsedAt time.Time `json:"last_used_at"`
	Label      string    `json:"label"`
}

// KeyStore manages API keys
type KeyStore struct {
	mu          sync.RWMutex
	dataDir     string
	metaPath    string
	currentMeta *KeyMeta
}

// NewKeyStore initializes or loads an existing key store
func NewKeyStore(dataDir string) (*KeyStore, error) {
	keysDir := filepath.Join(dataDir, "keys")
	if err := os.MkdirAll(keysDir, 0700); err != nil {
		return nil, fmt.Errorf("failed to create keys dir: %w", err)
	}

	ks := &KeyStore{
		dataDir:  dataDir,
		metaPath: filepath.Join(keysDir, "meta.json"),
	}

	// Load existing key if present
	if _, err := os.Stat(ks.metaPath); err == nil {
		if err := ks.loadMeta(); err != nil {
			return nil, fmt.Errorf("failed to load key meta: %w", err)
		}
	}

	return ks, nil
}

// HasKey returns true if a key has been set up
func (ks *KeyStore) HasKey() bool {
	ks.mu.RLock()
	defer ks.mu.RUnlock()
	return ks.currentMeta != nil
}

// IsWizardRequired returns true if first-boot setup is needed
func (ks *KeyStore) IsWizardRequired() bool {
	ks.mu.RLock()
	defer ks.mu.RUnlock()
	return ks.currentMeta == nil
}

// GenerateKey creates a new API key with the given configuration
func (ks *KeyStore) GenerateKey(scopes []Scope, label string) (string, *KeyMeta, error) {
	ks.mu.Lock()
	defer ks.mu.Unlock()

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
	}

	if err := ks.saveMeta(meta); err != nil {
		return "", nil, fmt.Errorf("failed to save meta: %w", err)
	}

	ks.currentMeta = meta
	return keyStr, meta, nil
}

// ValidateKey checks an API key and returns its metadata if valid
func (ks *KeyStore) ValidateKey(key string) (*KeyMeta, error) {
	ks.mu.Lock()
	defer ks.mu.Unlock()

	if ks.currentMeta == nil {
		return nil, fmt.Errorf("no key configured")
	}

	// Check prefix format
	if !strings.HasPrefix(key, "wag_live_") {
		return nil, fmt.Errorf("invalid key format")
	}

	// Compare hash
	hash := hashKey(key)
	if hash != ks.currentMeta.KeyHash {
		return nil, fmt.Errorf("invalid key")
	}

	// Update last used
	ks.currentMeta.LastUsedAt = time.Now().UTC()
	ks.saveMeta(ks.currentMeta)

	return ks.currentMeta, nil
}

// GetMeta returns current key metadata (no sensitive data)
func (ks *KeyStore) GetMeta() *KeyMeta {
	ks.mu.RLock()
	defer ks.mu.RUnlock()
	if ks.currentMeta == nil {
		return nil
	}
	m := *ks.currentMeta
	return &m
}

// UpdateScopes updates the key's scopes
func (ks *KeyStore) UpdateScopes(scopes []Scope) error {
	ks.mu.Lock()
	defer ks.mu.Unlock()
	if ks.currentMeta == nil {
		return fmt.Errorf("no key to update")
	}
	ks.currentMeta.Scopes = scopes
	ks.currentMeta.LastUsedAt = time.Now().UTC()
	return ks.saveMeta(ks.currentMeta)
}

// HasScope checks if the current key has a specific scope
func (ks *KeyStore) HasScope(scope Scope) bool {
	ks.mu.RLock()
	defer ks.mu.RUnlock()
	if ks.currentMeta == nil {
		return false
	}
	for _, s := range ks.currentMeta.Scopes {
		if s == scope || s == Scope("*") {
			return true
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

// ---- Private helpers ----

func (ks *KeyStore) saveMeta(meta *KeyMeta) error {
	data, err := json.MarshalIndent(meta, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(ks.metaPath, data, 0600)
}

func (ks *KeyStore) loadMeta() error {
	data, err := os.ReadFile(ks.metaPath)
	if err != nil {
		return err
	}
	var meta KeyMeta
	if err := json.Unmarshal(data, &meta); err != nil {
		return err
	}
	ks.currentMeta = &meta
	return nil
}

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
