<template>
  <div class="app-container">
    <Sidebar />
    <div class="main-content">
      <Header />
      <div class="dashboard-content">
        <router-view v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <Suspense>
              <component :is="Component" />
              <template #fallback>
                <LoadingScreen />
              </template>
            </Suspense>
          </Transition>
        </router-view>
      </div>
    </div>
    <InstallationProgress v-if="showInstallProgress" />
    <div class="dashboard">
      <h1>WagmiOS Dashboard</h1>
      
      <!-- Eliza Connection Status -->
      <div class="connection-status" :class="{ connected: isConnected }">
        Eliza Status: {{ connectionStatus }}
      </div>

      <!-- Quick Links -->
      <div class="quick-links">
        <a href="http://localhost:5173" target="_blank" class="link-box">
          <h3>WagmiOS Frontend</h3>
          <p>Port: 5173</p>
        </a>
        
        <a href="http://localhost:3000" target="_blank" class="link-box">
          <h3>Eliza API</h3>
          <p>Port: 3000</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import Header from '@/components/layout/Header.vue';
import LoadingScreen from '@/components/ui/LoadingScreen.vue';
import InstallationProgress from '@/components/installation/InstallationProgress.vue';
import { useInstallationStore } from '@/stores/installation';
import { api } from './services/elizaApi';

const installStore = useInstallationStore();
const showInstallProgress = ref(true);
const isConnected = ref(false);
const connectionStatus = ref('Checking...');

onMounted(async () => {
  await installStore.checkInstallationStatus();
  checkElizaConnection();
  setInterval(checkElizaConnection, 30000);
});

const checkElizaConnection = async () => {
  try {
    await api.checkConnection();
    isConnected.value = true;
    connectionStatus.value = 'Connected';
  } catch (error) {
    isConnected.value = false;
    connectionStatus.value = 'Disconnected';
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.dashboard-content {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background: var(--bg-secondary);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.dashboard {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.connection-status {
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  background-color: #ff4444;
  color: white;
}

.connection-status.connected {
  background-color: #00C851;
}

.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.link-box {
  display: block;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #f8f9fa;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;
  border: 1px solid #dee2e6;
}

.link-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

p {
  margin: 0;
  color: #6c757d;
}
</style> 