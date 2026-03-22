# Scope Reference

**Scope = what the agent is allowed to do. No scope = blocked.**

---

## All Scopes

| Scope | What It Allows |
|-------|---------------|
| `containers:read` | List containers, inspect, view logs, get container config |
| `containers:write` | Create, start, stop, restart containers |
| `containers:delete` | Delete containers |
| `images:read` | List all Docker images |
| `images:write` | Pull new images, delete images |
| `templates:read` | Use saved container templates |
| `templates:write` | Create and edit templates |
| `marketplace:read` | Browse the app marketplace, list installed apps |
| `marketplace:write` | Install and manage marketplace apps |
| `system:read` | View system info and metrics |
| `secrets:write` | Manage secrets (requires additional approval) |

---

## Decision Tree

### "I want to list containers"
→ Need `containers:read`

### "I want to create/start/stop/restart a container"
→ Need `containers:write`

### "I want to delete a container"
→ Need `containers:delete`

### "I want to view container logs or config"
→ Need `containers:read`

### "I want to pull a Docker image"
→ Need `images:write`

### "I want to delete an image"
→ Need `images:write`

### "I want to browse the marketplace"
→ Need `marketplace:read`

### "I want to install/start/stop a marketplace app"
→ Need `marketplace:write`

### "I want to view system metrics or Docker info"
→ Need `system:read`

---

## Common Mistakes

### "I have containers:write but can't delete"
Deleting is a separate scope (`containers:delete`). Having `containers:write` does not imply `containers:delete`.

### "I have images:write but can't list images"
Listing images requires `images:read`. Pulling/deleting requires `images:write`.

### "I can install marketplace apps but can't browse them"
Browsing requires `marketplace:read`. Installing requires `marketplace:write`.

### "My key has marketplace:write but the API returned SCOPE_REQUIRED"
Make sure the scope is actually enabled on the key. The user may have toggled it off in Settings. Check `GET /api/auth/status` to verify actual scopes.

---

## What Happens Without a Scope

The API returns `SCOPE_REQUIRED`. The agent must:
1. Inform the user which scope is missing
2. Ask the user to enable it in Settings → Agent Permissions
3. Wait for the user to confirm before retrying

**Do not:** attempt the action again, use a different method, or try to work around the missing scope.

---

## Activating a Scope

Scopes are managed by the user in the Settings UI. The agent cannot add or remove scopes on its own. The user must:
1. Open WAGMIOS Settings
2. Go to Agent Permissions
3. Toggle the desired scope on/off
4. Save

The agent's key is immediately updated with the new permissions.
