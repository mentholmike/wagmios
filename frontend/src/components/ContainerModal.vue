<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[9999]">
    <div class="bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-2xl h-[90vh] flex flex-col m-4">
      <!-- Fixed Header -->
      <div class="flex-none p-6 border-b border-gray-700">
        <div class="flex justify-between items-center">
          <h3 class="text-xl font-semibold text-white">{{ isEdit ? 'Edit' : 'New' }} Container</h3>
          <!-- Template Selection -->
          <div class="flex items-center gap-2">
            <select
              v-model="selectedTemplate"
              @change="onTemplateSelect"
              class="bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"
            >
              <option value="">Select Template</option>
              <option v-for="template in templates" :key="template.name" :value="template.name">
                {{ template.displayName }}
              </option>
            </select>
          </div>
        </div>
        <!-- Status Message -->
        <div v-if="statusMessage" :class="{
          'text-green-400': statusType === 'success',
          'text-blue-400': statusType === 'info',
          'text-red-400': statusType === 'error'
        }" class="text-sm mt-2">
          {{ statusMessage }}
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="flex flex-col flex-1 min-h-0">
        <!-- Scrollable Content -->
        <div class="flex-1 overflow-y-auto min-h-0">
          <div class="p-6 space-y-6">
            <!-- Container Name -->
            <div>
              <label class="block text-sm font-medium text-gray-300">Container Name</label>
              <input
                v-model="form.name"
                type="text"
                class="mt-1 w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"
                placeholder="e.g., my-container"
                required
              />
            </div>

            <!-- Image -->
            <div>
              <label class="block text-sm font-medium text-gray-300">Image</label>
              <input
                v-model="form.image"
                type="text"
                class="mt-1 w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"
                placeholder="e.g., nginx:latest"
                required
              />
            </div>

            <!-- Ports -->
            <div>
              <label class="block text-sm font-medium text-gray-300">Port Mappings</label>
              <div class="space-y-2">
                <div v-for="(port, index) in form.ports" :key="index" class="flex gap-2">
                  <input 
                    v-model="port.host"
                    type="text"
                    placeholder="Host Port (e.g., 8888)"
                    class="w-1/3 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"
                  />
                  <input 
                    v-model="port.container"
                    type="text"
                    placeholder="Container Port (e.g., 8888)"
                    class="w-1/3 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"
                  />
                  <select 
                    v-model="port.protocol"
                    class="w-1/4 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"
                  >
                    <option value="tcp">TCP</option>
                    <option value="udp">UDP</option>
                    <option value="both">TCP/UDP</option>
                  </select>
                  <button 
                    type="button"
                    @click="removePort(index)"
                    class="text-red-400 hover:text-red-300"
                  >✕</button>
                </div>
                <button 
                  type="button"
                  @click="addPort"
                  class="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Add Port Mapping
                </button>
              </div>
            </div>

            <!-- Volumes -->
            <div>
              <label class="block text-sm font-medium text-gray-300">Volume Mappings</label>
              <div class="space-y-2">
                <div v-for="(volume, index) in form.volumes" :key="index" class="flex gap-2">
                  <input 
                    v-model="volume.host"
                    type="text"
                    placeholder="Host Path (e.g., /data)"
                    class="w-1/2 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"
                  />
                  <input 
                    v-model="volume.container"
                    type="text"
                    placeholder="Container Path (e.g., /app/data)"
                    class="w-1/2 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"
                  />
                  <button 
                    type="button"
                    @click="removeVolume(index)"
                    class="text-red-400 hover:text-red-300"
                  >✕</button>
                </div>
                <button 
                  type="button"
                  @click="addVolume"
                  class="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Add Volume Mapping
                </button>
              </div>
            </div>

            <!-- Environment Variables -->
            <div>
              <label class="block text-sm font-medium text-gray-300">Environment Variables</label>
              <div class="space-y-2">
                <div v-for="(env, index) in form.env" :key="index" class="flex gap-2">
                  <input 
                    v-model="env.key"
                    type="text"
                    placeholder="Key"
                    class="w-1/2 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"
                  />
                  <input 
                    v-model="env.value"
                    type="text"
                    placeholder="Value"
                    class="w-1/2 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"
                  />
                  <button 
                    type="button"
                    @click="removeEnv(index)"
                    class="text-red-400 hover:text-red-300"
                  >✕</button>
                </div>
                <button 
                  type="button"
                  @click="addEnv"
                  class="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Add Environment Variable
                </button>
              </div>
            </div>

            <!-- Advanced Settings -->
            <div class="space-y-4">
              <div class="flex items-center gap-2">
                <input
                  type="checkbox"
                  v-model="form.privileged"
                  id="privileged"
                  class="w-4 h-4 bg-gray-700 border-gray-600 rounded"
                />
                <label for="privileged" class="text-sm font-medium text-gray-300">
                  Privileged Mode
                </label>
              </div>

              <!-- Network -->
              <div>
                <label class="block text-sm font-medium text-gray-300">Network Mode</label>
                <input
                  v-model="form.network"
                  type="text"
                  placeholder="e.g., container:gluetun"
                  class="mt-1 w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"
                />
              </div>

              <!-- Capabilities -->
              <div>
                <label class="block text-sm font-medium text-gray-300">Capabilities</label>
                <div class="space-y-2">
                  <div class="flex gap-2">
                    <select
                      v-model="selectedCapability"
                      class="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"
                    >
                      <option value="">Select capability</option>
                      <option value="NET_ADMIN">NET_ADMIN</option>
                      <option value="NET_RAW">NET_RAW</option>
                      <option value="SYS_ADMIN">SYS_ADMIN</option>
                    </select>
                    <button
                      type="button"
                      @click="addCapability"
                      class="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
                    >
                      Add
                    </button>
                  </div>
                  <!-- Selected capabilities -->
                  <div class="flex flex-wrap gap-2">
                    <div
                      v-for="cap in form.capabilities"
                      :key="cap"
                      class="px-3 py-1 bg-gray-600 text-white rounded-lg flex items-center gap-2"
                    >
                      {{ cap }}
                      <button
                        @click="removeCapability(cap)"
                        class="text-red-400 hover:text-red-300"
                      >✕</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Devices -->
              <div>
                <label class="block text-sm font-medium text-gray-300">Devices</label>
                <div class="mt-2 space-y-2">
                  <div v-for="(device, index) in form.devices" :key="index" class="flex gap-2">
                    <input
                      v-model="form.devices[index]"
                      type="text"
                      placeholder="e.g., /dev/net/tun"
                      class="flex-1 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"
                    />
                    <button
                      type="button"
                      @click="removeDevice(index)"
                      class="px-2 py-1 bg-red-500 text-white rounded-xl hover:bg-red-600"
                    >
                      ✕
                    </button>
                  </div>
                  <button
                    type="button"
                    @click="addDevice"
                    class="px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-500"
                  >
                    Add Device
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Fixed Footer -->
        <div class="flex-none p-6 border-t border-gray-700">
          <div class="flex justify-between items-center">
            <button
              type="button"
              @click="saveAsTemplate"
              class="px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-500"
            >
              Save as Template
            </button>
            <div class="flex gap-2">
              <button
                type="button"
                @click="handleClose"
                class="px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Creating...' : (isEdit ? 'Update' : 'Create') }}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { API_BASE_URL, TEMPLATES_API_URL, CONTAINERS_API_URL } from '../api'

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'created'): void
}>()

