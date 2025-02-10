<template>
  <header class="header">
    <div class="header-left">
      <button class="menu-button" @click="toggleSidebar">
        <Icon name="menu" />
      </button>
      <h1 class="header-title">{{ currentRoute }}</h1>
    </div>

    <div class="header-right">
      <div class="connection-status" :class="{ connected: isConnected }">
        <span class="status-dot"></span>
        {{ isConnected ? 'Connected to ElizaOS' : 'Disconnected' }}
      </div>
      
      <Button 
        v-if="!isConnected"
        @click="reconnect"
        variant="primary"
        size="small"
      >
        Reconnect
      </Button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useElizaStore } from '@/stores/eliza';
import Icon from '@/components/ui/Icon.vue';
import Button from '@/components/ui/Button.vue';

const route = useRoute();
const elizaStore = useElizaStore();

const currentRoute = computed(() => {
  switch (route.path) {
    case '/':
      return 'Dashboard';
    case '/agents':
      return 'Agents';
    case '/chat':
      return 'Chat';
    case '/settings':
      return 'Settings';
    default:
      return '';
  }
});

const isConnected = computed(() => elizaStore.isConnected);

const emit = defineEmits<{
  (e: 'toggle-sidebar'): void;
}>();

const toggleSidebar = () => {
  emit('toggle-sidebar');
};

const reconnect = async () => {
  await elizaStore.reconnect();
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.menu-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: var(--text-primary);
}

.header-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.connection-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--danger-color);
}

.connected .status-dot {
  background: var(--success-color);
}
</style> 