<template>
  <div class="fixed inset-0 z-[100]" :class="isDarkMode ? 'bg-black/80 backdrop-blur-md' : 'bg-gray-900/50 backdrop-blur-md'">
    <div class="flex items-center justify-center min-h-screen p-4">
      <div :class="[
        'w-full max-w-2xl mx-auto rounded-2xl shadow-2xl overflow-hidden',
        isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white'
      ]">
        <!-- Header -->
        <div class="px-8 pt-8 pb-6">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">🔐</span>
            <div>
              <h2 class="text-2xl font-bold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                Welcome to WAGMIOS
              </h2>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-500' : 'text-gray-500'">
                AI-powered Docker container management
              </p>
            </div>
          </div>

          <!-- Step Indicator -->
          <div class="flex items-center gap-2 mt-6">
            <div v-for="s in totalSteps" :key="s" class="flex-1 h-1 rounded-full transition-all duration-300"
              :class="s <= step ? 'bg-blue-500' : (isDarkMode ? 'bg-gray-800' : 'bg-gray-200')"></div>
          </div>
          <p class="text-xs mt-2" :class="isDarkMode ? 'text-gray-600' : 'text-gray-400'">
            Step {{ step }} of {{ totalSteps }}
          </p>
        </div>

        <!-- Step Content -->
        <div class="px-8 pb-8">
          <!-- Step 1: Security Notice -->
          <div v-if="step === 1" class="space-y-4">
            <div :class="['p-4 rounded-xl', isDarkMode ? 'bg-red-900/20 border border-red-800/50' : 'bg-red-50 border border-red-200']">
              <div class="flex items-start gap-3">
                <span class="text-2xl">⚠️</span>
                <div>
                  <h3 class="font-semibold mb-1" :class="isDarkMode ? 'text-red-400' : 'text-red-700'">Security Notice</h3>
                  <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    WAGMIOS has direct access to your Docker socket — full control over all containers on this host.
                    Only run this on a trusted network. Never expose the API port to the public internet.
                  </p>
                </div>
              </div>
            </div>

            <div :class="['p-4 rounded-xl', isDarkMode ? 'bg-blue-900/20 border border-blue-800/50' : 'bg-blue-50 border border-blue-200']">
              <div class="flex items-start gap-3">
                <span class="text-2xl">🤖</span>
                <div>
                  <h3 class="font-semibold mb-1" :class="isDarkMode ? 'text-blue-400' : 'text-blue-700'">API Key for AI Agents</h3>
                  <p class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                    You'll receive an API key at the end of this setup. Give it to your AI agent to enable container management.
                    The key is shown <strong>only once</strong> — copy it immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Permissions -->
          <div v-if="step === 2" class="space-y-3">
            <p class="text-sm mb-4" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">
              Choose what your API key allows agents to do:
            </p>

            <div class="space-y-2">
              <label v-for="scope in scopeGroups" :key="scope.group"
                :class="['flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all', isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50']">
                <input type="checkbox" v-model="scope.enabled" class="mt-1 w-4 h-4 rounded accent-blue-500" />
                <div class="flex-1">
                  <div class="font-medium text-sm" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ scope.group }}</div>
                  <div class="text-xs mt-0.5" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">{{ scope.description }}</div>
                </div>
              </label>
            </div>

            <div :class="['p-3 rounded-lg text-xs border', isDarkMode ? 'bg-amber-900/20 border-amber-800 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-700']">
              ⚠️ <strong>Important:</strong> Scope changes require deleting your API key and starting over. To change scopes later, go to Settings → delete your key and volume, then run the Setup Wizard again.
            </div>
          </div>

          <!-- Step 3: Configure -->
          <div v-if="step === 3" class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">Key Label</label>
              <input v-model="keyLabel" type="text" :class="[
                'w-full px-4 py-3 rounded-xl text-sm',
                isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-200',
                'border focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              ]" placeholder="e.g., openclaw-agent" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">Setup Token</label>
              <input v-model="setupToken" type="text" :class="[
                'w-full px-4 py-3 rounded-xl text-sm font-mono',
                isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-200',
                'border focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              ]" placeholder="wag_setup_xxxx..." />
              <p class="text-xs mt-1" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
                Found in your server logs. One-time use token for first key creation.
              </p>
            </div>
          </div>

          <!-- Step 4: Generated -->
          <div v-if="step === 4" class="space-y-4">
            <div v-if="!generatedKey && !loading && !error" class="text-center py-8">
              <div class="text-4xl mb-3">🚀</div>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Ready when you are</p>
              <button @click="generateKey"
                class="mt-4 px-8 py-3 rounded-xl text-white bg-blue-600 hover:bg-blue-700 font-medium transition-colors">
                Generate API Key →
              </button>
            </div>

            <div v-if="loading" class="text-center py-8">
              <div class="text-3xl animate-bounce mb-3">⚙️</div>
              <p class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Generating your key...</p>
            </div>

            <div v-if="generatedKey" class="space-y-4">
              <div :class="['p-4 rounded-xl text-center', isDarkMode ? 'bg-green-900/20 border border-green-800/50' : 'bg-green-50 border border-green-200']">
                <div class="text-3xl mb-2">✅</div>
                <p class="text-sm font-medium mb-4" :class="isDarkMode ? 'text-green-400' : 'text-green-700'">API Key Generated</p>

                <div :class="['p-3 rounded-lg break-all text-left', isDarkMode ? 'bg-black/40' : 'bg-white border border-gray-200']">
                  <p class="text-xs mb-1" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">Your API Key:</p>
                  <code class="text-xs font-mono select-all" :class="isDarkMode ? 'text-green-400' : 'text-green-700'">{{ generatedKey }}</code>
                </div>

                <p class="text-xs mt-3" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
                  ⚠️ Copy this now. It will never be shown again.
                </p>
              </div>

              <button @click="finish"
                class="w-full py-3 rounded-xl text-white bg-green-600 hover:bg-green-700 font-medium transition-colors">
                Open WAGMIOS →
              </button>
            </div>

            <div v-if="error" :class="['p-3 rounded-lg text-sm', isDarkMode ? 'bg-red-900/20 text-red-400' : 'bg-red-50 text-red-600']">
              {{ error }}
            </div>
          </div>

          <!-- Navigation -->
          <div class="flex justify-between mt-6">
            <button v-if="step > 1 && !generatedKey" @click="step--"
              :class="['px-6 py-2.5 rounded-xl text-sm font-medium transition-colors', isDarkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200']">
              ← Back
            </button>
            <div v-else></div>

            <button v-if="step < totalSteps && !(step === 4 && generatedKey)"
              @click="nextStep"
              class="px-6 py-2.5 rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { client } from '../api'

