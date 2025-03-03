package system

import (
        "fmt"
        "io/ioutil"
        "log"
        "os/exec"
        "strconv"
        "strings"
        "time"
)

// SystemMetrics represents system metrics
type SystemMetrics struct {
        CPU struct {
                Usage float64 `json:"usage"`
        } `json:"cpu"`
        Memory struct {
                Total        int64   `json:"total"`
                Used         int64   `json:"used"`
                UsagePercent float64 `json:"usagePercent"`
        } `json:"memory"`
        Disk struct {
                Total int64 `json:"total"`
                Used  int64 `json:"used"`
        } `json:"disk"`
        Uptime      float64 `json:"uptime"`
        CurrentTime string  `json:"currentTime"`
}

// GetSystemMetrics returns system metrics
func GetSystemMetrics() (*SystemMetrics, error) {
        metrics := &SystemMetrics{}

        // Get CPU usage using the helper function
        cpuUsage, err := getCPUUsage()
        if err != nil {
                log.Printf("Warning: Failed to get CPU usage: %v", err)
                metrics.CPU.Usage = 0
        } else {
                metrics.CPU.Usage = cpuUsage
                log.Printf("CPU usage: %.2f%%", cpuUsage)
        }

        // Try to get memory stats
        if err := readContainerMemoryStats(metrics); err != nil {
                log.Printf("Falling back to system memory stats: %v", err)
                if err := readSystemMemoryStats(metrics); err != nil {
                        log.Printf("Error reading system memory stats: %v", err)
                        return nil, fmt.Errorf("failed to read memory stats: %v", err)
                }
        }

        // Validate memory values before calculating percentage
        if metrics.Memory.Used > metrics.Memory.Total {
                log.Printf("Warning: Memory used (%d) exceeds total (%d), capping at total", 
                        metrics.Memory.Used, metrics.Memory.Total)
                metrics.Memory.Used = metrics.Memory.Total
        }

        // Calculate memory usage percentage safely
        if metrics.Memory.Total > 0 {
                metrics.Memory.UsagePercent = float64(metrics.Memory.Used) / float64(metrics.Memory.Total) * 100

                // Ensure the percentage is within a reasonable range
                if metrics.Memory.UsagePercent > 100 {
                        metrics.Memory.UsagePercent = 100
                } else if metrics.Memory.UsagePercent < 0 {
                        metrics.Memory.UsagePercent = 0
                }

                // Round to 2 decimal places
                metrics.Memory.UsagePercent = float64(int(metrics.Memory.UsagePercent*100)) / 100

                // Debug log the calculated percentage
                log.Printf("Memory usage percentage: %.2f%%", metrics.Memory.UsagePercent)
        } else {
                metrics.Memory.UsagePercent = 0
        }

        // Get disk info
        if err := readDiskStats(metrics); err != nil {
                log.Printf("Error reading disk stats: %v", err)
                // Don't return error, continue with other metrics
        }

        // Get uptime
        uptimeCmd := exec.Command("cat", "/proc/uptime")
        uptimeOutput, err := uptimeCmd.CombinedOutput()
        if err == nil {
                fields := strings.Fields(string(uptimeOutput))
                if len(fields) > 0 {
                        metrics.Uptime, _ = strconv.ParseFloat(fields[0], 64)
                }
        }

        // Get current system time in RFC3339 format
        metrics.CurrentTime = time.Now().Format(time.RFC3339)

        return metrics, nil
}

// readContainerMemoryStats attempts to read memory stats from container cgroups
func readContainerMemoryStats(metrics *SystemMetrics) error {
        // Try different cgroup paths for different Docker/container environments
        possiblePaths := []string{
                "/sys/fs/cgroup/memory/memory.limit_in_bytes",
                "/sys/fs/cgroup/memory.limit_in_bytes",
                "/proc/meminfo", // Fallback to system memory
        }

        // Try all paths including /proc/meminfo
        for _, path := range possiblePaths {
                if strings.Contains(path, "meminfo") {
                        // Handle /proc/meminfo differently
                        content, err := ioutil.ReadFile(path)
                        if err == nil {
                                lines := strings.Split(string(content), "\n")
                                var total, available int64
                                for _, line := range lines {
                                        if strings.HasPrefix(line, "MemTotal:") {
                                                fields := strings.Fields(line)
                                                if len(fields) >= 2 {
                                                        total, _ = strconv.ParseInt(fields[1], 10, 64)
                                                        total *= 1024 // Convert from KB to bytes
                                                }
                                        }
                                        if strings.HasPrefix(line, "MemAvailable:") {
                                                fields := strings.Fields(line)
                                                if len(fields) >= 2 {
                                                        available, _ = strconv.ParseInt(fields[1], 10, 64)
                                                        available *= 1024 // Convert from KB to bytes
                                                }
                                        }
                                }
                                if total > 0 {
                                        metrics.Memory.Total = total
                                        metrics.Memory.Used = total - available
                                        return nil
                                }
                        }
                        continue
                }

                // Handle cgroup paths
                limitBytes, err := ioutil.ReadFile(path)
                if err != nil {
                        continue
                }

                usagePath := strings.Replace(path, "limit_in_bytes", "usage_in_bytes", 1)
                usageBytes, err := ioutil.ReadFile(usagePath)
                if err != nil {
                        continue
                }

                // Parse and validate the values
                limit, err := strconv.ParseInt(strings.TrimSpace(string(limitBytes)), 10, 64)
                if err != nil || limit <= 0 || limit >= 9223372036854771712 {
                        continue
                }

                usage, err := strconv.ParseInt(strings.TrimSpace(string(usageBytes)), 10, 64)
                if err != nil || usage <= 0 {
                        continue
                }

                metrics.Memory.Total = limit
                metrics.Memory.Used = usage
                return nil
        }

        return fmt.Errorf("no valid memory stats found")
}

