# Workflows

Standard agent-to-user interaction patterns for WAGMIOS.

---

## 1. Check Scopes Before Acting

**Always verify what the key can do first.**

```
Agent: GET /api/auth/status
Agent: "Your key has: containers:read, containers:write, images:read, images:write, marketplace:read"
```

---

## 2. Do Something (Scope Exists)

```
User: "List my containers"
Agent: GET /api/containers
Agent: "You have 3 containers:
  - nginx-proxy (running, port 80)
  - postgres-db (running, port 5432)
  - jellyfin (stopped)"
```

---

## 3. Missing Scope — Ask User

```
User: "Delete the postgres container"
Agent: GET /api/auth/status
Agent: GET /api/containers → find container ID
Agent: DELETE /api/containers/{id}/delete → SCOPE_REQUIRED
Agent: "I can't delete containers — your key is missing the `containers:delete` scope.
  To enable it: Settings → Agent Permissions → toggle ON → Save.
  Let me know when you've enabled it."
```

---

## 4. Destructive Action — Confirm First

**Even with `containers:delete`, always confirm before deleting.**

```
User: "Delete the test-nginx container"
Agent: GET /api/containers → confirm container exists
Agent: "I'm about to delete container `test-nginx`. This is permanent.
  Should I proceed? (yes/no)"
User: yes
Agent: DELETE /api/containers/{id}/delete
Agent: "Done. Container deleted."
```

---

## 5. Install From Marketplace

```
User: "Install Jellyfin"
Agent: GET /api/marketplace → find jellyfin app_id
Agent: POST /api/marketplace/create
  Body: { "app_id": "jellyfin", "container_name": "my-jellyfin" }
Agent: "Jellyfin compose file downloaded.
  Ready to start. Should I start it now? (yes/no)"
User: yes
Agent: POST /api/marketplace/start
  Body: { "app_id": "jellyfin", "container_name": "my-jellyfin",
          "compose_path": "/app/data/containers/jellyfin/..." }
Agent: "Jellyfin is installed and running on port 8096."
```

---

## 6. Scope Missing for Marketplace Browse

```
User: "What apps are available?"
Agent: GET /api/marketplace → SCOPE_REQUIRED
Agent: "I can't browse the marketplace — your key is missing `marketplace:read`.
  Enable it in: Settings → Agent Permissions → toggle ON → Save.
  Let me know when ready."
```

---

## 7. Pull an Image

```
User: "Pull the nginx image"
Agent: POST /api/images/pull
  Body: { "image": "nginx:latest" }
Agent: "Pulling nginx:latest...
  Done. Image is ready."
```

---

## 8. Stop a Running Container

```
User: "Stop the jellyfin container"
Agent: GET /api/containers → find jellyfin ID
Agent: "Stopping jellyfin..."
Agent: POST /api/containers/{id}/stop
Agent: "Jellyfin is stopped."
```

---

## 9. User Asks to Do Something Unavailable

```
User: "Can you update my Docker version?"
Agent: "That's a host system operation, not something I can do through the WAGMIOS API.
  I can only manage containers and images through the API."
```

---

## 10. Error — Protected Container

```
User: "Delete wagmios-backend"
Agent: DELETE /api/containers/{id}/delete → PROTECTED
Agent: "I can't delete `wagmios-backend` — it's a system container and is protected.
  System containers (wagmios-backend, wagmios-frontend) cannot be deleted."
```

---

## Key Principles in Dialogues

1. **Always check scopes first** — know what's possible before promising anything
2. **Confirm destructive actions** — even with the right scope, ask first
3. **Tell the user what they need to do** — if a scope is missing, give clear instructions
4. **Report outcomes clearly** — success, failure, and what happened
5. **Never work around errors** — if `SCOPE_REQUIRED`, accept it and ask the user
