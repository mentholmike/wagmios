<template>
  <div class="min-h-screen" :class="isDarkMode ? 'bg-gray-900 text-white' : 'bg-cream text-gray-900'">
    <Background3D v-if="isDarkMode" />
    <LightBackground3D v-else />
    
    <!-- Theme Toggle Slider (Global) -->
    <div class="fixed top-6 right-6 z-50">
      <div 
        :class="[
          'flex items-center p-2.5 rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm',
          isDarkMode ? 'bg-gray-800/60 hover:bg-gray-800/80' : 'bg-white/70 hover:bg-white/90'
        ]"
      >
        <span class="text-lg mr-2" :class="isDarkMode ? 'text-gray-500' : 'text-yellow-500'">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </span>
        
        <label class="relative inline-block w-12 h-6 mx-1">
          <input 
            type="checkbox" 
            class="opacity-0 w-0 h-0" 
            :checked="isDarkMode"
            @change="toggleTheme"
          >
          <span 
            :class="[
              'slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-all duration-300',
              isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
            ]"
          ></span>
        </label>
        
        <span class="text-lg ml-2" :class="isDarkMode ? 'text-blue-400' : 'text-gray-500'">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </span>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-20">
      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        <!-- CPU -->
        <div :class="[
          'backdrop-blur-xl rounded-xl p-6 shadow-lg',
          isDarkMode ? 'bg-gray-800/50' : 'bg-light-modal/80'
        ]">
          <div class="flex justify-between items-center mb-4">
            <h3 :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="text-sm">CPU Usage</h3>
            <span class="text-xs text-blue-400">Real-time</span>
          </div>
          <div :class="isDarkMode ? 'text-white' : 'text-gray-900'" class="text-3xl font-bold mb-2">
            {{ displayCpuUsage() }}
          </div>
          <div :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-300'" class="w-full rounded-full h-2">
            <div 
              class="bg-blue-600 h-2 rounded-full transition-all duration-300"
              :style="{ width: `${Math.min(getCpuUsage(), 100)}%` }"
            ></div>
          </div>
        </div>

        <!-- Memory -->
        <div :class="[
          'backdrop-blur-xl rounded-xl p-6 shadow-lg',
          isDarkMode ? 'bg-gray-800/50' : 'bg-light-modal/80'
        ]">
          <div class="flex justify-between items-center mb-4">
            <h3 :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="text-sm">Memory Usage</h3>
            <span class="text-xs text-green-400">
              {{ formatBytes(systemMetrics.memory.total) }}
            </span>
          </div>
          <div :class="isDarkMode ? 'text-white' : 'text-gray-900'" class="text-3xl font-bold mb-2">
            {{ displayMemoryUsage() }}
          </div>
          <div :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="text-sm mb-2">
            {{ formatBytes(systemMetrics.memory.used) }} used
          </div>
          <div :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-300'" class="w-full rounded-full h-2">
            <div 
              class="bg-green-600 h-2 rounded-full transition-all duration-300"
              :style="{ width: `${getMemoryPercentage()}%` }"
            ></div>
          </div>
        </div>

        <!-- Disk -->
        <div :class="[
          'backdrop-blur-xl rounded-xl p-6 shadow-lg',
          isDarkMode ? 'bg-gray-800/50' : 'bg-light-modal/80'
        ]">
          <div class="flex justify-between items-center mb-4">
            <h3 :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="text-sm">Disk Usage</h3>
            <span class="text-xs text-purple-400">
              {{ formatBytes(systemMetrics.disk.total) }}
            </span>
          </div>
          <div :class="isDarkMode ? 'text-white' : 'text-gray-900'" class="text-3xl font-bold mb-2">
            {{ ((systemMetrics.disk.used / systemMetrics.disk.total) * 100).toFixed(1) }}%
          </div>
          <div :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="text-sm mb-2">
            {{ formatBytes(systemMetrics.disk.used) }} used
          </div>
          <div :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-300'" class="w-full rounded-full h-2">
            <div 
              class="bg-purple-600 h-2 rounded-full transition-all duration-300"
              :style="{ width: `${(systemMetrics.disk.used / systemMetrics.disk.total) * 100}%` }"
            ></div>
          </div>
        </div>

        <!-- System Time (Replacing WILLOW Status) -->
        <div :class="[
          'backdrop-blur-xl rounded-xl p-6 shadow-lg',
          isDarkMode ? 'bg-gray-800/50' : 'bg-light-modal/80'
        ]">
          <div class="flex justify-between items-center mb-4">
            <h3 :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="text-sm">System Time</h3>
            <span class="text-xs text-purple-400">Live</span>
          </div>
          <div :class="isDarkMode ? 'text-white' : 'text-gray-900'" class="text-3xl font-bold mb-2">
            <span class="gradient-text">{{ formatTime(systemMetrics.currentTime) }}</span>
          </div>
          <div :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="text-sm">
            {{ formatDate(systemMetrics.currentTime) }}
          </div>
        </div>
      </div>

      <!-- Social & Docker Containers -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <!-- Custom Links -->
        <template v-for="(link, index) in customLinks" :key="index">
          <div 
            :class="[
              'card relative backdrop-blur-xl rounded-xl p-6 shadow-lg transition-all duration-300',
              isDarkMode 
                ? 'bg-gray-800/70 hover:bg-gray-700/80 hover:shadow-xl hover:-translate-y-1' 
                : 'bg-white/90 hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-gray-200/50'
            ]"
            @click="openPopup(link.url, link.title, 800, 600)"
          >
            <!-- Delete Button -->
            <button 
              @click.stop="deleteCustomLink(index)" 
              :class="[
                'delete-btn absolute top-3 right-3 p-1.5 rounded-full transition-colors',
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-red-500/80 text-gray-400 hover:text-white' 
                  : 'bg-gray-100 hover:bg-red-500 text-gray-500 hover:text-white'
              ]"
              title="Delete link"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div class="flex flex-col items-center justify-center h-full">
              <div class="text-4xl mb-4">{{ link.emoji }}</div>
              <div :class="[
                'text-center font-medium',
                isDarkMode ? 'text-white' : 'text-gray-800'
              ]">{{ link.title }}</div>
            </div>
          </div>
        </template>

        <!-- Add New Link Button -->
        <div 
          :class="[
            'backdrop-blur-xl rounded-xl p-6 shadow-lg cursor-pointer transition-all duration-300',
            isDarkMode 
              ? 'bg-gray-800 hover:bg-gray-800/70' 
              : 'bg-light-modal hover:bg-gray-200/80'
          ]"
          @click="showAddLinkModal = true"
        >
          <div class="flex items-center justify-center h-full">
            <div :class="[
              'text-4xl transition-colors',
              isDarkMode ? 'text-white hover:text-white' : 'text-gray-900 hover:text-gray-900'
            ]">➕</div>
          </div>
        </div>
      </div>

      <!-- Add Link Modal -->
      <div v-if="showAddLinkModal" class="fixed inset-0 flex items-center justify-center z-50" :class="[
        isDarkMode ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-gray-200/80 backdrop-blur-sm'
      ]">
        <div :class="[
          'rounded-xl p-6 w-96 shadow-2xl emoji-picker',
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        ]">
          <h3 :class="[
            'text-xl font-bold mb-4',
            isDarkMode ? 'text-white' : 'text-gray-800'
          ]">Add Custom Link</h3>
          
          <div class="mb-4">
            <label :class="[
              'block mb-2 text-sm font-medium',
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            ]">Title</label>
            <input 
              v-model="newLink.title" 
              type="text" 
              :class="[
                'w-full px-4 py-2 rounded-lg',
                isDarkMode 
                  ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500' 
                  : 'bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              ]"
              placeholder="My Link"
            />
          </div>
          
          <div class="mb-4">
            <label :class="[
              'block mb-2 text-sm font-medium',
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            ]">URL</label>
            <input 
              v-model="newLink.url" 
              type="url" 
              :class="[
                'w-full px-4 py-2 rounded-lg',
                isDarkMode 
                  ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500' 
                  : 'bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              ]"
              placeholder="https://example.com"
            />
          </div>
          
          <div class="mb-6">
            <label :class="[
              'block mb-2 text-sm font-medium',
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            ]">Emoji</label>
            
            <!-- Emoji Dropdown Button -->
            <div class="relative emoji-dropdown">
              <button 
                type="button"
                @click="showEmojiPicker = !showEmojiPicker"
                :class="[
                  'w-full flex items-center justify-between px-4 py-3 rounded-lg',
                  isDarkMode 
                    ? 'bg-gray-700 text-white border border-gray-600 hover:border-gray-500' 
                    : 'bg-gray-50 text-gray-900 border border-gray-300 hover:border-gray-400'
                ]"
              >
                <div class="flex items-center">
                  <span class="text-2xl mr-3">{{ newLink.emoji }}</span>
                  <span>{{ showEmojiPicker ? 'Close' : 'Select an emoji' }}</span>
                </div>
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <!-- Emoji Dropdown Menu -->
              <div 
                v-show="showEmojiPicker" 
                :class="[
                  'absolute z-10 w-full mt-2 rounded-lg shadow-lg',
                  isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'
                ]"
              >
                <!-- Category Tabs -->
                <div class="flex p-2 overflow-x-auto scrollbar-thin border-b" :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'">
                  <button 
                    v-for="(category, index) in emojiCategories" 
                    :key="index"
                    @click="activeEmojiCategory = index"
                    :class="[
                      'px-3 py-1.5 text-sm rounded-lg mr-2 whitespace-nowrap transition-colors',
                      activeEmojiCategory === index 
                        ? (isDarkMode ? 'bg-gray-600 text-white' : 'bg-blue-100 text-blue-800') 
                        : (isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
                    ]"
                  >
                    {{ category.icon }} {{ category.name }}
                  </button>
                </div>
                
                <!-- Emoji Grid -->
                <div class="p-3 max-h-48 overflow-y-auto scrollbar-thin">
                  <div class="grid grid-cols-8 gap-2">
                    <button 
                      v-for="emoji in currentCategoryEmojis" 
                      :key="emoji"
                      @click="selectEmoji(emoji)"
                      :class="[
                        'text-2xl p-2 rounded hover:scale-125 transition-transform',
                        newLink.emoji === emoji 
                          ? (isDarkMode ? 'bg-gray-600' : 'bg-blue-100') 
                          : ''
                      ]"
                    >
                      {{ emoji }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="flex justify-end space-x-3">
            <button 
              @click="closeModal"
              :class="[
                'px-4 py-2 rounded-lg',
                isDarkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              ]"
            >
              Cancel
            </button>
            <button 
              @click="addCustomLink"
              :class="[
                'px-4 py-2 rounded-lg text-white',
                isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600',
                (!newLink.title || !isValidUrl(newLink.url)) ? 'opacity-50 cursor-not-allowed' : ''
              ]"
              :disabled="!newLink.title || !isValidUrl(newLink.url)"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Left Links -->
      <div class="fixed bottom-4 left-4 flex items-center gap-4 text-gray-400">
        <a 
          href="https://wagmilabs.fun"
          target="_blank" 
          :class="[
            'hover:text-white transition-colors flex items-center gap-2',
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          ]"
        >
          <span class="text-xl">👷</span>
          <span>Labs</span>
        </a>
        <a 
          href="https://github.com/mentholmike/"
          target="_blank"
          :class="[
            'hover:text-white transition-colors flex items-center gap-2',
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          ]"
        >
          <span class="text-xl">🐙</span>
          <span>Github</span>
        </a>
      </div>

      <!-- Redesigned Dock -->
      <div class="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div :class="[
          'flex items-end gap-3 px-6 py-4 rounded-2xl shadow-xl transition-all duration-300',
          isDarkMode ? 'bg-gray-800/80 backdrop-blur-xl' : 'bg-white/80 backdrop-blur-xl'
        ]">
          <div 
            v-for="(item, index) in dockItems" 
            :key="index"
            class="relative group cursor-pointer"
            @mouseenter="activeDockItem = index"
            @mouseleave="activeDockItem = -1"
            @click="handleDockItemClick(item)"
          >
            <div
              :class="[
                'w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-200 text-4xl',
                activeDockItem === index ? 'scale-125' : '',
                isDarkMode 
                  ? 'hover:bg-gray-700/50' 
                  : 'hover:bg-gray-100'
              ]"
            >
              {{ item.emoji }}
            </div>
            <div :class="[
              'absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg',
              isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'
            ]">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>

      <!-- Marketplace Modal -->
      <Marketplace 
        v-if="showMarketplace" 
        @close="showMarketplace = false"
        :isDarkMode="isDarkMode"
      />

      <!-- Containers Modal -->
      <Containers 
        v-if="showContainers" 
        @close="showContainers = false"
        :isDarkMode="isDarkMode"
      />

      <!-- WillowChat with updated styling -->
      <WillowChat :isDarkMode="isDarkMode" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, provide, computed, watch, onBeforeUnmount } from 'vue'
