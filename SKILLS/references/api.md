# API Reference

**Base URL:** `http://localhost:5179` (user provides — may differ for remote/multi-machine setups)
**Auth:** `X-API-Key: <key>` header on all requests

---

## Response Format

All responses follow this structure:

```json
{
  "success": true,
  "data": { ... },
  "error": null
}
```

On error:
```json
{
  "success": false,
  "data": null,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message"
  }
}
```

---

## Auth

### Check Key Status
```
GET /api/auth/status
Scope: any (included in all keys)
```
Returns key metadata and scopes.

**Response:**
```json
{
  "success": true,
  "data": {
    "has_key": true,
    "wizard_required": false,
    "meta": {
      "id": "...",
      "key_prefix": "wag_live_abc...",
      "label": "agent-key",
      "scopes": ["containers:read", "containers:write", ...],
      "created_at": "2026-03-20T12:00:00Z",
      "last_used_at": "2026-03-20T15:00:00Z"
    }
  }
}
```

### Check Settings
```
GET /api/settings
Scope: any
```
Returns current key info (label, prefix, created date, scopes).

---

## System

### System Info
```
GET /api/system/info
Scope: any
```
Returns Docker version, API version, and system information.

### System Metrics
```
GET /api/system/metrics
Scope: any (no auth required)
```
Returns CPU, memory, disk usage, and container counts.

---

## Containers

### List Containers
```
GET /api/containers
Required Scope: containers:read
```
Returns all containers (running and stopped).

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "abc123...",
      "name": "my-app-1",
      "image": "nginx:alpine",
      "state": "running",
      "status": "Up 2 hours",
      "created": "2026-03-19T10:00:00Z",
      "ports": [{ "private": 80, "public": 8080, "protocol": "tcp" }]
    }
  ]
}
```

### Container Logs
```
GET /api/containers/{id}/logs?tail=100
Required Scope: containers:read
```
Returns container log output.

### Container Config
```
GET /api/containers/{id}/config
Required Scope: containers:read
```
Returns the full container configuration (environment, volumes, ports, etc.).

### Start Container
```
POST /api/containers/{id}/start
Required Scope: containers:write
```

### Stop Container
```
POST /api/containers/{id}/stop
Required Scope: containers:write
```

### Restart Container
```
POST /api/containers/{id}/restart
Required Scope: containers:write
```

### Delete Container
```
DELETE /api/containers/{id}/delete
Required Scope: containers:delete
```
**Requires user confirmation before executing.**

**Response:**
```json
{ "success": true, "data": { "status": "deleted" } }
```

### Create Container
```
POST /api/containers
Required Scope: containers:write

Body:
{
  "image": "nginx:alpine",
  "name": "my-container",
  "env": { "KEY": "value" },
  "ports": [{ "private": 80, "public": 8080 }],
  "volumes": [{ "host": "/data", "container": "/app/data" }]
}
```

---

## Images

### List Images
```
GET /api/images
Required Scope: images:read
```
Returns all downloaded Docker images.

### Pull Image
```
POST /api/images/pull
Required Scope: images:write

Body:
{ "image": "nginx:alpine" }
```

### Delete Image
```
DELETE /api/images/{id}
Required Scope: images:write
```
**Requires user confirmation before executing.**

---

## Marketplace

### Browse Apps
```
GET /api/marketplace
Required Scope: marketplace:read
```
Returns all available marketplace apps.

### Get App Details
```
GET /api/marketplace/{app_id}
Required Scope: marketplace:read
```
Returns details for a specific marketplace app.

### List Installed Apps
```
GET /api/marketplace/installed
Required Scope: marketplace:read
```
Returns all apps installed via the marketplace on this host.

### Create (Download) App
```
POST /api/marketplace/create
Required Scope: marketplace:write

Body:
{
  "app_id": "nginx",
  "container_name": "my-nginx",
  "custom_name": "my-custom-app",
  "environment": {
    "MY_VAR": "my-value",
    "TZ": "America/New_York"
  }
}
```
Downloads the compose file. Does not start the app. Accepts optional `custom_name` and `environment` params to override template defaults.

**Response:**
```json
{
  "success": true,
  "data": {
    "app_id": "nginx",
    "app_name": "Nginx",
    "compose_path": "/app/data/containers/nginx/nginx-123456/docker-compose.yml",
    "install_dir": "/app/data/containers/nginx/nginx-123456",
    "status": "created"
  }
}
```

### Start App
```
POST /api/marketplace/start
Required Scope: marketplace:write

Body:
{
  "app_id": "nginx",
  "container_name": "my-nginx",
  "compose_path": "/app/data/containers/nginx/nginx-123456/docker-compose.yml"
}
```
Pulls image and starts the container(s) via `docker compose up -d`.

---

## Templates

### List Templates
```
GET /api/containers/templates
Required Scope: templates:read
```
Returns all saved compose templates.

### Get Template
```
GET /api/containers/templates/{name}
Required Scope: templates:read
```
Returns a specific saved template by name.

### Save Template
```
POST /api/containers/templates
Required Scope: templates:write

Body:
{
  "name": "my-template",
  "compose": "version: '3.8'\n\nservices:\n  my-app:\n    image: nginx:alpine\n..."
}
```
Saves a compose template for reuse.

---

## Common Error Codes

| Code | Meaning |
|------|---------|
| `SCOPE_REQUIRED` | Key missing required scope — do not retry |
| `INVALID_KEY` | Key is invalid or revoked |
| `API_KEY_REQUIRED` | No X-API-Key header provided |
| `PROTECTED` | Cannot modify system containers (wagmios-backend, wagmios-frontend) |
| `DOCKER_ERROR` | Docker operation failed |
| `NOT_FOUND` | Resource not found |
| `LIMIT_REACHED` | Container/image limit hit |
| `APP_ID_REQUIRED` | marketplace/create requires app_id field |
