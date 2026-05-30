package marketplace

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
	"time"

	"gopkg.in/yaml.v3"
)

// Config holds marketplace settings
type Config struct {
	ManifestURL string // e.g. https://raw.githubusercontent.com/mentholmike/marketplace/main/manifest.json
	AppsDir     string // local cache dir for app templates
	HTTPClient  *http.Client
}

// AppManifest represents an app entry in manifest.json
type AppManifest struct {
	ID          string  `json:"id"`
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Category    string  `json:"category"`
	Logo        string  `json:"logo"`
	DefaultPort int     `json:"defaultPort"`
	Verified    bool    `json:"verified"`
	Popularity  float64 `json:"popularity"`
}

// Manifest is the full marketplace manifest
type Manifest struct {
	Version string        `json:"version"`
	Updated string        `json:"updated"`
	Apps    []AppManifest `json:"apps"`
}

// AppTemplate is the full compose template for an app
type AppTemplate struct {
	ID          string   `json:"id"`
	Name        string   `json:"name"`
	Category    string   `json:"category"`
	Description string   `json:"description"`
	Image       string   `json:"image"`
	Ports       []int    `json:"ports"`
	Environment []EnvVar `json:"environment"`
	Volumes     []Volume `json:"volumes"`
	RawMarkdown string   `json:"-"` // original markdown
}

// EnvVar describes an environment variable
type EnvVar struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Required    bool   `json:"required"`
	Default     string `json:"default,omitempty"`
	Value       string `json:"value,omitempty"`
}

// Volume describes a volume mount
type Volume struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Required    bool   `json:"required"`
	Default     string `json:"default,omitempty"`
}

// InstallRequest is what the agent sends to install an app
type InstallRequest struct {
	AppID       string            `json:"app_id"`
	CustomName  string            `json:"custom_name,omitempty"`
	Environment map[string]string `json:"environment,omitempty"`
	Volumes     map[string]string `json:"volumes,omitempty"`
	Ports       map[string]int    `json:"ports,omitempty"`
}

// DefaultClient is the shared marketplace client
var DefaultClient *Client

// Client wraps marketplace operations
type Client struct {
	config Config
}

// Init initializes the marketplace client
func Init(manifestURL, appsDir string) error {
	DefaultClient = &Client{
		config: Config{
			ManifestURL: manifestURL,
			AppsDir:     appsDir,
			HTTPClient: &http.Client{
				Timeout: 30 * time.Second,
			},
		},
	}

	// Ensure cache dir exists
	if err := os.MkdirAll(appsDir, 0755); err != nil {
		return fmt.Errorf("failed to create marketplace cache dir: %w", err)
	}

	return nil
}