import Background3D from './components/Background3D.vue'
import LightBackground3D from './components/LightBackground3D.vue'
import Marketplace from './components/Marketplace.vue'
import Containers from './components/Containers.vue'
import WillowChat from './components/WillowChat.vue'
import { METRICS_API_URL, SYSTEM_API_URL } from './api'  // Import the API URLs

// System metrics
const systemMetrics = ref({
  cpu: {
    usage: 0
  },
  memory: {
    total: 0,
    used: 0,
    usagePercent: 0
  },
  disk: {
    total: 0,
    used: 0
  },
  uptime: 0,
  currentTime: '',
  elizaStatus: false,
  elizaVersion: ''
})

const activeDockItem = ref(-1)
const showMarketplace = ref(false)
const showContainers = ref(false)

// Get the current host (either localhost or IP)
const currentHost = window.location.hostname

// Dock configuration
const dockItems = [
  { emoji: '🐳', label: 'Marketplace' },
  { emoji: '📦', label: 'Containers' },
]

const handleDockItemClick = (item: { emoji: string, label: string }) => {
  console.log('Clicked dock item:', item.label) // Add this for debugging
  switch (item.label) {
    case 'Marketplace':
      showMarketplace.value = true
      break
    case 'Containers':
      showContainers.value = true
      break
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

// Fetch metrics
const fetchMetrics = async () => {
  try {
    const response = await fetch(METRICS_API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    systemMetrics.value = {
      ...systemMetrics.value,
      ...data
    }
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

// Expanded emoji list with categories
const emojiList = [
  // Web & Tech
  '🌐', '🔗', '📱', '💻', '⭐', '🎮', '📺', '🎵', '📚', '📰', '💬', '📝', '📈', '🎨', '🛠️', '⚙️', '📦', '🔍', '🎯', '📊',
  // Business & Work
  '🏢', '🏭', '🏦', '🏪', '🏫', '🏬', '🏨', '🏣', '🏥', '💼', '📁', '📂', '📋', '📌', '📎', '📏', '📐', '✂️', '🔒', '🔑',
  // Media & Entertainment
  '🎬', '📷', '🎥', '🎞️', '📽️', '🎭', '🎪', '🎨', '🎼', '🎧', '🎤', '🎹', '🎷', '🎺', '🎸', '🎻', '🎲', '🎯', '🎮', '🎰',
  // Communication
  '📞', '📟', '📠', '📧', '📨', '📩', '📤', '📥', '📮', '📢', '📣', '📡', '📠', '💬', '💭', '🗯️', '🔊', '🔈', '📲', '📳',
  // Tools & Utilities
  '🔧', '🔨', '⚒️', '🛠️', '⛏️', '🔩', '⚙️', '🗜️', '⚖️', '🔗', '⛓️', '🧰', '🧲', '🧪', '🧫', '🧬', '🔬', '🔭', '📡', '💉',
  // Weather & Nature
  '☀️', '🌤️', '⛅', '🌥️', '☁️', '🌦️', '🌧️', '⛈️', '🌩️', '🌨️', '❄️', '🌬️', '💨', '🌪️', '🌫️', '🌊', '💧', '💦', '☔', '⚡',
  // Food & Drink
  '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🥑', '🍆', '🥔', '🥕',
  // Travel & Places
  '🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚', '🚛', '🚜', '🛵', '🏍️', '🚲', '🛴', '🚨', '🚥',
  // Objects & Symbols
  '💎', '🔮', '🧿', '🧸', '🎁', '🎀', '🎊', '🎉', '🎈', '🪄', '🪅', '🪆', '🧩', '🧶', '🧵', '🧮', '🧾', '🔖', '🔍', '🔎',
  // Faces & People
  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '☺️', '😚',
  // Special
  '🚀', '⚡', '🔥', '💯', '✨', '💫', '🌟', '⭐', '🌠', '🌌'
];

// Emoji categories
const activeEmojiCategory = ref(0);

const emojiCategories = [
  { name: 'Frequently Used', icon: '⭐' },
  { name: 'Web & Tech', icon: '🌐' },
  { name: 'Business', icon: '💼' },
  { name: 'Media', icon: '🎬' },
  { name: 'Communication', icon: '💬' },
  { name: 'Tools', icon: '🔧' },
  { name: 'Weather', icon: '☀️' },
  { name: 'Food', icon: '🍎' },
  { name: 'Travel', icon: '🚗' },
  { name: 'Objects', icon: '💎' },
  { name: 'Faces', icon: '😀' },
  { name: 'Special', icon: '✨' }
];

// Categorized emoji lists
const categorizedEmojis = {
  'Frequently Used': ['🔗', '🌐', '📱', '💻', '⭐', '🎮', '📺', '🎵', '📚', '📰', '💬', '📝', '🚀', '⚡', '🔥'],
  'Web & Tech': ['🌐', '🔗', '📱', '💻', '⭐', '🎮', '📺', '🎵', '📚', '📰', '💬', '📝', '📈', '🎨', '🛠️', '⚙️', '📦', '🔍', '🎯', '📊'],
  'Business': ['🏢', '🏭', '🏦', '🏪', '🏫', '🏬', '🏨', '🏣', '🏥', '💼', '📁', '📂', '📋', '📌', '📎', '📏', '📐', '✂️', '🔒', '🔑'],
  'Media': ['🎬', '📷', '🎥', '🎞️', '📽️', '🎭', '🎪', '🎨', '🎼', '🎧', '🎤', '🎹', '🎷', '🎺', '🎸', '🎻', '🎲', '🎯', '🎮', '🎰'],
  'Communication': ['📞', '📟', '📠', '📧', '📨', '📩', '📤', '📥', '📮', '📢', '📣', '📡', '📠', '💬', '💭', '🗯️', '🔊', '🔈', '📲', '📳'],
  'Tools': ['🔧', '🔨', '⚒️', '🛠️', '⛏️', '🔩', '⚙️', '🗜️', '⚖️', '🔗', '⛓️', '🧰', '🧲', '🧪', '🧫', '🧬', '🔬', '🔭', '📡', '💉'],
  'Weather': ['☀️', '🌤️', '⛅', '🌥️', '☁️', '🌦️', '🌧️', '⛈️', '🌩️', '🌨️', '❄️', '🌬️', '💨', '🌪️', '🌫️', '🌊', '💧', '💦', '☔', '⚡'],
  'Food': ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🥑', '🍆', '🥔', '🥕'],
  'Travel': ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚', '🚛', '🚜', '🛵', '🏍️', '🚲', '🛴', '🚨', '🚥'],
  'Objects': ['💎', '🔮', '🧿', '🧸', '🎁', '🎀', '🎊', '🎉', '🎈', '🪄', '🪅', '🪆', '🧩', '🧶', '🧵', '🧮', '🧾', '🔖', '🔍', '🔎'],
  'Faces': ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '☺️', '😚'],
  'Special': ['🚀', '⚡', '🔥', '💯', '✨', '💫', '🌟', '⭐', '🌠', '🌌']
};

// Computed property to get current category emojis
const currentCategoryEmojis = computed(() => {
  const categoryName = emojiCategories[activeEmojiCategory.value].name;
  return categorizedEmojis[categoryName];
});

// Add this computed property
const isValidLink = computed(() => {
  return newLink.value.title.trim() !== '' && isValidUrl(newLink.value.url);
});

// Add this helper function if it doesn't exist
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Function to select emoji
const selectEmoji = (emoji: string) => {
  newLink.value.emoji = emoji;
  showEmojiPicker.value = false;
}

// Updated close modal function
const closeModal = () => {
  showAddLinkModal.value = false;
  showEmojiPicker.value = false;
  newLink.value = {
    title: '',
    url: '',
    emoji: '🔗'
  }
}

// Custom links persistence
const STORAGE_KEY = 'wagmios_custom_links'

// Load links from localStorage
const loadCustomLinks = () => {
  try {
    const savedLinks = localStorage.getItem(STORAGE_KEY)
    if (savedLinks) {
      customLinks.value = JSON.parse(savedLinks)
    }
  } catch (error) {
    console.error('Error loading custom links:', error)
    // If there's an error, initialize with empty array
    customLinks.value = []
  }
}

// Save links to localStorage
const saveCustomLinks = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customLinks.value))
  } catch (error) {
    console.error('Error saving custom links:', error)
  }
}

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

  saveCustomLinks() // Save after adding
  closeModal()
}

