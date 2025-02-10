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

echo "Starting ElizaOS Installation..."
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
        sudo /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    fi
    
    # Install macOS dependencies with sudo
     brew install \
        curl \
        git \
        wget \
        gnupg \
        dos2unix \
        docker \
        docker-buildx

    # Start Docker service if not running
    if ! docker info &> /dev/null; then
        echo "Starting Docker service..."
        sudo open -a Docker
        # Wait for Docker to start
        while ! docker info &> /dev/null; do
            echo "Waiting for Docker to start..."
            sleep 2
        done
    fi

    # Add user to docker group & Enable and start buildx
    sudo usermod -aG docker $USER
    sudo newgrp docker

elif [ "$OS_TYPE" = "linux" ]; then
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
            docker-buildx-plugin
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
            docker-buildx-plugin
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
            docker-buildx

    fi

    # Install Docker if not present (Linux)
    if ! command -v docker &> /dev/null; then
        echo "Installing Docker..."
        curl -fsSL https://get.docker.com -o get-docker.sh
        sudo sh get-docker.sh
        sudo usermod -aG docker $USER
        
        # Start Docker service
        sudo systemctl start docker
        sudo systemctl enable docker
    fi

    # Set proper permissions for Docker
    sudo systemctl restart docker
    
    # Wait for Docker permissions to take effect
    echo "Waiting for Docker permissions to be applied..."
    sleep 5
fi

# Install NVM
echo "Installing NVM..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install Node.js 23.3.0
echo "Installing Node.js 23.3.0..."
nvm install 23.3.0
nvm use 23.3.0

# Install pnpm
echo "Installing pnpm..."
curl -fsSL https://get.pnpm.io/install.sh | sh -
export PNPM_HOME="$HOME/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"

# Check for existing Eliza installation and version
check_eliza_version() {
    local REQUIRED_VERSION="v0.1.8"
    local ELIZA_DIR="$HOME/WagmiOS/elizaos/eliza"
    
    # Check if directory exists
    if [ ! -d "$ELIZA_DIR" ]; then
        echo "Eliza not found. Need to install."
        return 1
    fi
    
    # Check if it's a git repository
    if [ ! -d "$ELIZA_DIR/.git" ]; then
        echo "Existing Eliza installation is not a git repository. Need to reinstall."
        return 1
    fi
    
    # Get current version
    cd "$ELIZA_DIR"
    local CURRENT_VERSION=$(git describe --tags --exact-match 2>/dev/null)
    
    if [ "$CURRENT_VERSION" = "$REQUIRED_VERSION" ]; then
        echo "Correct Eliza version ($REQUIRED_VERSION) already installed."
        return 0
    else
        echo "Incorrect Eliza version. Found: ${CURRENT_VERSION:-unknown}, Required: $REQUIRED_VERSION"
        return 1
    fi
}

# Check Eliza installation before proceeding
echo "Checking Eliza installation..."
if check_eliza_version; then
    echo "Using existing Eliza installation."
else
    echo "Installing Eliza..."
    cd ~/WagmiOS/elizaos/
    rm -rf eliza # Clean up any existing installation
    git clone --branch v0.1.8 --single-branch https://github.com/elizaOS/eliza.git
    cd eliza
fi

# Function to check if dependencies are installed and up to date
check_dependencies() {
    local PACKAGE_JSON="package.json"
    local NODE_MODULES="node_modules"
    local DIST="dist"

    # Check if package.json exists
    if [ ! -f "$PACKAGE_JSON" ]; then
        echo "Missing package.json. Cannot check dependencies."
        return 1
    fi

    # Check if node_modules exists
    if [ ! -d "$NODE_MODULES" ]; then
        echo "node_modules not found. Need to install dependencies."
        return 1
    fi

    # Check if dist exists
    if [ ! -d "$DIST" ]; then
        echo "dist directory not found. Need to build."
        return 1
    fi

    # Check if package.json is newer than node_modules
    if [ "$PACKAGE_JSON" -nt "$NODE_MODULES" ]; then
        echo "package.json is newer than node_modules. Need to update dependencies."
        return 1
    fi

    # Check if any source files are newer than dist
    if [ -n "$(find src -type f -newer "$DIST" 2>/dev/null)" ]; then
        echo "Source files have changed. Need to rebuild."
        return 1
    fi

    echo "Dependencies are up to date."
    return 0
}

# Now check dependencies
echo "Checking dependencies..."
if ! check_dependencies; then
    echo "Installing dependencies..."
    pnpm install --no-frozen-lockfile
    echo "Building project..."
    pnpm build
else
    echo "Dependencies are up to date. Skipping installation and build."
