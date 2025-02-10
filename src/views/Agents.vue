<template>
  <div class="agents-view">
    <div class="agents-header">
      <h1>Manage Agents</h1>
      <Button @click="showAddAgent = true">
        <Icon name="plus" />
        Add Agent
      </Button>
    </div>

    <div class="agents-grid">
      <DashboardCard 
        v-for="agent in agents"
        :key="agent.id"
        :title="agent.name"
      >
        <template #content>
          <div class="agent-details">
            <img 
              :src="agent.avatar" 
              :alt="agent.name"
              class="agent-avatar"
            />
            <p class="agent-description">
              {{ agent.description }}
            </p>
            <div class="agent-stats">
              <div class="stat">
                <Icon name="message-circle" />
                <span>{{ getMessageCount(agent.id) }} messages</span>
              </div>
              <div class="stat">
                <Icon name="clock" />
                <span>{{ formatLastActive(agent.lastActive) }}</span>
              </div>
            </div>
          </div>
        </template>

        <template #footer>
          <div class="agent-actions">
            <Button 
              variant="secondary"
              size="small"
              @click="editAgent(agent)"
            >
              Edit
            </Button>
            <Button 
              variant="danger"
              size="small"
              @click="confirmDelete(agent)"
            >
              Delete
            </Button>
          </div>
        </template>
      </DashboardCard>
    </div>

    <!-- Add/Edit Agent Modal -->
    <Modal
      :title="editingAgent ? 'Edit Agent' : 'Add New Agent'"
      v-if="showAddAgent"
      @close="closeAgentModal"
    >
      <template #content>
        <div class="agent-form">
          <div class="form-group">
            <label>Name</label>
            <input 
              v-model="agentForm.name"
              placeholder="Enter agent name"
            />
          </div>

          <div class="form-group">
            <label>Description</label>
            <textarea
              v-model="agentForm.description"
              placeholder="Enter agent description"
              rows="3"
            ></textarea>
          </div>

          <div class="form-group">
            <label>Avatar</label>
            <div class="avatar-upload">
              <img 
                :src="agentForm.avatar || defaultAvatar"
                alt="Agent avatar"
              />
              <Button @click="uploadAvatar">
                Upload Image
              </Button>
            </div>
          </div>
        </div>
      </template>

      <template #footer>
        <Button
          variant="secondary"
          @click="closeAgentModal"
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          :loading="isSaving"
          @click="saveAgent"
        >
          {{ editingAgent ? 'Update' : 'Create' }}
        </Button>
      </template>
    </Modal>

    <!-- Delete Confirmation Modal -->
    <Modal
      v-if="showDeleteConfirm"
      title="Delete Agent"
      @close="showDeleteConfirm = false"
    >
      <template #content>
        <p>Are you sure you want to delete {{ agentToDelete?.name }}?</p>
        <p class="text-danger">This action cannot be undone.</p>
      </template>

      <template #footer>
        <Button
          variant="secondary"
          @click="showDeleteConfirm = false"
        >
          Cancel
        </Button>
        <Button
          variant="danger"
          :loading="isDeleting"
          @click="deleteAgent"
        >
          Delete
        </Button>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useElizaStore } from '@/stores/eliza';
import type { Agent } from '@/types/eliza';
import { formatDistanceToNow } from 'date-fns';
import DashboardCard from '@/components/dashboard/DashboardCard.vue';
import Button from '@/components/ui/Button.vue';
import Icon from '@/components/ui/Icon.vue';
import Modal from '@/components/ui/Modal.vue';

const elizaStore = useElizaStore();
const defaultAvatar = '/default-avatar.png';

const showAddAgent = ref(false);
const showDeleteConfirm = ref(false);
const isSaving = ref(false);
const isDeleting = ref(false);
const editingAgent = ref<Agent | null>(null);
const agentToDelete = ref<Agent | null>(null);

const agentForm = reactive({
  name: '',
  description: '',
  avatar: '',
});

const agents = computed(() => elizaStore.agents);

const getMessageCount = (agentId: string) => {
  return elizaStore.messages[agentId]?.length || 0;
};

const formatLastActive = (date: string) => {
  if (!date) return 'Never active';
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

const editAgent = (agent: Agent) => {
  editingAgent.value = agent;
  Object.assign(agentForm, agent);
  showAddAgent.value = true;
};

const confirmDelete = (agent: Agent) => {
  agentToDelete.value = agent;
  showDeleteConfirm.value = true;
};

const closeAgentModal = () => {
  showAddAgent.value = false;
  editingAgent.value = null;
  Object.assign(agentForm, {
    name: '',
    description: '',
    avatar: '',
  });
};

const uploadAvatar = () => {
  // Implement avatar upload logic
};

const saveAgent = async () => {
  isSaving.value = true;
  try {
    if (editingAgent.value) {
      await elizaStore.updateAgent({
        ...editingAgent.value,
        ...agentForm,
      });
    } else {
      await elizaStore.createAgent(agentForm);
    }
    closeAgentModal();
  } catch (error) {
    console.error('Failed to save agent:', error);
  } finally {
    isSaving.value = false;
  }
};

const deleteAgent = async () => {
  if (!agentToDelete.value) return;
  
  isDeleting.value = true;
  try {
    await elizaStore.deleteAgent(agentToDelete.value.id);
    showDeleteConfirm.value = false;
  } catch (error) {
    console.error('Failed to delete agent:', error);
  } finally {
    isDeleting.value = false;
  }
};
</script>

<style scoped>
.agents-view {
  padding: 1.5rem;
}

.agents-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.agents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.agent-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.agent-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.agent-description {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.agent-stats {
  display: flex;
  gap: 1.5rem;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.875rem;
}

.agent-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.agent-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.avatar-upload {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar-upload img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
}

.text-danger {
  color: var(--danger-color);
  margin-top: 0.5rem;
}
</style> 