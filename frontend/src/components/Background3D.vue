<template>
  <div class="fixed inset-0 -z-10">
    <!-- Animated gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

    <!-- Subtle animated mesh -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
      <div class="absolute bottom-1/4 left-1/2 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
    </div>

    <!-- Grid overlay -->
    <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
  </div>
</template>

<script setup lang="ts">
// No JavaScript needed - pure CSS animated background
</script>
