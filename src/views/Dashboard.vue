<template>
  <div class="dashboard">
    <div class="dashboard-grid">
      <!-- Agent Status -->
      <DashboardCard title="Active Agents">
        <template #content>
          <div class="agent-stats">
            <div class="stat-item">
              <h3>{{ activeAgents.length }}</h3>
              <p>Online Agents</p>
            </div>
            <div class="stat-item">
              <h3>{{ totalMessages }}</h3>
              <p>Messages Today</p>
            </div>
          </div>
          <div class="agents-list">
            <AgentCard 
              v-for="agent in activeAgents"
              :key="agent.id"
              :agent="agent"
              @click="navigateToChat(agent.id)"
            />
          </div>
        </template>
      </DashboardCard>

      <!-- Recent Activity -->
      <DashboardCard title="Recent Activity">
        <template #content>
          <div class="activity-list">
            <div 
              v-for="activity in recentActivity"
              :key="activity.id"
              class="activity-item"
            >
              <Icon :name="activity.icon" />
              <div class="activity-content">
                <p>{{ activity.message }}</p>
                <span class="activity-time">
                  {{ formatTime(activity.timestamp) }}
                </span>
              </div>
            </div>
          </div>
        </template>
      </DashboardCard>

      <!-- System Status -->
      <DashboardCard title="System Status">
        <template #content>
          <div class="system-status">
            <div class="status-item">
              <Icon name="cpu" />
              <div class="status-details">
                <span>CPU Usage</span>
                <div class="progress-bar">
                  <div 
                    class="progress-fill"
                    :style="{ width: `${systemStatus.cpu}%` }"
                  ></div>
                </div>
              </div>
            </div>
            <div class="status-item">
              <Icon name="database" />
              <div class="status-details">
                <span>Memory Usage</span>
                <div class="progress-bar">
                  <div 
                    class="progress-fill"
                    :style="{ width: `${systemStatus.memory}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </DashboardCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useElizaStore } from '@/stores/eliza';
import DashboardCard from '@/components/dashboard/DashboardCard.vue';
import AgentCard from '@/components/eliza/AgentCard.vue';
import Icon from '@/components/ui/Icon.vue';
import { formatTime } from '@/utils/format';

const router = useRouter();
const elizaStore = useElizaStore();

const systemStatus = ref({
  cpu: 45,
  memory: 60
});

const activeAgents = computed(() => 
  elizaStore.agents.filter(agent => agent.status === 'online')
);

const totalMessages = computed(() => 
  Object.values(elizaStore.messages).flat().length
);

const recentActivity = ref([
  // Sample activity data
  {
    id: 1,
    icon: 'message-circle',
    message: 'Agent Alice responded to user query',
    timestamp: new Date().toISOString()
  },
  // Add more activity items
]);

const navigateToChat = (agentId: string) => {
  router.push(`/chat/${agentId}`);
};

onMounted(async () => {
  await elizaStore.fetchAgents();
});
</script>

<style scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
}

.agent-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.stat-item {
  text-align: center;
}

.stat-item h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
}

.agents-list {
  display: grid;
  gap: 1rem;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.activity-content {
  flex: 1;
}

.activity-time {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.system-status {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.status-details {
  flex: 1;
}

.progress-bar {
  height: 6px;
  background: var(--bg-secondary);
  border-radius: 3px;
  overflow: hidden;
  margin-top: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: var(--primary-color);
  transition: width 0.3s ease;
}
</style> 