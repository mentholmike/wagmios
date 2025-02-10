#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

# Function to check if Docker is installed
check_docker() {
  if ! command -v docker &> /dev/null; then
    echo -e "${RED}Docker is not installed. Installing Docker...${NC}"
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    rm get-docker.sh
  else
    echo -e "${GREEN}Docker is already installed${NC}"
  fi
}

# Function to check if Docker Compose is installed
check_docker_compose() {
  if ! command -v docker-compose &> /dev/null; then
    echo -e "${RED}Docker Compose is not installed. Installing Docker Compose...${NC}"
    sudo apt-get update
    sudo apt-get install -y docker-compose
  else
    echo -e "${GREEN}Docker Compose is already installed${NC}"
  fi
}

# Main setup function
setup() {
  echo "Starting ElizaOS setup..."
  
  # Check and install dependencies
  check_docker
  check_docker_compose
  
  # Copy environment file if it doesn't exist
  if [ ! -f .env ]; then
    cp .env.example .env
    echo -e "${GREEN}Created .env file${NC}"
  fi
  
  # Create characters directory if it doesn't exist
  mkdir -p characters
  
  # Build and start containers
  echo "Building and starting containers..."
  docker-compose up -d --build
  
  echo -e "${GREEN}Setup complete! ElizaOS is running at http://localhost:8080${NC}"
}

# Run setup
setup 