import axios from 'axios'

const elizaApi = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const api = {
  async checkConnection() {
    try {
      const response = await elizaApi.get('/health')
      return response.data
    } catch (error) {
      console.error('API Connection Error:', error)
      throw error
    }
  }
  // Add more API methods as needed
} 