// Updated delete custom link function
const deleteCustomLink = (index: number) => {
  customLinks.value.splice(index, 1)
  saveCustomLinks() // Save after deleting
}

// Add this to handle clicking outside the emoji picker
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (showEmojiPicker.value && !target.closest('.emoji-dropdown')) {
    showEmojiPicker.value = false;
  }
}

// Add this to your onMounted function
onMounted(() => {
  // Existing code...
  
  // Add event listener for clicking outside
  document.addEventListener('click', handleClickOutside);
  
  loadCustomLinks() // Load links when component mounts
  
  fetchMetrics()
  const interval = setInterval(fetchMetrics, 5000)

  onUnmounted(() => {
    clearInterval(interval)
  })

  // Add error handling for window events
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      loadCustomLinks() // Reload links if they change in another tab
    }
  })

  // Add this watch to debug the metrics
  watch(systemMetrics, (newMetrics) => {
    if (newMetrics && newMetrics.memory) {
      console.log('Memory metrics:', {
        used: newMetrics.memory.used,
        total: newMetrics.memory.total,
        usagePercent: newMetrics.memory.usagePercent
      });
    }
  }, { deep: true });

  fetchSystemMetrics();
  
  // Poll for updates every 5 seconds
  const intervalId = setInterval(fetchSystemMetrics, 5000);
  
  onBeforeUnmount(() => {
    clearInterval(intervalId);
  });
})

