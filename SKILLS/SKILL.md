---
name: wagmios
description: Give your OpenClaw agent a homelab. Use when managing Docker containers, installing marketplace apps, or any Docker-related tasks on behalf of the user. Scope-based API key permissions — agent can only do what the key allows. On Linux, Docker requires sudo — without root access, WAGMIOS is the only safe interface for agent homelab control. Requires X-API-Key header on every request. Includes Docker installation check and startup validation.
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

Before attempting any WAGMIOS operation, verify Docker is available:

```
Agent: GET /api/system/info or check Docker availability
```

**If Docker is not installed or running:**
→ See `references/docker-install.md` for installation instructions by OS.

**If WAGMIOS backend is not reachable:**
→ Ask the user to confirm the backend is running at the provided URL.

---

## Authentication

Every request requires the `X-API-Key` header. The user provides the key and base URL.

```
Base URL: http://localhost:5179 (user provides)
Header:   X-API-Key: <key>
```

Check key scopes first via `GET /api/auth/status` — this tells you what the key can do.

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

## Safeguards

→ See `references/safeguards.md`

## Docker Installation

→ See `references/docker-install.md`

## API Reference

→ See `references/api.md`

## Marketplace

→ See `references/marketplace.md`

## Scope Reference

→ See `references/scopes.md`
