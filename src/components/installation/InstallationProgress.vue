<template>
  <div class="installation-overlay" v-if="isInstalling">
    <div class="installation-modal">
      <div class="installation-header">
        <h2>Setting Up ElizaOS</h2>
        <div class="progress-indicator">
          {{ currentStep }} of {{ totalSteps }}
        </div>
      </div>

      <div class="progress-bar">
        <div 
          class="progress-fill" 
          :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
        ></div>
      </div>

      <div class="installation-details">
        <div class="step-info">
          <Icon :name="currentStepIcon" />
          <span>{{ currentStepMessage }}</span>
        </div>
        
        <div class="logs" v-if="showLogs">
          <pre>{{ installationLogs }}</pre>
        </div>
      </div>

      <div class="action-buttons">
        <Button 
          v-if="hasError"
          @click="retryInstallation"
          variant="primary"
        >
          Retry Installation
        </Button>
        <Button 
          @click="toggleLogs"
          variant="secondary"
        >
          {{ showLogs ? 'Hide' : 'Show' }} Logs
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useInstallationStore } from '@/stores/installation';
import Button from '@/components/ui/Button.vue';
import Icon from '@/components/ui/Icon.vue';

const installStore = useInstallationStore();
const showLogs = ref(false);

const {
  isInstalling,
  currentStep,
  totalSteps,
  installationLogs,
  hasError
} = storeToRefs(installStore);

const currentStepMessage = computed(() => {
  switch (installStore.currentStep) {
    case 1:
      return 'Checking system requirements...';
    case 2:
      return 'Installing Docker components...';
    case 3:
      return 'Setting up ElizaOS...';
    case 4:
      return 'Installing required plugins...';
    case 5:
      return 'Starting services...';
    default:
      return 'Completing installation...';
  }
});

const toggleLogs = () => {
  showLogs.value = !showLogs.value;
};

const retryInstallation = () => {
  installStore.retryInstallation();
};
</script>

<style scoped>
.installation-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.installation-modal {
  background: var(--bg-primary);
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.progress-bar {
  height: 6px;
  background: var(--bg-secondary);
  border-radius: 3px;
  overflow: hidden;
  margin: 1.5rem 0;
}

.progress-fill {
  height: 100%;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.installation-details {
  margin: 1.5rem 0;
}

.logs {
  background: var(--bg-secondary);
  padding: 1rem;
  border-radius: 6px;
  max-height: 200px;
  overflow-y: auto;
  font-family: monospace;
  font-size: 0.875rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}
</style> 