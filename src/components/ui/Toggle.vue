<template>
  <div class="toggle-container">
    <button
      type="button"
      role="switch"
      class="toggle"
      :class="{ 'toggle-active': modelValue, 'toggle-disabled': disabled }"
      :aria-checked="modelValue"
      :disabled="disabled"
      @click="toggle"
    >
      <span class="toggle-slider"></span>
    </button>
    <label v-if="label" class="toggle-label" :class="{ 'label-disabled': disabled }">
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean;
  label?: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const toggle = () => {
  emit('update:modelValue', !props.modelValue);
};
</script>

<style scoped>
.toggle-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.toggle {
  position: relative;
  width: 44px;
  height: 24px;
  background-color: var(--bg-secondary);
  border-radius: 12px;
  padding: 2px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.toggle-active {
  background-color: var(--primary-color);
}

.toggle-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.toggle-slider {
  display: block;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.2s;
}

.toggle-active .toggle-slider {
  transform: translateX(20px);
}

.toggle-label {
  font-size: 0.875rem;
  color: var(--text-primary);
}

.label-disabled {
  opacity: 0.5;
}
</style> 