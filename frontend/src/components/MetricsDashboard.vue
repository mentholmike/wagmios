<template>
  <div class="space-y-4">
    <!-- Metric Cards Row -->
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-3">
      <div v-for="stat in stats" :key="stat.label"
        :class="['rounded-xl p-4 backdrop-blur-xl border shadow-sm', isDarkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white/60 border-gray-200/50']">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
            {{ stat.label }}
          </span>
          <span class="text-base">{{ stat.icon }}</span>
        </div>
        <div class="text-2xl font-bold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">
          {{ stat.value }}
        </div>
        <div v-if="stat.sub" class="text-xs mt-1" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
          {{ stat.sub }}
        </div>
      </div>
    </div>

    <!-- Charts Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <!-- Pulls -->
      <div :class="['rounded-xl p-4 backdrop-blur-xl border shadow-sm', isDarkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white/60 border-gray-200/50']">
        <div class="flex items-center justify-between mb-1">
          <span class="text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
            Pulls
          </span>
          <span class="text-xs px-2 py-0.5 rounded-full" :class="isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'">
            last 24h
          </span>
        </div>
        <div class="flex items-center justify-center h-28">
          <span class="text-4xl font-bold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">
            {{ pulls }}
          </span>
        </div>
      </div>

      <!-- Container Status -->
      <div :class="['rounded-xl p-4 backdrop-blur-xl border shadow-sm', isDarkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white/60 border-gray-200/50']">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
            Container Status
          </span>
          <span class="text-xs" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">{{ containerCount }} total</span>
        </div>
        <div class="h-32 flex items-center">
          <Doughnut :data="containerChartData" :options="doughnutOptions" />
        </div>
      </div>
    </div>

    <!-- System Health Bar -->
    <div :class="['rounded-xl p-4 backdrop-blur-xl border shadow-sm', isDarkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white/60 border-gray-200/50']">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
          System Resources
        </span>
        <div class="flex items-center gap-4 text-xs" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
          <span>CPU: {{ cpuPercent.toFixed(1) }}%</span>
          <span>MEM: {{ memPercent.toFixed(1) }}%</span>
          <span>DISK: {{ diskPercent.toFixed(1) }}%</span>
        </div>
      </div>
      <div class="space-y-2">
        <ResourceBar label="CPU" :percent="cpuPercent" color="blue" :isDarkMode="isDarkMode" />
        <ResourceBar label="Memory" :percent="memPercent" color="green" :isDarkMode="isDarkMode" />
        <ResourceBar label="Disk" :percent="diskPercent" color="purple" :isDarkMode="isDarkMode" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, ArcElement,
  Title, Tooltip, Legend
} from 'chart.js'
import { client } from '../api'

ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend)

const props = defineProps<{ isDarkMode: boolean }>()

// System stats
const cpuPercent = ref(0)
const memPercent = ref(0)
const memUsed = ref(0)
const memTotal = ref(0)
const diskPercent = ref(0)
const containerCount = ref(0)
const runningCount = ref(0)
const uptime = ref('')
const pulls = ref(0)

const stats = computed(() => [
  { label: 'Containers', value: `${runningCount.value}/${containerCount.value}`, icon: '🐳', sub: 'running' },
  { label: 'Uptime', value: uptime.value || '--', icon: '⏱️', sub: 'system' },
  { label: 'Memory', value: `${memPercent.value.toFixed(0)}%`, icon: '💾', sub: formatBytes(memUsed.value) },
])

const doughnutOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        color: props.isDarkMode ? '#9ca3af' : '#6b7280',
        font: { size: 11 },
        boxWidth: 10,
        padding: 12
      }
    }
  }
}))

const containerChartData = computed(() => ({
  labels: ['Running', 'Stopped'],
  datasets: [{
    data: [runningCount.value, containerCount.value - runningCount.value],
    backgroundColor: ['#22c55e', '#ef4444'],
    borderWidth: 0,
  }]
}))

function formatUptime(seconds: number): string {
  if (seconds < 60) return `${seconds}s`
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`
  return `${Math.floor(seconds / 86400)}d`
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`
}

async function fetchMetrics() {
  try {
    const [summaryRes, metricsRes] = await Promise.all([
      client.getMetricsSummary(),
      client.getMetrics().catch(() => ({ success: false, data: null }))
    ])

    if (summaryRes.success && summaryRes.data) {
      const s = summaryRes.data
      containerCount.value = s.container_counts?.total || 0
      runningCount.value = s.container_counts?.running || 0
      pulls.value = s.pulls_last_24h || 0
      if (s.uptime_seconds) uptime.value = formatUptime(s.uptime_seconds)
    }

    if (metricsRes.success && metricsRes.data) {
      const m = metricsRes.data
      if (m.cpu?.usage !== undefined) cpuPercent.value = Math.min(m.cpu.usage, 100)
      if (m.memory) {
        memUsed.value = m.memory.used || 0
        memTotal.value = m.memory.total || 0
        if (typeof m.memory.usagePercent === 'number') {
          memPercent.value = Math.min(m.memory.usagePercent, 100)
        } else if (m.memory.total > 0) {
          memPercent.value = Math.min((m.memory.used / m.memory.total) * 100, 100)
        }
      }
      if (m.disk) {
        diskPercent.value = m.disk.total > 0 ? Math.min((m.disk.used / m.disk.total) * 100, 100) : 0
      }
    }
  } catch (e) {
    // silent fail, keep last values
  }
}

let interval: ReturnType<typeof setInterval>
onMounted(() => {
  fetchMetrics()
  interval = setInterval(fetchMetrics, 5000)
})
onUnmounted(() => clearInterval(interval))
</script>
