package activity

import (
	"context"
	"crypto/rand"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"sync"
	"time"

	"github.com/gorilla/mux"
	"github.com/gorilla/websocket"
	"wagmios/internal/auth"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

type Event struct {
	ID        string      `json:"id"`
	Timestamp time.Time   `json:"timestamp"`
	Type      string      `json:"type"`
	Action    string      `json:"action"`
	Target    string      `json:"target"`
	Status    string      `json:"status"`
	Agent     string      `json:"agent"`
	Details   interface{} `json:"details,omitempty"`
	Scope     string      `json:"scope,omitempty"`
}

type Feed struct {
	mu          sync.RWMutex
	subscribers map[string]*Subscriber
	events      []Event
	maxEvents   int
}

type Subscriber struct {
	conn    *websocket.Conn
	writeMu sync.Mutex
}

var feed = &Feed{
	subscribers: make(map[string]*Subscriber),
	events:      make([]Event, 0),
	maxEvents:   500,
}

var feedMu sync.Mutex

type containerInfo struct {
	ID     string
	Status string
}

type RequestCounters struct {
	mu          sync.RWMutex
	hourly      [24]int
	pulls       int
	windowStart time.Time
}

var reqCounters = &RequestCounters{
	windowStart: truncateHour(time.Now()),
}

func init() {
	// Restore persisted pull count on startup
	reqCounters.pulls = loadPullCount()
	log.Printf("Restored pull count: %d", reqCounters.pulls)
}

type MetricsSummary struct {
	RequestsLast24h int             `json:"requests_last_24h"`
	RequestsByHour  []int           `json:"requests_by_hour"`
	ContainerCounts ContainerCounts `json:"container_counts"`
	UptimeSeconds   int64           `json:"uptime_seconds"`
	PullsLast24h    int             `json:"pulls_last_24h"`
}

type ContainerCounts struct {
	Total   int `json:"total"`
	Running int `json:"running"`
	Stopped int `json:"stopped"`
}

var startTime = time.Now()

const pullCountFile = "/app/data/pull_count.json"

func getPullCountFilePath() string {
	if path := os.Getenv("WAGMIOS_DATA_DIR"); path != "" {
		return filepath.Join(path, "pull_count.json")
	}
	return pullCountFile
}

func loadPullCount() int {
	data, err := os.ReadFile(getPullCountFilePath())
	if err != nil || len(data) == 0 {
		return 0
	}
	var out struct {
		Pulls int `json:"pulls"`
	}
	if err := json.Unmarshal(data, &out); err != nil {
		return 0
	}
	return out.Pulls
}

func savePullCount(n int) {
	path := getPullCountFilePath()
	data, _ := json.Marshal(struct{ Pulls int }{Pulls: n})
	os.WriteFile(path, data, 0600)
}

func truncateHour(t time.Time) time.Time {
	return time.Date(t.Year(), t.Month(), t.Day(), t.Hour(), 0, 0, 0, t.Location())
}

func (rc *RequestCounters) Increment() {
	rc.mu.Lock()
	defer rc.mu.Unlock()
	now := time.Now()
	currentHour := truncateHour(now)

	if currentHour.After(rc.windowStart) {
		hoursDelta := int(currentHour.Sub(rc.windowStart).Hours())
		if hoursDelta >= 24 {
			rc.hourly = [24]int{}
		} else {
			for i := 0; i < hoursDelta && i < 24; i++ {
				rc.hourly[i] = 0
			}
		}
		rc.windowStart = currentHour
	}
	rc.hourly[23]++
}

func (rc *RequestCounters) GetHourlyBuckets() []int {
	rc.mu.RLock()
	defer rc.mu.RUnlock()
	now := time.Now()
	currentHour := truncateHour(now)
	bucketCount := int(currentHour.Sub(rc.windowStart).Hours()) + 1
	if bucketCount > 24 {
		bucketCount = 24
	}
	result := make([]int, 24)
	offset := 24 - bucketCount
	for i := 0; i < bucketCount; i++ {
		result[offset+i] = rc.hourly[23-bucketCount+1+i]
	}
	return result
}

func (rc *RequestCounters) IncrementPulls() {
	rc.mu.Lock()
	defer rc.mu.Unlock()
	rc.pulls++
	savePullCount(rc.pulls)
}

func (rc *RequestCounters) GetTotal() int {
	rc.mu.RLock()
	defer rc.mu.RUnlock()
	total := 0
	for _, v := range rc.hourly {
		total += v
	}
	return total
}

func (rc *RequestCounters) GetPulls() int {
	rc.mu.RLock()
	defer rc.mu.RUnlock()
	return rc.pulls
}

// IncrementPulls increments the docker pull counter
func IncrementPulls() {
	reqCounters.IncrementPulls()
}

func GetSummary(dockerTotal, dockerRunning int) MetricsSummary {
	return MetricsSummary{
		RequestsLast24h: reqCounters.GetTotal(),
		RequestsByHour:  reqCounters.GetHourlyBuckets(),
		ContainerCounts: ContainerCounts{
			Total:   dockerTotal,
			Running: dockerRunning,
			Stopped: dockerTotal - dockerRunning,
		},
		UptimeSeconds: int64(time.Since(startTime).Seconds()),
		PullsLast24h:  reqCounters.GetPulls(),
	}
}

func (f *Feed) Subscribe(id string, conn *websocket.Conn) {
	f.mu.Lock()
	defer f.mu.Unlock()
	f.subscribers[id] = &Subscriber{conn: conn}
}

func (f *Feed) Unsubscribe(id string) {
	f.mu.Lock()
	defer f.mu.Unlock()
	if sub, ok := f.subscribers[id]; ok {
		sub.conn.Close()
		delete(f.subscribers, id)
	}
}

func (f *Feed) Broadcast(event Event) {
	f.mu.RLock()
	subscribers := make(map[string]*Subscriber)
	for k, v := range f.subscribers {
		subscribers[k] = v
	}
	f.mu.RUnlock()

	data, err := json.Marshal(event)
	if err != nil {
		log.Printf("Failed to marshal activity event: %v", err)
		return
	}

	for id, sub := range subscribers {
		sub.writeMu.Lock()
		err := sub.conn.WriteMessage(websocket.TextMessage, data)
		sub.writeMu.Unlock()
		if err != nil {
			f.mu.Lock()
			sub.conn.Close()
			delete(f.subscribers, id)
			f.mu.Unlock()
		}
	}

	feedMu.Lock()
	f.events = append(f.events, event)
	if len(f.events) > f.maxEvents {
		f.events = f.events[len(f.events)-f.maxEvents:]
	}
	feedMu.Unlock()
}

func (f *Feed) GetRecent(limit int) []Event {
	feedMu.Lock()
	defer feedMu.Unlock()
	if limit > len(f.events) {
		limit = len(f.events)
	}
	events := make([]Event, limit)
	copy(events, f.events[len(f.events)-limit:])
	return events
}

func Log(event Event) {
	if event.ID == "" {
		event.ID = generateConnID()
	}
	event.Timestamp = time.Now().UTC()
	feed.Broadcast(event)
}

// isNoisePath returns true for paths that should not appear in activity feed
func isNoisePath(path string) bool {
	noise := []string{
		"/health",
		"/metrics/summary",
		"/api/metrics/summary",
		"/api/auth/status",
		"/api/system/info",
		"/api/system/metrics",
		"/api/containers",
		"/api/marketplace",
	}
	for _, n := range noise {
		if path == n || path == n+"/" {
			return true
		}
	}
	return false
}

func LogAPI(method, path string, status int, agent string, durationMs int64) {
	reqCounters.Increment()

	// Skip noisy health check and read-only paths
	if isNoisePath(path) {
		return
	}

	Log(Event{
		Type:   "api_call",
		Action: method,
		Target: path,
		Status: statusText(status),
		Agent:  agent,
		Details: map[string]interface{}{
			"status_code": status,
			"duration_ms": durationMs,
		},
	})
}

func LogContainerAction(action, containerID, containerName, agent string, success bool, details string) {
	status := "success"
	if !success {
		status = "error"
	}
	Log(Event{
		Type:   "container_action",
		Action: action,
		Target: containerName,
		Status: status,
		Agent:  agent,
		Details: map[string]interface{}{
			"container_id": containerID,
			"details":      details,
		},
	})
}

func LogImagePull(imageName string, success bool, details string) {
	status := "success"
	if !success {
		status = "error"
	}
	Log(Event{
		Type:    "image_pull",
		Action:  "pull",
		Target:  imageName,
		Status:  status,
		Agent:   "system",
		Details: details,
	})
}

func LogApprovalRequest(scope, action, target, agent, approvalID string) {
	Log(Event{
		Type:   "approval_request",
		Action: action,
		Target: target,
		Status: "pending",
		Agent:  agent,
		Scope:  scope,
		Details: map[string]interface{}{
			"approval_id": approvalID,
		},
	})
}

func LogImageAction(action, imageName, agent string, success bool) {
	status := "success"
	if !success {
		status = "error"
	}
	Log(Event{
		Type:   "image_action",
		Action: action,
		Target: imageName,
		Status: status,
		Agent:  agent,
	})
}

func LogKeyAction(action, keyLabel, agent string) {
	Log(Event{
		Type:   "key_action",
		Action: action,
		Target: keyLabel,
		Status: "success",
		Agent:  agent,
	})
}

func statusText(code int) string {
	switch {
	case code >= 200 && code < 300:
		return "success"
	case code >= 400 && code < 500:
		return "client_error"
	case code >= 500:
		return "server_error"
	default:
		return "unknown"
	}
}

func requireSystemRead(w http.ResponseWriter, r *http.Request) bool {
	if !auth.KeyStoreHasScope(auth.GetMetaFromContext(r.Context()), auth.ScopeSystemRead) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusForbidden)
		json.NewEncoder(w).Encode(map[string]interface{}{
			"success": false,
			"data":    nil,
			"error": map[string]string{
				"code":    "SCOPE_REQUIRED",
				"message": "system:read scope required",
			},
		})
		return false
	}
	return true
}

