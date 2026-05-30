<template>
  <div class="fixed inset-0 z-[100]" :class="isDarkMode ? 'bg-black/80 backdrop-blur-md' : 'bg-gray-900/50 backdrop-blur-md'">
    <div class="flex items-center justify-center min-h-screen p-4">
      <div :class="[
        'w-full max-w-md rounded-2xl shadow-2xl overflow-hidden',
        isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white'
      ]">
        <!-- Header -->
        <div class="px-6 pt-6 pb-4">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-2xl">🔑</span>
            <h2 class="text-lg font-bold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Enter API Key</h2>
          </div>
          <p class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">
            WAGMIOS is set up but your browser doesn't have the API key stored. Enter your API key to continue.
          </p>
        </div>

        <!-- Form -->
        <div class="px-6 pb-6 space-y-4">
          <div>
            <label class="block text-xs font-medium mb-1.5" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">API Key</label>
            <input v-model="apiKey" type="password" ref="keyInput"
              :class="[
                'w-full px-4 py-3 rounded-xl text-sm font-mono border focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-200'
              ]"
              placeholder="wag_live_..."
              @keydown.enter="verify" />
          </div>

          <div v-if="error" :class="['p-3 rounded-xl text-sm', isDarkMode ? 'bg-red-900/20 text-red-400' : 'bg-red-50 text-red-600']">
            {{ error }}
          </div>

          <button @click="verify" :disabled="verifying || !apiKey.trim()"
            class="w-full py-3 rounded-xl text-sm font-medium text-white transition-colors"
            :class="verifying || !apiKey.trim() ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'">
            {{ verifying ? 'Verifying...' : 'Continue' }}
          </button>

          <p class="text-xs text-center" :class="isDarkMode ? 'text-gray-600' : 'text-gray-400'">
            Your key is stored in this browser only. It is never sent to any external service.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { client } from '../api'

const props = defineProps<{ isDarkMode: boolean }>()
const emit = defineEmits<{ (e: 'success'): void }>()

const apiKey = ref('')
const verifying = ref(false)
const error = ref('')
const keyInput = ref<HTMLInputElement | null>(null)

onMounted(() => {
  keyInput.value?.focus()
})

async function verify() {
  if (!apiKey.value.trim()) return
  verifying.value = true
  error.value = ''

  try {
    const key = apiKey.value.trim()
    const res = await client.verifyKey(key)
    if (res.success && res.data?.valid) {
      client.setApiKey(key)
      emit('success')
    } else {
      client.clearApiKey()
      error.value = 'Invalid API key. Please check and try again.'
    }
  } catch (e: any) {
    client.clearApiKey()
    error.value = 'Could not verify key. Check your connection.'
  } finally {
    verifying.value = false
  }
}

// Import onMounted
import { onMounted } from 'vue'
</script>