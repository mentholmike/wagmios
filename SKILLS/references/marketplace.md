# Marketplace Reference

**Browse and install self-hosted apps with one command.**

---

## Workflow

```
1. Browse apps    → GET /api/marketplace         (requires marketplace:read)
2. Create app     → POST /api/marketplace/create  (requires marketplace:write)
3. Start app      → POST /api/marketplace/start   (requires marketplace:write)
```

---

## App Catalog (34 Apps)

### Media Servers
| App | Port | Description |
|-----|------|-------------|
| Plex Media Server | 32400 | Stream movies, TV, music, photos |
| Jellyfin | 8096 | Free software media system |
| Immich | 2283 | Self-hosted photo/video backup |

### Arr Stack
| App | Port | Description |
|-----|------|-------------|
| Sonarr | 8989 | TV show PVR, auto-downloads |
| Radarr | 7878 | Movie collection manager |
| Prowlarr | 9696 | Indexer manager for Arr stack |

### AI & ML
| App | Port | Description |
|-----|------|-------------|
| Ollama | 11434 | Run AI models locally |
| Open WebUI | 8080 | Chat UI for Ollama |

### Home Automation
| App | Port | Description |
|-----|------|-------------|
| Home Assistant | 8123 | Open source home automation |

### Monitoring
| App | Port | Description |
|-----|------|-------------|
| Uptime Kuma | 3001 | Server/service monitoring |
| Grafana | 3000 | Metrics dashboards |
| Prometheus | 9090 | Time series database |
| Glances | 61208 | Cross-platform system monitor |

### Networking
| App | Port | Description |
|-----|------|-------------|
| Nginx | 80 | Web server/reverse proxy |
| Pi-hole | 80 | Network-wide ad blocking |
| AdGuard Home | 3000 | DNS ad blocking |
| WireGuard | 51820 | Fast modern VPN |

### Torrents
| App | Port | Description |
|-----|------|-------------|
| Transmission | 9091 | Lightweight BitTorrent client |
| qBittorrent | 8080 | Open source BitTorrent client |
| Jackett | 9117 | Torrent tracker API for Arr |

### Security
| App | Port | Description |
|-----|------|-------------|
| Vaultwarden | 80 | Self-hosted Bitwarden password manager |

### Database
| App | Port | Description |
|-----|------|-------------|
| InfluxDB | 8086 | Time series database |
| Supabase | 5432 | Firebase alternative |

### Cloud Storage
| App | Port | Description |
|-----|------|-------------|
| Nextcloud | 8080 | File sync, calendar, contacts |
| Filebrowser | 8080 | Web file manager |
| Puter | 4000 | Browser OS |

### Productivity
| App | Port | Description |
|-----|------|-------------|
| n8n | 5678 | Workflow automation |
| Novu | 3000 | Notification infrastructure |

### Utilities
| App | Port | Description |
|-----|------|-------------|
| RSSHub | 1200 | RSS feed generator |
| Web-Check | 3000 | Website reconnaissance tool |
| OpenClaw | 18789 | AI container management |

### Gaming
| App | Port | Description |
|-----|------|-------------|
| Minecraft Server | 25565 | Java Edition server |
| Windows (Docker) | 8006 | Windows 10/11 in browser |

### VPN
| App | Port | Description |
|-----|------|-------------|
| Gluetun | 8888 | VPN container for routing services |

---

## Example: Install and Start Jellyfin

```
Step 1 — Browse
GET /api/marketplace
→ Find jellyfin app_id

Step 2 — Create
POST /api/marketplace/create
Body: { "app_id": "jellyfin", "container_name": "my-jellyfin" }
→ Returns compose_path

Step 3 — Start
POST /api/marketplace/start
Body: { "app_id": "jellyfin", "container_name": "my-jellyfin", "compose_path": "/app/data/containers/jellyfin/jellyfin-xxx/docker-compose.yml" }
→ Image pulled, container started
```

---

## Notes

- Marketplace apps use Docker Compose under the hood
- Apps are stored in `/app/data/containers/` inside the container (mapped to `${HOME}/.wagmios/containers/` on the host via the docker-compose volume mount)
- App data persists in named Docker volumes
- Each install gets a unique directory with timestamp suffix