// readSystemMemoryStats reads memory stats using the 'free' command
func readSystemMemoryStats(metrics *SystemMetrics) error {
        cmd := exec.Command("free", "-b")  // Get values in bytes
        output, err := cmd.CombinedOutput()
        if err != nil {
                return fmt.Errorf("failed to execute free command: %v", err)
        }

        lines := strings.Split(string(output), "\n")
        if len(lines) < 2 {
                return fmt.Errorf("unexpected free command output format")
        }

        // Parse the memory line
        fields := strings.Fields(lines[1])
        if len(fields) < 3 {
                return fmt.Errorf("not enough fields in free command output")
        }

        total, err := strconv.ParseInt(fields[1], 10, 64)
        if err != nil {
                return fmt.Errorf("failed to parse total memory: %v", err)
        }

        used, err := strconv.ParseInt(fields[2], 10, 64)
        if err != nil {
                return fmt.Errorf("failed to parse used memory: %v", err)
        }

        // Set the metrics
        metrics.Memory.Total = total
        metrics.Memory.Used = used

        // Log the values for debugging
        log.Printf("System memory stats: Total=%d, Used=%d", total, used)

        return nil
}

// Add this helper function at the top level
func getCPUUsage() (float64, error) {
        // Try reading from /proc/stat first
        contents, err := ioutil.ReadFile("/proc/stat")
        if err == nil {
                lines := strings.Split(string(contents), "\n")
                for _, line := range lines {
                        if strings.HasPrefix(line, "cpu ") {
                                fields := strings.Fields(line)[1:] // Skip "cpu" field
                                if len(fields) < 4 {
                                        continue
                                }

                                user, _ := strconv.ParseFloat(fields[0], 64)
                                nice, _ := strconv.ParseFloat(fields[1], 64)
                                system, _ := strconv.ParseFloat(fields[2], 64)
                                idle, _ := strconv.ParseFloat(fields[3], 64)

                                total := user + nice + system + idle
                                if total > 0 {
                                        usage := ((total - idle) / total) * 100
                                        return usage, nil
                                }
                        }
                }
        }

        // Fallback to top command if /proc/stat fails
        cmd := exec.Command("top", "-bn1")
        output, err := cmd.CombinedOutput()
        if err != nil {
                return 0, fmt.Errorf("failed to get CPU usage: %v", err)
        }

        lines := strings.Split(string(output), "\n")
        for _, line := range lines {
                if strings.Contains(line, "Cpu(s)") {
                        fields := strings.Fields(line)
                        for i, field := range fields {
                                if field == "id," && i > 0 {
                                        idleStr := strings.TrimSuffix(fields[i-1], "%")
                                        idle, err := strconv.ParseFloat(idleStr, 64)
                                        if err == nil {
                                                return 100.0 - idle, nil
                                        }
                                }
                        }
                }
        }

        return 0, fmt.Errorf("could not parse CPU usage")
}

// Add this new function
func readDiskStats(metrics *SystemMetrics) error {
        // Try Docker root directory first
        cmd := exec.Command("docker", "info", "--format", "{{.DockerRootDir}}")
        output, err := cmd.CombinedOutput()
        
        var diskPath string
        if err != nil {
                // Fallback to root directory if Docker command fails
                log.Printf("Failed to get Docker root dir, falling back to system root: %v", err)
                diskPath = "/"
        } else {
                diskPath = strings.TrimSpace(string(output))
        }
        
        // Get disk info
        cmd = exec.Command("df", "-k", diskPath)
        output, err = cmd.CombinedOutput()
        if err != nil {
                // If df fails with Docker path, try root path as final fallback
                log.Printf("Failed to get disk info for %s, trying root path: %v", diskPath, err)
                cmd = exec.Command("df", "-k", "/")
                output, err = cmd.CombinedOutput()
                if err != nil {
                        return fmt.Errorf("failed to get disk info: %v", err)
                }
        }

        lines := strings.Split(string(output), "\n")
        if len(lines) < 2 {
                return fmt.Errorf("unexpected df output format")
        }

        fields := strings.Fields(lines[1])
        if len(fields) < 4 {
                return fmt.Errorf("not enough fields in df output")
        }

        // Convert from 1K blocks to bytes
        total, err := strconv.ParseInt(fields[1], 10, 64)
        if err != nil {
                return fmt.Errorf("failed to parse total disk space: %v", err)
        }
        
        used, err := strconv.ParseInt(fields[2], 10, 64)
        if err != nil {
                return fmt.Errorf("failed to parse used disk space: %v", err)
        }

        // Validate the values before setting
        if total <= 0 {
                return fmt.Errorf("invalid total disk space: %d", total)
        }
        if used < 0 {
                used = 0
        }
        if used > total {
                used = total
        }

        // Convert KB to bytes and set metrics
        metrics.Disk.Total = total * 1024
        metrics.Disk.Used = used * 1024

        // Add debug logging
        log.Printf("Disk path: %s", diskPath)
        log.Printf("Disk stats: Total=%d bytes (%s), Used=%d bytes (%s)",
                metrics.Disk.Total, formatBytes(metrics.Disk.Total),
                metrics.Disk.Used, formatBytes(metrics.Disk.Used))

        return nil
}

// Helper function to format bytes for logging
func formatBytes(bytes int64) string {
        const unit = 1024
        if bytes < unit {
                return fmt.Sprintf("%d B", bytes)
        }
        div, exp := int64(unit), 0
        for n := bytes / unit; n >= unit; n /= unit {
                div *= unit
                exp++
        }
        return fmt.Sprintf("%.1f %cB", float64(bytes)/float64(div), "KMGTPE"[exp])
}