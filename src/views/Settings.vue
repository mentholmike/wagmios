<template>
  <div class="settings-view">
    <DashboardCard title="ElizaOS Settings">
      <template #content>
        <div class="settings-grid">
          <!-- General Settings -->
          <div class="settings-section">
            <h3>General Settings</h3>
            <div class="settings-form">
              <div class="form-group">
                <label>Language</label>
                <select v-model="settings.language">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>

              <div class="form-group">
                <label>Theme</label>
                <select v-model="settings.theme">
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>

              <div class="form-group">
                <label>Notifications</label>
                <div class="toggle-group">
                  <Toggle
                    v-model="settings.notifications.enabled"
                    label="Enable Notifications"
                  />
                  <Toggle
                    v-model="settings.notifications.sound"
                    label="Sound"
                    :disabled="!settings.notifications.enabled"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- API Settings -->
          <div class="settings-section">
            <h3>API Configuration</h3>
            <div class="settings-form">
              <div class="form-group">
                <label>API Endpoint</label>
                <input 
                  type="text"
                  v-model="settings.api.endpoint"
                  placeholder="https://api.elizaos.com"
                />
              </div>

              <div class="form-group">
                <label>API Key</label>
                <div class="api-key-input">
                  <input
                    :type="showApiKey ? 'text' : 'password'"
                    v-model="settings.api.key"
                    placeholder="Enter your API key"
                  />
                  <button @click="toggleApiKey">
                    <Icon :name="showApiKey ? 'eye-off' : 'eye'" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Storage Settings -->
          <div class="settings-section">
            <h3>Storage</h3>
            <div class="storage-info">
              <div class="storage-bar">
                <div 
                  class="storage-used"
                  :style="{ width: `${storageUsedPercent}%` }"
                ></div>
              </div>
              <div class="storage-details">
                <span>{{ formatBytes(storageUsed) }} used</span>
                <span>{{ formatBytes(storageTotal) }} total</span>
              </div>
            </div>
            <Button @click="clearStorage">Clear Storage</Button>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="settings-actions">
          <Button
            variant="secondary"
            @click="resetSettings"
          >
            Reset to Default
          </Button>
          <Button
            variant="primary"
            :loading="isSaving"
            @click="saveSettings"
          >
            Save Changes
          </Button>
        </div>
      </template>
    </DashboardCard>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import DashboardCard from '@/components/dashboard/DashboardCard.vue';
import Button from '@/components/ui/Button.vue';
import Toggle from '@/components/ui/Toggle.vue';
import Icon from '@/components/ui/Icon.vue';
import { useElizaStore } from '@/stores/eliza';

const elizaStore = useElizaStore();
const showApiKey = ref(false);
const isSaving = ref(false);

const settings = reactive({
  language: 'en',
  theme: 'system',
  notifications: {
    enabled: true,
    sound: true,
  },
  api: {
    endpoint: '',
    key: '',
  },
});

const storageUsed = ref(1024 * 1024 * 500); // 500MB
const storageTotal = ref(1024 * 1024 * 1000); // 1GB

const storageUsedPercent = computed(() => 
  (storageUsed.value / storageTotal.value) * 100
);

const toggleApiKey = () => {
  showApiKey.value = !showApiKey.value;
};

const formatBytes = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

const saveSettings = async () => {
  isSaving.value = true;
  try {
    await elizaStore.updateSettings(settings);
    // Show success notification
  } catch (error) {
    // Show error notification
  } finally {
    isSaving.value = false;
  }
};

const resetSettings = () => {
  // Reset to default values
  Object.assign(settings, {
    language: 'en',
    theme: 'system',
    notifications: {
      enabled: true,
      sound: true,
    },
    api: {
      endpoint: '',
      key: '',
    },
  });
};

const clearStorage = async () => {
  // Implement storage clearing logic
};
</script>

<style scoped>
.settings-view {
  padding: 1.5rem;
}

.settings-grid {
  display: grid;
  gap: 2rem;
}

.settings-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.settings-section h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
}

.settings-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.toggle-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.api-key-input {
  display: flex;
  gap: 0.5rem;
}

.api-key-input input {
  flex: 1;
}

.storage-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.storage-bar {
  height: 8px;
  background: var(--bg-secondary);
  border-radius: 4px;
  overflow: hidden;
}

.storage-used {
  height: 100%;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.storage-details {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.settings-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
</style> 