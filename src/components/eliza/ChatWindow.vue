<template>
  <div class="chat-window">
    <div class="messages" ref="messagesContainer">
      <template v-for="message in messages" :key="message.id">
        <div 
          :class="[
            'message',
            message.role === 'user' ? 'message-user' : 'message-agent'
          ]"
        >
          <div class="message-content">
            {{ message.content }}
          </div>
          <div class="message-timestamp">
            {{ formatTimestamp(message.timestamp) }}
          </div>
        </div>
      </template>
    </div>
    
    <MessageInput 
      v-model="newMessage"
      :loading="loading"
      @send="sendMessage"
      @attach-file="handleFileAttachment"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useElizaStore } from '@/stores/eliza';
import MessageInput from './MessageInput.vue';
import { formatTimestamp } from '@/utils/format';

const elizaStore = useElizaStore();
const { currentMessages: messages, loading } = storeToRefs(elizaStore);

const newMessage = ref('');
const messagesContainer = ref<HTMLElement>();
const attachedFile = ref<File>();

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const sendMessage = async () => {
  if (!newMessage.value.trim()) return;
  
  try {
    await elizaStore.sendMessage(newMessage.value, attachedFile.value);
    newMessage.value = '';
    attachedFile.value = undefined;
  } catch (error) {
    console.error('Failed to send message:', error);
  }
};

const handleFileAttachment = (file: File) => {
  attachedFile.value = file;
};

watch(messages, scrollToBottom, { deep: true });

onMounted(scrollToBottom);
</script>

<style scoped>
.chat-window {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--chat-bg);
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.message {
  margin-bottom: 1rem;
  max-width: 80%;
}

.message-user {
  margin-left: auto;
  background: var(--primary-color);
  color: white;
}

.message-agent {
  margin-right: auto;
  background: var(--secondary-bg);
}

.message-content {
  padding: 0.75rem;
  border-radius: 0.5rem;
}

.message-timestamp {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}
</style> 