func ActivityFeedHandler(w http.ResponseWriter, r *http.Request) {
	if !requireSystemRead(w, r) {
		return
	}
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Printf("WebSocket upgrade error: %v", err)
		return
	}
	id := generateConnID()
	feed.Subscribe(id, conn)
	defer feed.Unsubscribe(id)

	for {
		_, _, err := conn.ReadMessage()
		if err != nil {
			break
		}
	}
}

func ActivityAPIHandlers(r *mux.Router) {
	r.HandleFunc("/api/activity", handleGetActivity).Methods("GET", "OPTIONS")
	r.HandleFunc("/api/ws/activity", ActivityFeedHandler).Methods("GET")
	r.HandleFunc("/api/metrics/summary", handleGetMetricsSummary).Methods("GET", "OPTIONS")
}

func handleGetActivity(w http.ResponseWriter, r *http.Request) {
	if !requireSystemRead(w, r) {
		return
	}
	limit := 100
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]interface{}{
		"success": true,
		"data": map[string]interface{}{
			"events": feed.GetRecent(limit),
			"total":  len(feed.events),
		},
	})
}

func handleGetMetricsSummary(w http.ResponseWriter, r *http.Request) {
	if !requireSystemRead(w, r) {
		return
	}
	total, running := getContainerCounts()
	summary := GetSummary(total, running)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]interface{}{
		"success": true,
		"data":    summary,
	})
}

func getContainerCounts() (total int, running int) {
	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()
	cmd := exec.CommandContext(ctx, "docker", "ps", "-a", "--format", "{{.ID}}|{{.Status}}")
	output, err := cmd.CombinedOutput()
	if err != nil {
		return 0, 0
	}
	lines := strings.Split(strings.TrimSpace(string(output)), "\n")
	for _, line := range lines {
		if line == "" {
			continue
		}
		total++
		parts := strings.SplitN(line, "|", 2)
		if len(parts) == 2 {
			status := strings.ToLower(parts[1])
			if strings.Contains(status, "up") || strings.Contains(status, "running") {
				running++
			}
		}
	}
	return total, running
}

func generateConnID() string {
	b := make([]byte, 8)
	rand.Read(b)
	return fmt.Sprintf("%x", b)
}
