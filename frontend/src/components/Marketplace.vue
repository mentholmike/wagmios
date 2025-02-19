<template>
  <div class="fixed inset-0 bg-gray-900/90 backdrop-blur-md z-50">
    <Notification
      :show="!!notification"
      :message="notification?.message || ''"
      :type="notification?.type || 'loading'"
      :loading="notification?.loading"
    />
    
    <div class="container mx-auto p-4 h-full max-w-7xl">
      <div class="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 h-full flex flex-col border border-gray-700/50">
        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-white">Docker Marketplace 🐳</h2>
          <button @click="closeMarketplace" class="text-gray-400 hover:text-white">
            <span class="text-2xl">✕</span>
          </button>
        </div>

        <!-- Error State -->
        <div v-if="error" class="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-6">
          <p class="text-red-400">{{ error }}</p>
          <button 
            @click="fetchMarketplaceData" 
            class="text-red-400 hover:text-red-300 text-sm mt-2"
          >
            Try again
          </button>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="flex items-center justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>

        <template v-else-if="!error">
          <!-- Categories with Emojis -->
          <div class="flex flex-wrap gap-4 mb-8 justify-center">
            <button
              v-for="category in categoryWithEmojis"
              :key="category.name"
              @click="selectedCategory = category.name"
              class="relative group"
            >
              <div
                :class="[
                  'w-12 h-12 flex items-center justify-center text-2xl rounded-xl transition-all duration-200',
                  selectedCategory === category.name
                    ? 'bg-blue-600/90 scale-110 shadow-lg shadow-blue-500/20'
                    : 'bg-gray-700/40 hover:bg-gray-600/60 hover:scale-105'
                ]"
              >
                {{ category.emoji }}
              </div>
              <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-700 text-white rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {{ category.name }}
              </div>
            </button>
          </div>

          <!-- Container Grid with Updated Styling -->
          <div class="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="container in filteredContainers"
                :key="container.id"
                class="group bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg cursor-pointer hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div class="flex items-start space-x-4 mb-6">
                  <div class="container-logo">
                    <img 
                      v-if="container.logo"
                      :src="getLogoUrl(container.logo)" 
                      :alt="`${container.name} logo`"
                      @error="(e) => handleImageError(e, container.id)"
                      @load="(e) => handleImageLoad(e, container.id)"
                      class="h-12 w-12 object-contain"
                      loading="lazy"
                    />
                    <span v-show="showFallback[container.id]" class="fallback-emoji">📦</span>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center mb-2">
                      <h3 class="text-xl font-bold text-white">{{ container.name }}</h3>
                      <span v-if="container.verified" class="ml-2 text-blue-400 text-sm">✓</span>
                    </div>
                    <p class="text-gray-300 text-sm leading-relaxed">{{ container.description }}</p>
                  </div>
                </div>
                
                <div class="flex items-center justify-between pt-4 border-t border-gray-600/20">
                  <div class="flex items-center space-x-2">
                    <span class="text-xl">{{ getCategoryEmoji(container.category) }}</span>
                    <span class="text-gray-300 text-sm">{{ container.category }}</span>
                  </div>
                  <button
                    @click="installContainer(container)"
                    class="bg-blue-600/90 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 font-medium"
                  >
                    <span>Install</span>
                    <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Notification from './Notification.vue'

