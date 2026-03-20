<template>
  <div>
    <div class="flex justify-between text-xs mb-1" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
      <span>{{ label }}</span>
      <span>{{ percent.toFixed(1) }}%</span>
    </div>
    <div :class="['w-full rounded-full h-1.5', isDarkMode ? 'bg-gray-800' : 'bg-gray-200']">
      <div
        class="h-1.5 rounded-full transition-all duration-500"
        :class="colorClass"
        :style="{ width: Math.min(percent, 100) + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  percent: number
  color: 'blue' | 'green' | 'purple'
  isDarkMode: boolean
}>()

const colorClass = computed(() => {
  switch (props.color) {
    case 'blue': return 'bg-blue-500'
    case 'green': return 'bg-green-500'
    case 'purple': return 'bg-purple-500'
    default: return 'bg-blue-500'
  }
})
</script>
