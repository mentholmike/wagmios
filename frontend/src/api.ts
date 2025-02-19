const hostname = window.location.hostname
const port = '8080'
const BASE_URL = `http://${hostname}:${port}/api`

export const API_BASE_URL = BASE_URL
export const CONTAINERS_API_URL = `${BASE_URL}/containers`
export const TEMPLATES_API_URL = `${BASE_URL}/containers/templates`

export const getApiBaseUrl = () => {
  // Get the current hostname (IP or domain)
  const hostname = window.location.hostname
  // Use the same port as your Go backend
  const port = '8080'
  return `http://${hostname}:${port}/api/containers`
} 
