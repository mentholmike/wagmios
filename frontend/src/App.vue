<template>
  <div class="relative min-h-screen bg-gray-900">
    <Background3D />
    
    <!-- Password Protection Overlay -->
    <div 
      v-if="requirePassword" 
      class="fixed inset-0 backdrop-blur-xl z-50 flex items-center justify-center"
    >
      <div class="bg-gray-800/90 rounded-xl p-8 w-96 shadow-2xl">
        <h3 class="text-2xl font-bold text-white mb-6">Enter Password</h3>
        <form @submit.prevent="checkPassword">
          <div class="mb-6">
            <input 
              v-model="enteredPassword"
              type="password"
              class="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter dashboard password"
              required
            >
          </div>
          <div v-if="passwordError" class="text-red-500 mb-4">
            {{ passwordError }}
          </div>
          <button 
            type="submit"
            class="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            Unlock Dashboard
          </button>
        </form>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10" :class="{ 'pointer-events-none': requirePassword }">
      <!-- CoinGecko Widget -->
      <div class="fixed top-8 left-8 z-20">
        <gecko-coin-price-chart-widget 
          locale="en" 
          dark-mode="true" 
          outlined="true" 
          initial-currency="usd"
        ></gecko-coin-price-chart-widget>
      </div>

      <div class="container mx-auto px-4 py-12">
        <!-- Metrics Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <!-- CPU -->
          <div class="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-gray-400 text-sm">CPU Usage</h3>
              <span class="text-xs text-blue-400">Real-time</span>
            </div>
            <div class="text-3xl font-bold text-white mb-2">
              {{ systemMetrics.cpu.toFixed(1) }}%
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2">
              <div 
                class="bg-blue-600 h-2 rounded-full transition-all duration-300"
                :style="{ width: `${Math.min(systemMetrics.cpu, 100)}%` }"
              ></div>
            </div>
          </div>

          <!-- Memory -->
          <div class="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-gray-400 text-sm">Memory Usage</h3>
              <span class="text-xs text-green-400">
                {{ formatBytes(systemMetrics.memory.total) }}
              </span>
            </div>
            <div class="text-3xl font-bold text-white mb-2">
              {{ ((systemMetrics.memory.used / systemMetrics.memory.total) * 100).toFixed(1) }}%
            </div>
            <div class="text-sm text-gray-400 mb-2">
              {{ formatBytes(systemMetrics.memory.used) }} used
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2">
              <div 
                class="bg-green-600 h-2 rounded-full transition-all duration-300"
                :style="{ width: `${(systemMetrics.memory.used / systemMetrics.memory.total) * 100}%` }"
              ></div>
            </div>
          </div>

          <!-- Disk -->
          <div class="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-gray-400 text-sm">Disk Usage</h3>
              <span class="text-xs text-purple-400">
                {{ formatBytes(systemMetrics.disk.total) }}
              </span>
            </div>
            <div class="text-3xl font-bold text-white mb-2">
              {{ ((systemMetrics.disk.used / systemMetrics.disk.total) * 100).toFixed(1) }}%
            </div>
            <div class="text-sm text-gray-400 mb-2">
              {{ formatBytes(systemMetrics.disk.used) }} used
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2">
              <div 
                class="bg-purple-600 h-2 rounded-full transition-all duration-300"
                :style="{ width: `${(systemMetrics.disk.used / systemMetrics.disk.total) * 100}%` }"
              ></div>
            </div>
          </div>

          <!-- Eliza -->
          <div class="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-gray-400 text-sm">Eliza Status</h3>
              <span class="text-xs" :class="systemMetrics.elizaStatus ? 'text-green-400' : 'text-red-400'">
                {{ systemMetrics.elizaStatus ? 'Connected' : 'Disconnected' }}
              </span>
            </div>
            <div class="flex items-center space-x-3">
              <div 
                class="w-3 h-3 rounded-full transition-colors duration-300"
                :class="systemMetrics.elizaStatus ? 'bg-green-500' : 'bg-red-500'"
              ></div>
              <div class="text-white">
                {{ systemMetrics.elizaStatus ? 'Online' : 'Offline' }}
                <span v-if="systemMetrics.elizaVersion" class="text-gray-400 text-sm ml-2">
                  (v{{ systemMetrics.elizaVersion }})
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Social & Docker Containers -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <!-- Telegram Widget -->
          <div class="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg cursor-pointer hover:bg-gray-800/70 transition-all duration-300 relative">
            <button 
              @click.stop="deleteDefaultLink('telegram')"
              class="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
            >
              ✕
            </button>
            <div 
              @click="openPopup('https://web.telegram.org', 'Telegram', 800, 600)"
              class="w-full h-full"
            >
              <div class="flex items-center justify-center space-x-4">
                <div class="text-4xl">📱</div>
                <div class="text-xl font-bold text-white">Telegram</div>
              </div>
              <div class="text-center mt-4 text-gray-400">
                Click to open Telegram Web
              </div>
            </div>
          </div>

          <!-- Twitter Widget -->
          <div class="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg cursor-pointer hover:bg-gray-800/70 transition-all duration-300 relative">
            <button 
              @click.stop="deleteDefaultLink('twitter')"
              class="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
            >
              ✕
            </button>
            <div 
              @click="openPopup('https://twitter.com', 'Twitter', 800, 600)"
              class="w-full h-full"
            >
              <div class="flex items-center justify-center space-x-4">
                <div class="text-4xl">🐦</div>
                <div class="text-xl font-bold text-white">Twitter</div>
              </div>
              <div class="text-center mt-4 text-gray-400">
                Click to open Twitter Web
              </div>
            </div>
          </div>

          <!-- Docker Coming Soon -->
          <div class="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg relative">
            <button 
              @click.stop="deleteDefaultLink('docker')"
              class="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
            >
              ✕
            </button>
            <div class="flex items-center justify-center h-full">
              <div class="text-2xl glow-text">🐳 Docker Coming Soon</div>
            </div>
          </div>

          <!-- Custom Links -->
          <template v-for="(link, index) in customLinks" :key="index">
            <div class="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg cursor-pointer hover:bg-gray-800/70 transition-all duration-300 relative">
              <button 
                @click.stop="deleteCustomLink(index)"
                class="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                ✕
              </button>
              <div 
                @click="openPopup(link.url, link.title, 800, 600)"
                class="w-full h-full"
              >
                <div class="flex items-center justify-center space-x-4">
                  <div class="text-4xl">{{ link.emoji || '🔗' }}</div>
                  <div class="text-xl font-bold text-white">{{ link.title }}</div>
                </div>
                <div class="text-center mt-4 text-gray-400">
                  Click to open {{ link.title }}
                </div>
              </div>
            </div>
          </template>

          <!-- Add New Link Button -->
          <div 
            class="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg cursor-pointer hover:bg-gray-800/70 transition-all duration-300"
            @click="showAddLinkModal = true"
          >
            <div class="flex items-center justify-center h-full">
              <div class="text-4xl text-gray-400 hover:text-white transition-colors">➕</div>
            </div>
          </div>
        </div>

        <!-- Add Link Modal -->
        <div v-if="showAddLinkModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div class="bg-gray-800 rounded-xl p-6 w-96 shadow-2xl emoji-picker">
            <h3 class="text-xl font-bold text-white mb-4">Add New Link</h3>
            <form @submit.prevent="addCustomLink">
              <div class="mb-4">
                <label class="block text-gray-400 mb-2">Icon</label>
                <div class="relative">
                  <button 
                    type="button"
                    @click="showEmojiPicker = !showEmojiPicker"
                    class="w-full bg-gray-700 text-white rounded-lg px-4 py-2 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <span class="text-2xl">{{ newLink.emoji || '🔗' }}</span>
                    <span class="text-gray-400">▼</span>
                  </button>
                  
                  <!-- Emoji Picker Dropdown -->
                  <div 
                    v-if="showEmojiPicker"
                    class="absolute top-full left-0 mt-2 w-full bg-gray-700 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto"
                  >
                    <div class="grid grid-cols-6 gap-2 p-3">
                      <button
                        v-for="emoji in emojiList"
                        :key="emoji"
                        type="button"
                        @click="selectEmoji(emoji)"
                        class="text-2xl hover:bg-gray-600 p-2 rounded transition-colors cursor-pointer"
                      >
                        {{ emoji }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="mb-4">
                <label class="block text-gray-400 mb-2">Title</label>
                <input 
                  v-model="newLink.title"
                  type="text"
                  class="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter website title"
                  required
                >
              </div>
              <div class="mb-6">
                <label class="block text-gray-400 mb-2">URL</label>
                <input 
                  v-model="newLink.url"
                  type="url"
                  class="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com"
                  required
                >
              </div>
              <div class="flex justify-end space-x-4">
                <button 
                  type="button"
                  @click="closeModal"
                  class="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Link
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Add bottom left branding -->
        <div class="fixed bottom-8 left-8 z-20 flex flex-col items-start">
          <div class="text-2xl mb-2 glow-text">
            💾 WagmiOS
          </div>
          <div class="flex items-center space-x-4">
            <a 
              href="https://x.com/itzmizzle" 
              target="_blank" 
              class="text-sm text-gray-400 hover:text-gray-300 transition-colors"
            >
              Created by @ITZMIZZLE
            </a>
            <a 
              href="https://home.wagmilabs.fun" 
              target="_blank" 
              class="text-sm text-gray-400 hover:text-gray-300 transition-colors"
            >
              👷 Labs
            </a>
            <a 
              href="https://github.com/mentholmike/wagmios" 
              target="_blank" 
              class="text-sm text-gray-400 hover:text-gray-300 transition-colors"
            >
              <span class="text-xl">🐙</span> GitHub
            </a>
          </div>
        </div>

        <!-- Dock -->
        <div class="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div class="flex items-end gap-2 px-6 py-4 bg-gray-800/20 backdrop-blur-xl rounded-2xl shadow-2xl">
            <div 
              v-for="(item, index) in dockItems" 
              :key="index"
              class="relative group cursor-pointer"
              @mouseenter="activeDockItem = index"
              @mouseleave="activeDockItem = -1"
              @click="handleDockItemClick(item)"
            >
              <div
                class="w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-200 text-4xl hover:bg-gray-700/20"
                :class="{ 'scale-125': activeDockItem === index }"
              >
                {{ item.emoji }}
              </div>
              <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-700 text-white rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {{ item.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Background3D from './components/Background3D.vue'
import { useRouter } from 'vue-router'

// System metrics
const systemMetrics = ref({
  cpu: 0,
  memory: { used: 0, total: 0 },
  disk: { used: 0, total: 0 },
  uptime: 0,
  elizaStatus: false,
  elizaVersion: ''
})

const activeDockItem = ref(-1)

// Get the current host (either localhost or IP)
const currentHost = window.location.hostname

// Dock configuration
const dockItems = [
  { 
    emoji: '🤖',
    label: 'Eliza',
    action: () => window.location.href = `http://${currentHost}:5173`
  }
]

const handleDockItemClick = (item: typeof dockItems[0]) => {
  if (item.action) {
    item.action()
  }
}

// Window management
interface PopupWindow {
  window: Window | null;
  originalSize: {
    width: number;
    height: number;
    left: number;
    top: number;
  };
}

const activePopups = ref<Map<string, PopupWindow>>(new Map())

const initializePopupControls = (popupWindow: Window) => {
  const style = document.createElement('style')
  style.textContent = `
    #custom-controls {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 30px;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 10px;
      z-index: 9999;
    }
    .control-btn {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-right: 8px;
      cursor: pointer;
      border: none;
    }
    #close-btn { background: #ff5f56; }
    #minimize-btn { background: #ffbd2e; }
    #maximize-btn { background: #27c93f; }
    .control-btn:hover { opacity: 0.8; }
    body { margin-top: 30px; }
  `

  const controls = document.createElement('div')
  controls.id = 'custom-controls'
  controls.innerHTML = `
    <button id="close-btn" class="control-btn"></button>
    <button id="minimize-btn" class="control-btn"></button>
    <button id="maximize-btn" class="control-btn"></button>
  `

  popupWindow.document.head.appendChild(style)
  popupWindow.document.body.insertBefore(controls, popupWindow.document.body.firstChild)

  const closeBtn = popupWindow.document.getElementById('close-btn')
  const maximizeBtn = popupWindow.document.getElementById('maximize-btn')
  const minimizeBtn = popupWindow.document.getElementById('minimize-btn')

  closeBtn?.addEventListener('click', () => popupWindow.close())
  maximizeBtn?.addEventListener('click', () => window.postMessage('maximize', '*'))
  minimizeBtn?.addEventListener('click', () => window.postMessage('minimize', '*'))
}

const openPopup = (url: string, title: string, width: number, height: number) => {
  const left = (window.screen.width - width) / 2
  const top = (window.screen.height - height) / 2
  
  const originalSize = { width, height, left, top }
  
  const features = `
    width=${width},
    height=${height},
    left=${left},
    top=${top},
    menubar=no,
    toolbar=no,
    location=no,
    status=no,
    resizable=yes,
    scrollbars=yes
  `

  const popupWindow = window.open(url, title, features)
  
  if (popupWindow) {
    popupWindow.addEventListener('load', () => {
      initializePopupControls(popupWindow)
    })

    activePopups.value.set(title, {
      window: popupWindow,
      originalSize
    })

    window.addEventListener('message', (event) => {
      const popup = activePopups.value.get(title)
      if (!popup?.window) return

      switch (event.data) {
        case 'maximize':
          const newWidth = window.screen.width * 0.9
          const newHeight = window.screen.height * 0.9
          const newLeft = (window.screen.width - newWidth) / 2
          const newTop = (window.screen.height - newHeight) / 2
          
          popup.window.resizeTo(newWidth, newHeight)
          popup.window.moveTo(newLeft, newTop)
          break

        case 'minimize':
          const { width, height, left, top } = popup.originalSize
          popup.window.resizeTo(width, height)
          popup.window.moveTo(left, top)
          break
      }
    })

    popupWindow.addEventListener('beforeunload', () => {
      activePopups.value.delete(title)
    })
  }
}

// Utility functions
const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}

const formatUptime = (seconds: number): string => {
  const days = Math.floor(seconds / 86400)
  const hours = Math.floor((seconds % 86400) / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  
  if (days > 0) return `${days}d ${hours}h`
  if (hours > 0) return `${hours}h ${minutes}m`
  return `${minutes}m`
}

// Fetch metrics
const fetchMetrics = async () => {
  try {
    const response = await fetch('/api/system/metrics')
    const data = await response.json()
    systemMetrics.value = data
  } catch (error) {
    console.error('Error fetching metrics:', error)
  }
}

// Add emoji-related state and interface update
interface CustomLink {
  title: string;
  url: string;
  emoji: string;
}

const showEmojiPicker = ref(false)
const customLinks = ref<CustomLink[]>([])
const showAddLinkModal = ref(false)
const newLink = ref<CustomLink>({
  title: '',
  url: '',
  emoji: '🔗'
})

// Curated list of emojis for websites and apps
const emojiList = [
  '🌐', '🔗', '📱', '💻', '⭐', '🎮', '📺', '🎵', '📚', '📰',
  '💬', '📝', '📈', '🎨', '🛠️', '⚙️', '📦', '🔍', '🎯', '📊',
  '🏢', '🎬', '📷', '🎥', '💡', '🔔', '📫', '🗂️', '📁', '🔐',
  '🌟', '💼', '🎪', '🎭', '🎧', '📡', '🔧', '📌', '🎲', '🎯',
  '🚀', '⚡', '🔥', '💎', '🎪', '🎨', '🎬', '🎮', '📱', '💻'
]

// Function to select emoji
const selectEmoji = (emoji: string) => {
  newLink.value.emoji = emoji
  showEmojiPicker.value = false
}

// Updated close modal function
const closeModal = () => {
  showAddLinkModal.value = false
  showEmojiPicker.value = false
  newLink.value = {
    title: '',
    url: '',
    emoji: '🔗'
  }
}

// Click outside to close emoji picker
onMounted(() => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    if (!target.closest('.emoji-picker') && showEmojiPicker.value) {
      showEmojiPicker.value = false
    }
  })

  // Load custom links from localStorage
  const savedLinks = localStorage.getItem('customLinks')
  if (savedLinks) {
    customLinks.value = JSON.parse(savedLinks)
  }

  fetchMetrics()
  const interval = setInterval(fetchMetrics, 2000)

  onUnmounted(() => {
    clearInterval(interval)
  })
})

