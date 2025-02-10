<template>
  <div 
    class="agent-card"
    :class="{ 'is-active': isActive }"
    @click="$emit('click')"
  >
    <div class="agent-avatar">
      <img 
        :src="agent.avatar || defaultAvatar" 
        :alt="agent.name"
        @error="onAvatarError"
      />
      <span 
        class="status-indicator"
        :class="agent.status"
      ></span>
    </div>

    <div class="agent-info">
      <div class="agent-header">
        <h3 class="agent-name">{{ agent.name }}</h3>
        <span class="agent-status">{{ statusText }}</span>
      </div>
      
      <p v-if="agent.description" class="agent-description">
        {{ agent.description }}
      </p>

      <div class="agent-stats">
        <span class="stat">
          <Icon name="message-circle" size="14" />
          {{ messageCount }} messages
        </span>
        <span class="stat">
          <Icon name="clock" size="14" />
          {{ lastActive }}
        </span>
      </div>
    </div>

    <div class="agent-actions">
      <Button 
        variant="primary"
        size="small"
        @click.stop="$emit('start-chat')"
      >
        Chat
      </Button>
      <button 
        class="action-button"
        @click.stop="$emit('settings')"
      >
        <Icon name="settings" size="16" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { formatDistanceToNow } from 'date-fns';
import type { Agent } from '@/types/eliza';
import Icon from '@/components/ui/Icon.vue';
import Button from '@/components/ui/Button.vue';

const props = defineProps<{
  agent: Agent;
  isActive?: boolean;
  messageCount?: number;
}>();

const defaultAvatar = ref('/default-avatar.png');

const statusText = computed(() => {
  switch (props.agent.status) {
    case 'online':
      return 'Online';
    case 'offline':
      return 'Offline';
    case 'busy':
      return 'Busy';
    default:
      return 'Unknown';
  }
});

const lastActive = computed(() => {
  if (props.agent.lastActive) {
    return formatDistanceToNow(new Date(props.agent.lastActive), { 
      addSuffix: true 
    });
  }
  return 'Never';
});

const onAvatarError = (e: Event) => {
  const img = e.target as HTMLImageElement;
  img.src = defaultAvatar.value;
};

defineEmits<{
  (e: 'click'): void;
  (e: 'start-chat'): void;
  (e: 'settings'): void;
}>();
</script>

<style scoped>
.agent-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.agent-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.agent-card.is-active {
  border-color: var(--primary-color);
  background: var(--primary-color-light);
}

.agent-avatar {
  position: relative;
  width: 48px;
  height: 48px;
}

.agent-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.status-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--bg-primary);
}

.status-indicator.online {
  background: var(--success-color);
}

.status-indicator.offline {
  background: var(--danger-color);
}

.status-indicator.busy {
  background: var(--warning-color);
}

.agent-info {
  flex: 1;
  min-width: 0;
}

.agent-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.agent-name {
  font-weight: 600;
  color: var(--text-primary);
}

.agent-status {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.agent-description {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.agent-stats {
  display: flex;
  gap: 1rem;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.agent-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.action-button {
  padding: 0.5rem;
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.2s;
}

.action-button:hover {
  color: var(--text-primary);
}
</style> 