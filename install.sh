#!/bin/bash

# Exit on error
set -e

# Detect OS
if [[ "$OSTYPE" == "darwin"* ]]; then
    OS_TYPE="macos"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Detect Linux distribution
    if [ -f /etc/os-release ]; then
        . /etc/os-release
        OS_TYPE="linux"
        DISTRO=$ID
    else
        echo "Unsupported Linux distribution"
        exit 1
    fi
else
    echo "Unsupported operating system: $OSTYPE"
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
if [ "$OS_TYPE" = "linux" ]; then
    echo "Linux Distribution: $DISTRO"
fi
sleep 2

# Install system dependencies based on OS
echo "Installing system dependencies..."
if [ "$OS_TYPE" = "macos" ]; then
    # Check if Homebrew is installed
    if ! command -v brew &> /dev/null; then
        echo "Installing Homebrew..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    fi
    
    # Install macOS dependencies
    brew install \
        curl \
        git \
        wget \
        gnupg \
        dos2unix \
        python3 \
        go \
        node@20 \
        sass \
        postgresql \
        redis

elif [ "$OS_TYPE" = "linux" ]; then
    if [ "$DISTRO" = "ubuntu" ] || [ "$DISTRO" = "debian" ]; then
        # Clean up any existing MongoDB repository files
        sudo rm -f /etc/apt/sources.list.d/mongodb-org-7.0.list
        sudo rm -f /usr/share/keyrings/mongodb-server-7.0.gpg

        # Setup NodeSource repository for Node.js 20.x
        curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
        source ~/.bashrc  # or source ~/.zshrc


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
            ruby-sass \
            postgresql \
            redis \
            golang-go \
            nodejs  # This will install both Node.js and npm from NodeSource
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
            sass \
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
            sass \
            postgresql \
            redis \
            golang-go
    fi
fi

# Set the base directory
WAGMI_DIR="$HOME/wagmios"

# Make the start and stop services scripts executable
chmod +x start-services.sh stop-services.sh

##################################################################################################
# Install and setup NVM with version locking
function install_and_setup_nvm() {
    echo "Setting up NVM..."
    export NVM_DIR="$HOME/.nvm"
    
    if [ ! -d "$NVM_DIR" ]; then
        # Install NVM
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
        
        # Source NVM immediately
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
        
        # Verify installation
        command -v nvm || {
            echo "NVM installation failed"
            exit 1
        }
    else
        # NVM already installed, just source it
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
    fi


    nvm install 18.17.1

    # Set default Node version for WagmiOS
    nvm alias default 18.17.1
    nvm use 18.17.1
    
    echo "✅ NVM $(nvm --version) installed and configured"
}
##################################################################################################
# Call this function once at the start
install_and_setup_nvm

# Install pnpm
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
# Install nvm first
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
#Install Go
echo "Installing Go..."
if [ "$OS_TYPE" = "macos" ]; then
    brew install go
elif [ "$OS_TYPE" = "linux" ]; then
    # Install Go 1.22 or newer
    GO_VERSION="1.22.0"
    wget "https://golang.org/dl/go${GO_VERSION}.linux-amd64.tar.gz"
    sudo rm -rf /usr/local/go
    sudo tar -C /usr/local -xzf "go${GO_VERSION}.linux-amd64.tar.gz"
    rm "go${GO_VERSION}.linux-amd64.tar.gz"
    
    # Add Go to PATH
    echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
    echo 'export PATH=$PATH:$HOME/go/bin' >> ~/.bashrc
    source ~/.bashrc
fi

# Verify Go installation
go version


# Install Go dependencies
echo "Installing Go dependencies..."
# Create a temporary directory for managing dependencies
TEMP_GO_DIR=$(mktemp -d)
cd "$TEMP_GO_DIR"

# Initialize a temporary module
go mod init temp

# Add dependencies
go get github.com/gorilla/mux@latest
go get github.com/rs/cors@latest
go get github.com/joho/godotenv@latest
go get github.com/lib/pq@latest
go get github.com/go-redis/redis/v8@latest

# Clean up
cd - > /dev/null
rm -rf "$TEMP_GO_DIR"
##################################################################################################

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

##################################################################################################
echo "Setting up system services..."

if [ "$OS_TYPE" = "linux" ]; then
    # First, get the exact path to pnpm
    PNPM_PATH=$(which pnpm)
    if [ -z "$PNPM_PATH" ]; then
        echo "Error: pnpm not found in PATH"
        exit 1
    fi


    sudo tee /etc/systemd/system/wagmios-backend.service > /dev/null << EOL
[Unit]
Description=WagmiOS Backend Service
After=network.target

