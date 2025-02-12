#!/bin/bash

# Exit on error
set -e

# Detect Linux distribution
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS_TYPE="linux"
    DISTRO=$ID
else
    echo "Unsupported Linux distribution"
    exit 1
fi

# Print WAGMIOS in cool letters
echo "

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓██████████████▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓█▓▒▒▓███▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░  
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓██████▓▒░░▒▓███████▓▒░  
"

##################################################################################################
echo "Starting WagmiOS Installation..."
echo "Detected OS: $OS_TYPE"
echo "Linux Distribution: $DISTRO"
sleep 2

# Install system dependencies based on Linux distribution
echo "Installing system dependencies..."
if [ "$DISTRO" = "ubuntu" ] || [ "$DISTRO" = "debian" ]; then
    sudo apt-get update
    sudo apt-get install -y \
        build-essential \
        curl \
        git \
        wget \
        ca-certificates \
        gnupg \
        dos2unix \
        python3 \
        python3-pip \
        postgresql \
        redis \
        golang-go \
        nodejs

elif [ "$DISTRO" = "fedora" ]; then
    sudo dnf update -y
    sudo dnf install -y \
        @development-tools \
        curl \
        git \
        wget \
        ca-certificates \
        gnupg \
        dos2unix \
        python3 \
        python3-pip \
        nodejs \
        npm \
        postgresql \
        redis \
        golang-go

elif [ "$DISTRO" = "arch" ]; then
    sudo pacman -Syu --noconfirm
    sudo pacman -S --noconfirm \
        base-devel \
        curl \
        git \
        wget \
        ca-certificates \
        gnupg \
        dos2unix \
        python3 \
        python3-pip \
        nodejs \
        npm \
        postgresql \
        redis \
        golang-go
fi
  

# Set the base directory
WAGMI_DIR="$HOME/wagmios"

chmod +x start-services.sh
chmod +x stop-services.sh
##################################################################################################
# Install and setup NVM with version locking
function install_and_setup_nvm() {
    echo "Setting up NVM..."
    export NVM_DIR="$HOME/.nvm"
    
    if [ ! -d "$NVM_DIR" ]; then
        # Install NVM
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

        # Add NVM to current shell environment
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

        # Verify installation
        command -v nvm || {
            echo "NVM installation failed"
            exit 1
        }
    else
        # NVM already installed, just source it
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
    fi

    # Ensure NVM is loaded by checking if the command exists
    if ! command -v nvm &> /dev/null; then
        echo "❌ NVM not properly loaded. Adding to shell configuration..."
        echo 'export NVM_DIR="$HOME/.nvm"' >> "$HOME/.bashrc"
        echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> "$HOME/.bashrc"
        echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> "$HOME/.bashrc"
        source "$HOME/.bashrc"
    fi

    # Install and use Node.js
    nvm install 18.17.1
    nvm alias default 18.17.1
    nvm use 18.17.1
    
    # Verify Node.js installation
    if ! command -v node &> /dev/null; then
        echo "❌ Node.js installation failed"
        exit 1
    fi
    
    echo "✅ NVM $(nvm --version) installed and configured"
    echo "✅ Node.js $(node --version) installed and configured"
}
##################################################################################################
# Call this function once at the start
install_and_setup_nvm

 #Install pnpm
echo "Installing pnpm..."
curl -fsSL https://get.pnpm.io/install.sh | sh -
export PNPM_HOME="$HOME/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"

# Install global npm packages
echo "Installing global npm packages..."
pnpm install -g \
    @vue/cli \
    typescript \
    vite \
    eslint \
    prettier \
    nodemon \
    http-server \
    vue-tsc \
    @vue/tsconfig

# Main installation flow
echo "Starting installation process..."

##################################################################################################
#install_and_setup_nvm

# Setup WagmiOS frontend with Node.js 18 FIRST
if [ -d "$WAGMI_DIR/frontend" ]; then
    echo "Setting up WagmiOS frontend..."
    cd "$WAGMI_DIR/frontend"
    
    echo "Confirmed Node.js version for WagmiOS frontend: $(node -v)"
    
    # Clean existing installations
    rm -rf node_modules
    rm -f package-lock.json pnpm-lock.yaml yarn.lock
    
    # Initial install without scripts
    echo "Installing dependencies (initial pass)..."
    pnpm install --ignore-scripts

    # Approve necessary build scripts
    echo "Approving build scripts..."
    pnpm approve-builds esbuild
    pnpm approve-builds vue-demi

    # Full install with approved scripts
    echo "Installing dependencies (final pass)..."
    pnpm install

    # Build the project
    echo "Building the frontend..."
    NODE_ENV=production pnpm build
fi
##################################################################################################
# Install Go
echo "Installing Go..."
GO_VERSION="1.18.10"
wget "https://golang.org/dl/go${GO_VERSION}.linux-amd64.tar.gz"
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf "go${GO_VERSION}.linux-amd64.tar.gz"
rm "go${GO_VERSION}.linux-amd64.tar.gz"

echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
source ~/.bashrc
go version

# Install Go dependencies
echo "Installing Go dependencies..."
TEMP_GO_DIR=$(mktemp -d)
cd "$TEMP_GO_DIR"
cat > go.mod << EOL
module temp
go 1.18
EOL
go get github.com/gorilla/mux@latest
go get github.com/rs/cors@latest
go get github.com/joho/godotenv@latest
go get github.com/lib/pq@latest
go get github.com/go-redis/redis/v8@latest
cd - > /dev/null
rm -rf "$TEMP_GO_DIR"

##################################################################################################
# Update router configuration
if [ -f "$WAGMI_DIR/frontend/src/router/index.js" ]; then
    echo "Updating router configuration..."
    sed -i.bak '/path: .settings./d' "$WAGMI_DIR/frontend/src/router/index.js"
    sed -i.bak '/component: Settings/d' "$WAGMI_DIR/frontend/src/router/index.js"
    sed -i.bak '/import Settings/d' "$WAGMI_DIR/frontend/src/router/index.js"
    rm -f "$WAGMI_DIR/frontend/src/router/index.js.bak"
fi 

##################################################################################################
# Setup system services
echo "Setting up system services..."
PNPM_PATH=$(which pnpm)
if [ -z "$PNPM_PATH" ]; then
    echo "❌ Error: pnpm not found in PATH"
    exit 1
fi

echo "Using pnpm from: $PNPM_PATH"

sudo tee /etc/systemd/system/wagmios-backend.service > /dev/null << EOL
[Unit]
Description=WagmiOS Backend Service
After=network.target
[Service]
Type=simple
User=$USER
Group=$USER
WorkingDirectory=$HOME/wagmios/backend-go
ExecStart=/usr/local/go/bin/go run cmd/server/main.go
Restart=always
RestartSec=10
[Install]
WantedBy=multi-user.target
EOL

sudo systemctl daemon-reload
sudo systemctl enable wagmios-backend
sudo systemctl restart wagmios-backend

  # Check service status
    echo "Checking wagmios-backend service status..."
    sleep 3
    systemctl status wagmios-backend --no-pager

##################################################################################################
# Set up frontend service
sudo tee /etc/systemd/system/wagmios-frontend.service > /dev/null << EOL
[Unit]
Description=WagmiOS Frontend Service
After=network.target

[Service]
Type=simple
User=$USER
Group=$USER
WorkingDirectory=$HOME/wagmios/frontend
Environment=PATH=$PATH
ExecStart=$PNPM_PATH run dev
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOL

sudo systemctl daemon-reload
sudo systemctl enable wagmios-frontend
sudo systemctl restart wagmios-frontend

##################################################################################################
# Setup backend
#cd into backend-go and start service
cd "$HOME/wagmios/backend-go"
echo "Setting up backend..."

# Update Go version in go.mod to 1.18
if [ -f "go.mod" ]; then
    echo "Updating Go version in go.mod to 1.18..."
    sed -i 's/go 1.22/go 1.18/' go.mod
    if [ $? -ne 0 ]; then
        echo "❌ Error: Failed to update Go version in go.mod"
        exit 1
    fi
else
    echo "Initializing go.mod with Go 1.18..."
    cat > go.mod << EOL
module wagmios

go 1.18
EOL
fi

go mod tidy
go build ./...
sudo systemctl enable wagmios-backend
sudo systemctl restart wagmios-backend
sleep 7

echo "Checking wagmios-backend service status..."
if systemctl is-active --quiet wagmios-backend; then
    echo "✅ wagmios-backend service is running!"
else
    echo "❌ wagmios-backend service is having issues"
    echo "Checking detailed status..."
    systemctl status wagmios-backend
    exit 1
fi
##################################################################################################
# Start up Web Page for WagmiOS
echo "Verifying frontend setup..."
cd "$HOME/wagmios/frontend"

# Step 11: Start Frontend Service
echo "Starting frontend service..."
# First test the dev server
sudo systemctl enable wagmios-frontend
sudo systemctl restart wagmios-frontend
sleep 3

echo "Checking wagmios-frontend service status..."
if systemctl is-active --quiet wagmios-frontend; then
    echo "✅ wagmios-frontend service is running!"
else
    echo "❌ wagmios-frontend service is having issues"
    echo "Checking detailed status..."
    systemctl status wagmios-frontend  
    exit 1
fi
##################################################################################################
# Check if frontend is responding
# Get network IP
IP_ADDR=$(hostname -I | awk '{print $1}')
##################################################################################################
# Final success message
echo "\n🎉 Installation Complete! Your WagmiOS Environment is Ready!\n"
echo "💾 WagmiOS: http://localhost:5174 or http://${IP_ADDR}:5174\n"
echo "Services will automatically start on system boot."
echo "to stop services use ./stop-services.sh"
echo "to start services use ./start-services.sh"


fi  # Close the Linux-specific service configuration block
fi      # Close the OS type check block
