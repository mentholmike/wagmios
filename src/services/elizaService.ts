import { createApi } from '../utils/api';
import type { Agent, Message } from '../types/eliza';

const ELIZA_URL = import.meta.env.VITE_ELIZA_URL || '/api';

const api = createApi(ELIZA_URL);

export const elizaService = {
  // Initialize ElizaOS
  async initialize() {
    try {
      const response = await api.get<{ status: string }>('/status');
      return response.status === 'running';
    } catch (error) {
      console.error('Failed to initialize ElizaOS:', error);
      return false;
    }
  },

  // Get all available agents
  getAgents: () => api.get<Agent[]>('/agents'),
  
  // Get specific agent
  getAgent: (id: string) => api.get<Agent>(`/agents/${id}`),
  
  // Create new agent
  createAgent: (data: Partial<Agent>) => api.post<Agent>('/agents', data),
  
  // Update agent
  updateAgent: (id: string, data: Partial<Agent>) => 
    api.put<Agent>(`/agents/${id}`, data),
  
  // Delete agent
  deleteAgent: (id: string) => api.delete(`/agents/${id}`),
  
  // Send message to agent
  sendMessage: async (agentId: string, message: string, file?: File) => {
    const formData = new FormData();
    formData.append('text', message);
    if (file) {
      formData.append('file', file);
    }
    
    return api.post<Message>(`/agents/${agentId}/message`, formData);
  },
  
  // Get chat history
  getChatHistory: (agentId: string) => 
    api.get<Message[]>(`/agents/${agentId}/messages`),
  
  // Get service status
  getStatus: () => api.get<{ status: string }>('/status'),
  
  // Text to speech
  getTTS: (agentId: string, text: string) => 
    api.post<Blob>(`/agents/${agentId}/tts`, { text }, {
      responseType: 'blob',
      headers: {
        'Accept': 'audio/mpeg',
      },
    }),
}; 