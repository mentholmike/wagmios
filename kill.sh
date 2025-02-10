#!/bin/bash

# Function to stop a service and its process
stop_service() {
    local service_name=$1
    local pid_file=$2
    
    echo "Stopping $service_name..."
    
    # Stop systemd user service if it exists
    if systemctl --user list-units --all | grep -q "$service_name"; then
        systemctl --user stop "$service_name"
    fi
    
    # Kill process if PID file exists
    if [ -f "$pid_file" ]; then
        pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null; then
            kill "$pid"
            rm "$pid_file"
        fi
    fi
}

# Stop all services
stop_service "elizaos" "/tmp/elizaos.pid"
stop_service "elizaos-client" "/tmp/elizaos-client.pid"
stop_service "wagmios-frontend" "/tmp/wagmios-frontend.pid"
stop_service "wagmios-backend" "/tmp/wagmios-backend.pid"

echo "All services stopped" 
