# Docker Installation Guide

**Ask the user for permission before attempting Docker installation.**

---

## Pre-Installation Check

Before installing Docker, verify the system doesn't already have it:

```
$ docker --version
$ docker ps
```

If Docker is already installed but not running, ask the user to start it (e.g., Docker Desktop on Mac/Windows, `systemctl start docker` on Linux).

---

## Installation by OS

### macOS

**Recommended: Docker Desktop**

1. Download Docker Desktop from: https://docs.docker.com/desktop/install/mac-install/
2. Install the `.dmg` file
3. Start Docker Desktop from Applications
4. Verify: `docker --version`

**Alternative: Homebrew**
```bash
brew install --cask docker
open /Applications/Docker.app
```

**After install, ask the user to start Docker Desktop if not already running.**

---

### Windows

**Recommended: Docker Desktop**

1. Download Docker Desktop from: https://docs.docker.com/desktop/install/windows-install/
2. Run the installer (`.exe`)
3. Restart the machine if prompted
4. Start Docker Desktop from the Start menu
5. Verify: `docker --version`

**WSL2 backend** is recommended for best performance on Windows.

**After install, ask the user to start Docker Desktop if not already running.**

---

### Linux (Ubuntu/Debian)

```bash
# Remove old versions
sudo apt-get remove docker docker-engine docker.io containerd runc

# Install prerequisites
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg lsb-release

# Add Docker GPG key
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Add Docker repo
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list

# Install Docker
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Add user to docker group (avoid sudo for docker commands)
sudo usermod -aG docker $USER

# Start Docker
sudo systemctl start docker
sudo systemctl enable docker
```

---

### Linux (CentOS/RHEL/Fedora)

```bash
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl start docker
sudo systemctl enable docker
```

---

### Linux (Arch)

```bash
sudo pacman -S docker docker-compose
sudo systemctl start docker
sudo systemctl enable docker
```

---

## Post-Installation Verification

After Docker is installed, verify with:

```bash
docker --version
docker ps
```

Both should succeed without errors. If `docker ps` returns an empty list but no error, Docker is running correctly.

---

## Docker Desktop Specific Notes

### macOS
- Docker Desktop must be running (check menu bar icon)
- If the icon is gray, Docker Desktop is stopped — ask user to start it
- Resources: Settings → Resources to allocate CPU/RAM

### Windows
- Docker Desktop must be running (check system tray)
- Enable WSL2 backend for best performance
- If Hyper-V is not available, Docker Desktop will prompt to enable it

---

## Common Issues

### Linux: Permission denied after install
```bash
sudo usermod -aG docker $USER
# Log out and back in for group change to take effect
```

### macOS/Windows: Docker Desktop won't start
- Ensure hardware virtualization is enabled in BIOS
- Check that no other VM (VirtualBox, etc.) is using the same hypervisor
- Restart Docker Desktop

### All platforms: "Cannot connect to the Docker daemon"
- Docker is not running — start it (Docker Desktop on Mac/Windows, `systemctl start docker` on Linux)
- Permission issue — ensure user is in docker group (Linux)

---

## Installation Prompts to Use

**Ask for permission:**
> "Docker is not installed or not running on your system. May I guide you through installing it? The process takes a few minutes depending on your OS."

**After install:**
> "Docker is installed. Please start Docker Desktop (or run `sudo systemctl start docker` on Linux) if it hasn't started automatically, then let me know and I'll continue."

---

## Important Notes

1. **Linux servers** — Docker installation requires `sudo`. Guide the user through the commands.
2. **Mac/Windows** — Docker Desktop is the standard method. Homebrew is an alternative on Mac.
3. **Corporate systems** — Some IT policies block Docker Desktop. Check with IT if installation fails.
4. **Raspberry Pi / ARM** — Use the ARM-specific Docker install for Raspberry Pi OS or ARM-based Linux.
