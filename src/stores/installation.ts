import { defineStore } from 'pinia';
import { elizaService } from '../services/elizaService';

interface APIConfig {
  name: string;
  key: string;
  required: boolean;
  description: string;
}

interface InstallationState {
  step: number;
  isInstalling: boolean;
  error: string | null;
  logs: string[];
  
  // Essential configs that need to be set during installation
  essentialConfigs: {
    // Core Model Provider (user must choose one)
    modelProvider: 'openai' | 'anthropic' | 'google' | 'local';
    apiKey: string;
    
    // Basic server config
    serverPort: string;
    cacheStore: string;
    
    // Character config
    characterPath: string;
    characterName: string;
  };
  
  // Optional configs that can be set post-installation
  optionalServices: {
    discord: boolean;
    telegram: boolean;
    twitter: boolean;
    whatsapp: boolean;
  };
}

export const useInstallationStore = defineStore('installation', {
  state: (): InstallationState => ({
    step: 1,
    isInstalling: false,
    error: null,
    logs: [],
    
    // Essential configs that need to be set during installation
    essentialConfigs: {
      // Core Model Provider (user must choose one)
      modelProvider: '' as 'openai' | 'anthropic' | 'google' | 'local',
      apiKey: '',
      
      // Basic server config
      serverPort: '3000',
      cacheStore: 'database',
      
      // Character config
      characterPath: '',
      characterName: '',
    },
    
    // Optional configs that can be set post-installation
    optionalServices: {
      discord: false,
      telegram: false,
      twitter: false,
      whatsapp: false,
    }
  }),

  getters: {
    installationLogs: (state) => state.logs.join('\n'),
    hasError: (state) => !!state.error,
  },

  actions: {
    async checkInstallationStatus() {
      try {
        const response = await elizaService.getStatus();
        if (response.status === 'running') {
          this.isComplete = true;
          this.isInstalling = false;
          return;
        }
        await this.startInstallation();
      } catch (error) {
        await this.startInstallation();
      }
    },

    async startInstallation() {
      this.isInstalling = true;
      this.logs = [];
      
      try {
        // 1. Validate essential configs
        await this.validateConfigs();
        
        // 2. Generate initial .env file
        await this.generateEnvFile();
        
        // 3. Set up character
        await this.setupCharacter();
        
        // 4. Update Docker configuration
        await this.updateDockerConfig();
        
        this.addLog('Installation completed successfully!');
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isInstalling = false;
      }
    },

    async generateEnvFile() {
      const envContent = `
# Essential Configurations
SERVER_PORT=${this.essentialConfigs.serverPort}
CACHE_STORE=${this.essentialConfigs.cacheStore}

# Model Provider Configuration
${this.getModelProviderConfig()}

# Character Configuration
USE_CHARACTER_STORAGE=true
CHARACTER_PATH=${this.essentialConfigs.characterPath}
`;

      await this.writeEnvFile(envContent);
      this.addLog('Generated initial .env configuration');
    },

    getModelProviderConfig() {
      switch (this.essentialConfigs.modelProvider) {
        case 'openai':
          return `OPENAI_API_KEY=${this.essentialConfigs.apiKey}
SMALL_OPENAI_MODEL=gpt-3.5-turbo
MEDIUM_OPENAI_MODEL=gpt-4
LARGE_OPENAI_MODEL=gpt-4-turbo`;
        
        case 'anthropic':
          return `ANTHROPIC_API_KEY=${this.essentialConfigs.apiKey}
SMALL_ANTHROPIC_MODEL=claude-3-haiku
MEDIUM_ANTHROPIC_MODEL=claude-3-sonnet
LARGE_ANTHROPIC_MODEL=claude-3-opus`;
        
        case 'local':
          return `OLLAMA_SERVER_URL=http://localhost:11434
SMALL_OLLAMA_MODEL=llama2
MEDIUM_OLLAMA_MODEL=mistral
LARGE_OLLAMA_MODEL=mixtral`;
        
        default:
          return '# No model provider configured';
      }
    },

    addLog(message: string) {
      this.logs.push(`[${new Date().toISOString()}] ${message}`);
    },

    async validateConfigs() {
      // Implementation details here
      await new Promise(resolve => setTimeout(resolve, 1000));
    },

    async setupCharacter() {
      // Implementation details here
      await new Promise(resolve => setTimeout(resolve, 2000));
    },

    async updateDockerConfig() {
      // Implementation details here
      await new Promise(resolve => setTimeout(resolve, 2000));
    },

    async retryInstallation() {
      await this.startInstallation();
    },
  },
}); 