// FetchManifest fetches the marketplace manifest
func (c *Client) FetchManifest() (*Manifest, error) {
	req, err := http.NewRequest("GET", c.config.ManifestURL, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("User-Agent", "Wagmios-Marketplace/1.0")

	resp, err := c.config.HTTPClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch manifest: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("manifest fetch failed: status %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var manifest Manifest
	if err := json.Unmarshal(body, &manifest); err != nil {
		return nil, fmt.Errorf("failed to parse manifest: %w", err)
	}

	return &manifest, nil
}

// GetManifest returns the cached or fresh manifest
func GetManifest() (*Manifest, error) {
	if DefaultClient == nil {
		return nil, fmt.Errorf("marketplace not initialized")
	}
	return DefaultClient.FetchManifest()
}

// FetchAppTemplate fetches a single app's markdown template
func (c *Client) FetchAppTemplate(appID string) (*AppTemplate, error) {
	// Construct the raw URL for the app markdown
	// manifest URL: https://raw.githubusercontent.com/mentholmike/marketplace/main/manifest.json
	// app URL: https://raw.githubusercontent.com/mentholmike/marketplace/main/apps/{appID}.md
	manifestBase := strings.TrimSuffix(c.config.ManifestURL, "/manifest.json")
	appURL := fmt.Sprintf("%s/apps/%s.md", manifestBase, appID)

	req, err := http.NewRequest("GET", appURL, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("User-Agent", "Wagmios-Marketplace/1.0")

	resp, err := c.config.HTTPClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch app template: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode == http.StatusNotFound {
		return nil, fmt.Errorf("app %q not found", appID)
	}
	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("app template fetch failed: status %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	return ParseAppMarkdown(string(body))
}

// GetAppTemplate returns a single app template
func GetAppTemplate(appID string) (*AppTemplate, error) {
	if DefaultClient == nil {
		return nil, fmt.Errorf("marketplace not initialized")
	}
	return DefaultClient.FetchAppTemplate(appID)
}

// GetAppByID finds an app in the manifest by ID
func GetAppByID(manifest *Manifest, appID string) *AppManifest {
	for i := range manifest.Apps {
		if manifest.Apps[i].ID == appID {
			return &manifest.Apps[i]
		}
	}
	return nil
}

// frontmatterYAML maps directly to our AppTemplate fields
type frontmatterYAML struct {
	ID          string       `yaml:"id"`
	Name        string       `yaml:"name"`
	Category    string       `yaml:"category"`
	Description string       `yaml:"description"`
	Image       string       `yaml:"image"`
	Ports       []int        `yaml:"ports"`
	Environment []envVarYAML `yaml:"environment"`
	Volumes     []volumeYAML `yaml:"volumes"`
}

type envVarYAML struct {
	Name        string `yaml:"name"`
	Description string `yaml:"description"`
	Required    bool   `yaml:"required"`
	Default     string `yaml:"default"`
}

type volumeYAML struct {
	Name        string `yaml:"name"`
	Description string `yaml:"description"`
	Required    bool   `yaml:"required"`
	Default     string `yaml:"default"`
}

// ParseAppMarkdown parses the frontmatter + markdown into an AppTemplate
func ParseAppMarkdown(markdown string) (*AppTemplate, error) {
	if !strings.HasPrefix(markdown, "---") {
		return nil, fmt.Errorf("invalid app template: missing frontmatter")
	}

	frontmatterEnd := strings.Index(markdown[2:], "---")
	if frontmatterEnd < 0 {
		return nil, fmt.Errorf("invalid app template: unclosed frontmatter")
	}
	frontmatterEnd += 2

	frontmatter := markdown[3:frontmatterEnd]
	content := strings.TrimSpace(markdown[frontmatterEnd+3:])

	var fm frontmatterYAML
	if err := yaml.Unmarshal([]byte(frontmatter), &fm); err != nil {
		return nil, fmt.Errorf("failed to parse frontmatter: %w", err)
	}

	tmpl := &AppTemplate{
		ID:          fm.ID,
		Name:        fm.Name,
		Category:    fm.Category,
		Description: fm.Description,
		Image:       fm.Image,
		Ports:       fm.Ports,
		RawMarkdown: markdown,
	}

	for _, e := range fm.Environment {
		tmpl.Environment = append(tmpl.Environment, EnvVar{
			Name:        e.Name,
			Description: e.Description,
			Required:    e.Required,
			Default:     e.Default,
		})
	}

	for _, v := range fm.Volumes {
		tmpl.Volumes = append(tmpl.Volumes, Volume{
			Name:        v.Name,
			Description: v.Description,
			Required:    v.Required,
			Default:     v.Default,
		})
	}

	// Extract compose section from markdown
	composeStart := strings.Index(content, "```yaml")
	if composeStart < 0 {
		composeStart = strings.Index(content, "```yml")
	}
	if composeStart >= 0 {
		composeEnd := strings.Index(content[composeStart+7:], "```")
		if composeEnd >= 0 {
			tmpl.RawMarkdown = strings.TrimSpace(content[composeStart+7 : composeStart+7+composeEnd])
		}
	}

	return tmpl, nil
}
