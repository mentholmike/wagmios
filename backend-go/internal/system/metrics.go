package system

import (
	"io/ioutil"
	"os/exec"
	"strconv"
	"strings"
	"time"
)

type SystemMetrics struct {
	CPU          float64 `json:"cpu"`
	Memory       struct {
		Used  int64 `json:"used"`
		Total int64 `json:"total"`
	} `json:"memory"`
	Disk struct {
		Used  int64 `json:"used"`
		Total int64 `json:"total"`
	} `json:"disk"`
	Uptime      float64 `json:"uptime"`
	CurrentTime string  `json:"currentTime"`
}

func GetSystemMetrics() (*SystemMetrics, error) {
	metrics := &SystemMetrics{}

	// Read CPU usage from /proc/stat
	statData, err := ioutil.ReadFile("/proc/stat")
	if err != nil {
		return nil, err
	}

	lines := strings.Split(string(statData), "\n")
	for _, line := range lines {
		if strings.HasPrefix(line, "cpu ") {
			fields := strings.Fields(line)[1:] // Skip "cpu" prefix
			if len(fields) >= 4 {
				user, _ := strconv.ParseFloat(fields[0], 64)
				nice, _ := strconv.ParseFloat(fields[1], 64)
				system, _ := strconv.ParseFloat(fields[2], 64)
				idle, _ := strconv.ParseFloat(fields[3], 64)
				
				total := user + nice + system + idle
				used := user + nice + system
				
				metrics.CPU = (used / total) * 100
			}
		}
	}

	// Get memory info
	var cmd *exec.Cmd
	var output []byte
	
	cmd = exec.Command("free", "-b")
	output, err = cmd.CombinedOutput()
	if err == nil {
		lines := strings.Split(string(output), "\n")
		for _, line := range lines {
			if strings.HasPrefix(line, "Mem:") {
				fields := strings.Fields(line)
				if len(fields) >= 3 {
					metrics.Memory.Total, _ = strconv.ParseInt(fields[1], 10, 64)
					metrics.Memory.Used, _ = strconv.ParseInt(fields[2], 10, 64)
				}
			}
		}
	}

	// Get disk info
	cmd = exec.Command("df", "-B1", "/")
	output, err = cmd.CombinedOutput()
	if err == nil {
		lines := strings.Split(string(output), "\n")
		if len(lines) >= 2 {
			fields := strings.Fields(lines[1])
			if len(fields) >= 4 {
				metrics.Disk.Total, _ = strconv.ParseInt(fields[1], 10, 64)
				metrics.Disk.Used, _ = strconv.ParseInt(fields[2], 10, 64)
			}
		}
	}

	// Get uptime
	cmd = exec.Command("cat", "/proc/uptime")
	output, err = cmd.CombinedOutput()
	if err == nil {
		fields := strings.Fields(string(output))
		if len(fields) > 0 {
			metrics.Uptime, _ = strconv.ParseFloat(fields[0], 64)
		}
	}

	// Get current system time in RFC3339 format
	metrics.CurrentTime = time.Now().Format(time.RFC3339)

	return metrics, nil
}