onUnmounted(() => {
  activePopups.value.forEach((popup) => {
    popup.window?.close()
  })
  
  // Remove event listener
  document.removeEventListener('click', handleClickOutside);
})

const formatTime = (timeString: string) => {
  if (!timeString) return '--:--:--'
  const date = new Date(timeString)
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  })
}

const formatDate = (timeString: string) => {
  if (!timeString) return '--/--/----'
  const date = new Date(timeString)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Theme state
const isDarkMode = ref(true) // Default to dark mode
provide('isDarkMode', isDarkMode) // Provide to all components

// Toggle theme function
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

// Load theme preference from localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  }
  
  // Rest of your onMounted code...
})

// Add these methods to your component
const displayMemoryUsage = () => {
  if (!systemMetrics.value || !systemMetrics.value.memory) {
    console.log('No memory metrics available');
    return '0%';
  }
  
  console.log('Memory metrics:', {
    used: systemMetrics.value.memory.used,
    total: systemMetrics.value.memory.total,
    usagePercent: systemMetrics.value.memory.usagePercent
  });
  
  // Use the backend-calculated percentage if available
  if (typeof systemMetrics.value.memory.usagePercent === 'number') {
    console.log(`Using backend percentage: ${systemMetrics.value.memory.usagePercent.toFixed(1)}%`);
    return `${systemMetrics.value.memory.usagePercent.toFixed(1)}%`;
  }
  
  // Fallback to calculation with safety checks
  if (systemMetrics.value.memory.total > 0) {
    const percent = (systemMetrics.value.memory.used / systemMetrics.value.memory.total) * 100;
    const safePercent = Math.min(Math.max(percent, 0), 100);
    console.log(`Calculated percentage: ${safePercent.toFixed(1)}%`);
    return `${safePercent.toFixed(1)}%`;
  }
  
  return '0%';
}