fi

# Continue with .env configuration
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cp .env.example .env
fi

# Interactive .env configuration
read -p "Would you like to set up your .env file? (y/N): " setup_env
if [[ $setup_env =~ ^[Yy]$ ]]; then
    # Discord Integration
    read -p "Set up Discord integration? (y/N): " setup_discord
    if [[ $setup_discord =~ ^[Yy]$ ]]; then
        read -p "Discord Application ID: " discord_app_id
        read -p "Discord API Token: " discord_token
        read -p "Discord Voice Channel ID (optional): " discord_voice_id
        
        sed -i.bak "s/DISCORD_APPLICATION_ID=/DISCORD_APPLICATION_ID=$discord_app_id/" .env
        sed -i.bak "s/DISCORD_API_TOKEN=/DISCORD_API_TOKEN=$discord_token/" .env
        sed -i.bak "s/DISCORD_VOICE_CHANNEL_ID=/DISCORD_VOICE_CHANNEL_ID=$discord_voice_id/" .env
    fi

    # Twitter Integration
    read -p "Set up Twitter integration? (y/N): " setup_twitter
    if [[ $setup_twitter =~ ^[Yy]$ ]]; then
        read -p "Twitter Username: " twitter_username
        read -s -p "Twitter Password: " twitter_password
        echo
        read -p "Twitter Email: " twitter_email
        read -s -p "Twitter 2FA Secret (if applicable): " twitter_2fa
        echo

        sed -i.bak "s/TWITTER_USERNAME=/TWITTER_USERNAME=$twitter_username/" .env
        sed -i.bak "s/TWITTER_PASSWORD=/TWITTER_PASSWORD=$twitter_password/" .env
        sed -i.bak "s/TWITTER_EMAIL=/TWITTER_EMAIL=$twitter_email/" .env
        sed -i.bak "s/TWITTER_2FA_SECRET=/TWITTER_2FA_SECRET=$twitter_2fa/" .env
    fi

    # OpenAI Integration
    read -p "Set up OpenAI integration? (y/N): " setup_openai
    if [[ $setup_openai =~ ^[Yy]$ ]]; then
        read -p "OpenAI API Key: " openai_key
        read -p "OpenAI API URL (press enter for default): " openai_url
        read -p "Small OpenAI Model (press enter for gpt-4o-mini): " small_model
        read -p "Medium OpenAI Model (press enter for gpt-4o): " medium_model
        read -p "Large OpenAI Model (press enter for gpt-4o): " large_model
        read -p "Embedding OpenAI Model (press enter for text-embedding-3-small): " embedding_model
        read -p "Image OpenAI Model (press enter for dall-e-3): " image_model
        read -p "Use OpenAI Embedding? (TRUE/false): " use_embedding

        sed -i.bak "s/OPENAI_API_KEY=/OPENAI_API_KEY=$openai_key/" .env
        [[ ! -z "$openai_url" ]] && sed -i.bak "s/OPENAI_API_URL=/OPENAI_API_URL=$openai_url/" .env
        [[ ! -z "$small_model" ]] && sed -i.bak "s/SMALL_OPENAI_MODEL=/SMALL_OPENAI_MODEL=$small_model/" .env
        [[ ! -z "$medium_model" ]] && sed -i.bak "s/MEDIUM_OPENAI_MODEL=/MEDIUM_OPENAI_MODEL=$medium_model/" .env
        [[ ! -z "$large_model" ]] && sed -i.bak "s/LARGE_OPENAI_MODEL=/LARGE_OPENAI_MODEL=$large_model/" .env
        [[ ! -z "$embedding_model" ]] && sed -i.bak "s/EMBEDDING_OPENAI_MODEL=/EMBEDDING_OPENAI_MODEL=$embedding_model/" .env
        [[ ! -z "$image_model" ]] && sed -i.bak "s/IMAGE_OPENAI_MODEL=/IMAGE_OPENAI_MODEL=$image_model/" .env
        [[ ! -z "$use_embedding" ]] && sed -i.bak "s/USE_OPENAI_EMBEDDING=/USE_OPENAI_EMBEDDING=$use_embedding/" .env
    fi

    # Eternals Integration
    read -p "Set up Eternals integration? (y/N): " setup_eternals
    if [[ $setup_eternals =~ ^[Yy]$ ]]; then
        read -p "Eternals AI URL: " eternal_url
        read -p "Eternals AI Model (press enter for default): " eternal_model
        read -p "Eternals Chain ID (press enter for 45762): " chain_id
        read -p "Eternals API Key: " eternal_key

        sed -i.bak "s/ETERNALAI_URL=/ETERNALAI_URL=$eternal_url/" .env
        [[ ! -z "$eternal_model" ]] && sed -i.bak "s/ETERNALAI_MODEL=/ETERNALAI_MODEL=$eternal_model/" .env
        [[ ! -z "$chain_id" ]] && sed -i.bak "s/ETERNALAI_CHAIN_ID=/ETERNALAI_CHAIN_ID=$chain_id/" .env
        sed -i.bak "s/ETERNALAI_API_KEY=/ETERNALAI_API_KEY=$eternal_key/" .env
    fi

    # Hyperbolic Integration
    read -p "Set up Hyperbolic integration? (y/N): " setup_hyperbolic
    if [[ $setup_hyperbolic =~ ^[Yy]$ ]]; then
        read -p "Hyperbolic API Key: " hyperbolic_key
        read -p "Hyperbolic Model: " hyperbolic_model
        read -p "Image Hyperbolic Model (press enter for FLUX.1-dev): " image_model
        read -p "Small Hyperbolic Model (press enter for meta-llama/Llama-3.2-3B-Instruct): " small_model
        read -p "Medium Hyperbolic Model (press enter for meta-llama/Meta-Llama-3.1-70B-Instruct): " medium_model
        read -p "Large Hyperbolic Model (press enter for meta-llama/Meta-Llama-3.1-405-Instruct): " large_model

        sed -i.bak "s/HYPERBOLIC_API_KEY=/HYPERBOLIC_API_KEY=$hyperbolic_key/" .env
        sed -i.bak "s/HYPERBOLIC_MODEL=/HYPERBOLIC_MODEL=$hyperbolic_model/" .env
        [[ ! -z "$image_model" ]] && sed -i.bak "s/IMAGE_HYPERBOLIC_MODEL=/IMAGE_HYPERBOLIC_MODEL=$image_model/" .env
        [[ ! -z "$small_model" ]] && sed -i.bak "s/SMALL_HYPERBOLIC_MODEL=/SMALL_HYPERBOLIC_MODEL=$small_model/" .env
        [[ ! -z "$medium_model" ]] && sed -i.bak "s/MEDIUM_HYPERBOLIC_MODEL=/MEDIUM_HYPERBOLIC_MODEL=$medium_model/" .env
        [[ ! -z "$large_model" ]] && sed -i.bak "s/LARGE_HYPERBOLIC_MODEL=/LARGE_HYPERBOLIC_MODEL=$large_model/" .env
    fi

    # OpenRouter Integration
    read -p "Set up OpenRouter integration? (y/N): " setup_openrouter
    if [[ $setup_openrouter =~ ^[Yy]$ ]]; then
        read -p "OpenRouter API Key: " openrouter_key
        read -p "OpenRouter Model (press enter for default): " openrouter_model
        read -p "Small OpenRouter Model: " small_model
        read -p "Medium OpenRouter Model: " medium_model
        read -p "Large OpenRouter Model: " large_model

        sed -i.bak "s/OPENROUTER_API_KEY=/OPENROUTER_API_KEY=$openrouter_key/" .env
        [[ ! -z "$openrouter_model" ]] && sed -i.bak "s/OPENROUTER_MODEL=/OPENROUTER_MODEL=$openrouter_model/" .env
        [[ ! -z "$small_model" ]] && sed -i.bak "s/SMALL_OPENROUTER_MODEL=/SMALL_OPENROUTER_MODEL=$small_model/" .env
        [[ ! -z "$medium_model" ]] && sed -i.bak "s/MEDIUM_OPENROUTER_MODEL=/MEDIUM_OPENROUTER_MODEL=$medium_model/" .env
        [[ ! -z "$large_model" ]] && sed -i.bak "s/LARGE_OPENROUTER_MODEL=/LARGE_OPENROUTER_MODEL=$large_model/" .env
    fi

    # Grok Integration
    read -p "Set up Grok integration? (y/N): " setup_grok
    if [[ $setup_grok =~ ^[Yy]$ ]]; then
        read -p "Grok API Key: " grok_key
        read -p "Small Grok Model (press enter for grok-2-1212): " small_model
        read -p "Medium Grok Model (press enter for grok-2-1212): " medium_model
        read -p "Large Grok Model (press enter for grok-2-1212): " large_model
        read -p "Embedding Grok Model (press enter for grok-2-1212): " embedding_model

        sed -i.bak "s/GROK_API_KEY=/GROK_API_KEY=$grok_key/" .env
        [[ ! -z "$small_model" ]] && sed -i.bak "s/SMALL_GROK_MODEL=/SMALL_GROK_MODEL=$small_model/" .env
        [[ ! -z "$medium_model" ]] && sed -i.bak "s/MEDIUM_GROK_MODEL=/MEDIUM_GROK_MODEL=$medium_model/" .env
        [[ ! -z "$large_model" ]] && sed -i.bak "s/LARGE_GROK_MODEL=/LARGE_GROK_MODEL=$large_model/" .env
        [[ ! -z "$embedding_model" ]] && sed -i.bak "s/EMBEDDING_GROK_MODEL=/EMBEDDING_GROK_MODEL=$embedding_model/" .env
    fi

    # Ollama Integration
    read -p "Set up Ollama integration? (y/N): " setup_ollama
    if [[ $setup_ollama =~ ^[Yy]$ ]]; then
        read -p "Ollama Server URL (press enter for localhost:11434): " ollama_url
        read -p "Ollama Model: " ollama_model
        read -p "Use Ollama Embedding? (TRUE/false): " use_embedding
        read -p "Ollama Embedding Model (press enter for mxbai-embed-large): " embedding_model
        read -p "Small Ollama Model (press enter for llama3.2): " small_model
        read -p "Medium Ollama Model (press enter for hermes3): " medium_model
        read -p "Large Ollama Model (press enter for hermes3:70b): " large_model

        [[ ! -z "$ollama_url" ]] && sed -i.bak "s/OLLAMA_SERVER_URL=/OLLAMA_SERVER_URL=$ollama_url/" .env
        sed -i.bak "s/OLLAMA_MODEL=/OLLAMA_MODEL=$ollama_model/" .env
        [[ ! -z "$use_embedding" ]] && sed -i.bak "s/USE_OLLAMA_EMBEDDING=/USE_OLLAMA_EMBEDDING=$use_embedding/" .env
        [[ ! -z "$embedding_model" ]] && sed -i.bak "s/OLLAMA_EMBEDDING_MODEL=/OLLAMA_EMBEDDING_MODEL=$embedding_model/" .env
        [[ ! -z "$small_model" ]] && sed -i.bak "s/SMALL_OLLAMA_MODEL=/SMALL_OLLAMA_MODEL=$small_model/" .env
        [[ ! -z "$medium_model" ]] && sed -i.bak "s/MEDIUM_OLLAMA_MODEL=/MEDIUM_OLLAMA_MODEL=$medium_model/" .env
        [[ ! -z "$large_model" ]] && sed -i.bak "s/LARGE_OLLAMA_MODEL=/LARGE_OLLAMA_MODEL=$large_model/" .env
    fi
