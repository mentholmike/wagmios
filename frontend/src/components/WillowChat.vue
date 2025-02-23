<template>
  <div>
    <!-- Floating Chat Button -->
    <button
      @click="toggleChat"
      class="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gray-800/50 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:bg-gray-800/70 transition-all duration-300 shadow-lg hover:scale-105 border border-gray-700/50"
    >
      <div class="flex space-x-1.5">
        <div v-for="i in 3" :key="i" 
          class="w-1 bg-purple-400/80 rounded-full transform transition-all duration-500 audio-wave glow-effect"
          :style="{
            height: '24px',
            animationDelay: `${i * 0.15}s`
          }"
        ></div>
      </div>
    </button>

    <!-- Chat Modal -->
    <div v-if="isOpen" 
      class="fixed bottom-24 right-8 w-96 h-[32rem] bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-700/50 transition-all duration-300 ease-out transform"
      :class="isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
    >
      <!-- Header -->
      <div class="flex-none p-4 border-b border-gray-700/50">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <h3 class="text-white font-medium">W.I.L.L.O.W</h3>
          </div>
          <button @click="toggleChat" class="text-gray-400 hover:text-white transition-colors">
            ✕
          </button>
        </div>
      </div>

      <!-- Chat Messages -->
      <div class="flex-1 overflow-y-auto p-4 space-y-4" ref="chatContainer">
        <div v-for="(message, index) in messages" :key="index"
          class="flex items-start space-x-3"
          :class="message.type === 'user' ? 'justify-end' : ''"
        >
          <div :class="[
            'max-w-[80%] rounded-xl p-3',
            message.type === 'user' 
              ? 'bg-purple-600/50 text-white ml-auto'
              : 'bg-gray-700/50 text-gray-100'
          ]">
            {{ message.content }}
          </div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="flex-none p-4 border-t border-gray-700/50">
        <form @submit.prevent="sendMessage" class="flex space-x-2">
          <input
            v-model="newMessage"
            type="text"
            placeholder="Ask W.I.L.L.O.W something..."
            class="flex-1 bg-gray-700/50 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
          <button
            type="submit"
            class="bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-4 py-2 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { CHAT_API_URL } from '../api'

interface ChatMessage {
  type: 'user' | 'assistant'
  content: string
}

const isOpen = ref(false)
const newMessage = ref('')
const messages = ref<ChatMessage[]>([
  { type: 'assistant', content: 'Hello! I am W.I.L.L.O.W, how can I help you today?' }
])
const chatContainer = ref<HTMLElement | null>(null)
const isLoading = ref(false)

// Generate a random session ID for this chat instance
const sessionId = Math.random().toString(36).substring(7)
const userId = 'anonymous-' + Math.random().toString(36).substring(7)

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => {
      scrollToBottom()
    })
  }
}

const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

const sendMessage = async () => {
  if (!newMessage.value.trim() || isLoading.value) return

  const userMessage = newMessage.value
  
  messages.value.push({
    type: 'user',
    content: userMessage
  })

  newMessage.value = ''
  isLoading.value = true

  try {
    const response = await fetch(CHAT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
        sessionId: sessionId,
        userId: userId
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Server response:', errorText)
      throw new Error('Failed to send message')
    }

    const data = await response.json()
    console.log('Raw Willow response:', data)

    // Handle array response
    let responseData = Array.isArray(data) ? data[0] : data

    // Handle different response formats
    const responseText = responseData.output || responseData.response || responseData.message || responseData.text || responseData.content
    if (!responseText) {
        console.error('Unexpected response format:', responseData)
        throw new Error('Invalid response format')
    }

    messages.value.push({
        type: 'assistant',
        content: responseText
    })
  } catch (error) {
    console.error('Error sending message:', error)
    messages.value.push({
      type: 'assistant',
      content: 'Sorry, I encountered an error processing your message.'
    })
  } finally {
    isLoading.value = false
    await nextTick()
    scrollToBottom()
  }
}
</script>

<style scoped>
.audio-wave {
  animation: audioWave 1.5s ease-in-out infinite;
}

@keyframes audioWave {
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.5);
  }
}

.glow-effect {
  box-shadow: 0 0 10px rgba(167, 139, 250, 0.3),
              0 0 20px rgba(167, 139, 250, 0.2),
              0 0 30px rgba(167, 139, 250, 0.1);
}

/* Scrollbar styling */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #4B5563 transparent;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #4B5563;
  border-radius: 2px;
}
</style> 