const isSubmitting = ref(false)
const isPulling = ref(false)
const statusMessage = ref('')
const statusType = ref('')

interface PortMapping {
  host: string
  container: string
  protocol: string
}

interface VolumeMapping {
  host: string
  container: string
}

interface EnvVar {
  key: string
  value: string
}

interface Template {
  name: string
  image: string
  ports: PortMapping[]
  volumes: VolumeMapping[]
  env: EnvVar[]
  privileged: boolean
  network: string
  capabilities: string[]
  devices: string[]
}

interface Props {
  onClose?: () => void
  onCreated?: () => void
  isEdit?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isEdit: false
})

const form = ref<Template>({
  name: '',
  image: '',
  ports: [],
  volumes: [],
  env: [],
  privileged: false,
  network: '',
  capabilities: [],
  devices: []
})

const selectedTemplate = ref<string>('')

const addPort = () => {
  form.value.ports.push({ host: '', container: '', protocol: 'tcp' })
}

const removePort = (index: number) => {
  form.value.ports.splice(index, 1)
}

const addVolume = () => {
  form.value.volumes.push({ host: '', container: '' })
}

const removeVolume = (index: number) => {
  form.value.volumes.splice(index, 1)
}

const addEnv = () => {
  form.value.env.push({ key: '', value: '' })
}

