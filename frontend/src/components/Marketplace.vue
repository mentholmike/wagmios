<template>
  <div class="fixed inset-0 z-50" :class="[
    isDarkMode ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-cream/80 backdrop-blur-md'
  ]">
    <Notification
      :show="!!notification"
      :message="notification?.message || ''"
      :type="notification?.type || 'loading'"
      :loading="notification?.loading"
    />
    
    <div class="container mx-auto p-4 h-full max-w-7xl">
      <div :class="[
        'backdrop-blur-xl rounded-2xl shadow-2xl p-8 h-full flex flex-col border',
        isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-gray-200/50'
      ]">
        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
          <h2 :class="[
            'text-2xl font-bold',
            isDarkMode ? 'text-white' : 'text-gray-900'
          ]">Docker Marketplace 🐳</h2>
          <button @click="closeMarketplace" :class="isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'">
            <span class="text-2xl">✕</span>
          </button>
        </div>

        <!-- Error State -->
        <div v-if="error" :class="[
          'border rounded-lg p-4 mb-6',
          isDarkMode ? 'bg-red-500/10 border-red-500' : 'bg-red-100 border-red-300'
        ]">
          <p :class="isDarkMode ? 'text-red-400' : 'text-red-600'">{{ error }}</p>
          <button 
            @click="fetchMarketplaceData" 
            :class="isDarkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-700'"
            class="text-sm mt-2"
          >
            Try again
          </button>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="flex items-center justify-center py-12">
          <div :class="[
            'animate-spin rounded-full h-12 w-12 border-b-2',
            isDarkMode ? 'border-blue-500' : 'border-blue-600'
          ]"></div>
        </div>

        <template v-else-if="!error">
          <!-- Search and Filter -->
          <div class="flex flex-col md:flex-row gap-4 mb-6">
            <div class="flex-1">
              <div :class="[
                'flex items-center px-4 py-2 rounded-xl border transition-all duration-200',
                isDarkMode 
                  ? 'bg-gray-700/50 border-gray-600/50 focus-within:border-blue-500/70' 
                  : 'bg-gray-100 border-gray-200 focus-within:border-blue-400'
              ]">
                <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">🔍</span>
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search containers..."
                  :class="[
                    'bg-transparent border-none w-full px-3 py-1 focus:outline-none',
                    isDarkMode ? 'text-white placeholder-gray-500' : 'text-gray-800 placeholder-gray-400'
                  ]"
                />
                <button 
                  v-if="searchQuery" 
                  @click="clearSearch"
                  :class="isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'"
                >
                  ✕
                </button>
              </div>
            </div>
            <div>
              <select
                v-model="selectedCategory"
                :class="[
                  'px-4 py-2 rounded-xl appearance-none cursor-pointer border',
                  isDarkMode 
                    ? 'bg-gray-700/50 text-white border-gray-600 focus:border-blue-500' 
                    : 'bg-gray-100 text-gray-800 border-gray-200 focus:border-blue-400'
                ]"
              >
                <option value="">All Categories</option>
                <option v-for="category in categories" :key="category" :value="category">
                  {{ category }}
                </option>
              </select>
            </div>
          </div>

          <!-- No Results Message -->
          <div v-if="filteredContainers.length === 0" class="flex flex-col items-center justify-center py-12">
            <div :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'" class="text-xl mb-4">No containers found</div>
            <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" class="text-center mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button 
              @click="clearFilters" 
              :class="[
                'px-4 py-2 rounded-lg transition-colors',
                isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              ]"
            >
              Clear Filters
            </button>
          </div>

          <!-- Container Grid -->
          <div v-else :class="[
            'flex-1 overflow-y-auto pr-2',
            isDarkMode ? 'scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent' : 'light-scrollbar'
          ]">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="container in filteredContainers"
                :key="container.id"
                :class="[
                  'group rounded-xl p-6 shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl',
                  isDarkMode 
                    ? 'bg-gray-800/50 backdrop-blur-xl hover:bg-gray-800/70' 
                    : 'bg-white/90 backdrop-blur-xl hover:bg-white border border-gray-200/50'
                ]"
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
                      <h3 :class="isDarkMode ? 'text-xl font-bold text-white' : 'text-xl font-bold text-gray-800'">
                        {{ container.name }}
                      </h3>
                      <span v-if="container.verified" class="ml-2 text-blue-500 text-sm">✓</span>
                    </div>
                    <p :class="isDarkMode ? 'text-gray-300 text-sm leading-relaxed' : 'text-gray-600 text-sm leading-relaxed'">
                      {{ container.description }}
                    </p>
                  </div>
                </div>
                
                <div :class="[
                  'flex items-center justify-between pt-4 border-t',
                  isDarkMode ? 'border-gray-600/20' : 'border-gray-200/50'
                ]">
                  <div class="flex items-center space-x-2">
                    <span class="text-xl">{{ getCategoryEmoji(container.category) }}</span>
                    <span :class="isDarkMode ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'">
                      {{ container.category }}
                    </span>
                  </div>
                  <button
                    @click="installContainer(container)"
                    :class="[
                      'px-6 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 font-medium',
                      isDarkMode 
                        ? 'bg-blue-600/90 hover:bg-blue-700 text-white' 
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    ]"
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
import { ref, computed, onMounted, inject } from 'vue'
import Notification from './Notification.vue'

// Get theme from parent component
const isDarkMode = inject('isDarkMode', ref(true))

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
type CategoryType = string;

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
  env?: { name?: string; default?: string; value?: string }[]
}

