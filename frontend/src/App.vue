<template>
  <div class="min-h-screen" :class="isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'">
    <Background3D />

    <!-- Top Bar -->
    <header class="relative z-10 flex items-center justify-between px-6 py-4">
      <div class="flex items-center gap-3">
        <img src="/wagmi-logo.png" alt="WAGMIOS" class="h-8 w-8 object-contain" />
        <span class="font-bold text-lg tracking-tight">WAGMIOS</span>
      </div>
      <div class="flex items-center gap-3">
        <button @click="toggleTheme"
          class="p-2 rounded-lg transition-colors"
          :class="isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'">
          <span v-if="isDarkMode">☀️</span>
          <span v-else>🌙</span>
        </button>
        <button @click="showSettings = true"
          class="p-2 rounded-lg transition-colors"
          :class="isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'">
          ⚙️
        </button>
      </div>
    </header>

    <!-- Setup Wizard -->
    <SetupWizard v-if="showWizard" :isDarkMode="isDarkMode" @complete="onWizardComplete" />

    <!-- Key Entry (when no key in browser) -->
    <KeyEntry v-else-if="showKeyEntry" :isDarkMode="isDarkMode" @success="onKeyEntrySuccess" />

    <!-- Main Dashboard -->
    <main v-else class="relative z-10 px-6 pb-8 max-w-3xl mx-auto">
      <!-- API Key -->
      <div :class="[
        'rounded-2xl p-5 mb-6 backdrop-blur-xl border shadow-lg',
        isDarkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200/50'
      ]">
        <div class="flex items-center justify-between mb-3">
          <div>
            <h2 class="text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">API Key</h2>
            <p class="text-[10px] mt-0.5" :class="isDarkMode ? 'text-gray-600' : 'text-gray-400'">Give to your AI agent</p>
          </div>
        </div>
        <div v-if="keyMeta" :class="[
          'p-2.5 rounded-xl font-mono text-xs break-all',
          isDarkMode ? 'bg-black/40 text-green-400' : 'bg-gray-50 text-green-700'
        ]">
          {{ maskedKey }}
        </div>
      </div>

      <!-- Metrics Dashboard -->
      <MetricsDashboard :isDarkMode="isDarkMode" />

      <!-- Containers -->
      <div :class="[
        'rounded-2xl p-5 mt-6 backdrop-blur-xl border shadow-lg',
        isDarkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200/50'
      ]">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
            Containers
          </h2>
          <button @click="loadContainers" class="text-xs" :class="isDarkMode ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'">
            ↻
          </button>
        </div>

        <!-- Container Tags -->
        <div v-if="containers.length > 0" class="flex flex-wrap gap-2">
          <button
            v-for="c in containers"
            :key="c.id"
            @click="selectContainer(c)"
            :class="[
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border',
              c.running
                ? (isDarkMode
                    ? 'bg-green-900/30 border-green-800/50 text-green-400 hover:bg-green-900/50'
                    : 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100')
                : (isDarkMode
                    ? 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700'
                    : 'bg-gray-100 border-gray-200 text-gray-500 hover:bg-gray-200')
            ]">
            <span class="w-1.5 h-1.5 rounded-full" :class="c.running ? 'bg-green-500' : 'bg-gray-400'"></span>
            <span class="font-mono">{{ c.name }}</span>
          </button>
        </div>

        <div v-else-if="containersLoading" class="text-center py-4">
          <span class="text-lg animate-spin">⏳</span>
        </div>

        <div v-else class="text-center py-4 text-xs" :class="isDarkMode ? 'text-gray-600' : 'text-gray-400'">
          No containers found
        </div>
      </div>

      <!-- Container Logs Panel (shown when a container is selected) -->
      <div v-if="selectedContainer" :class="[
        'rounded-2xl p-5 mt-4 backdrop-blur-xl border shadow-lg',
        isDarkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200/50'
      ]">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="text-sm font-bold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">
              {{ selectedContainer.name }}
            </h2>
            <p class="text-xs mt-0.5" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
              {{ selectedContainer.image }} · {{ selectedContainer.status }}
            </p>
          </div>
          <button @click="selectedContainer = null"
            class="p-1.5 rounded-lg transition-colors"
            :class="isDarkMode ? 'text-gray-500 hover:text-white hover:bg-gray-800' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Log Output -->
        <div :class="[
          'rounded-xl p-4 font-mono text-xs overflow-y-auto max-h-64',
          isDarkMode ? 'bg-black/60 text-gray-300' : 'bg-gray-900 text-gray-100'
        ]" style="scrollbar-width: thin;">
          <div v-if="containerLogs.loading" class="text-center py-4">
            <span class="animate-spin">⏳</span> Loading logs...
          </div>
          <div v-else-if="containerLogs.error" class="text-red-400">
            {{ containerLogs.error }}
          </div>
          <pre v-else class="whitespace-pre-wrap break-all">{{ containerLogs.data || 'No logs available' }}</pre>
        </div>
      </div>

      <!-- Activity Feed -->
      <div :class="[
        'rounded-2xl p-5 mt-6 backdrop-blur-xl border shadow-lg',
        isDarkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200/50'
      ]">
        <h2 class="text-xs font-medium uppercase tracking-wider mb-4" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
          Activity
        </h2>
        <ActivityFeed :isDarkMode="isDarkMode" />
      </div>

      <!-- Bookmarks -->
      <div :class="[
        'rounded-2xl p-5 mt-6 backdrop-blur-xl border shadow-lg',
        isDarkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200/50'
      ]">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
            Bookmarks
          </h2>
          <button @click="showAddLinkModal = true"
            class="text-xs px-2 py-1 rounded-lg transition-colors"
            :class="isDarkMode ? 'text-gray-500 hover:text-white hover:bg-gray-800' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'">
            ➕ Add
          </button>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <button
            v-for="(link, index) in customLinks"
            :key="index"
            @click="openPopup(link.url, link.title, 800, 600)"
            class="relative group flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-200"
            :class="isDarkMode
              ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-gray-600'
              : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'">
            <button @click.stop="deleteCustomLink(index)"
              class="absolute top-1 right-1 w-4 h-4 rounded-full flex items-center justify-center text-[8px] opacity-0 group-hover:opacity-100 transition-opacity"
              :class="isDarkMode ? 'bg-red-600 text-white' : 'bg-red-500 text-white'">
              ✕
            </button>
            <span class="text-xl">{{ link.emoji }}</span>
            <span class="text-[10px] truncate w-full text-center" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
              {{ link.title }}
            </span>
          </button>
        </div>
      </div>

      <!-- Footer Links -->
      <div class="mt-8 flex items-center justify-center gap-6 text-xs" :class="isDarkMode ? 'text-gray-600' : 'text-gray-400'">
        <a href="https://wagmilabs.fun" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">👷 Labs</a>
        <a href="https://github.com/mentholmike/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">🐙 GitHub</a>
      </div>
    </main>

    <!-- Modals -->
    <Settings v-if="showSettings" :isDarkMode="isDarkMode" @close="showSettings = false" />
    <AddLinkModal v-if="showAddLinkModal" :isDarkMode="isDarkMode" @added="loadCustomLinks" @close="showAddLinkModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Background3D from './components/Background3D.vue'
