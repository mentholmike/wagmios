import axios from 'axios';
import { API_CONFIG } from '../config/api';

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: 10000,
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.code === 'ECONNREFUSED') {
      console.error('Unable to connect to ElizaOS API. Please ensure the service is running.');
    }
    return Promise.reject(error);
  }
);

export default api; 