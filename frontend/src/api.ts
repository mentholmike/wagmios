const hostname = window.location.hostname
const port = '8080'

export const getApiBaseUrl = () => {
  const hostname = window.location.hostname
  const port = '8080'
  return `http://${hostname}:${port}/api`
}

export const API_BASE_URL = getApiBaseUrl()
export const CHAT_API_URL = `${API_BASE_URL}/chat`
export const METRICS_API_URL = `${API_BASE_URL}/metrics`
export const SYSTEM_API_URL = `${API_BASE_URL}/system`
export const CONTAINERS_API_URL = `${API_BASE_URL}/containers`
export const TEMPLATES_API_URL = `${API_BASE_URL}/templates`
export const MARKETPLACE_API_URL = `${API_BASE_URL}/marketplace`