const containers = ref<Container[]>([])
const loading = ref(true)
const error = ref<string | null>(null)
const searchQuery = ref('')
const selectedCategory = ref('')
const categories = ref<string[]>([])
const showFallback = ref<Record<string, boolean>>({})
const notification = ref<{ message: string; type: string; loading?: boolean } | null>(null)

// Improved search function that normalizes text for better matching
const normalizeText = (text: string): string => {
  return text.toLowerCase().trim();
}

const filteredContainers = computed(() => {
  let result = [...containers.value];
  
  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = normalizeText(searchQuery.value);
    result = result.filter(container => 
      normalizeText(container.name).includes(query) || 
      normalizeText(container.description).includes(query)
    );
  }
  
  // Filter by category
  if (selectedCategory.value) {
    result = result.filter(container => container.category === selectedCategory.value);
  }
  
  return result;
});

// Clear search and filters
const clearSearch = () => {
  searchQuery.value = '';
}

const clearFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = '';
}

const fetchMarketplaceData = async () => {
  loading.value = true
  error.value = null
  
  try {
    // Check if we have cached data
    const cachedData = localStorage.getItem('marketplace_data')
    const cachedTimestamp = localStorage.getItem('marketplace_timestamp')
    
    if (cachedData && cachedTimestamp) {
      const timestamp = parseInt(cachedTimestamp)
      const now = Date.now()
      
      // If cache is still valid, use it
      if (now - timestamp < CACHE_DURATION) {
        const parsedData = JSON.parse(cachedData)
        containers.value = parsedData.containers
        categories.value = parsedData.categories
        loading.value = false
        return
      }
    }
    
    // Fetch fresh data
    const response = await fetch(MARKETPLACE_URL)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch marketplace data: ${response.statusText}`)
    }
    
    const data = await response.json()
    console.log("Raw marketplace data:", data);
    
    // Handle both array format and object format with containers property
    let containerData = data;
    
    // If data is an object with a containers property, use that
    if (!Array.isArray(data) && data && typeof data === 'object' && Array.isArray(data.containers)) {
      containerData = data.containers;
    }
    
    // If we still don't have an array, throw an error
    if (!Array.isArray(containerData)) {
      throw new Error('Invalid marketplace data format: Expected an array or an object with a containers array')
    }
    
    // Process the data
    containers.value = containerData.map((item: any) => ({
      id: item.id || `container-${Math.random().toString(36).substr(2, 9)}`,
      name: item.name || 'Unknown Container',
      description: item.description || 'No description available',
      category: item.category || 'Other',
      image: item.image || '',
      logo: item.logo || '',
      popularity: item.popularity || 0,
      verified: item.verified || false,
      compose_file: item.compose_file || undefined,
      ports: item.ports || [],
      volumes: item.volumes || [],
      env: item.env || []
    }))
    
    // Extract unique categories
    const uniqueCategories = new Set<string>()
    containers.value.forEach(container => {
      if (container.category) {
        uniqueCategories.add(container.category)
      }
    })
    categories.value = Array.from(uniqueCategories).sort()
    
    // Cache the data
    localStorage.setItem('marketplace_data', JSON.stringify({
      containers: containers.value,
      categories: categories.value
    }))
    localStorage.setItem('marketplace_timestamp', Date.now().toString())
    
  } catch (err) {
    console.error('Error fetching marketplace data:', err)
    error.value = err instanceof Error ? err.message : 'An unknown error occurred'
  } finally {
    loading.value = false
  }
}

const installContainer = async (container: Container) => {
  loading.value = true
  notification.value = {
    message: `Installing ${container.name}...`,
    type: 'loading',
    loading: true
  }

  try {
    const hostname = window.location.hostname
    const port = '8080'
    const installUrl = `http://${hostname}:${port}/api/marketplace/install`

    // Parse port mappings from the container data
    const parsedPorts = container.ports ? container.ports.map(portStr => {
      // Handle formats like "8080:80/tcp" or "8080:80"
      const parts = portStr.split(':')
      const containerPort = parts[1] ? parts[1].split('/')[0] : parts[0]
      const hostPort = parts[0]
      const protocol = portStr.includes('/') ? portStr.split('/')[1] : 'tcp'
      
      return {
        host: hostPort,
        container: containerPort,
        protocol: protocol
      }
    }) : []

    // Parse volume mappings
    const parsedVolumes = container.volumes ? container.volumes.map(volumeStr => {
      const parts = volumeStr.split(':')
      return {
        host: parts[0],
        container: parts[1] || parts[0]
      }
    }) : []

    // Parse environment variables
    const parsedEnv = container.env ? container.env.map(env => {
      return {
        key: env.name || '',
        value: env.default || env.value || ''
      }
    }) : []

    console.log('Sending installation request with:', {
      name: container.name,
      image: container.image,
      config: {
        ports: parsedPorts,
        volumes: parsedVolumes,
        env: parsedEnv
      }
    });

    const response = await fetch(installUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: container.name,
        image: container.image,
        config: {
          ports: parsedPorts,
          volumes: parsedVolumes,
          env: parsedEnv
        }
      })
    });

    const responseText = await response.text();
    console.log('Raw server response:', responseText);

    if (!response.ok) {
      throw new Error(`Installation failed: ${responseText || response.statusText}`);
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

/* Light mode scrollbar */
.light-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.light-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.light-scrollbar::-webkit-scrollbar-thumb {
  background: #CBD5E1;
  border-radius: 3px;
}

.light-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94A3B8;
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
</style> 
