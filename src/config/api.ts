export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_ELIZA_API_URL || 'http://localhost:3000',
  ENDPOINTS: {
    chat: '/chat',
    // ... other endpoints
  }
} 