const props = defineProps<{ isDarkMode: boolean }>()
const emit = defineEmits<{ (e: 'complete'): void }>()

const totalSteps = 4
const step = ref(1)
const loading = ref(false)
const error = ref('')
const generatedKey = ref('')

const keyLabel = ref('')
const setupToken = ref('')

const scopeGroups = ref([
  { group: 'containers:read', description: 'List and inspect containers, view logs and configs', enabled: true },
  { group: 'containers:write', description: 'Create, start, stop, and restart containers', enabled: true },
  { group: 'containers:delete', description: 'Delete containers (user must confirm each deletion)', enabled: false },
  { group: 'images:read', description: 'List downloaded Docker images', enabled: true },
  { group: 'images:write', description: 'Pull and delete images', enabled: true },
  { group: 'templates:read', description: 'Use saved container templates', enabled: true },
  { group: 'templates:write', description: 'Create and edit container templates', enabled: true },
  { group: 'marketplace:read', description: 'Browse the app marketplace', enabled: true },
  { group: 'marketplace:write', description: 'Install and manage marketplace apps', enabled: true },
  { group: 'secrets:write', description: 'Manage Docker secrets and credentials', enabled: false },
  { group: 'system:read', description: 'View system metrics and information', enabled: true },
  { group: 'keys:write', description: 'Create, list, and revoke API keys (admin only)', enabled: true },
])

const enabledScopes = computed(() =>
  scopeGroups.value.filter(s => s.enabled).map(s => s.group)
)

function nextStep() {
  if (step.value === 2 && enabledScopes.value.length === 0) {
    error.value = 'Select at least one permission'
    return
  }
  error.value = ''
  step.value++
}

async function generateKey() {
  loading.value = true
  error.value = ''
  try {
    const res = await client.setupKey(enabledScopes.value, keyLabel.value || 'default', setupToken.value || undefined)
    if (res.success && res.data.key) {
      generatedKey.value = res.data.key
    } else {
      error.value = res.error?.message || 'Failed to generate key'
    }
  } catch (e: any) {
    error.value = e.message || 'Failed to connect'
  } finally {
    loading.value = false
  }
}

function finish() {
  emit('complete')
}
</script>
