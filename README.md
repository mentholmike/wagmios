# 🚀 WAGMI: Self-Hosted Container Management with AI  

<p align="center">
  <img src="https://github.com/user-attachments/assets/2e3e1dec-89a3-4414-b031-6672f761ed61" width="300" height="auto">
</p>

---

## 👷‍♂️ Building  
🌐 [os.wagmilabs.fun](https://os.wagmilabs.fun)  
🌐 [wagmilabs.fun](https://wagmilabs.fun)  

---

## 📌 Table of Contents  
- [📚 Introduction](#-introduction)  
- [✨ Features](#-features)  
- [💬 W.I.L.L.O.W](#-willow)  
- [⚡ Installation](#-installation)  
- [🐧 Examples](#-examples)  
- [💾 Tested Systems](#-tested-systems)  
- [🔜 Upcoming Features](#-upcoming-features)  
- [🔒 Security](#-security)  

---

## 📚 Introduction  
**WAGMIOS** is a **self-hosted container management system** with **AI-powered automation**.  
It enables you to efficiently manage your containers with **W.I.L.L.O.W**, an AI assistant that optimizes your workflow.

---

## ✨ Features  
- ✅ **Fully Self-Hosted** – Manage everything on your own infrastructure  
- ✅ **Customizable Homepage** – Bookmark your favorite sites  
- ✅ **Docker Marketplace & UI** – Easily browse, install, and manage containers  
- ✅ **AI-Powered Management** – Seamless integration with **W.I.L.L.O.W**  
- ✅ **Supports Home Assistant & Jenkins** – More integrations coming soon!  

---

## 💬 W.I.L.L.O.W  

<p align="center">
  <img src="https://github.com/user-attachments/assets/012fd163-2d84-4eca-a087-9898475e7229">
</p>

**W.I.L.L.O.W (Workflow Intelligent Localized Learning & Optimized Worker)** is an **AI-powered agent** designed to streamline container management.  
She acts as an **oracle**, guiding you through container setup and integrations.  

🔗 **Learn more:** [Read the full article](https://medium.com/@webdevmike01/introducing-w-i-l-l-o-w-827c3e965ef6)  

---

## ⚡ Installation  

1️⃣ **Ensure Docker is Installed**  
   - Get the latest version here: [Docker Installation Guide](https://docs.docker.com/engine/install/)  

2️⃣ **Clone the Repository**  
   ```sh
   git clone https://github.com/mentholmike/wagmios.git
   ```

3️⃣ **Navigate to the Project Directory**  
   ```sh
   cd wagmios
   ```

4️⃣ **Run Docker Compose**  
   ```sh
   sudo docker compose up -d
   ```

## 👷‍♂️ Alternative Build Using Docker Hub  

Prefer using Docker Hub?

1️⃣ **Pull the Image**

```sh
docker pull itzmizzle/wagmi:latest
```

2️⃣ **Create the Yaml File**  
```yaml
version: '3.8'

services:
  frontend:
    image: itzmizzle/wagmi:frontend-latest
    container_name: wagmios-frontend
    ports:
      - "5174:5174"
    depends_on:
      - backend
    environment:
      - VITE_API_URL=http://localhost:8080
    networks:
      - wagmios-network
    restart: unless-stopped
    volumes:
      - frontend_data:/app/data

  backend:
    image: itzmizzle/wagmi:backend-latest
    container_name: wagmios-backend
    ports:
      - "8080:8080"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - backend_data:/app/data
    environment:
      - PORT=8080
      - WILLOW_URL=http://willow:5678
    networks:
      - wagmios-network

  willow:
    image: n8nio/n8n
    container_name: willow
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_SECURE_COOKIE=false
      - N8N_DEFAULT_WORKFLOW_STATE=active
      - N8N_LOG_LEVEL=info
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_DATABASE=willow_memories
      - DB_POSTGRESDB_USER=willow
      - DB_POSTGRESDB_PASSWORD=wagmios
    volumes:
      - willow_data:/home/node/.n8n
    depends_on:
      - postgres
    networks:
      - wagmios-network

  postgres:
    image: postgres:latest
    container_name: postgres
    restart: always
    ports:
      - "5443:5432"
    environment:
      - POSTGRES_USER=willow
      - POSTGRES_PASSWORD=wagmios
      - POSTGRES_DB=willow_memories
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - wagmios-network

networks:
  wagmios-network:
    driver: bridge

volumes:
  willow_data:
  postgres_data:
  frontend_data:
  backend_data:
```

3️⃣ **Run Docker Compose**  

```sh
sudo docker compose up -d
```

---

## 🐧 Examples  

<p align="center">
  <img width="1423" alt="Screenshot 2025-03-03 at 4 50 21 PM" src="https://github.com/user-attachments/assets/ff90b6cc-cb9e-47f3-aa76-ff43f4d54c1c">
</p>

<p align="center">
  <img width="1431" alt="Screenshot 2025-02-22 at 5 47 46 PM" src="https://github.com/user-attachments/assets/794cf926-0d12-42e4-abfa-60e269795a0f">
</p>

<p align="center">
  <img width="1178" alt="Screenshot 2025-03-03 at 4 55 42 PM" src="https://github.com/user-attachments/assets/7903dc46-f23c-42d9-b715-1411c3d14f41">
</p>

---

## 💾 Tested Systems  

✅ **Ubuntu** (multiple versions)  
✅ **Debian (Bookworm)** – Works on Raspberry Pi  
✅ **LXC Containers** – Requires root privileges for **Gluetun**  
✅ **Mac & WSL for Linux** – *Known issue: overestimates disk storage*  

---

## 🔜 Upcoming Features  

- **Deeper integration** with **W.I.L.L.O.W**  
- **Expanded AI automation** for container management  
- **New integrations** for Kubernetes & cloud services  

---

## 🔒 Security  

⚠️ **This project is still in active development.** It is currently intended for **private/home usage**.  
⚠️ **If deploying on a VPS, be cautious of exposing your IP!**  

---

