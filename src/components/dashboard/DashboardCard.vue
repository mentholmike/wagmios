<template>
  <div class="dashboard-card" :class="{ 'full-height': fullHeight }">
    <div class="card-header">
      <h2 class="card-title">{{ title }}</h2>
      <slot name="header-actions"></slot>
    </div>
    
    <div class="card-content">
      <slot name="content"></slot>
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  fullHeight?: boolean;
}>();
</script>

<style scoped>
.dashboard-card {
  background: var(--bg-primary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.full-height {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
}

.card-content {
  padding: 1.5rem;
  flex: 1;
}

.card-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border-color);
  background: var(--bg-secondary);
}
</style> 