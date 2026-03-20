# Safeguards

**These are hard limits. No exceptions, no workarounds.**

---

## Hard Blocks (Agent Cannot Bypass)

### 1. Scope Enforcement
Every API endpoint validates the key's scopes. If the key lacks the required scope, the API returns `SCOPE_REQUIRED`. The agent must:
- Accept this response as final
- Not attempt to work around it
- Ask the user to enable the required scope in Settings

### 2. System Containers Protected
These containers cannot be deleted or modified under any circumstances:
- `wagmios-backend`
- `wagmios-frontend`

Any attempt to delete these returns `PROTECTED`.

### 3. No API Key Manipulation
The agent cannot:
- Create, regenerate, or delete API keys
- Add scopes beyond what the key currently has
- Access the `wagmios` key data files directly
- Manipulate the key store in any way

**Scope changes:** The agent can reduce its own scopes via `POST /api/settings/scopes`, but cannot add scopes — the API enforces that new scopes must be a subset of current scopes. Adding scopes is always a user action.

### 4. Filesystem Confinement
The agent can only interact with:
- `/app/data/containers/` (marketplace app data)
- Docker container files managed through the API

Do not attempt to read/write any other filesystem paths.

### 5. API Only
The Docker management API (`/api/*`) is the only interface for container operations. Do not:
- Execute `docker` CLI commands directly on the host
- Use `docker-py` or similar libraries
- Access the Docker socket outside API-managed operations
- Read Docker internals through direct socket communication

---

## Scope-Gated Actions

These require specific scopes but are otherwise allowed:

| Action | Required Scope |
|--------|---------------|
| List containers | `containers:read` |
| View container logs | `containers:read` |
| Create container | `containers:write` |
| Start container | `containers:write` |
| Stop container | `containers:write` |
| Restart container | `containers:write` |
| Delete container | `containers:delete` |
| Pull image | `images:write` |
| Delete image | `images:write` |
| Browse marketplace | `marketplace:read` |
| Install marketplace app | `marketplace:write` |
| Start marketplace app | `marketplace:write` |
| Stop marketplace app | `marketplace:write` |

---

## User-Gated Actions (Require Confirmation)

Even with the correct scope, the agent should confirm before executing:

- **Any delete operation** — deleting a container or image is irreversible
- **Stopping a running container** — may interrupt active services
- **Installing a new app** — creates files and uses system resources

Example confirmation prompt:
> "I'm about to delete container `xyz`. This cannot be undone. Should I proceed?"

---

## Error Handling

| Error Code | Meaning | Agent Response |
|------------|---------|----------------|
| `SCOPE_REQUIRED` | Missing required scope | Inform user, do not retry |
| `INVALID_KEY` | Key not recognized | Inform user, key may need regeneration |
| `API_KEY_REQUIRED` | No key provided | Request key from user |
| `PROTECTED` | System container | Accept as final, do not retry |
| `DOCKER_ERROR` | Docker operation failed | Report error, do not work around |
| `LIMIT_REACHED` | Resource limit hit | Inform user |
| `DELETE_DISABLED` | No delete scope | Inform user |

---

## What Agents Cannot Do

- Execute direct shell commands on the host
- Access files outside `/app/data/containers/`
- Manipulate Docker networks, volumes, or build context
- Create or modify Dockerfiles
- Access the host's Docker socket directly
- Escalate privileges beyond key scope
- Read the API key file or key metadata
- Disable or bypass scope enforcement
- Access other users' containers or data
- Perform operations on host system (iptables, mount, etc.)
