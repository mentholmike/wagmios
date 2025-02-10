package system

import (
    "encoding/json"
    "net/http"
    "time"
    "net"
    "github.com/shirou/gopsutil/v3/cpu"
    "github.com/shirou/gopsutil/v3/mem"
    "github.com/shirou/gopsutil/v3/disk"
    "github.com/shirou/gopsutil/v3/host"
)

type Memory struct {
    Used  uint64 `json:"used"`
    Total uint64 `json:"total"`
}

type Disk struct {
    Used  uint64 `json:"used"`
    Total uint64 `json:"total"`
}

type SystemMetrics struct {
    CPU          float64 `json:"cpu"`
    Memory       Memory  `json:"memory"`
    Disk         Disk    `json:"disk"`
    Uptime       float64 `json:"uptime"`
    ElizaStatus  bool    `json:"elizaStatus"`
    ElizaVersion string  `json:"elizaVersion"`
}

func GetCPUUsage() (float64, error) {
    percentage, err := cpu.Percent(time.Second, false)
    if err != nil {
        return 0, err
    }
    if len(percentage) > 0 {
        return percentage[0], nil
    }
    return 0, nil
}

func GetMemoryInfo() (Memory, error) {
    vm, err := mem.VirtualMemory()
    if err != nil {
        return Memory{}, err
    }
    return Memory{
        Used:  vm.Used,
        Total: vm.Total,
    }, nil
}

func GetDiskInfo() (Disk, error) {
    path := "/"
    usage, err := disk.Usage(path)
    if err != nil {
        return Disk{}, err
    }
    return Disk{
        Used:  usage.Used,
        Total: usage.Total,
    }, nil
}

func GetUptime() (float64, error) {
    info, err := host.Info()
    if err != nil {
        return 0, err
    }
    return float64(info.Uptime), nil
}

func checkElizaConnection() bool {
    timeout := time.Second * 2
    conn, err := net.DialTimeout("tcp", "localhost:3000", timeout)
    if err != nil {
        return false
    }
    if conn != nil {
        conn.Close()
        return true
    }
    return false
}

func GetSystemMetrics() (*SystemMetrics, error) {
    cpu, err := GetCPUUsage()
    if err != nil {
        return nil, err
    }

    memory, err := GetMemoryInfo()
    if err != nil {
        return nil, err
    }

    disk, err := GetDiskInfo()
    if err != nil {
        return nil, err
    }

    uptime, err := GetUptime()
    if err != nil {
        return nil, err
    }

    // Check Eliza status by attempting connection to port 3000
    elizaStatus := checkElizaConnection()

    // Get Eliza version if available
    elizaVersion := ""
    if elizaStatus {
        client := &http.Client{
            Timeout: time.Second * 2,
        }
        resp, err := client.Get("http://localhost:3000/version")
        if err == nil {
            defer resp.Body.Close()
            var versionResp struct {
                Version string `json:"version"`
            }
            if err := json.NewDecoder(resp.Body).Decode(&versionResp); err == nil {
                elizaVersion = versionResp.Version
            }
        }
    }

    return &SystemMetrics{
        CPU:          cpu,
        Memory:       memory,
        Disk:         disk,
        Uptime:       uptime,
        ElizaStatus:  elizaStatus,
        ElizaVersion: elizaVersion,
    }, nil
} 
