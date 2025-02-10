<template>
  <button
    :class="[
      'button',
      `button-${variant}`,
      { 'button-loading': loading }
    ]"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <span v-if="loading" class="loader"></span>
    <span :class="{ 'content-loading': loading }">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'danger';
  loading?: boolean;
  disabled?: boolean;
}>();

defineEmits<{
  (e: 'click'): void;
}>();
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  gap: 0.5rem;
  min-width: 100px;
  position: relative;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.button-primary {
  background: var(--primary-color);
  color: white;
}

.button-secondary {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.button-danger {
  background: var(--danger-color);
  color: white;
}

.button-loading {
  cursor: wait;
}

.loader {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  position: absolute;
  left: 50%;
  margin-left: -8px;
}

.content-loading {
  opacity: 0;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style> 