import Settings from './components/Settings.vue'
import ActivityFeed from './components/ActivityFeed.vue'
import SetupWizard from './components/SetupWizard.vue'
import KeyEntry from './components/KeyEntry.vue'
import AddLinkModal from './components/AddLinkModal.vue'
import MetricsDashboard from './components/MetricsDashboard.vue'
import { client, type KeyMeta } from './api'

const STORAGE_KEY = 'wagmios_custom_links'

// Theme — stored as 'dark' or 'light'
const isDarkMode = ref(true)
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

// Auth
const showWizard = ref(false)
const showKeyEntry = ref(false)
const keyMeta = ref<KeyMeta | null>(null)

async function checkAuth() {
  try {
    const res = await client.getAuthStatus()
    if (res.success) {
      showWizard.value = res.data.wizard_required
      if (res.data.meta) keyMeta.value = res.data.meta
      // If setup is done but no key in localStorage, show key entry
      if (!res.data.wizard_required && !client.getApiKey()) {
        showKeyEntry.value = true
      }
    }
  } catch {
    showWizard.value = true
  }
}

function onWizardComplete() {
  showWizard.value = false
  checkAuth()
}

function onKeyEntrySuccess() {
  showKeyEntry.value = false
  checkAuth()
}

const maskedKey = computed(() => {
  if (!keyMeta.value?.key_prefix) return '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••'
  return `wag_live_${'•'.repeat(44)}${keyMeta.value.key_prefix.slice(-4)}`
})

// Copy key (removed — API keys are 1-and-done)

// Containers
const containers = ref<any[]>([])
const containersLoading = ref(false)
const selectedContainer = ref<any>(null)
const containerLogs = ref<{ data: string; error: string; loading: boolean }>({ data: '', error: '', loading: false })

async function loadContainers() {
  containersLoading.value = true
  try {
    const res = await client.getContainers()
    if (res.success) {
      containers.value = (res.data || []).map((c: any) => ({
        ...c,
        running: (c.status || '').toLowerCase().includes('up') || (c.status || '').toLowerCase().includes('running')
      }))
    }
  } finally {
    containersLoading.value = false
  }
}

async function selectContainer(c: any) {
  selectedContainer.value = c
  containerLogs.value = { data: '', error: '', loading: true }
  try {
    const res = await client.getContainerLogs(c.id, 100)
    if (res.success) {
      containerLogs.value = { data: res.data?.logs || 'No logs available', error: '', loading: false }
    } else {
      containerLogs.value = { data: '', error: res.error?.message || 'Failed to load logs', loading: false }
    }
  } catch (e: any) {
    containerLogs.value = { data: '', error: e.message || 'Failed to load logs', loading: false }
  }
}

// Custom links
const customLinks = ref<any[]>([])
function loadCustomLinks() {
  try { customLinks.value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') } catch { customLinks.value = [] }
}
function deleteCustomLink(index: number) {
  customLinks.value.splice(index, 1)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customLinks.value))
}

// Popup
function openPopup(url: string, title: string, width: number, height: number) {
  const left = (window.screen.width - width) / 2
  const top = (window.screen.height - height) / 2
  window.open(url, title, `width=${width},height=${height},left=${left},top=${top},noopener,noreferrer`)
}

// Settings modal
const showSettings = ref(false)
const showAddLinkModal = ref(false)

onMounted(async () => {
  // Restore theme
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme !== null) {
    isDarkMode.value = savedTheme === 'dark'
  }

  // Listen for auth failures — if backend rejects our key, force re-onboarding
  window.addEventListener('wagmios:auth-failed', onAuthFailed)

  await checkAuth()
  loadCustomLinks()
  loadContainers()
  // Refresh containers every 30s
  setInterval(loadContainers, 30000)
})

onUnmounted(() => {
  window.removeEventListener('wagmios:auth-failed', onAuthFailed)
})

function onAuthFailed() {
  // If keys exist but ours is invalid, show key entry (not setup wizard)
  client.clearApiKey()
  showKeyEntry.value = true
  showSettings.value = false
}
</script>
