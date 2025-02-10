<template>
  <div class="chat-view">
    <div class="chat-sidebar" :class="{ 'is-collapsed': isSidebarCollapsed }">
      <div class="sidebar-header">
        <h2>Agents</h2>
        <Button
          variant="secondary"
          size="small"
          @click="toggleSidebar"
        >
          <Icon :name="isSidebarCollapsed ? 'chevron-right' : 'chevron-left'" />
        </Button>
      </div>

      <div class="agents-list">
        <AgentCard
          v-for="agent in agents"
          :key="agent.id"
          :agent="agent"
          :is-active="currentAgent?.id === agent.id"
          :message-count="getMessageCount(agent.id)"
          @click="selectAgent(agent.id)"
        />
      </div>
    </div>

    <div class="chat-main">
      <div v-if="currentAgent" class="chat-container">
        <div class="chat-header">
          <div class="agent-info">
            <img 
              :src="currentAgent.avatar" 
              :alt="currentAgent.name"
              class="agent-avatar"
            />
            <div class="agent-details">
              <h3>{{ currentAgent.name }}</h3>
              <span class="agent-status" :class="currentAgent.status">
                {{ currentAgent.status }}
              </span>
            </div>
          </div>
          
          <div class="chat-actions">
            <Button
              variant="secondary"
              size="small"
              @click="clearChat"
            >
              Clear Chat
            </Button>
            <Button
              variant="secondary"
              size="small"
              @click="toggleSettings"
            >
              <Icon name="settings" />
            </Button>
          </div>
        </div>

        <ChatWindow 
          :messages="currentMessages"
          :loading="isLoading"
          @send="sendMessage"
        />
      </div>

      <div v-else class="no-agent-selected">
        <Icon name="message-circle" size="48" />
        <h2>Select an Agent to Start Chatting</h2>
        <p>Choose from the available agents on the left to begin a conversation.</p>
      </div>
    </div>

    <!-- Agent Settings Modal -->
    <Modal
      v-if="showSettings"
      title="Agent Settings"
      @close="showSettings = false"
    >
      <template #content>
        <div class="settings-form">
          <!-- Add agent settings form here -->
        </div>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useElizaStore } from '@/stores/eliza';
import AgentCard from '@/components/eliza/AgentCard.vue';
import ChatWindow from '@/components/eliza/ChatWindow.vue';
import Button from '@/components/ui/Button.vue';
import Icon from '@/components/ui/Icon.vue';
import Modal from '@/components/ui/Modal.vue';

const route = useRoute();
const router = useRouter();
const elizaStore = useElizaStore();

const isSidebarCollapsed = ref(false);
const showSettings = ref(false);
const isLoading = ref(false);

const agents = computed(() => elizaStore.agents);
const currentAgent = computed(() => elizaStore.currentAgent);
const currentMessages = computed(() => elizaStore.currentMessages);

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};

const toggleSettings = () => {
  showSettings.value = !showSettings.value;
};

const selectAgent = async (agentId: string) => {
  isLoading.value = true;
  try {
    await elizaStore.selectAgent(agentId);
    router.push(`/chat/${agentId}`);
  } catch (error) {
    console.error('Failed to select agent:', error);
  } finally {
    isLoading.value = false;
  }
};

const sendMessage = async (message: string, file?: File) => {
  if (!currentAgent.value) return;
  
  isLoading.value = true;
  try {
    await elizaStore.sendMessage(message, file);
  } catch (error) {
    console.error('Failed to send message:', error);
  } finally {
    isLoading.value = false;
  }
};

const clearChat = () => {
  if (currentAgent.value) {
    elizaStore.clearMessages(currentAgent.value.id);
  }
};

const getMessageCount = (agentId: string) => {
  return elizaStore.messages[agentId]?.length || 0;
};

// Initialize chat with agent from URL if provided
watch(
  () => route.params.agentId,
  async (agentId) => {
    if (agentId && (!currentAgent.value || currentAgent.value.id !== agentId)) {
      await selectAgent(agentId as string);
    }
  },
  { immediate: true }
);

onMounted(async () => {
  await elizaStore.fetchAgents();
});
</script>

<style scoped>
.chat-view {
  display: flex;
  height: 100%;
  background: var(--bg-secondary);
}

.chat-sidebar {
  width: 320px;
  background: var(--bg-primary);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
}

.chat-sidebar.is-collapsed {
  width: 0;
  overflow: hidden;
}

.sidebar-header {
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.agents-list {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.chat-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.chat-header {
  padding: 1rem;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.agent-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.agent-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.agent-details {
  display: flex;
  flex-direction: column;
}

.agent-status {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.chat-actions {
  display: flex;
  gap: 0.5rem;
}

.no-agent-selected {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--text-muted);
  padding: 2rem;
  text-align: center;
}
</style> 