fi

# Character Selection
read -p "Would you like to select a character? (y/N): " select_character
if [[ $select_character =~ ^[Yy]$ ]]; then
    echo "Available characters:"
    characters=(characters/*.character.json)
    for i in "${!characters[@]}"; do
        filename=$(basename "${characters[$i]}" .character.json)
        echo "$((i+1)). $filename"
    done
    
    read -p "Select character number: " char_num
    if [[ $char_num -ge 1 && $char_num -le ${#characters[@]} ]]; then
        selected_character=$(basename "${characters[$((char_num-1))]}")
        # Start in background with nohup
        nohup pnpm start --character="characters/$selected_character" > /tmp/elizaos.log 2>&1 &
        echo $! > /tmp/elizaos_service
        echo "Started ElizaOS with character: $selected_character (PID: $(cat /tmp/elizaos_service))"
    else
        echo "Invalid selection. Starting with default character..."
        nohup pnpm start > /tmp/elizaos.log 2>&1 &
        echo $! > /tmp/elizaos_service
        echo "Started ElizaOS with default character (PID: $(cat /tmp/elizaos_service))"
    fi
else
    nohup pnpm start > /tmp/elizaos.log 2>&1 &
    echo $! > /tmp/elizaos_service
    echo "Started ElizaOS with default character (PID: $(cat /tmp/elizaos_service))"
fi

# Wait for ElizaOS to initialize
echo "Waiting for ElizaOS to initialize..."
while ! nc -z localhost 3000; do   
    sleep 1
done
echo "ElizaOS is running!"

# Get IP address before final message
if [ "$OS_TYPE" = "macos" ]; then
    IP_ADDR=$(ipconfig getifaddr en0 || ipconfig getifaddr en1)
else
    IP_ADDR=$(hostname -I | awk '{print $1}')
fi

# Final message
echo "
🎉 Installation Complete! Your WagmiOS Environment is Ready!

Services have been installed and will automatically start on system boot.

Access your dashboard at:
📊 Local: http://localhost:8080
📊 Network: http://${IP_ADDR}:8080

Service Management:
------------------
Start services:  ./start.sh
Stop services:   ./kill.sh

Service Status:
--------------"

if [ "$OS_TYPE" = "linux" ]; then
    systemctl status elizaos.service --no-pager
    systemctl status wagmios.service --no-pager
else
    launchctl list | grep elizaos
    launchctl list | grep wagmios
fi

# Install Go dependencies based on OS
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

# Create systemd service files for WagmiOS and ElizaOS
if [ "$OS_TYPE" = "linux" ]; then
    # Create ElizaOS service
    sudo tee /etc/systemd/system/elizaos.service > /dev/null << EOL
[Unit]
Description=ElizaOS Agent
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$HOME/WagmiOS/elizaos/eliza
Environment=PATH=$PATH:/usr/local/go/bin:$HOME/go/bin
ExecStart=/usr/bin/pnpm start --character=\${LAST_CHARACTER:-characters/default.character.json}
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOL

    # Create WagmiOS service
    sudo tee /etc/systemd/system/wagmios.service > /dev/null << EOL
[Unit]
Description=WagmiOS Dashboard
After=network.target elizaos.service

[Service]
Type=simple
User=$USER
WorkingDirectory=$HOME/WagmiOS/wagmios
Environment=PATH=$PATH:/usr/local/go/bin:$HOME/go/bin
Environment=GOPATH=$HOME/go
Environment=PORT=8080
ExecStart=/usr/local/go/bin/go run cmd/server/main.go
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOL

    # Store last used character
    sudo tee /etc/profile.d/elizaos-character.sh > /dev/null << EOL
export LAST_CHARACTER="characters/\${selected_character:-default.character.json}"
EOL

    # Reload systemd and enable services
    sudo systemctl daemon-reload
    sudo systemctl enable elizaos.service
    sudo systemctl enable wagmios.service
    sudo systemctl start elizaos.service
    sudo systemctl start wagmios.service

elif [ "$OS_TYPE" = "macos" ]; then
    # Create LaunchAgents for macOS
    mkdir -p ~/Library/LaunchAgents

    # Create ElizaOS plist
    cat > ~/Library/LaunchAgents/com.elizaos.agent.plist << EOL
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.elizaos.agent</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/pnpm</string>
        <string>start</string>
        <string>--character=\${LAST_CHARACTER:-characters/default.character.json}</string>
    </array>
    <key>WorkingDirectory</key>
    <string>$HOME/WagmiOS/elizaos/eliza</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/tmp/elizaos.log</string>
    <key>StandardErrorPath</key>
    <string>/tmp/elizaos.error.log</string>
</dict>
</plist>
EOL

    # Create WagmiOS plist
    cat > ~/Library/LaunchAgents/com.wagmios.dashboard.plist << EOL
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.wagmios.dashboard</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/go/bin/go</string>
        <string>run</string>
        <string>cmd/server/main.go</string>
    </array>
    <key>WorkingDirectory</key>
    <string>$HOME/WagmiOS/wagmios</string>
    <key>EnvironmentVariables</key>
    <dict>
        <key>PORT</key>
        <string>8080</string>
    </dict>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/tmp/wagmios.log</string>
    <key>StandardErrorPath</key>
    <string>/tmp/wagmios.error.log</string>
</dict>
</plist>
EOL

    # Load the services
    launchctl load ~/Library/LaunchAgents/com.elizaos.agent.plist
    launchctl load ~/Library/LaunchAgents/com.wagmios.dashboard.plist
fi

# Update start.sh and kill.sh for service management
cat > start.sh << EOL
#!/bin/bash

if [ "\$(uname)" == "Darwin" ]; then
    # macOS
    launchctl load ~/Library/LaunchAgents/com.elizaos.agent.plist
    launchctl load ~/Library/LaunchAgents/com.wagmios.dashboard.plist
    echo "Services started. Dashboard available at http://localhost:8080"
else
    # Linux
    sudo systemctl start elizaos.service
    sudo systemctl start wagmios.service
    echo "Services started. Dashboard available at http://localhost:8080"
fi
EOL

cat > kill.sh << EOL
#!/bin/bash

if [ "\$(uname)" == "Darwin" ]; then
    # macOS
    launchctl unload ~/Library/LaunchAgents/com.elizaos.agent.plist
    launchctl unload ~/Library/LaunchAgents/com.wagmios.dashboard.plist
    echo "Services stopped"
else
    # Linux
    sudo systemctl stop elizaos.service
    sudo systemctl stop wagmios.service
    echo "Services stopped"
fi
EOL

chmod +x start.sh kill.sh 