const removeEnv = (index: number) => {
  form.value.env.splice(index, 1)
}

const pullImage = async () => {
  if (!form.value.image) return
  
  isPulling.value = true
  statusMessage.value = `Pulling image ${form.value.image}...`
  
  try {
    console.log('Pulling image:', form.value.image)
    const response = await fetch(`${API_BASE_URL}/pull`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: form.value.image })
    })
    
    const data = await response.text()
    console.log('Pull response:', data)
    
    if (!response.ok) {
      throw new Error(data || 'Failed to pull image')
    }

    statusMessage.value = `Successfully pulled ${form.value.image}`
    statusType.value = 'success'
  } catch (error) {
    console.error('Error pulling image:', error)
    statusMessage.value = error instanceof Error ? error.message : 'Failed to pull image'
    statusType.value = 'error'
  } finally {
    isPulling.value = false
  }
}

const handleSubmit = async () => {
  try {
    console.log('Submitting form with data:', form.value)
    isSubmitting.value = true
    statusMessage.value = 'Pulling image...'
    statusType.value = 'info'

    // Pull image first
    await pullImage()

    statusMessage.value = 'Creating container...'
    // Filter out empty entries
    const formData = {
      ...form.value,
      ports: form.value.ports.filter(p => p.host && p.container),
      volumes: form.value.volumes.filter(v => v.host && v.container),
      env: form.value.env.filter(e => e.key && e.value)
    }

    console.log('Sending create request with data:', formData)

    const response = await fetch(`${CONTAINERS_API_URL}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    console.log('Create response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Error response:', errorText)
      throw new Error(`Failed to create container: ${errorText || response.status}`)
    }

    statusMessage.value = 'Container created successfully!'
    statusType.value = 'success'
    
    // Emit success event to parent
    emit('created')
    
    // Close modal after short delay
    setTimeout(() => {
      handleClose()
    }, 1500)

  } catch (error) {
    console.error('Error creating container:', error)
    statusMessage.value = error instanceof Error ? error.message : 'Failed to create container'
    statusType.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

const selectedCapability = ref('')

const addCapability = () => {
  if (selectedCapability.value && !form.value.capabilities.includes(selectedCapability.value)) {
    form.value.capabilities.push(selectedCapability.value)
    selectedCapability.value = ''
  }
}

const removeCapability = (cap: string) => {
  form.value.capabilities = form.value.capabilities.filter(c => c !== cap)
}

const saveAsTemplate = async () => {
  try {
    console.log('Attempting to save template...')
    const templateData = {
      name: form.value.name + '.json',
      image: form.value.image,
      ports: form.value.ports.filter(p => p.host && p.container),
      volumes: form.value.volumes.filter(v => v.host && v.container),
      env: form.value.env.filter(e => e.key && e.value),
      privileged: form.value.privileged,
      network: form.value.network,
      capabilities: form.value.capabilities,
      devices: form.value.devices
    }

    console.log('Template data to save:', templateData)
    statusMessage.value = 'Saving template...'
    statusType.value = 'info'

    // Use TEMPLATES_API_URL instead of API_BASE_URL/templates
    const response = await fetch(TEMPLATES_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(templateData)
    })

    console.log('Template save URL:', TEMPLATES_API_URL)
    
    const data = await response.text()
    console.log('Server response:', data)

    if (!response.ok) {
      throw new Error(data || `Server returned ${response.status}`)
    }

    statusMessage.value = 'Template saved successfully'
    statusType.value = 'success'
  } catch (error) {
    console.error('Error saving template:', error)
    statusMessage.value = error instanceof Error ? error.message : 'Failed to save template'
    statusType.value = 'error'
  }
}

const templates = ref<{ name: string; displayName: string }[]>([])

onMounted(async () => {
  await fetchTemplates()
})

const fetchTemplates = async () => {
  try {
    console.log('Fetching templates from:', `${TEMPLATES_API_URL}`)
    const response = await fetch(`${TEMPLATES_API_URL}`)
    if (!response.ok) throw new Error('Failed to fetch templates')
    const data = await response.json()
    console.log('Fetched templates:', data)
    
    // Map the templates to include both name (with .json) and display name (without .json)
    templates.value = data.map((template: any) => ({
      name: template.name,
      displayName: template.name.replace('.json', '')
    }))
  } catch (error) {
    console.error('Error fetching templates:', error)
  }
}

const loadTemplate = async () => {
  if (!selectedTemplate.value) return
  
  try {
    console.log('Loading template:', selectedTemplate.value)
    statusMessage.value = 'Loading template...'
    statusType.value = 'info'

    const templateName = selectedTemplate.value.endsWith('.json') 
      ? selectedTemplate.value 
      : `${selectedTemplate.value}.json`
    
    const response = await fetch(`${TEMPLATES_API_URL}/${encodeURIComponent(templateName)}`)
    
    if (!response.ok) {
      throw new Error(`Failed to load template: ${response.status}`)
    }
    
    const template = await response.json() as Template
    
    // Special handling for Gluetun template
    const isGluetun = template.name.toLowerCase().includes('gluetun')
    
    form.value = {
      name: template.name,
      image: template.image,
      ports: Array.isArray(template.ports) ? template.ports.map((p: PortMapping) => {
        // Keep original ports for Gluetun
        if (isGluetun) {
          return {
            host: p.host,
            container: p.container,
            protocol: p.protocol || 'tcp'
          }
        }
        // For other containers, randomize ports
        return {
          host: String(parseInt(p.host) + Math.floor(Math.random() * 100)),
          container: p.container,
          protocol: p.protocol || 'tcp'
        }
      }) : [],
      volumes: Array.isArray(template.volumes) ? template.volumes.map((v: VolumeMapping) => ({
        host: v.host,
        container: v.container
      })) : [],
      env: Array.isArray(template.env) ? template.env.map((e: EnvVar) => ({
        key: e.key,
        value: e.value
      })) : [],
      privileged: Boolean(template.privileged),
      network: template.network || '',
      capabilities: Array.isArray(template.capabilities) ? [...template.capabilities] : [],
      devices: template.devices || ['/dev/net/tun']
    }

    // If it's Gluetun, ensure specific ports are set
    if (isGluetun) {
      const requiredPorts = [
        { host: '8388', container: '8388' },
        { host: '8888', container: '8888' }
      ]
      
      // Add any missing required ports
      requiredPorts.forEach(port => {
        if (!form.value.ports.some(p => p.container === port.container)) {
          form.value.ports.push({
            host: port.host,
            container: port.container,
            protocol: 'tcp'
          })
        }
      })
    }

    console.log('Updated form with template data:', form.value)
    statusMessage.value = 'Template loaded successfully'
    statusType.value = 'success'
  } catch (error) {
    console.error('Error loading template:', error)
    statusMessage.value = error instanceof Error ? error.message : 'Failed to load template'
    statusType.value = 'error'
  }
}

// Update the template selection handler
const onTemplateSelect = async () => {
  console.log('Template selected:', selectedTemplate.value)
  if (selectedTemplate.value) {
    await loadTemplate()
  } else {
    // Reset form to default state
    form.value = {
      name: '',
      image: '',
      ports: [{ host: '', container: '', protocol: 'tcp' }],
      volumes: [{ host: '', container: '' }],
      env: [{ key: '', value: '' }],
      privileged: false,
      network: '',
      capabilities: [],
      devices: ['/dev/net/tun']
    }
  }
}

const addDevice = () => {
  form.value.devices.push('')
}

const removeDevice = (index: number) => {
  form.value.devices.splice(index, 1)
}

const handleClose = () => {
  emit('close')
}
</script>

<style scoped>
/* Add custom scrollbar styling */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #4B5563 transparent;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #4B5563;
  border-radius: 3px;
}

/* Add transition for status message */
.text-sm {
  transition: all 0.3s ease;
}

/* Ensure proper flex behavior */
.flex-1 {
  min-height: 0;
}
</style> 