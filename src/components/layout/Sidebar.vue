<template>
  <aside class="sidebar" :class="{ 'sidebar-collapsed': isCollapsed }">
    <div class="sidebar-header">
      <img src="@/assets/logo.svg" alt="Logo" class="logo" />
      <h2 v-if="!isCollapsed">ElizaOS</h2>
    </div>

    <nav class="sidebar-nav">
      <router-link 
        v-for="item in navItems" 
        :key="item.path"
        :to="item.path"
        class="nav-item"
        :title="isCollapsed ? item.label : ''"
      >
        <Icon :name="item.icon" />
        <span v-if="!isCollapsed">{{ item.label }}</span>
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <Button 
        variant="secondary"
        class="collapse-button"
        @click="toggleCollapse"
      >
        <Icon :name="isCollapsed ? 'chevron-right' : 'chevron-left'" />
      </Button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Icon from '@/components/ui/Icon.vue';
import Button from '@/components/ui/Button.vue';

const isCollapsed = ref(false);

const navItems = [
  { path: '/', label: 'Dashboard', icon: 'home' },
  { path: '/agents', label: 'Agents', icon: 'users' },
  { path: '/chat', label: 'Chat', icon: 'message-circle' },
  { path: '/settings', label: 'Settings', icon: 'settings' },
];

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped>
.sidebar {
  width: 240px;
  height: 100vh;
  background: var(--bg-primary);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
}

.sidebar-collapsed {
  width: 64px;
}

.sidebar-header {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.logo {
  width: 32px;
  height: 32px;
}

.sidebar-nav {
  flex: 1;
  padding: 1rem 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  color: var(--text-primary);
  text-decoration: none;
  transition: background-color 0.2s;
}

.nav-item:hover {
  background: var(--bg-hover);
}

.nav-item.router-link-active {
  background: var(--bg-active);
  color: var(--primary-color);
}

.sidebar-footer {
  padding: 1rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
}

.collapse-button {
  width: 100%;
  justify-content: center;
}
</style> 