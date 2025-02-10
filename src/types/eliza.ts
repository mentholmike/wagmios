export interface Agent {
  id: string;
  name: string;
  description?: string;
  avatar?: string;
  status: 'online' | 'offline' | 'busy';
}

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'agent';
  timestamp: string;
  attachments?: Array<{
    type: string;
    url: string;
  }>;
}

export interface ElizaConfig {
  baseUrl: string;
  apiKey?: string;
} 