[Service]
Type=simple
User=$USER
Group=$USER
WorkingDirectory=$HOME/wagmios/backend-go
Environment="PATH=/usr/local/go/bin:$PATH"
Environment="GOPATH=$HOME/go"
ExecStart=/usr/local/go/bin/go run cmd/server/main.go
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOL

    # Reload systemd and restart service
    sudo systemctl daemon-reload
    sudo systemctl enable wagmios-backend
    sudo systemctl restart wagmios-backend

    # Check service status
    echo "Checking wagmios-backend service status..."
    sleep 3
    systemctl status wagmios-backend --no-pager

    # Starts the wagmios self hosted site
    sudo tee /etc/systemd/system/wagmios-frontend.service > /dev/null << EOL
[Unit]
Description=WagmiOS Frontend Service


[Service]
Type=simple
User=$USER
Group=$USER
WorkingDirectory=$HOME/wagmios/frontend
Environment="PATH=$HOME/.local/share/pnpm:$PATH"
ExecStart=$(which pnpm) run dev
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOL

##################################################################################################

##################################################################################################


##################################################################################################
#MacOS services
##################################################################################################
elif [ "$OS_TYPE" = "macos" ]; then
    # Create LaunchAgents directory if it doesn't exist
    mkdir -p ~/Library/LaunchAgents
##################################################################################################
    
##################################################################################################
    # Create WagmiOS Backend service
    cat > ~/Library/LaunchAgents/com.wagmios.backend.plist << EOL
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.wagmios.backend</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/go/bin/go</string>
        <string>run</string>
        <string>cmd/server/main.go</string>
    </array>
    <key>WorkingDirectory</key>
    <string>%h/WagmiOS/wagmios/backend-go</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/tmp/wagmios-backend.log</string>
    <key>StandardErrorPath</key>
    <string>/tmp/wagmios-backend.error.log</string>
    <key>StartInterval</key>
    <integer>15</integer>
</dict>
</plist>
EOL
##################################################################################################

##################################################################################################
    # Create WagmiOS Frontend service
    cat > ~/Library/LaunchAgents/com.wagmios.frontend.plist << EOL
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.wagmios.frontend</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/pnpm</string>
        <string>dev</string>
    </array>
    <key>WorkingDirectory</key>
    <string>%h/WagmiOS/wagmios/frontend</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/tmp/wagmios-frontend.log</string>
    <key>StandardErrorPath</key>
    <string>/tmp/wagmios-frontend.error.log</string>
    <key>StartInterval</key>
    <integer>25</integer>
</dict>
</plist>
EOL
##################################################################################################

##################################################################################################
    # Load services in order with delays
    launchctl load ~/Library/LaunchAgents/com.wagmios.backend.plist
    sleep 10  # Wait for backend to fully initialize
    launchctl load ~/Library/LaunchAgents/com.wagmios.frontend.plist
fi

##################################################################################################

##################################################################################################
#!/bin/bash
if [ "\$(uname)" == "Darwin" ]; then
    
    launchctl load ~/Library/LaunchAgents/com.wagmios.backend.plist
    sleep 10
    launchctl load ~/Library/LaunchAgents/com.wagmios.frontend.plist
else
    
    
    sudo systemctl start wagmios-backend.service
    sleep 10
    sudo systemctl start wagmios-frontend.service
fi
##################################################################################################
cat > stop-services.sh << EOL
#!/bin/bash
if [ "\$(uname)" == "Darwin" ]; then
    launchctl unload ~/Library/LaunchAgents/com.wagmios.frontend.plist
    launchctl unload ~/Library/LaunchAgents/com.wagmios.backend.plist
    
else
    sudo systemctl stop wagmios-frontend.service
    sudo systemctl stop wagmios-backend.service
    
fi
EOL

##################################################################################################

##################################################################################################

# Setup backend
#cd into backend-go and start service
cd "$HOME/wagmios/backend-go"
echo "Setting up backend..."
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
######################################################################################################    


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

######################################################################################################

# Check if frontend is responding
# Get network IP
if [ "$OS_TYPE" = "macos" ]; then
    IP_ADDR=$(ipconfig getifaddr en0 || ipconfig getifaddr en1)
else
    IP_ADDR=$(hostname -I | awk '{print $1}')
fi

# Final success message
echo "
🎉 Installation Complete! Your WagmiOS Environment is Ready!

Access your applications at:
💾 WagmiOS: http://localhost:5174 or http://${IP_ADDR}:5174

Services are running and will automatically start on system boot.
"
echo "Use ./start-services.sh to start all services"
echo "Use ./stop-services.sh to stop all services"


fi  # Close the Linux-specific service configuration block
fi      # Close the OS type check block