// Updated add custom link function
const addCustomLink = () => {
  let url = newLink.value.url
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url
  }

  customLinks.value.push({
    title: newLink.value.title,
    url: url,
    emoji: newLink.value.emoji
  })

  localStorage.setItem('customLinks', JSON.stringify(customLinks.value))
  closeModal()
}

onUnmounted(() => {
  activePopups.value.forEach((popup) => {
    popup.window?.close()
  })
})

// Add default links state
const defaultLinks = ref({
  telegram: true,
  twitter: true,
  docker: true
})

// Load default links state from localStorage
onMounted(() => {
  const savedDefaultLinks = localStorage.getItem('defaultLinks')
  if (savedDefaultLinks) {
    defaultLinks.value = JSON.parse(savedDefaultLinks)
  }
})

// Delete default link
const deleteDefaultLink = (linkName: 'telegram' | 'twitter' | 'docker') => {
  defaultLinks.value[linkName] = false
  localStorage.setItem('defaultLinks', JSON.stringify(defaultLinks.value))
}

// Delete custom link
const deleteCustomLink = (index: number) => {
  customLinks.value.splice(index, 1)
  localStorage.setItem('customLinks', JSON.stringify(customLinks.value))
}

// Add v-show condition for default links
const showDefaultLink = (linkName: 'telegram' | 'twitter' | 'docker') => {
  return defaultLinks.value[linkName]
}

