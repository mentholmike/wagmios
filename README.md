
<p align="center">
  <img src="https://github.com/user-attachments/assets/2e3e1dec-89a3-4414-b031-6672f761ed61" width="300" height="auto">
</p>


---

https://os.wagmilabs.fun
https://wagmilabs.fun

---

*** Small update: fixed an issue with the backend for gluetun! was only allowing 3 ports.*** 


## 📌 Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [W.I.L.L.O.W](#willow)
- [Installation](#installation)
- [Examples](#examples)
- [Tested Systems](#tests)
- [Upcoming Features](#upcoming)
- [Security](#security)




---

## 📖 Introduction

WAGMI is a self hosted container management layer with AI integration. Manage your containers with W.I.L.L.O.W for optimal efficiency.

---

## ✨ Features

- ✅ Feature 1 - Full Selfhosted frontend that ties into you overall hardware and Agent 
- ✅ Feature 2 - Self hosted homepage. Bookmark all of your favorite sites
- ✅ Feature 3 - Supports a docker marketplace as well container management UI
- ✅ Feature 4 - Added Support for W.I.L.L.O.W!
---


## 💬 W.I.L.L.O.W

![WILLOW](https://github.com/user-attachments/assets/012fd163-2d84-4eca-a087-9898475e7229)

W.I.L.L.O.W (Workflow Intelligent Localized Learning & Optimized Worker) is an AI agent specifically designed to help you manage your environment. She acts as an oracle that guides you through setting up containers. In addtiton she has built in integrations with Home Assistant & Jenkins (more coming soon).

 Read up here for full details: https://medium.com/@webdevmike01/introducing-w-i-l-l-o-w-827c3e965ef6





## ⚡ Installation

Step 1: make sure you're running docker! grab the version that suites your os here: https://docs.docker.com/engine/install/

Step 2: download the repo: ```git clone https://github.com/mentholmike/wagmios.git``` 

Step 3: cd into wagmios dir and run: ```sudo docker compose up -d``` 


---


## 🐧 **Example**

<img width="1423" alt="Screenshot 2025-03-03 at 4 50 21 PM" src="https://github.com/user-attachments/assets/ff90b6cc-cb9e-47f3-aa76-ff43f4d54c1c" />


<img width="1431" alt="Screenshot 2025-02-22 at 5 47 46 PM" src="https://github.com/user-attachments/assets/794cf926-0d12-42e4-abfa-60e269795a0f" />


<img width="1178" alt="Screenshot 2025-03-03 at 4 55 42 PM" src="https://github.com/user-attachments/assets/7903dc46-f23c-42d9-b715-1411c3d14f41" />



---

## 💾 **Tested Systems**
-  Ubuntu (multiple versions) ✅
-  debian (bookworm) (should be fine on raspberrypis!) ✅
- LXC Containers have worked, but have to run as root in order to install gluetun ✅
- Mac & WSL for Linux (known bug: over estmates your disk storage) 

---

## 🔜 **Upcoming Features**
- deeper integration with W.I.L.L.O.W 


---

## 🔒 **Security**
- This Project is still early active development. As of now this has meant for in home ussage.
-  ⚠️ Please procced with caution of planning to use on a VPS and exposing your IP! ⚠️
