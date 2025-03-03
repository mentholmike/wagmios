// Dynamic API URL configuration that works in any environment
export const getApiBaseUrl = () => {
  // Get the current hostname
  const hostname = window.location.hostname;
  
  // Use the backend port from environment or default to 8080
  const backendPort = import.meta.env?.VITE_BACKEND_PORT || '8080';
  
  // Use the same protocol as the current page
  const protocol = window.location.protocol;
  
  // Build the API base URL
  return `${protocol}//${hostname}:${backendPort}/api`;
};

// Initialize the API base URL
export const API_BASE_URL = getApiBaseUrl();

// Specific API endpoints
export const METRICS_API_URL = `${API_BASE_URL}/system/metrics`;
export const SYSTEM_API_URL = `${API_BASE_URL}/system`;
export const CONTAINERS_API_URL = `${API_BASE_URL}/containers`;

// Debug log
console.log('API endpoints initialized:', {
  base: API_BASE_URL,
  metrics: METRICS_API_URL,
  system: SYSTEM_API_URL,
  containers: CONTAINERS_API_URL
});

export const CHAT_API_URL = `${API_BASE_URL}/chat`
export const TEMPLATES_API_URL = `${API_BASE_URL}/templates`
export const MARKETPLACE_API_URL = `${API_BASE_URL}/marketplace`