// Add password protection state
const requirePassword = ref(false)
const enteredPassword = ref('')
const passwordError = ref('')

// Update password check on mount
onMounted(async () => {
  try {
    const response = await fetch('/api/auth/check')
    const data = await response.json()
    if (data.hasPassword) {
      requirePassword.value = true
    }
  } catch (err) {
    console.error('Failed to check password status:', err)
  }

  // ... rest of your onMounted code ...
})

// Password check function
const checkPassword = async () => {
  try {
    const response = await fetch('/api/auth/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: enteredPassword.value }),
    })

    if (response.ok) {
      requirePassword.value = false
      enteredPassword.value = ''
      passwordError.value = ''
    } else {
      passwordError.value = 'Incorrect password'
    }
  } catch (err) {
    passwordError.value = 'Failed to verify password'
  }
}
</script>

<style>
.modern-title {
  font-family: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Monaco, "Segoe UI Mono", "Roboto Mono", monospace;
  font-weight: 800;
  letter-spacing: -0.03em;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

h1 {
  background-size: 200% auto;
  animation: gradient 8s ease infinite;
}

.group:hover .scale-125 {
  transform: scale(1.2) translateY(-10px);
}

.glow-text {
  color: white;
  text-shadow: 0 0 10px rgba(255,255,255,0.7),
               0 0 20px rgba(255,255,255,0.5),
               0 0 30px rgba(255,255,255,0.3);
}

@media (max-width: 768px) {
  .container {
    padding-top: 320px;
  }
}

.window-controls {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 30px;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
}

.hover\:bg-gray-800\/70:hover {
  background-color: rgba(31, 41, 55, 0.7);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Add these new styles */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Add these new styles for the emoji picker */
.emoji-picker {
  position: relative;
}

.emoji-picker button {
  transition: transform 0.1s ease;
}

.emoji-picker button:hover {
  transform: scale(1.1);
  background-color: rgba(255, 255, 255, 0.1);
}

/* Add delete button hover effect */
.delete-btn {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.card:hover .delete-btn {
  opacity: 1;
}
</style>
