<template>
  <div :class="['rounded-xl overflow-hidden', isDarkMode ? 'bg-gray-800/50' : 'bg-white/80']">
    <div class="px-4 py-3 border-b" :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'">
      <div class="flex items-center justify-between">
        <h3 class="font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Activity</h3>
        <span class="text-xs px-2 py-1 rounded-full" :class="isDarkMode ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-700'">
          🟢 Live
        </span>
      </div>
    </div>

    <div class="overflow-y-auto" style="max-height: 400px;">
      <div v-if="events.length === 0" class="px-4 py-8 text-center">
        <div class="text-2xl mb-2">📭</div>
        <p class="text-sm" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">No activity yet</p>
      </div>

      <div v-else class="divide-y" :class="isDarkMode ? 'divide-gray-700' : 'divide-gray-100'">
        <div
          v-for="event in events"
          :key="event.id"
          class="px-4 py-3 hover:bg-black/5 transition-colors"
        >
          <div class="flex items-start gap-3">
            <div class="mt-0.5">
              <span :class="eventIcon(event).emoji" class="text-lg">{{ eventIcon(event).emoji }}</span>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs font-medium uppercase tracking-wide" :class="statusColor(event.status)">
                  {{ event.status }}
                </span>
                <span class="text-xs" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
                  {{ formatTime(event.timestamp) }}
                </span>
              </div>
              <p class="text-sm mt-0.5" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <span class="font-medium">{{ event.action }}</span>
                <span class="mx-1">·</span>
                <span class="font-mono text-xs">{{ shortTarget(event.target) }}</span>
              </p>
              <p v-if="event.agent" class="text-xs mt-1" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">
                Agent: {{ event.agent }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { client, ACTIVITY_WS_URL, type ActivityEvent } from '../api'

const props = defineProps<{ isDarkMode: boolean }>()

const events = ref<ActivityEvent[]>([])

let ws: WebSocket | null = null
let stopped = false
let reconnectTimer: ReturnType<typeof setTimeout> | null = null

function connect() {
  // Pass API key as query parameter for WebSocket auth
  // (browsers can't set custom headers on WebSocket upgrades)
  const apiKey = client.getApiKey()
  const wsUrl = apiKey ? `${ACTIVITY_WS_URL}?key=${encodeURIComponent(apiKey)}` : ACTIVITY_WS_URL
  ws = new WebSocket(wsUrl)

  ws.onmessage = (msg) => {
    try {
      const event = JSON.parse(msg.data) as ActivityEvent
      events.value.unshift(event)
      if (events.value.length > 100) {
        events.value.pop()
      }
    } catch (e) {
      console.error('Failed to parse activity event', e)
    }
  }

  ws.onerror = () => {
    console.error('WebSocket error')
  }

  ws.onclose = () => {
    if (!stopped) {
      reconnectTimer = setTimeout(connect, 3000)
    }
  }
}

async function loadRecent() {
  const res = await client.getActivity(50)
  if (res.success && res.data.events) {
    events.value = res.data.events.reverse()
  }
}

onMounted(() => {
  loadRecent()
  connect()
})

onUnmounted(() => {
  stopped = true
  if (reconnectTimer) clearTimeout(reconnectTimer)
  ws?.close()
})

function eventIcon(event: ActivityEvent) {
  switch (event.type) {
    case 'container_action':
      switch (event.action) {
        case 'create': return { emoji: '🆕', label: 'Created' }
        case 'start': return { emoji: '▶️', label: 'Started' }
        case 'stop': return { emoji: '⏹️', label: 'Stopped' }
        case 'restart': return { emoji: '🔄', label: 'Restarted' }
        case 'delete': return { emoji: '🗑️', label: 'Deleted' }
        default: return { emoji: '📦', label: 'Container' }
      }
    case 'image_pull':
      return { emoji: '📥', label: 'Pulled' }
    case 'image_delete':
      return { emoji: '🗑️', label: 'Deleted image' }
    case 'approval_request':
      return { emoji: '⚠️', label: 'Approval needed' }
    case 'approval_approved':
      return { emoji: '✅', label: 'Approved' }
    case 'approval_denied':
      return { emoji: '❌', label: 'Denied' }
    case 'key_regeneration':
      return { emoji: '🔑', label: 'Key rotated' }
    default:
      return { emoji: '🔗', label: 'API' }
  }
}

function statusColor(status: string) {
  switch (status) {
    case 'success': return 'text-green-500'
    case 'error': return 'text-red-500'
    case 'pending': return 'text-yellow-500'
    default: return 'text-gray-500'
  }
}

function formatTime(ts: string) {
  if (!ts) return ''
  const d = new Date(ts)
  return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

function shortTarget(target: string) {
  if (!target) return ''
  if (target.length > 40) return target.slice(0, 40) + '...'
  return target
}
</script>
