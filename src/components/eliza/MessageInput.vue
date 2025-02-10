<template>
  <div class="message-input">
    <div class="input-container">
      <input
        type="file"
        ref="fileInput"
        class="hidden"
        @change="handleFileChange"
      />
      
      <button 
        class="attach-button"
        @click="triggerFileInput"
        :disabled="loading"
      >
        <Icon name="paperclip" />
      </button>

      <input
        type="text"
        v-model="inputValue"
        @keyup.enter="handleSend"
        :placeholder="placeholder"
        :disabled="loading"
      />

      <button 
        class="send-button"
        @click="handleSend"
        :disabled="!canSend || loading"
      >
        <Icon name="send" />
      </button>
    </div>

    <div v-if="selectedFile" class="file-preview">
      <span>{{ selectedFile.name }}</span>
      <button @click="clearFile">
        <Icon name="x" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Icon from '../ui/Icon.vue';

const props = defineProps<{
  modelValue: string;
  loading?: boolean;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'send'): void;
  (e: 'attach-file', file: File): void;
}>();

const fileInput = ref<HTMLInputElement>();
const selectedFile = ref<File>();
const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const canSend = computed(() => 
  inputValue.value.trim().length > 0 || selectedFile.value
);

const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files?.length) {
    selectedFile.value = input.files[0];
    emit('attach-file', input.files[0]);
  }
};

const clearFile = () => {
  selectedFile.value = undefined;
  if (fileInput.value) {
    fileInput.value.value = '';
  }
  emit('attach-file', null);
};

const handleSend = () => {
  if (canSend.value && !props.loading) {
    emit('send');
  }
};
</script>

<style scoped>
.message-input {
  border-top: 1px solid var(--border-color);
  padding: 1rem;
}

.input-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.hidden {
  display: none;
}

input[type="text"] {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  background: var(--bg-input);
}

button {
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: var(--primary-color);
  color: white;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.file-preview {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: var(--bg-secondary);
  border-radius: 0.25rem;
}
</style> 