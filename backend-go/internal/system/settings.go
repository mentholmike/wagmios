package system

import (
	"encoding/json"
	"fmt"
	"os"
	"sync"
)

type Settings struct {
	mu                      sync.RWMutex
	ApprovalBypassEnabled   bool `json:"approval_bypass_enabled"`
	RequireApprovalsForDelete bool `json:"require_approvals_for_delete"`
}

var globalSettings = &Settings{
	ApprovalBypassEnabled:    false,
	RequireApprovalsForDelete: true,
}

var settingsFile = "/app/data/settings.json"

func LoadSettings() error {
	globalSettings.mu.Lock()
	defer globalSettings.mu.Unlock()

	data, err := os.ReadFile(settingsFile)
	if err != nil {
		if os.IsNotExist(err) {
			return nil
		}
		return err
	}
	return json.Unmarshal(data, globalSettings)
}

func SaveSettings() error {
	data, err := json.MarshalIndent(globalSettings, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(settingsFile, data, 0644)
}

func GetSettings() *Settings {
	globalSettings.mu.RLock()
	defer globalSettings.mu.RUnlock()
	return &Settings{
		ApprovalBypassEnabled:    globalSettings.ApprovalBypassEnabled,
		RequireApprovalsForDelete: globalSettings.RequireApprovalsForDelete,
	}
}

func UpdateSettings(patch *Settings) error {
	if patch == nil {
		return nil
	}
	globalSettings.mu.Lock()
	defer globalSettings.mu.Unlock()
	globalSettings.ApprovalBypassEnabled = patch.ApprovalBypassEnabled
	globalSettings.RequireApprovalsForDelete = patch.RequireApprovalsForDelete
	return SaveSettings()
}

func (s *Settings) String() string {
	return fmt.Sprintf("ApprovalBypass=%v RequireDeleteApproval=%v",
		s.ApprovalBypassEnabled, s.RequireApprovalsForDelete)
}
