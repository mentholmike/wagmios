// Add this new file for configuration validation
export function validateConfig() {
  const required = [
    'VITE_APP_PORT',
    'VITE_ELIZA_API_URL'
  ];

  const missing = required.filter(key => !import.meta.env[key]);
  
  if (missing.length > 0) {
    console.error(`Missing required environment variables: ${missing.join(', ')}`);
    return false;
  }

  return true;
} 