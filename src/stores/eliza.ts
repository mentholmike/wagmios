import { defineStore } from 'pinia';
import { elizaService } from '../services/elizaService';
import type { Agent, Message } from '../types/eliza';

interface ElizaState {
  agents: Agent[];
  currentAgent: Agent | null;
  messages: Record<string, Message[]>;
  loading: boolean;
  error: string | null;
}

export const useElizaStore = defineStore('eliza', {
  state: (): ElizaState => ({
    agents: [],
    currentAgent: null,
    messages: {},
    loading: false,
    error: null,
  }),

  getters: {
    currentMessages: (state) => 
      state.currentAgent ? state.messages[state.currentAgent.id] || [] : [],
  },

  actions: {
    async fetchAgents() {
      this.loading = true;
      try {
        this.agents = await elizaService.getAgents();
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async selectAgent(agentId: string) {
      this.loading = true;
      try {
        this.currentAgent = await elizaService.getAgent(agentId);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async sendMessage(message: string, file?: File) {
      if (!this.currentAgent) return;
      
      try {
        const response = await elizaService.sendMessage(
          this.currentAgent.id,
          message,
          file
        );
        
        if (!this.messages[this.currentAgent.id]) {
          this.messages[this.currentAgent.id] = [];
        }
        
        this.messages[this.currentAgent.id].push(response);
        return response;
      } catch (error) {
        this.error = error.message;
        throw error;
      }
    },
  },
}); 