const getMemoryPercentage = () => {
  // Use the backend-calculated percentage if available
  if (systemMetrics.value && systemMetrics.value.memory && 
      typeof systemMetrics.value.memory.usagePercent === 'number') {
    return Math.min(Math.max(systemMetrics.value.memory.usagePercent, 0), 100);
  }
  
  // Fallback to calculation with safety checks
  if (systemMetrics.value && systemMetrics.value.memory && 
      systemMetrics.value.memory.total > 0) {
    const percent = (systemMetrics.value.memory.used / systemMetrics.value.memory.total) * 100;
    return Math.min(Math.max(percent, 0), 100);
  }
  
  return 0;
}

// Update the fetchSystemMetrics function
const fetchSystemMetrics = async () => {
  try {
    console.log('Fetching metrics from:', METRICS_API_URL);
    
    const response = await fetch(METRICS_API_URL, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      },
      mode: 'cors'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Raw system metrics from API:', data);
    systemMetrics.value = data;
  } catch (error) {
    console.error('Error fetching system metrics:', error);
  }
};

// Add this watch to debug the metrics
watch(systemMetrics, (newMetrics) => {
  if (newMetrics && newMetrics.memory) {
    console.log('Memory metrics updated:', {
      used: newMetrics.memory.used,
      total: newMetrics.memory.total,
      usagePercent: newMetrics.memory.usagePercent
    });
  }
}, { deep: true });

