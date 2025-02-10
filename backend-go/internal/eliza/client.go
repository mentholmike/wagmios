package eliza

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type Client struct {
	baseURL    string
	httpClient *http.Client
}

func NewClient() *Client {
	return &Client{
		baseURL: "http://localhost:3000",
		httpClient: &http.Client{
			Timeout: 10 * time.Second,
		},
	}
}

func (c *Client) GetStatus() (bool, string, error) {
	resp, err := c.httpClient.Get(fmt.Sprintf("%s/status", c.baseURL))
	if err != nil {
		return false, "", err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return false, "", fmt.Errorf("eliza agent returned status: %d", resp.StatusCode)
	}

	var result struct {
		Status  bool   `json:"status"`
		Version string `json:"version"`
	}
	
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return false, "", err
	}

	return result.Status, result.Version, nil
} 
