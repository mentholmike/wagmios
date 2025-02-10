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
        redis \
        mongodb-community

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
            python3 \
            python3-pip \
            nodejs \
            npm \
            sass \
            postgresql \
            redis \
            mongodb \
            golang-go
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
            mongodb \
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
            mongodb \
            golang-go

    fi
fi

# Install NVM and Node.js
echo "Installing NVM..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install Node.js LTS
echo "Installing Node.js LTS..."
nvm install --lts
nvm use --lts

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
    http-server

# Install Go and dependencies
echo "Installing Go dependencies..."
go install github.com/gorilla/mux@latest
go install github.com/rs/cors@latest
go install github.com/joho/godotenv@latest
go install github.com/lib/pq@latest
go install go.mongodb.org/mongo-driver@latest
go install github.com/go-redis/redis/v8@latest

# Install Python dependencies
echo "Installing Python dependencies..."
pip3 install --user \
    requests \
    websockets \
    python-dotenv \
    asyncio

# Setup directory structure and repositories
echo "Setting up project structure..."

# Define base directory using current user's home directory
BASE_DIR="$HOME/wagmios"

# Check and create base directory if needed
if [ ! -d "$BASE_DIR" ]; then
    echo "Creating base directory at $BASE_DIR"
    mkdir -p "$BASE_DIR"
else
    echo "Base directory already exists, skipping creation"
fi

# Clone and setup Eliza if not exists
ELIZA_DIR="$BASE_DIR/elizaos/eliza"
if [ ! -d "$ELIZA_DIR" ]; then
    echo "Setting up Eliza..."
    mkdir -p "$BASE_DIR/elizaos"
    cd "$BASE_DIR/elizaos"
    git clone https://github.com/elizaOS/eliza.git
    cd eliza
    pnpm install --no-frozen-lockfile
    pnpm build
else
    echo "Eliza directory already exists, skipping clone"
    cd "$ELIZA_DIR"
    echo "Updating Eliza dependencies..."
    git pull
    pnpm install --no-frozen-lockfile
    pnpm build

fi

# Clone and setup WagmiOS if not exists
WAGMI_DIR="$BASE_DIR/wagmios"
if [ ! -d "$WAGMI_DIR" ]; then
    echo "Setting up WagmiOS..."
    cd "$BASE_DIR"
    git clone https://github.com/mentholmike/wagmios.git
    cd wagmios
else
    echo "WagmiOS directory already exists, skipping clone"
    cd "$WAGMI_DIR"
    
fi

# Setup frontend
if [ -d "$WAGMI_DIR/frontend" ]; then
    echo "Setting up frontend..."
    cd "$WAGMI_DIR/frontend"
    if [ ! -d "node_modules" ]; then
        echo "Installing frontend dependencies..."
        pnpm install
    else
        echo "Frontend dependencies already installed"
    fi
    pnpm build
else
    echo "Frontend directory not found, please check repository structure"
    exit 1
fi

# Setup backend
if [ -d "$WAGMI_DIR/backend-go" ]; then
    echo "Setting up backend..."
    cd "$WAGMI_DIR/backend-go"
    
    # Check if go.mod exists and is properly configured
    if [ -f "go.mod" ]; then
        echo "Go modules already initialized, updating dependencies..."
        go mod tidy
    else
        echo "Initializing Go modules..."
        go mod init wagmios
        go mod tidy
    fi
    
    # Only build if source files exist
    if [ -d "cmd" ] && [ -d "internal" ]; then
        echo "Building backend..."
        go build ./...
    else
        echo "Backend source directories found, using existing structure"
    fi
else
    echo "Backend directory not found, please check repository structure"
    exit 1
fi

# Step 5: Dependency Management
check_dependencies() {
    local PACKAGE_JSON="package.json"
    local NODE_MODULES="node_modules"
    local DIST="dist"

    if [ ! -f "$PACKAGE_JSON" ]; then
        echo "Missing package.json. Cannot check dependencies."
        return 1
    fi

    if [ ! -d "$NODE_MODULES" ]; then
        echo "node_modules not found. Need to install dependencies."
        return 1
    fi

    if [ ! -d "$DIST" ]; then
        echo "dist directory not found. Need to build."
        return 1
    fi

    if [ "$PACKAGE_JSON" -nt "$NODE_MODULES" ]; then
        echo "package.json is newer than node_modules. Need to update dependencies."
        return 1
    fi

    if [ -n "$(find src -type f -newer "$DIST" 2>/dev/null)" ]; then
        echo "Source files have changed. Need to rebuild."
        return 1
    fi

    echo "Dependencies are up to date."
    return 0
}

