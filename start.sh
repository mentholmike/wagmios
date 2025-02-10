#!/bin/bash

# Get the service status file path
SERVICE_FILE="/tmp/elizaos_service"
WAGMIOS_FILE="/tmp/wagmios_service"

# Define all required ports
ELIZA_API_PORT=3000
ELIZA_UI_PORT=5173
WAGMIOS_API_PORT=8080
WAGMIOS_UI_PORT=5174

# Check if ports are already in use
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null ; then
        echo "Port $port is already in use"
        exit 1
    fi
}

# Check all ports
check_port $ELIZA_API_PORT
check_port $ELIZA_UI_PORT
check_port $WAGMIOS_API_PORT
check_port $WAGMIOS_UI_PORT

# Start ElizaOS first
echo "Starting ElizaOS..."
cd ~/WagmiOS/elizaos/eliza

# Character Selection
echo "Available characters:"
characters=(characters/*.character.json)
for i in "${!characters[@]}"; do
    filename=$(basename "${characters[$i]}" .character.json)
    echo "$((i+1)). $filename"
done

read -p "Select character number: " char_num
if [[ $char_num -ge 1 && $char_num -le ${#characters[@]} ]]; then
    selected_character=$(basename "${characters[$((char_num-1))]}")
    echo "Starting ElizaOS with character: $selected_character"
    pnpm start --character="characters/$selected_character" &
    echo $! > "$SERVICE_FILE"
else
    echo "Invalid selection. Starting with default character..."
    pnpm start &
    echo $! > "$SERVICE_FILE"
fi

# Wait for ElizaOS services to initialize
echo "Waiting for ElizaOS API to initialize on port $ELIZA_API_PORT..."
while ! nc -z localhost $ELIZA_API_PORT; do   
    sleep 1
done
echo "Waiting for ElizaOS UI to initialize on port $ELIZA_UI_PORT..."
while ! nc -z localhost $ELIZA_UI_PORT; do   
    sleep 1
done
echo "ElizaOS services are running!"

# Start WagmiOS server
echo "Starting WagmiOS server..."
cd ../wagmios
pnpm start &
echo $! > "$WAGMIOS_FILE"

# Wait for WagmiOS services to initialize
echo "Waiting for WagmiOS API to initialize on port $WAGMIOS_API_PORT..."
while ! nc -z localhost $WAGMIOS_API_PORT; do   
    sleep 1
done
echo "Waiting for WagmiOS UI to initialize on port $WAGMIOS_UI_PORT..."
while ! nc -z localhost $WAGMIOS_UI_PORT; do   
    sleep 1
done

echo "
🎉 All services are now running!

Services:
---------
ElizaOS API: http://localhost:$ELIZA_API_PORT
ElizaOS UI: http://localhost:$ELIZA_UI_PORT
WagmiOS API: http://localhost:$WAGMIOS_API_PORT
WagmiOS Dashboard: http://localhost:$WAGMIOS_UI_PORT

You can now access:
1. WagmiOS Dashboard: http://localhost:$WAGMIOS_UI_PORT
2. ElizaOS UI: http://localhost:$ELIZA_UI_PORT
3. Docker Marketplace and Container Management
4. System Metrics and Monitoring

To stop all services, run: ./kill.sh
" 