const getLogoUrl = (logoUrl: string) => {
    if (!logoUrl) return '';
    
    // If it's already a full URL, return it
    if (logoUrl.startsWith('http://') || logoUrl.startsWith('https://')) {
        return logoUrl;
    }
    
    // Get the base URL from the current hostname
    const hostname = window.location.hostname;
    const port = '8080';
    
    // Remove duplicate "logos/" if present
    const cleanPath = logoUrl.replace(/^logos\//, '');
    
    // Construct the URL to our local logos directory
    return `http://${hostname}:${port}/logos/${cleanPath}`;
};

const getMarketplaceUrl = () => {
  const hostname = window.location.hostname
  const port = '8080'
  return `http://${hostname}:${port}/api/marketplace`
}

const MARKETPLACE_URL = getMarketplaceUrl()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes in milliseconds

// Define the type for valid categories
type CategoryType = 'All' | 'Media Servers' | 'Development' | 'Monitoring' | 'Database' | 
                   'Productivity' | 'Gaming' | 'Networking' | 'Network Tools' | 'VPN' | 
                   'Arr Stack' | 'Home Automation' | 'Container Management' | 'Security' | 
                   'Analytics' | 'Torrents';

// Define the categoryEmojis with proper typing
const categoryEmojis: Record<CategoryType, string> = {
    'All': '🌐',
    'Media Servers': '🎬',
    'Development': '💻',
    'Monitoring': '📊',
    'Database': '🗄️',
    'Productivity': '📝',
    'Gaming': '🎮',
    'Networking': '🌐',
    'Network Tools': '🔧',
    'VPN': '🔒',
    'Arr Stack': '🏴‍☠️',
    'Home Automation': '🏠',
    'Container Management': '📦',
    'Security': '🛡️',
    'Analytics': '📈',
    'Torrents': '📥'
};

interface Container {
  id: string
  name: string
  description: string
  category: CategoryType
  image: string
  logo: string
  popularity: number
  verified: boolean
  compose_file?: string
  ports?: string[]
  volumes?: string[]
  env?: string[]
}

interface CachedData {
  timestamp: number
  data: {
    containers: Container[]
    categories: string[]
  }
}

interface NotificationState {
  message: string
  type: 'success' | 'error' | 'loading'
  loading?: boolean
}

const containers = ref<Container[]>([])
const categories = ref<string[]>([])
const selectedCategory = ref('All')
const loading = ref(false)
const error = ref<string | null>(null)
const notification = ref<NotificationState | null>(null)
const showFallback = ref<{ [key: string]: boolean }>({})

const categoryWithEmojis = computed(() => {
  const allCategories = categories.value.includes('All') 
    ? categories.value 
    : ['All', ...categories.value]
    
  return allCategories.map(cat => ({
    name: cat,
    emoji: categoryEmojis[cat as CategoryType] || '📦'
  }))
})

const filteredContainers = computed(() => {
  if (selectedCategory.value === 'All') {
    return containers.value
  }
  return containers.value.filter(c => c.category === selectedCategory.value)
})

const getCachedData = (): CachedData | null => {
  const cached = localStorage.getItem('marketplace-data')
  if (!cached) return null
  
  const parsedCache = JSON.parse(cached) as CachedData
  if (Date.now() - parsedCache.timestamp > CACHE_DURATION) {
    localStorage.removeItem('marketplace-data')
    return null
  }
  
  return parsedCache
}

const fetchMarketplaceData = async () => {
  error.value = null
  loading.value = true

  try {
    // Check cache first
    const cached = getCachedData()
    if (cached) {
      containers.value = cached.data.containers
      categories.value = ['All', ...cached.data.categories]
      loading.value = false
      return
    }

    const response = await fetch(MARKETPLACE_URL)
    if (!response.ok) {
      throw new Error(`Failed to fetch marketplace data: ${response.statusText}`)
    }

    const data = await response.json()
    containers.value = data.containers
    categories.value = ['All', ...data.categories]

    // Cache the new data
    localStorage.setItem('marketplace-data', JSON.stringify({
      timestamp: Date.now(),
      data: {
        containers: data.containers,
        categories: data.categories
      }
    }))
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load marketplace data'
    console.error('Error fetching marketplace data:', err)
  } finally {
    loading.value = false
  }
}

const installContainer = async (container: Container) => {
  loading.value = true
  notification.value = {
    message: `Starting installation of ${container.name}...`,
    type: 'loading',
    loading: true
  }

  try {
    notification.value = {
      message: `Pulling image for ${container.name}...`,
      type: 'loading',
      loading: true
    }

    const response = await fetch(`${MARKETPLACE_URL}/install`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: container.id,
        image: container.image,
        config: {
          ports: container.ports,
          volumes: container.volumes,
          env: container.env
        }
      })
    })

    // Log the raw response for debugging
    const responseText = await response.text();
    console.log('Raw server response:', responseText);

    if (!response.ok) {
      throw new Error(`Installation failed: ${responseText || response.statusText}`);
    }

    // Try to parse the response as JSON
    let jsonResponse;
    try {
      jsonResponse = JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse server response:', e);
      throw new Error('Invalid server response');
    }

    notification.value = {
      message: `Successfully installed ${container.name}!`,
      type: 'success'
    }
  } catch (error) {
    console.error('Detailed installation error:', error);
    notification.value = {
      message: error instanceof Error ? error.message : 'Failed to install container',
      type: 'error'
    }
  } finally {
    loading.value = false;
    // Clear success notification after 3 seconds
    if (notification.value?.type === 'success') {
      setTimeout(() => {
        notification.value = null;
      }, 3000);
    }
  }
}

const handleImageError = (event: Event, containerId: string) => {
    const img = event.target as HTMLImageElement;
    showFallback.value[containerId] = true;
    img.style.display = 'none';
};

const handleImageLoad = (event: Event, containerId: string) => {
    const img = event.target as HTMLImageElement;
    console.log(`Successfully loaded image for ${containerId}:`, img.src);
    showFallback.value[containerId] = false;
};

const getCategoryEmoji = (category: string): string => {
  const emojiMap: { [key: string]: string } = {
    'Media Servers': '🎬',
    'Development': '👨‍💻',
    'Monitoring': '📊',
    'Database': '💾',
    'Productivity': '✅',
    'Gaming': '🎮',
    'Networking': '🌐',
    'Network Tools': '🔧',
    'VPN': '🔒',
    'Arr Stack': '🏴‍☠️',
    'Home Automation': '🏠',
    'Container Management': '📦',
    'Security': '🛡️',
    'Analytics': '📈',
    'Torrents': '📥'
  };
  return emojiMap[category] || '📦';
};

const emit = defineEmits(['close']);

const closeMarketplace = () => {
  emit('close');
};

onMounted(() => {
  fetchMarketplaceData()
})
</script>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #4B5563;
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #6B7280;
}

.container-logo {
    position: relative;
    width: 3rem;  /* 48px */
    height: 3rem; /* 48px */
    display: flex;
    align-items: center;
    justify-content: center;
}

.fallback-emoji {
    font-size: 1.5rem;
}

img {
    max-width: 100%;
    height: auto;
}

.marketplace-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.back-button-container {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.back-button:hover {
  background-color: var(--color-background-mute);
}

.back-arrow {
  font-size: 1.2em;
}

.marketplace-header {
  text-align: center;
  padding: 1rem 0;
  margin-bottom: 1rem;
}

.marketplace-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-text);
}
</style> 
