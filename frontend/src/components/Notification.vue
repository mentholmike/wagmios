<template>
  <div
    v-if="show"
    :class="[
      'fixed top-4 right-4 p-4 rounded-lg shadow-lg transition-all duration-300 z-50 flex items-center space-x-3',
      typeClasses[type]
    ]"
  >
    <span class="text-xl">{{ typeEmoji[type] }}</span>
    <div class="flex-1">
      <p class="font-medium">{{ message }}</p>
      <div v-if="loading" class="mt-2 w-full bg-gray-200 rounded-full h-1.5">
        <div class="bg-blue-500 h-1.5 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

type NotificationType = 'success' | 'error' | 'loading'

const props = withDefaults(defineProps<{
  show: boolean
  message: string
  type: NotificationType
  loading?: boolean
}>(), {
  loading: false
})

const typeClasses = {
  success: 'bg-green-500/90 text-white backdrop-blur-sm',
  error: 'bg-red-500/90 text-white backdrop-blur-sm',
  loading: 'bg-blue-500/90 text-white backdrop-blur-sm'
}

const typeEmoji = {
  success: '✅',
  error: '❌',
  loading: '⏳'
}
</script> 
