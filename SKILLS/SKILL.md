---
name: wagmios
description: Give your OpenClaw agent a homelab. Use when managing Docker containers, installing marketplace apps, or any Docker-related tasks on behalf of the user. Scope-based API key permissions — agent can only do what the key allows. On Linux, Docker requires sudo — without root access, WAGMIOS is the only safe interface for agent homelab control. Supports multi-machine management — one agent can manage multiple WAGMIOS instances across different hosts, each with its own scoped key. Requires X-API-Key header on every request (user provides at runtime). Includes Docker installation check and startup validation.
---

# WAGMIOS

**Scope = Permission. API Only. No Workarounds.**

## Core Principle

The WAGMIOS API is the **primary interface** for container management. On Linux, Docker requires sudo — without root access, WAGMIOS is the only interface agents can use for homelab control. Do not:
- Execute `docker` CLI commands directly
- Access the Docker socket or daemon
- Manipulate API keys or scopes
- Bypass scope restrictions through any means

**If a scope is missing, the agent cannot do the task — ask the user to enable it.**

---

## Startup Check (First Interaction)

Before attempting any WAGMIOS operation:

1. **Confirm Docker is available** — WAGMIOS manages Docker containers, so Docker must be running on the host
2. **Confirm backend is reachable** — the backend port (default 5179) must be accessible
3. **Check key scopes** — call `GET /api/auth/status` to know what the key can do

**If Docker is not installed or running:**
→ See `references/docker-install.md` for installation instructions by OS.

**If WAGMIOS backend is not reachable:**
→ Ask the user to confirm the backend is running at the provided URL.

---

## Authentication

Every request requires the `X-API-Key` header. The user provides the key and base URL at runtime — do not store it.

```
Base URL: http://localhost:5179 (user provides, may differ for remote hosts)
Header:   X-API-Key: <key>
```

Check key scopes first via `GET /api/auth/status` — this tells you what the key can do.

**Credential handling:**
- Keys are provided by the user at runtime, not stored by the agent
- The API key is scoped — it only allows what the user explicitly granted
- Do not log or expose the full key value

---

## Scope Map

| Scope | Permitted Actions |
|-------|------------------|
| `containers:read` | List containers, inspect, view logs |
| `containers:write` | Create, start, stop, restart containers |
| `containers:delete` | Remove containers (with user confirmation) |
| `images:read` | List Docker images |
| `images:write` | Pull and delete images |
| `templates:read` | Use saved container templates |
| `templates:write` | Create and edit templates |
| `marketplace:read` | Browse the app marketplace |
| `marketplace:write` | Install, start, stop marketplace apps |

---

## Standard Workflow

1. **Verify scope** — check `GET /api/auth/status` before attempting any action
2. **Confirm** — for destructive actions (delete), always confirm with user before executing
3. **Execute** — call the appropriate API endpoint
4. **Report** — return the result clearly

---

## Decision Tree

```
User asks to do X
    │
    ├── Missing scope for X?
    │       YES → Tell user, ask them to enable it in Settings
    │       NO  → Continue
    │
    ├── X is destructive (delete, stop)?
    │       YES → Confirm with user before executing
    │       NO  → Execute immediately
    │
    └── Execute via API, report result
```

---

## Multi-Machine Management

WAGMIOS supports managing multiple hosts from a single agent. Each machine runs its own WAGMIOS instance with its own URL and its own scoped API key.

**How it works:**
1. User installs WAGMIOS on each machine they want to manage
2. User creates a separate API key per machine, with only the scopes that machine needs
3. User provides the agent with the URL and key for each machine
4. Agent routes requests to the correct machine based on the user's request

**Example:**
```
User: "Install Jellyfin on the media server and make sure Nginx is running on the NAS."

Agent → POST media-server:5179/api/marketplace/create { "app_id": "jellyfin" }
Agent → GET nas:5179/api/containers
Agent → POST nas:5179/api/containers/nginx/start

"Jellyfin is installing on the media server (port 8096). Nginx is running on the NAS."
```

**Key principle:** Each instance is independent. The agent cannot move containers between machines, cannot escalate permissions beyond what a key allows, and each action is logged in the instance's own activity feed.

---

## Safeguards

→ See `references/safeguards.md`

## Docker Installation

→ See `references/docker-install.md`

## API Reference

→ See `references/api.md`

## Marketplace

→ See `references/marketplace.md`

## Workflows

→ See `references/workflows.md`

## Scope Reference

→ See `references/scopes.md`
