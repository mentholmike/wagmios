<template>
  <div class="fixed inset-0 z-[100] flex items-center justify-center p-4" :class="isDarkMode ? 'bg-black/80 backdrop-blur-md' : 'bg-gray-900/50 backdrop-blur-sm'">
    <div :class="['w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col', isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white']">

      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b shrink-0" :class="isDarkMode ? 'border-gray-800' : 'border-gray-200'">
        <h2 class="font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">⚙️ Settings</h2>
        <button @click="$emit('close')"
          class="p-1.5 rounded-lg transition-colors"
          :class="isDarkMode ? 'text-gray-500 hover:text-white hover:bg-gray-800' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Content (scrollable) -->
      <div class="p-6 space-y-5 overflow-y-auto">

        <!-- Loading -->
        <div v-if="loading" class="text-center py-8">
          <span class="text-lg animate-spin">⏳</span>
        </div>

        <template v-else>
          <!-- ====== TAB SWITCHER ====== -->
          <div class="flex border-b mb-4" :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'">
            <button @click="activeTab = 'permissions'"
              :class="['px-4 py-2 text-sm font-medium border-b-2 transition-colors',
                activeTab === 'permissions'
                  ? (isDarkMode ? 'text-blue-400 border-blue-400' : 'text-blue-600 border-blue-600')
                  : (isDarkMode ? 'text-gray-500 border-transparent hover:text-gray-300' : 'text-gray-400 border-transparent hover:text-gray-600')
              ]">
              🔑 Permissions
            </button>
            <button @click="activeTab = 'keys'"
              :class="['px-4 py-2 text-sm font-medium border-b-2 transition-colors',
                activeTab === 'keys'
                  ? (isDarkMode ? 'text-blue-400 border-blue-400' : 'text-blue-600 border-blue-600')
                  : (isDarkMode ? 'text-gray-500 border-transparent hover:text-gray-300' : 'text-gray-400 border-transparent hover:text-gray-600')
              ]">
              🗝️ Key Management
            </button>
          </div>

          <!-- ====== API KEY PERMISSIONS ====== -->
          <div v-if="activeTab === 'permissions'">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
                Agent Permissions
              </h3>
              <span class="text-xs" :class="isDarkMode ? 'text-gray-600' : 'text-gray-400'">{{ enabledCount }} enabled</span>
            </div>

            <div class="space-y-2">
              <div v-for="scope in allScopes" :key="scope.value"
                @click="toggleScope(scope.value)"
                class="flex items-center gap-3 p-3 rounded-xl cursor-pointer border-2 transition-all"
                :class="isDarkMode
                  ? (selectedScopes.has(scope.value) ? 'bg-blue-900/20 border-blue-600' : 'bg-gray-800/50 border-gray-700 hover:border-gray-600')
                  : (selectedScopes.has(scope.value) ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-200 hover:border-gray-300')">
                <!-- Toggle -->
                <div class="w-10 h-6 rounded-full relative transition-colors shrink-0"
                  :class="selectedScopes.has(scope.value)
                    ? 'bg-blue-500'
                    : (isDarkMode ? 'bg-gray-600' : 'bg-gray-300')">
                  <div class="w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-all"
                    :class="selectedScopes.has(scope.value) ? 'translate-x-4.5' : 'translate-x-0.5'" />
                </div>
                <!-- Text -->
                <div class="flex-1 min-w-0 flex items-center justify-between gap-2">
                  <div>
                    <div class="text-sm font-medium" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ scope.label }}</div>
                    <div class="text-xs" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">{{ scope.description }}</div>
                  </div>
                  <span v-if="selectedScopes.has(scope.value)"
                    class="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0"
                    :class="isDarkMode ? 'bg-blue-500/30 text-blue-300' : 'bg-blue-100 text-blue-700'">
                    ENABLED
                  </span>
                </div>
              </div>
            </div>

            <div v-if="saveError" class="mt-2 p-2 rounded-lg text-xs" :class="isDarkMode ? 'bg-red-900/20 text-red-400' : 'bg-red-50 text-red-600'">
              {{ saveError }}
            </div>

            <button @click="saveScopes"
              :disabled="saving || selectedScopes.size === 0"
              class="mt-4 w-full py-3 rounded-xl text-sm font-medium text-white transition-colors"
              :class="saving || selectedScopes.size === 0
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'">
              {{ saving ? 'Saving...' : 'Save Permissions' }}
            </button>
          </div>

          <!-- ====== API KEY INFO ====== -->
          <div v-if="activeTab === 'permissions'" class="border-t pt-5" :class="isDarkMode ? 'border-gray-800' : 'border-gray-200'">
            <h3 class="text-xs font-medium uppercase tracking-wider mb-3" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
              API Key
            </h3>

            <div class="space-y-3">
              <div class="p-3 rounded-xl" :class="isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'">
                <div class="flex items-center justify-between mb-1">
                  <span class="text-xs" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">Label</span>
                  <span class="text-sm font-medium" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ keyInfo?.label || 'default' }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-xs" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">Prefix</span>
                  <code class="text-xs px-1.5 py-0.5 rounded" :class="isDarkMode ? 'bg-gray-900 text-gray-400' : 'bg-white text-gray-600'">
                    {{ keyInfo?.key_prefix }}...
                  </code>
                </div>
                <div class="flex items-center justify-between mt-1">
                  <span class="text-xs" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">Created</span>
                  <span class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">{{ formatDate(keyInfo?.created_at) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- ====== KEY MANAGEMENT TAB ====== -->
          <div v-if="(activeTab as string) === 'keys'">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
                API Keys
              </h3>
              <button @click="showCreateKey = true"
                class="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                + Create Key
              </button>
            </div>

            <!-- Key list -->
            <div class="space-y-2">
              <div v-for="k in keys" :key="k.id"
                class="p-3 rounded-xl" :class="isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'">
                <div class="flex items-center justify-between">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2">
                      <span class="text-sm font-medium" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ k.label || 'unnamed' }}</span>
                      <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                        :class="k.role === 'admin' ? 'bg-purple-500/20 text-purple-300' : 'bg-green-500/20 text-green-300'">
                        {{ k.role }}
                      </span>
                    </div>
                    <div class="text-xs mt-1" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
                      <code>{{ k.key_prefix }}...</code> · {{ formatDate(k.created_at) }}
                    </div>
                    <div class="flex flex-wrap gap-1 mt-1">
                      <span v-for="s in k.scopes" :key="s" class="text-[10px] px-1.5 py-0.5 rounded"
                        :class="isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'">{{ s }}</span>
                    </div>
                  </div>
                  <button @click="revokeKey(k.id)" :disabled="revokingKeyId === k.id"
                    class="ml-3 px-2 py-1 text-xs font-medium rounded-lg transition-colors shrink-0"
                    :class="isDarkMode ? 'text-red-400 hover:bg-red-900/30' : 'text-red-500 hover:bg-red-50'">
                    {{ revokingKeyId === k.id ? 'Revoking...' : 'Revoke' }}
                  </button>
                </div>
              </div>
              <div v-if="keys.length === 0" class="text-center py-6"
                :class="isDarkMode ? 'text-gray-600' : 'text-gray-400'">
                No keys found
              </div>
            </div>

            <!-- Create key modal -->
            <div v-if="showCreateKey" class="fixed inset-0 z-[110] flex items-center justify-center p-4" :class="isDarkMode ? 'bg-black/80' : 'bg-gray-900/50'">
              <div :class="['w-full max-w-md rounded-2xl shadow-2xl p-6', isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white']">
                <h3 class="font-semibold mb-4" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Create New Key</h3>

                <!-- Created key display -->
                <div v-if="createdKey" class="space-y-3">
                  <div :class="['p-3 rounded-lg', isDarkMode ? 'bg-green-900/20 border border-green-800/50' : 'bg-green-50 border border-green-200']">
                    <p class="text-xs mb-1" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Copy this key now — it won't be shown again:</p>
                    <code class="text-xs font-mono break-all select-all" :class="isDarkMode ? 'text-green-400' : 'text-green-700'">{{ createdKey }}</code>
                  </div>
                  <button @click="showCreateKey = false; createdKey = ''" class="w-full py-2 rounded-xl text-white bg-green-600 hover:bg-green-700 font-medium text-sm transition-colors">Done</button>
                </div>

                <!-- Create form -->
                <div v-else class="space-y-3">
                  <div>
                    <label class="block text-xs font-medium mb-1" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">Label</label>
                    <input v-model="newKeyLabel" type="text" class="w-full px-3 py-2 rounded-lg text-sm border" :class="isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-200'" placeholder="e.g. openclaw-agent" />
                  </div>
                  <div>
                    <label class="block text-xs font-medium mb-1" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">Role</label>
                    <div class="flex gap-2">
                      <button @click="newKeyRole = 'agent'" class="flex-1 py-2 rounded-lg text-sm font-medium border-2 transition-all" :class="newKeyRole === 'agent' ? 'border-blue-500 bg-blue-500/10 text-blue-400' : 'border-gray-700 text-gray-400'">Agent</button>
                      <button @click="newKeyRole = 'admin'" class="flex-1 py-2 rounded-lg text-sm font-medium border-2 transition-all" :class="newKeyRole === 'admin' ? 'border-purple-500 bg-purple-500/10 text-purple-400' : 'border-gray-700 text-gray-400'">Admin</button>
                    </div>
                  </div>
                  <div>
                    <label class="block text-xs font-medium mb-1" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">Scopes</label>
                    <div class="space-y-1 max-h-40 overflow-y-auto">
                      <div v-for="scope in allScopes" :key="scope.value" @click="toggleNewScope(scope.value)" class="flex items-center gap-2 p-2 rounded-lg cursor-pointer" :class="isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'">
                        <div class="w-4 h-4 rounded border-2 flex items-center justify-center" :class="newKeyScopes.has(scope.value) ? 'bg-blue-500 border-blue-500' : 'border-gray-600'">
                          <svg v-if="newKeyScopes.has(scope.value)" class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <span class="text-xs" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">{{ scope.label }}</span>
                      </div>
                    </div>
                  </div>
                  <div v-if="createKeyError" class="p-2 rounded-lg text-xs" :class="isDarkMode ? 'bg-red-900/20 text-red-400' : 'bg-red-50 text-red-600'">{{ createKeyError }}</div>
                  <div class="flex gap-2">
                    <button @click="showCreateKey = false" class="flex-1 py-2 rounded-xl text-sm font-medium" :class="isDarkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'">Cancel</button>
                    <button @click="createKey" :disabled="creatingKey || newKeyScopes.size === 0" class="flex-1 py-2 rounded-xl text-sm font-medium text-white" :class="creatingKey || newKeyScopes.size === 0 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'">{{ creatingKey ? 'Creating...' : 'Create' }}</button>
                  </div>
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
import { client, type KeyMeta, type AuthStatus, type KeyListEntry } from '../api'

