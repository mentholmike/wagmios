import { createRouter, createWebHistory } from 'vue-router';
import { useInstallationStore } from '@/stores/installation';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Dashboard.vue'),
      meta: { requiresInstallation: true }
    },
    {
      path: '/agents',
      component: () => import('@/views/Agents.vue'),
      meta: { requiresInstallation: true }
    },
    {
      path: '/chat/:agentId?',
      component: () => import('@/views/Chat.vue'),
      meta: { requiresInstallation: true }
    },
    {
      path: '/settings',
      component: () => import('@/views/Settings.vue'),
      meta: { requiresInstallation: true }
    }
  ]
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const installationStore = useInstallationStore();
  
  if (to.meta.requiresInstallation && !installationStore.isComplete) {
    // If installation is not complete, show installation progress
    installationStore.checkInstallationStatus();
  }
  
  next();
});

export default router; 