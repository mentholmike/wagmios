<template>
  <div>
    <!-- Floating Chat Button -->
    <button
      @click="toggleChat"
      :class="[
        'fixed bottom-8 right-8 z-50 w-14 h-14 backdrop-blur-xl rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105 border',
        isDarkMode 
          ? 'bg-gray-800/50 hover:bg-gray-800/70 border-gray-700/50' 
          : 'bg-white/90 hover:bg-white border-gray-200'
      ]"
    >
      <div class="flex space-x-1.5">
        <div v-for="i in 3" :key="i" 
          :class="[
            'w-1 rounded-full transform transition-all duration-500 audio-wave',
            isDarkMode ? 'bg-purple-400/80 glow-effect' : 'bg-blue-500/80'
          ]"
          :style="{
            height: '24px',
            animationDelay: `${i * 0.15}s`
          }"
        ></div>
      </div>
    </button>

    <!-- Chat Modal -->
    <div v-if="isOpen" 
      :class="[
        'fixed bottom-24 right-8 w-96 h-[32rem] backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col overflow-hidden border transition-all duration-300 ease-out transform',
        isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
        isDarkMode 
          ? 'bg-gray-800/95 border-gray-700/50' 
          : 'bg-white/95 border-gray-200'
      ]"
    >
      <!-- Header -->
      <div :class="[
        'flex-none p-4 border-b',
        isDarkMode ? 'border-gray-700/50' : 'border-gray-200'
      ]">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div :class="[
              'w-2 h-2 rounded-full animate-pulse',
              isDarkMode ? 'bg-purple-500' : 'bg-blue-500'
            ]"></div>
            <h3 :class="isDarkMode ? 'text-white' : 'text-gray-800'" class="font-medium">W.I.L.L.O.W</h3>
          </div>
          <button 
            @click="toggleChat" 
            :class="isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'"
            class="transition-colors"
          >
            ✕
          </button>
        </div>
      </div>

      <!-- Chat Messages -->
      <div :class="[
        'flex-1 overflow-y-auto p-4 space-y-4',
        isDarkMode ? '' : 'light-scrollbar'
      ]" ref="chatContainer">
        <div v-for="(message, index) in messages" :key="index"
          class="flex items-start space-x-3"
          :class="message.type === 'user' ? 'justify-end' : ''"
        >
          <div :class="[
            'max-w-[80%] rounded-xl p-3',
            message.type === 'user' 
              ? (isDarkMode ? 'bg-purple-600/50 text-white' : 'bg-blue-500 text-white')
              : (isDarkMode ? 'bg-gray-700/50 text-gray-100' : 'bg-gray-100 text-gray-800')
          ]">
            {{ message.content }}
          </div>
        </div>
      </div>

      <!-- Input Area -->
      <div :class="[
        'flex-none p-4 border-t',
        isDarkMode ? 'border-gray-700/50' : 'border-gray-200'
      ]">
        <form @submit.prevent="sendMessage" class="flex space-x-2">
          <input
            v-model="newMessage"
            type="text"
            placeholder="Ask W.I.L.L.O.W something..."
            :class="[
              'flex-1 rounded-xl px-4 py-2 focus:outline-none',
              isDarkMode 
                ? 'bg-gray-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500' 
                : 'bg-gray-100 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-400'
            ]"
          >
          <button
            type="submit"
            :class="[
              'text-white rounded-xl px-4 py-2 transition-colors',
              isDarkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-500 hover:bg-blue-600'
            ]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, inject } from 'vue'
import { CHAT_API_URL } from '../api'

// Get theme from parent component
const isDarkMode = inject('isDarkMode', ref(true))

interface ChatMessage {
  type: 'user' | 'assistant'
  content: string
}

const isOpen = ref(false)
const newMessage = ref('')
const messages = ref<ChatMessage[]>([
  {
    type: 'assistant',
    content: 'Hello! I\'m W.I.L.L.O.W, your personal assistant. How can I help you today?'
  }
])
const chatContainer = ref<HTMLElement | null>(null)
const isLoading = ref(false)

// Add these constants for session and user IDs
const sessionId = ref(`session-${Date.now()}`)
const userId = ref(`user-${Math.random().toString(36).substring(2, 10)}`)

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
  
  const userMessage = newMessage.value.trim()
  newMessage.value = ''
  
  // Add user message to chat
  messages.value.push({
    type: 'user',
    content: userMessage
  })
  
  isLoading.value = true
  await nextTick()
  scrollToBottom()
  
  try {
    setTimeout(async () => {
      try {
        const response = await fetch(CHAT_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: userMessage,
            sessionId: sessionId.value,
            userId: userId.value
          })
        })
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        
        messages.value.push({
          type: 'assistant',
          content: data.response || 'I didn\'t understand that. Could you try again?'
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
    }, 500)
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

/* Scrollbar styling for dark mode */
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

/* Light mode scrollbar */
.light-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #CBD5E1 transparent;
}

.light-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.light-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.light-scrollbar::-webkit-scrollbar-thumb {
  background-color: #CBD5E1;
  border-radius: 2px;
}

.light-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #94A3B8;
}
</style> 