const props = defineProps<{ isDarkMode: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()

const loading = ref(true)
const saving = ref(false)
const saveError = ref('')
const keyInfo = ref<KeyMeta | null>(null)

// Key management state
const activeTab = ref('permissions')
const keys = ref<KeyListEntry[]>([])
const showCreateKey = ref(false)
const newKeyLabel = ref('')
const newKeyRole = ref<string>('agent')
const newKeyScopes = ref<Set<string>>(new Set(['containers:read', 'containers:write', 'images:read', 'images:write', 'marketplace:read']))
const creatingKey = ref(false)
const createKeyError = ref('')
const createdKey = ref('')
const revokingKeyId = ref<string | null>(null)

const allScopes = [
  { value: 'containers:read', label: 'containers:read', description: 'List and inspect containers, view logs' },
  { value: 'containers:write', label: 'containers:write', description: 'Create, start, stop, and restart containers' },
  { value: 'containers:delete', label: 'containers:delete', description: 'Delete containers' },
  { value: 'images:read', label: 'images:read', description: 'List and inspect Docker images' },
  { value: 'images:write', label: 'images:write', description: 'Pull and delete images' },
  { value: 'templates:read', label: 'templates:read', description: 'Use saved container templates' },
  { value: 'templates:write', label: 'templates:write', description: 'Create and edit templates' },
  { value: 'marketplace:read', label: 'marketplace:read', description: 'Browse the app marketplace' },
  { value: 'marketplace:write', label: 'marketplace:write', description: 'Install and manage marketplace apps' },
]

const selectedScopes = ref<Set<string>>(new Set())

const enabledCount = computed(() => selectedScopes.value.size)

async function loadKeyInfo() {
  const res = await client.getSettings()
  if (res.success) {
    keyInfo.value = (res.data as AuthStatus)?.meta ?? null
    selectedScopes.value = new Set((res.data as AuthStatus)?.meta?.scopes || [])
  }
  loading.value = false
}

async function saveScopes() {
  saving.value = true
  saveError.value = ''
  const res = await client.updateScopes(Array.from(selectedScopes.value))
  if (res.success) {
    keyInfo.value = res.data as KeyMeta
    emit('close')
  } else {
    saveError.value = res.error?.message || 'Failed to save'
  }
  saving.value = false
}

function toggleScope(value: string) {
  if (selectedScopes.value.has(value)) {
    selectedScopes.value.delete(value)
  } else {
    selectedScopes.value.add(value)
  }
  // Force reactivity
  selectedScopes.value = new Set(selectedScopes.value)
}

function formatDate(iso: string | undefined) {
  if (!iso) return 'Never'
  return new Date(iso).toLocaleString()
}

async function loadKeys() {
  const res = await client.listKeys()
  if (res.success && res.data) {
    keys.value = res.data
  }
}

async function createKey() {
  creatingKey.value = true
  createKeyError.value = ''
  const res = await client.createKey(newKeyLabel.value || 'agent', Array.from(newKeyScopes.value), newKeyRole.value)
  if (res.success && res.data) {
    createdKey.value = res.data.key
    newKeyLabel.value = ''
    await loadKeys()
  } else {
    createKeyError.value = res.error?.message || 'Failed to create key'
  }
  creatingKey.value = false
}

async function revokeKey(id: string) {
  revokingKeyId.value = id
  const res = await client.revokeKey(id)
  if (res.success) {
    await loadKeys()
  } else {
    alert('Failed to revoke key: ' + (res.error?.message || 'Unknown error'))
  }
  revokingKeyId.value = null
}

function toggleNewScope(value: string) {
  if (newKeyScopes.value.has(value)) {
    newKeyScopes.value.delete(value)
  } else {
    newKeyScopes.value.add(value)
  }
  newKeyScopes.value = new Set(newKeyScopes.value)
}

onMounted(async () => {
  await loadKeyInfo()
  await loadKeys()
})
</script>
