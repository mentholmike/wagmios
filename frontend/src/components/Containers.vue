<template>
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="bg-gray-800 w-full max-w-7xl h-[90vh] rounded-xl flex flex-col overflow-hidden">
        <!-- Header -->
        <div class="flex justify-between items-center p-6 flex-none border-b border-gray-700">
          <div class="flex items-center gap-4">
            <button 
              @click="$emit('close')" 
              class="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700/50"
            >
              ← Back
            </button>
            <h1 class="text-2xl font-bold text-white">Containers</h1>
          </div>
          <div class="flex gap-3">
            <button 
              @click="fetchContainers"
              class="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl text-gray-400 hover:text-white transition-colors"
              title="Refresh containers"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <button 
              @click="showAddModal = true"
              class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center gap-2 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              Add Container
            </button>
          </div>
        </div>
  
        <!-- Container List -->
        <div class="flex-1 overflow-y-auto p-6">
          <div v-if="loading" class="text-white">Loading containers...</div>
          <div v-else-if="containers.length === 0" class="text-white">
            No containers found. Add a container or visit the Marketplace to install containers.
          </div>
          <div v-else class="grid gap-4">
            <div v-for="container in containers" :key="container.ID" 
                 class="bg-gray-700/50 p-4 rounded-xl flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="text-white">
                  <h3 class="font-semibold">{{ container.name }}</h3>
                  <p class="text-sm text-gray-400">{{ container.image }}</p>
                  <p class="text-sm" :class="{'text-green-400': container.status.includes('Up'), 'text-red-400': !container.status.includes('Up')}">
                    {{ container.status }}
                  </p>
                </div>
              </div>
              
              <!-- Container Actions -->
              <div class="flex items-center gap-2">
                <!-- Edit Button -->
                <button
                  @click="editContainer(container)"
                  class="p-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg"
                  title="Edit Container"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                
                <!-- Action Buttons -->
                <div class="flex gap-1">
                  <button
                    v-if="!container.status.includes('Up')"
                    @click="handleContainerAction(container.ID, 'start')"
                    class="p-2 bg-gray-600 hover:bg-gray-500 text-green-400 rounded-lg"
                    title="Start Container"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <button
                    v-if="container.status.includes('Up')"
                    @click="handleContainerAction(container.ID, 'stop')"
                    class="p-2 bg-gray-600 hover:bg-gray-500 text-yellow-400 rounded-lg"
                    title="Stop Container"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                    </svg>
                  </button>
                  <button
                    @click="handleContainerAction(container.ID, 'restart')"
                    class="p-2 bg-gray-600 hover:bg-gray-500 text-blue-400 rounded-lg"
                    title="Restart Container"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                  <button
                    @click="handleContainerAction(container.ID, 'delete')"
                    class="p-2 bg-gray-600 hover:bg-gray-500 text-red-400 rounded-lg"
                    title="Delete Container"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- New/Edit Container Modal -->
      <ContainerModal
        v-if="showNewContainerModal || showEditContainerModal"
        :is-edit="showEditContainerModal"
        :container="selectedContainer"
        @close="closeModal"
        @submit="handleContainerSubmit"
      />

      <!-- Add Container Modal -->
      <ContainerModal 
        v-if="showAddModal"
        @close="handleModalClose"
        @created="handleContainerCreated"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import ContainerModal from './ContainerModal.vue'
  
  interface ContainerPort {
    host: string;
    container: string;
  }
  
  interface ContainerVolume {
    host: string;
    container: string;
  }
  
  interface ContainerEnv {
    key: string;
    value: string;
  }
  
  interface Container {
    ID: string;
    name: string;
    image: string;
    status: string;
    ports: ContainerPort[];
    volumes: ContainerVolume[];
    env: ContainerEnv[];
  }
  
  const emit = defineEmits(['close', 'showModal'])
  const loading = ref(false)
  const containers = ref<Container[]>([])
  const showNewContainerModal = ref(false)
  const showEditContainerModal = ref(false)
  const selectedContainer = ref<Container | null>(null)
  const showAddModal = ref(false)
  
  const getApiBaseUrl = () => {
    // Get the current hostname (IP or domain)
    const hostname = window.location.hostname
    // Use the same port as your Go backend
    const port = '8080'
    return `http://${hostname}:${port}/api/containers`
  }
  
  const API_BASE_URL = getApiBaseUrl()
  
  const fetchContainers = async () => {
    try {
      console.log('Using API URL:', API_BASE_URL)
      loading.value = true
      
      const response = await fetch(API_BASE_URL, {
        method: 'GET',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'omit'
      })
      
      console.log('Full response:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        url: response.url
      })
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Error response:', errorText)
        throw new Error(`Failed to fetch containers: ${response.status}`)
      }
      
      const data = await response.json()
      console.log('Raw container data:', data)
      containers.value = data
      console.log('Containers updated:', containers.value)
    } catch (error) {
      console.error('Error in fetchContainers:', error)
    } finally {
      loading.value = false
    }
  }
  
  const editContainer = (container: Container) => {
    selectedContainer.value = container
    showEditContainerModal.value = true
  }
  
  const closeModal = () => {
    showNewContainerModal.value = false
    showEditContainerModal.value = false
    selectedContainer.value = null
  }
  
  const handleContainerSubmit = async (formData: any) => {
    try {
      const endpoint = showEditContainerModal.value 
        ? `/api/containers/${selectedContainer.value?.ID}/update`
        : '/api/containers/create'
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
  
      if (!response.ok) {
        throw new Error('Failed to save container')
      }
  
      await fetchContainers()
      closeModal()
    } catch (error) {
      console.error('Error saving container:', error)
      // Maybe add some error handling UI here
    }
  }
  
  const handleContainerAction = async (containerId: string, action: string) => {
    try {
      console.log(`${action} container ${containerId}`)
      const response = await fetch(`${API_BASE_URL}/${containerId}/${action}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      })
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error(`Error response for ${action}:`, errorText)
        throw new Error(`Failed to ${action} container: ${response.status}`)
      }

      // Only refresh the container list if the action was successful
      await fetchContainers()
      
    } catch (error) {
      console.error(`Error ${action}ing container:`, error)
      // You might want to add a notification here
    }
  }
  
  onMounted(() => {
    console.log('Containers component mounted')
    fetchContainers()
  })
  
  const handleContainerUpdate = async (containerId: string, updates: any) => {
    try {
      const response = await fetch(`/api/containers/${containerId}/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updates)
      })
      if (!response.ok) throw new Error('Failed to update container')
      await fetchContainers()
      showEditContainerModal.value = false
    } catch (error) {
      console.error('Error updating container:', error)
    }
  }

  const handleModalClose = () => {
    showAddModal.value = false
  }

  const handleContainerCreated = () => {
    showAddModal.value = false
    // Refresh containers or other logic
  }
  </script>
  
  <style scoped>
  /* Custom scrollbar styling */
  .overflow-y-auto {
    scrollbar-width: thin;
    scrollbar-color: #4B5563 #1F2937;
  }
  
  .overflow-y-auto::-webkit-scrollbar {
    width: 8px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-track {
    background: #1F2937;
    border-radius: 4px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb {
    background-color: #4B5563;
    border-radius: 4px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background-color: #6B7280;
  }
  </style>
