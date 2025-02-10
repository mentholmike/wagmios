import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

export const createApi = (baseURL: string): AxiosInstance => {
  const api = axios.create({
    baseURL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('eliza_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor
  api.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (error.response?.status === 401) {
        // Handle unauthorized access
        localStorage.removeItem('eliza_token');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

  return api;
}; 