# Step 6: Check Eliza Version
check_eliza_version() {
    local REQUIRED_VERSION="v0.1.8"
    local ELIZA_DIR="$HOME/wagmios/elizaos/eliza"
    
    if [ ! -d "$ELIZA_DIR" ]; then
        echo "Eliza not found. Need to install."
        return 1
    fi
    
    if [ ! -d "$ELIZA_DIR/.git" ]; then
        echo "Existing Eliza installation is not a git repository. Need to reinstall."
        return 1
    fi
    
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

# Step 7: Setup Eliza Environment
echo "Setting up Eliza environment..."
cd "$HOME/wagmios/elizaos/eliza"
pnpm install --no-frozen-lockfile
pnpm build

# Setup .env if needed
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cp .env.example .env
    
    read -p "Would you like to configure your .env file? (y/N): " setup_env
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
fi

# Create logs directory if it doesn't exist
if [ ! -d "logs" ]; then
    echo "Creating logs directory..."
    mkdir -p logs
fi

# Character Selection and Service Start
read -p "Would you like to select a character? (y/N): " select_character
if [[ $select_character =~ ^[Yy]$ ]]; then
    echo "Available characters:"
    characters=(characters/*.character.json)
    # Add custom option
    echo "Available characters:"
    for i in "${!characters[@]}"; do
        filename=$(basename "${characters[$i]}" .character.json)
        echo "$((i+1)). $filename"
    done
    echo "$((${#characters[@]}+1)). Custom Character"
    
    read -p "Select character number: " char_num
    
    if [ "$char_num" -eq "$((${#characters[@]}+1))" ]; then
        # Custom character creation
        read -p "Enter your character's name: " char_name
        echo "For detailed character formatting and options, please visit: https://elizagen.howieduhzit.best/"
        echo "A basic character.json will be created. You can edit it later with more details."
        
        # Create basic character.json template
        cat > "characters/${char_name}.character.json" << EOF
{
    "name": "${char_name}",
    "bio": "Enter bio here",
    "lore": "Enter lore here",
    "style": {
        "general": "Enter general style here",
        "chat": "Enter chat style here",
        "post": "Enter post style here"
    }
}
EOF
        selected_character="${char_name}.character.json"
        echo "Created basic character template at characters/${selected_character}"
        echo "Please edit this file with your character details"
        
    elif [[ $char_num -ge 1 && $char_num -le ${#characters[@]} ]]; then
        selected_character=$(basename "${characters[$((char_num-1))]}")
    else
        echo "Invalid selection. Starting with default character..."
        selected_character="default.character.json"
    fi

    # Start Eliza with selected character in background with logging
    echo "Starting Eliza with character: $selected_character"
    nohup pnpm start --character="characters/$selected_character" > logs/eliza.log 2>&1 &
    echo $! > /tmp/elizaos.pid
else
    # Start with default character
    nohup pnpm start > logs/eliza.log 2>&1 &
    echo $! > /tmp/elizaos.pid
fi

# Wait for Eliza to initialize
echo "Waiting for Eliza to initialize..."
until curl -s http://localhost:3000 >/dev/null; do
    sleep 1
done
echo "Eliza is running!"

# Step 8: Start Eliza Client Service
echo "Starting Eliza client service..."
cd "$HOME/wagmios/elizaos/eliza"
systemctl --user start elizaos-client
sleep 7

# Step 9: Setup and Start Backend
echo "Setting up backend..."
cd "$HOME/wagmios/backend-go"
go mod tidy
go build ./...
systemctl --user start wagmios-backend
sleep 7

# Step 10: Setup Frontend
echo "Setting up frontend..."
cd "$HOME/wagmios/frontend"
pnpm install
pnpm build

# Step 11: Start Frontend Service
echo "Starting frontend service..."
# First test the dev server
pnpm run dev &
PID=$!
sleep 5

# Check if frontend is responding
if curl -s http://localhost:5174 >/dev/null; then
    kill $PID
    systemctl --user start wagmios-frontend
else
    echo "Frontend failed to start properly"
    exit 1
fi

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
🤖 Eliza Chat: http://localhost:5173 or http://${IP_ADDR}:5173
🌐 WagmiOS: http://localhost:5174 or http://${IP_ADDR}:5174

Services are running and will automatically start on system boot.
"

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

# Verify Go installation
go version

# Service Configuration Section
echo "Setting up system services..."

if [ "$OS_TYPE" = "linux" ]; then
    # Create ElizaOS service
    sudo tee /etc/systemd/system/elizaos.service > /dev/null << EOL
[Unit]
Description=ElizaOS Service
After=network.target
Before=wagmios-backend.service wagmios-frontend.service

[Service]
Type=simple
User=$USER
WorkingDirectory=$HOME/WagmiOS/elizaos/eliza
Environment=PATH=$PATH:/usr/local/bin:$HOME/.local/share/pnpm
ExecStart=/usr/local/bin/pnpm start
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOL

    # Create WagmiOS Backend service
    sudo tee /etc/systemd/system/wagmios-backend.service > /dev/null << EOL
[Unit]
Description=WagmiOS Backend Service
After=network.target elizaos.service
Before=wagmios-frontend.service
Requires=elizaos.service

[Service]
Type=simple
User=$USER
WorkingDirectory=$HOME/WagmiOS/wagmios/backend-go
Environment=PATH=$PATH:/usr/local/go/bin:$HOME/go/bin
Environment=GOPATH=$HOME/go
ExecStart=/usr/local/go/bin/go run cmd/server/main.go
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOL

    # Create WagmiOS Frontend service
    sudo tee /etc/systemd/system/wagmios-frontend.service > /dev/null << EOL
[Unit]
Description=WagmiOS Frontend Service
After=network.target wagmios-backend.service
Requires=wagmios-backend.service

[Service]
Type=simple
User=$USER
WorkingDirectory=$HOME/WagmiOS/wagmios/frontend
Environment=PATH=$PATH:/usr/local/bin:$HOME/.local/share/pnpm
ExecStart=/usr/local/bin/pnpm dev
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOL

    # Enable and start services in order
    sudo systemctl daemon-reload
    sudo systemctl enable elizaos.service
    sudo systemctl enable wagmios-backend.service
    sudo systemctl enable wagmios-frontend.service
    
    # Start services with proper delays
    sudo systemctl start elizaos.service
    sleep 15  # Wait for Eliza to fully initialize
    sudo systemctl start wagmios-backend.service
    sleep 10  # Wait for backend to fully initialize
    sudo systemctl start wagmios-frontend.service

elif [ "$OS_TYPE" = "macos" ]; then
    # Create LaunchAgents directory if it doesn't exist
    mkdir -p ~/Library/LaunchAgents

    # Create ElizaOS service
    cat > ~/Library/LaunchAgents/com.elizaos.plist << EOL
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.elizaos</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/pnpm</string>
        <string>start</string>
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
    <string>$HOME/WagmiOS/wagmios/backend-go</string>
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
    <string>$HOME/WagmiOS/wagmios/frontend</string>
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

    # Load services in order with delays
    launchctl load ~/Library/LaunchAgents/com.elizaos.plist
    sleep 15  # Wait for Eliza to fully initialize
    launchctl load ~/Library/LaunchAgents/com.wagmios.backend.plist
    sleep 10  # Wait for backend to fully initialize
    launchctl load ~/Library/LaunchAgents/com.wagmios.frontend.plist
fi

# Create convenience scripts for service management
cat > start-services.sh << EOL
#!/bin/bash
if [ "\$(uname)" == "Darwin" ]; then
    launchctl load ~/Library/LaunchAgents/com.elizaos.plist
    sleep 15
    launchctl load ~/Library/LaunchAgents/com.wagmios.backend.plist
    sleep 10
    launchctl load ~/Library/LaunchAgents/com.wagmios.frontend.plist
else
    sudo systemctl start elizaos.service
    sleep 15
    sudo systemctl start wagmios-backend.service
    sleep 10
    sudo systemctl start wagmios-frontend.service
fi
EOL

cat > stop-services.sh << EOL
#!/bin/bash
if [ "\$(uname)" == "Darwin" ]; then
    launchctl unload ~/Library/LaunchAgents/com.wagmios.frontend.plist
    launchctl unload ~/Library/LaunchAgents/com.wagmios.backend.plist
    launchctl unload ~/Library/LaunchAgents/com.elizaos.plist
else
    sudo systemctl stop wagmios-frontend.service
    sudo systemctl stop wagmios-backend.service
    sudo systemctl stop elizaos.service
fi
EOL

chmod +x start-services.sh stop-services.sh

echo "Services have been configured to start automatically on system boot in the correct order:"
echo "1. ElizaOS"
echo "2. WagmiOS Backend"
echo "3. WagmiOS Frontend"
echo ""
echo "Use ./start-services.sh to start all services"
echo "Use ./stop-services.sh to stop all services"

fi

# Update router configuration
if [ -f "$WAGMI_DIR/frontend/src/router/index.js" ]; then
    echo "Updating router configuration..."
    sed -i.bak '/path: .settings./d' "$WAGMI_DIR/frontend/src/router/index.js"
    sed -i.bak '/component: Settings/d' "$WAGMI_DIR/frontend/src/router/index.js"
    sed -i.bak '/import Settings/d' "$WAGMI_DIR/frontend/src/router/index.js"
    rm -f "$WAGMI_DIR/frontend/src/router/index.js.bak"
fi 
