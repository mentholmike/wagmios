<template>
  <div class="fixed inset-0 flex items-center justify-center z-50" :class="isDarkMode ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-gray-200/80 backdrop-blur-sm'">
    <div :class="['rounded-xl p-6 w-96 shadow-2xl', isDarkMode ? 'bg-gray-800' : 'bg-white']">
      <h3 class="text-xl font-bold mb-4" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Add Custom Link</h3>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-2" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">Title</label>
        <input v-model="newLink.title" type="text"
          :class="['w-full px-4 py-2 rounded-lg', isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 text-gray-900 border-gray-300', 'border focus:ring-2 focus:ring-blue-500']"
          placeholder="My Link" />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-2" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">URL</label>
        <input v-model="newLink.url" type="url"
          :class="['w-full px-4 py-2 rounded-lg', isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 text-gray-900 border-gray-300', 'border focus:ring-2 focus:ring-blue-500']"
          placeholder="https://example.com" />
      </div>

      <div class="mb-6">
        <label class="block text-sm font-medium mb-2" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">Emoji</label>
        <div class="relative">
          <button @click="showEmojiPicker = !showEmojiPicker" type="button"
            :class="['w-full flex items-center justify-between px-4 py-3 rounded-lg', isDarkMode ? 'bg-gray-700 text-white border border-gray-600' : 'bg-gray-50 text-gray-900 border border-gray-300']">
            <span class="text-2xl mr-3">{{ newLink.emoji }}</span>
            <span>{{ showEmojiPicker ? 'Close' : 'Select' }}</span>
          </button>
          <div v-show="showEmojiPicker"
            :class="['absolute z-10 w-full mt-2 rounded-lg shadow-lg p-3 max-h-48 overflow-y-auto', isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-200']">
            <div class="grid grid-cols-8 gap-2">
              <button v-for="emoji in emojiList" :key="emoji" @click="selectEmoji(emoji)"
                :class="['text-2xl p-1 rounded hover:bg-black/10 transition-transform', newLink.emoji === emoji ? (isDarkMode ? 'bg-gray-600' : 'bg-blue-100') : '']">
                {{ emoji }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end space-x-3">
        <button @click="$emit('close')"
          :class="['px-4 py-2 rounded-lg', isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']">
          Cancel
        </button>
        <button @click="addLink" :disabled="!newLink.title || !newLink.url"
          :class="['px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700', (!newLink.title || !newLink.url) ? 'opacity-50 cursor-not-allowed' : '']">
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ isDarkMode: boolean }>()
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'added'): void
}>()

const STORAGE_KEY = 'wagmios_custom_links'

const newLink = ref({ title: '', url: '', emoji: '🔗' })
const showEmojiPicker = ref(false)

const emojiList = ['🔗', '🌐', '📱', '💻', '🚀', '⚡', '🔥', '⭐', '🎮', '📺', '🎵', '📚', '💬', '📝', '📈', '🎨', '🛠️', '⚙️', '📦', '🔍', '🎯', '📊', '🏢', '💼', '📁', '🔒', '🔑', '🎬', '📷', '🎥', '📞', '📧', '🔧', '☀️', '🍎', '🚗', '💎', '😀', '✨']

function selectEmoji(emoji: string) {
  newLink.value.emoji = emoji
  showEmojiPicker.value = false
}

function addLink() {
  if (!newLink.value.title || !newLink.value.url) return
  let url = newLink.value.url
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url
  }
  const links = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  links.push({ title: newLink.value.title, url, emoji: newLink.value.emoji })
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links))
  emit('added')
  emit('close')
}
</script>
