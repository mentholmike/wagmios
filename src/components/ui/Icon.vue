<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :viewBox="viewBox"
    :class="['icon', className]"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <component :is="iconComponent" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  name: string;
  size?: number;
  className?: string;
}>();

const viewBox = "0 0 24 24";

const iconComponent = computed(() => {
  switch (props.name) {
    case 'send':
      return {
        template: `
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        `
      };
    case 'paperclip':
      return {
        template: `
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
        `
      };
    case 'x':
      return {
        template: `
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        `
      };
    // Add more icons as needed
    default:
      return {
        template: ''
      };
  }
});
</script>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
}
</style> 