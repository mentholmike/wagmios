# <img src="logo/removed-background.png" height="48" align="middle" /> WAGMIOS

### Give your agent a homelab

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ed.svg?logo=docker)](https://www.docker.com/)
[![Go](https://img.shields.io/badge/Go-1.21+-00ADD8.svg?logo=go)](https://golang.org/)

**WAGMIOS** is a self-hosted Docker management platform built native for **OpenClaw agents**. Give your agent a scoped API key and it can manage your homelab — install apps, start/stop containers, pull images — with every action visible and auditable. Scope = permission. No sudo, no daemon access, just the exact access you grant.

> **Think of it as your homelab's command center.** Built for folks who want the power of Docker without memorizing every CLI flag.

---

## ✨ What It Does

- **🚀 One-Click Apps** — Install 34+ self-hosted apps from the [WAGMIOS Marketplace](https://marketplace.wagmilabs.fun) in seconds. Plex, Jellyfin, Ollama, Home Assistant, and more.
- **🐳 Container Management** — List, create, start, stop, restart, and delete containers through a clean REST API.
- **🔐 Scope-Based Permissions** — Give AI agents exactly the permissions they need. Nothing blanket. If the key doesn't have `containers:delete`, the agent can't delete anything.
- **🤖 OpenClaw-Native** — Built for OpenClaw agents. Every action is visible and auditable.
- **⚡ Real-Time Activity** — WebSocket-powered activity feed shows you everything happening in your homelab.

---

## 🏃 Quick Start

### Option 1 — Pull from Docker Hub (Recommended)

No build step. Images are pre-built for both x86_64 and ARM64.

```bash
# Download docker-compose.yaml
curl -O https://raw.githubusercontent.com/mentholmike/wagmios/main/docker-compose.yaml

# Start everything
docker compose up -d
```

### Option 2 — Build from Source

Clone the repo and build locally with Docker.

```bash
git clone https://github.com/mentholmike/wagmios.git
cd wagmios
docker compose up -d --build
```

> **Note:** Building from source requires Docker on your machine. On ARM64 (Apple Silicon, ARM Linux) no extra setup is needed — the images build for both architectures automatically.

### 3. Open the UI

| Service | URL |
|---------|-----|
| **Frontend** | http://localhost:5174 |
| **Backend API** | http://localhost:5179 |
| **Health** | http://localhost:5179/health |

### 4. Get Your API Key

On first launch, the Setup Wizard walks you through:
1. Name your API key (e.g. `openclaw-agent`, `home-assistant`)
2. Pick the permissions you want to grant
3. Copy your key and keep it safe

---

## 🔑 The Scope System Explained

Every WAGMIOS API key has **scopes** — granular permissions that control exactly what an agent can do.

```
┌─────────────────────────────────────────────────────────────┐
│  Your API Key Scopes                                        │
├─────────────────────────────────────────────────────────────┤
│  ✅ containers:read     → list containers, view logs        │
│  ✅ containers:write    → start, stop, create containers    │
│  ✅ containers:delete  → remove containers                  │
│  ✅ images:read        → list Docker images                 │
│  ✅ images:write       → pull and delete images             │
│  ✅ marketplace:read  → browse the app marketplace          │
│  ✅ marketplace:write → install and manage apps             │
└─────────────────────────────────────────────────────────────┘
```

**The rule is simple:** if the key doesn't have the scope, the API returns `SCOPE_REQUIRED`. The agent can't work around it.

---

## 🌐 Multi-Machine Management

WAGMIOS isn't just for one machine. Because the API is standard HTTP with an `X-API-Key` header, any OpenClaw agent that can reach your backend's port can manage that machine's Docker host — from anywhere.

**The model is simple:** one agent, many machines, each with its own scoped key.

### How It Works

1. Install WAGMIOS on each machine you want to manage
2. Each instance gets its own URL and its own set of API keys
3. Your agent holds one key per machine, each with only the scopes that machine needs
4. The agent can't cross machines, can't escalate its own permissions, and every action is logged in each instance's activity feed

> **Each WAGMIOS instance is fully independent.** There is no shared state, no cluster, no sync between instances. Each deployment is standalone.

### One Agent. Multiple Machines.

```mermaid
flowchart LR
    A["🤖 OpenClaw Agent"] -->|"Key A (read+write)\nnas.yourdomain.com:5179"| B["Machine A\nHomelab NAS"]
    A -->|"Key B (marketplace)\nmedia.yourdomain.com:5179"| C["Machine B\nMedia Server"]
    A -->|"Key C (images:write)\nvps.yourdomain.com:5179"| D["Machine C\nVPS"]

    style A fill:#F59E0B,color:#000
    style B fill:#111318,color:#e8eaf0,stroke:#00ADD8
    style C fill:#111318,color:#e8eaf0,stroke:#42D392
    style D fill:#111318,color:#e8eaf0,stroke:#2496ED
```

**Example dialogue:**

> **User:** "Install Jellyfin on the media server and make sure Nginx is running on the NAS."

```
Agent → POST media.yourdomain.com:5179/api/marketplace/create { "app_id": "jellyfin" }
Agent → GET nas.yourdomain.com:5179/api/containers
Agent → POST nas.yourdomain.com:5179/api/containers/nginx-proxy/start

"Jellyfin is installing on the media server (port 8096). Nginx is running on the NAS."
```

### Skill Setup

Give your agent one key per machine, label them clearly. Each key lives in your agent's skill config:

```yaml
wagmios_instances:
  nas:
    url: http://192.168.1.10:5179
    key: wag_live_xxxxxxxxxxxx
    scopes: [containers:read, containers:write]
    label: "Homelab NAS"

  media:
    url: http://192.168.1.20:5179
    key: wag_live_yyyyyyyyyyyy
    scopes: [marketplace:read, marketplace:write]
    label: "Media Server"

  vps:
    url: https://vps.yourdomain.com:5179
    key: wag_live_zzzzzzzzzzzz
    scopes: [containers:read, images:write]
    label: "VPS"
```

The agent knows which URL to hit for which machine — and the scope system ensures it can only do what you've explicitly allowed on each one.

### Security: Network Exposure

WAGMIOS binds to all interfaces (`0.0.0.0`) by default. That's fine on a trusted LAN — but if you're exposing it beyond your local network, follow these steps first:

| Environment | What to do |
|-------------|-------------|
| **Local LAN only** | No extra steps. Keep port 5179 firewalled from the internet. |
| **Internet / VPN** | Put a reverse proxy in front and terminate TLS there. Never send API keys over plain HTTP outside your LAN. |

**Treat your WAGMIOS API key like an SSH key.** Over a trusted LAN it's fine. Over the open internet, always use TLS.

**Caddy (automatic HTTPS):**
```yaml
wagmios.yourdomain.com {
  reverse_proxy localhost:5179
}
```

**Nginx:**
```nginx
server {
  listen 443 ssl;
  server_name wagmios.yourdomain.com;

  location / {
    proxy_pass http://localhost:5179;
  }
}
```

---

## 🤖 For AI Agents

WAGMIOS is designed to be controlled by AI agents through its API.

**Example dialogue:**

```
User: "Delete the test-nginx container"
Agent: "I need containers:delete scope to do that. 
        Go to Settings → Agent Permissions → toggle ON containers:delete → Save.
        Let me know when it's enabled."

User: "Done."
Agent: *deletes the container* → "Done. Container deleted."
```

**What agents can do with WAGMIOS:**
- Install and manage apps from the marketplace
- Start/stop containers based on your requests
- Monitor your homelab's status
- Pull Docker images

**What agents should only do through WAGMIOS:**
- Access Docker (the skill makes every action visible and auditable)
- Escalate their own permissions
- Delete system containers (wagmios-backend, wagmios-frontend)
- Read/write files outside the containers directory

---

## 🏪 WAGMIOS Marketplace

Browse 34+ pre-configured apps at [marketplace.wagmilabs.fun](https://marketplace.wagmilabs.fun) or directly in the app.

### Media & Entertainment
| App | Port | What It Is |
|-----|------|------------|
| Plex | 32400 | Stream movies, TV, music to any device |
| Jellyfin | 8096 | Free, open-source media server |
| Immich | 2283 | Self-hosted photo backup from your phone |

### Home Automation
| App | Port | What It Is |
|-----|------|------------|
| Home Assistant | 8123 | Open source smart home platform |

### AI & Local Models
| App | Port | What It Is |
|-----|------|------------|
| Ollama | 11434 | Run Llama, Mistral, and other open-source AI models locally |
| Open WebUI | 8080 | Chat interface for Ollama |

###arr Stack
| App | Port | What It Is |
|-----|------|------------|
| Sonarr | 8989 | Automatically download TV shows |
| Radarr | 7878 | Automatically download movies |
| Prowlarr | 9696 | Manage all your torrent indexers in one place |

### Monitoring
| App | Port | What It Is |
|-----|------|------------|
| Uptime Kuma | 3001 | Beautiful server monitoring dashboard |
| Grafana | 3000 | Visualize metrics and logs |
| Prometheus | 9090 | Time series database for metrics |

### Security
| App | Port | What It Is |
|-----|------|------------|
| Vaultwarden | 80 | Self-hosted Bitwarden password manager |

### Networking
| App | Port | What It Is |
|-----|------|------------|
| Nginx | 80 | Web server and reverse proxy |
| Pi-hole | 80 | Block ads network-wide |
| AdGuard Home | 3000 | DNS-level ad blocking |
| WireGuard | 51820 | Fast, modern VPN |

### And More...
Transmission, qBittorrent, Nextcloud, Filebrowser, Minecraft, n8n, RSSHub, and more.

---

## 🛠️ API Reference

**Base URL:** `http://localhost:5179`

**Auth:** All requests require the `X-API-Key` header.

### Containers

| Method | Endpoint | Scope Required |
|--------|----------|---------------|
| List | `GET /api/containers` | `containers:read` |
| Logs | `GET /api/containers/{id}/logs` | `containers:read` |
| Start | `POST /api/containers/{id}/start` | `containers:write` |
| Stop | `POST /api/containers/{id}/stop` | `containers:write` |
| Restart | `POST /api/containers/{id}/restart` | `containers:write` |
| Delete | `DELETE /api/containers/{id}/delete` | `containers:delete` |

### Images

| Method | Endpoint | Scope Required |
|--------|----------|---------------|
| List | `GET /api/images` | `images:read` |
| Pull | `POST /api/images/pull` | `images:write` |
| Delete | `DELETE /api/images/{id}` | `images:write` |

### Marketplace

| Method | Endpoint | Scope Required |
|--------|----------|---------------|
| Browse | `GET /api/marketplace` | `marketplace:read` |
| Install | `POST /api/marketplace/create` | `marketplace:write` |
| Start | `POST /api/marketplace/start` | `marketplace:write` |

### Auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| Status | `GET /api/auth/status` | Check key scopes |
| Settings | `GET /api/settings` | Key metadata |

---

## 🐳 Docker Management

### Start / Stop

```bash
# Start
docker compose up -d

# Stop
docker compose down

# View logs
docker compose logs -f backend
docker compose logs -f frontend
```

### Updating

**If you used Option 1 (Docker Hub):**
```bash
docker compose down
docker compose pull
docker compose up -d
```

**If you built from source:**
```bash
docker compose down
docker compose pull  # fetch latest Hub images
docker compose up -d --build
```

### Data Persistence

WAGMIOS uses named Docker volumes:

| Volume | What It Stores |
|--------|---------------|
| `wagmios_data` | API keys, settings, app data |
| `frontend_data` | Frontend assets |

Marketplace apps are stored in `~/.wagmios/containers/` on the host.

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `5179` | Backend port |
| `WAGMIOS_DATA_DIR` | `/app/data` | Data directory |
| `VITE_API_URL` | — | Frontend → Backend URL (auto-set in compose) |

---

## 🏗️ Architecture

```mermaid
flowchart LR
    A["🤖 OpenClaw Agent"] -->|X-API-Key| B["Go API<br/>:5179"]
    B -->|scope check| C["Docker Socket<br/>/var/run/docker.sock"]
    C -->|events| B
    B <-->|WebSocket| D["Vue UI<br/>:5174"]
    D -->|user actions| B

    subgraph Backend
    B --> E[middleware]
    B --> F[scope enforcement]
    B --> G[marketplace handler]
    B --> H[Docker socket proxy]
    end

    subgraph Data
    I["JSON flat-file<br/>wagmios_data volume"]
    E --> I
    F --> I
    end
```

### Tech Stack

| Layer | Technology |
|-------|------------|
| **Backend** | Go (`net/http`, `gorilla/mux`) |
| **Frontend** | Vue 3 + Vite + TypeScript |
| **Database** | JSON flat-files (keys, settings) |
| **Container Runtime** | Docker (via socket) |
| **UI** | TailwindCSS, custom dark mode |

See the [full tech stack page](https://wiki.wagmilabs.fun/stack.html) for dependencies, versions, and scope system reference.

---

## 📁 Project Structure

```
wagmios/
├── backend-go/          # Go API server
│   └── internal/
│       ├── api/         # Container/image endpoints
│       ├── auth/        # Key store, middleware, scope validation
│       ├── marketplace/ # App catalog and install handlers
│       └── activity/   # WebSocket activity feed
├── frontend/            # Vue.js UI
│   └── src/
│       ├── components/  # Vue components
│       ├── api.ts       # API client
│       └── App.vue      # Main app
├── logo/                # Project logos
├── docker-compose.yaml  # Run instructions
├── Dockerfile.backend    # Backend build
└── Dockerfile.frontend  # Frontend build
```

---

## 🤝 Contributing

Contributions welcome! Whether it's:
- Reporting a bug
- Suggesting a new marketplace app
- Submitting a PR

Open an issue or PR on [GitHub](https://github.com/mentholmike/wagmios).

---

## 📄 License

MIT License — do what you want with it.

---

## 🤖 OpenClaw Skill

Give your OpenClaw agent a homelab. Install the skill directly into your agent:

```bash
/clawhub install wagmios
```

The skill tells your agent how to:
- Authenticate with WAGMIOS using your API key
- List, start, stop, and manage containers
- Browse and install apps from the WAGMIOS Marketplace
- Pull and manage Docker images
- Work within scope-based permissions (no sudo, no workarounds)

> **Your agent needs an API key with the right scopes to use WAGMIOS.** The skill will guide key setup on first use.

**Skill URL:** https://clawhub.ai/mentholmike/wagmios

---

## 🔗 Links

| Resource | URL |
|---------|-----|
| **Main Repo** | https://github.com/mentholmike/wagmios |
| **Marketplace** | https://marketplace.wagmilabs.fun |
| **Documentation** | https://wiki.wagmilabs.fun |
| **OpenClaw Skill** | https://clawhub.ai/mentholmike/wagmios |
| **Docker Hub** | https://hub.docker.com/r/itzmizzle/wagmi |
| **Issues** | https://github.com/mentholmike/wagmios/issues |

---

<p align="center">
  <img src="logo/removed-background.png" height="120" />
</p>

<p align="center">
  <em>🤖 🤝 🦞</em>
</p>