// Add these helper functions to safely access metrics
const getCpuUsage = () => {
  if (!systemMetrics.value || !systemMetrics.value.cpu || typeof systemMetrics.value.cpu.usage !== 'number') {
    return 0;
  }
  return systemMetrics.value.cpu.usage;
};

const displayCpuUsage = () => {
  const usage = getCpuUsage();
  return usage.toFixed(1) + '%';
};
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

.gradient-text {
  background: linear-gradient(45deg, #8B5CF6, #3B82F6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient 3s ease infinite;
  background-size: 200% 200%;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Add these new theme variables */
:root {
  --color-cream: #FFF8EE;
  --color-light-modal: #F7F4F2;
}

.bg-cream {
  background-color: var(--color-cream);
}

.bg-light-modal {
  background-color: var(--color-light-modal);
}

/* Add these styles to your <style> section */
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background-color: rgba(107, 114, 128, 0.7);
}

/* Modern theme toggle slider styles */
.slider {
  position: relative;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

input:checked + .slider {
  background-color: #3B82F6;
}

input:checked + .slider:before {
  transform: translateX(24px);
}

input:focus + .slider {
  box-shadow: 0 0 1px #3B82F6;
}

/* Remove the dots between slider */
input + .slider:after {
  content: none;
}

/* Add a subtle glow effect for dark mode */
input:checked + .slider:before {
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
}

/* Add a subtle hover effect */
.slider:hover:before {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}

input:checked + .slider:hover:before {
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.7);
}
</style>
