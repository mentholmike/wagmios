// Dynamic API URL configuration
export const getApiBaseUrl = () => {
  const hostname = window.location.hostname;
  const port = '5179';
  const protocol = window.location.protocol;
  return `${protocol}//${hostname}:${port}/api`;
};

export const getWsBaseUrl = () => {
  const hostname = window.location.hostname;
  const port = '5179';
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  return `${protocol}//${hostname}:${port}`;
};

export const API_BASE_URL = getApiBaseUrl();
export const WS_BASE_URL = getWsBaseUrl();

// Auth
export const AUTH_STATUS_URL = `${API_BASE_URL}/auth/status`;
export const AUTH_SETUP_URL = `${API_BASE_URL}/auth/setup`;
export const AUTH_VERIFY_URL = `${API_BASE_URL}/auth/verify`;
export const SETTINGS_URL = `${API_BASE_URL}/settings`;
export const SETTINGS_SCOPES_URL = `${API_BASE_URL}/settings/scopes`;

// Containers
export const CONTAINERS_URL = `${API_BASE_URL}/containers`;
export const CONTAINER_BY_ID_URL = (id: string) => `${API_BASE_URL}/containers/${id}`;
export const CONTAINER_START_URL = (id: string) => `${API_BASE_URL}/containers/${id}/start`;
export const CONTAINER_STOP_URL = (id: string) => `${API_BASE_URL}/containers/${id}/stop`;
export const CONTAINER_RESTART_URL = (id: string) => `${API_BASE_URL}/containers/${id}/restart`;
export const CONTAINER_DELETE_URL = (id: string) => `${API_BASE_URL}/containers/${id}/delete`;
export const CONTAINER_LOGS_URL = (id: string) => `${API_BASE_URL}/containers/${id}/logs`;
export const CONTAINER_CONFIG_URL = (id: string) => `${API_BASE_URL}/containers/${id}/config`;
export const IMAGE_PULL_URL = `${API_BASE_URL}/images/pull`;

// System
export const METRICS_URL = `${API_BASE_URL}/system/metrics`;
export const METRICS_SUMMARY_URL = `${API_BASE_URL}/metrics/summary`;
export const SYSTEM_INFO_URL = `${API_BASE_URL}/system/info`;

// Activity
export const ACTIVITY_URL = `${API_BASE_URL}/activity`;
export const ACTIVITY_WS_URL = `${WS_BASE_URL}/api/ws/activity`;

// Approvals

// System Settings

// Marketplace
export const MARKETPLACE_URL = `${API_BASE_URL}/marketplace`;
export const MARKETPLACE_INSTALL_URL = `${API_BASE_URL}/marketplace/install`;

// Templates
export const TEMPLATES_URL = `${API_BASE_URL}/templates`;

// ---- API Client ----

export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  error: { code: string; message: string } | null;
}

export interface AuthStatus {
  wizard_required: boolean;
  has_key: boolean;
  meta?: KeyMeta;
}

export interface KeyMeta {
  id: string;
  key_prefix: string;
  label: string;
  created_at: string;
  last_used_at: string;
  scopes: string[];
  rate_limit: number;
  max_containers: number;
}

export interface ActivityEvent {
  id: string;
  timestamp: string;
  type: string;
  action: string;
  target: string;
  status: string;
  agent: string;
  details?: any;
  scope?: string;
}

export interface Container {
  id: string;
  name: string;
  image: string;
  status: string;
  ports: { host: string; container: string; protocol: string }[];
}



class WagmiosClient {
  private apiKey: string | null = null;

  setApiKey(key: string) {
    this.apiKey = key;
    localStorage.setItem('wagmios_api_key', key);
  }

  getApiKey(): string | null {
    if (!this.apiKey) {
      this.apiKey = localStorage.getItem('wagmios_api_key');
    }
    return this.apiKey;
  }

  clearApiKey() {
    this.apiKey = null;
    localStorage.removeItem('wagmios_api_key');
  }

  private headers(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    const key = this.getApiKey();
    if (key) {
      headers['X-API-Key'] = key;
    }
    return headers;
  }

  private async request<T>(url: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const res = await fetch(url, {
      ...options,
      headers: {
        ...this.headers(),
        ...options.headers,
      },
    });
    const data: ApiResponse<T> = await res.json();

    // If the backend rejects our key, clear it and force re-auth
    if (this.getApiKey() && !data.success && data.error?.code === 'INVALID_KEY') {
      this.clearApiKey();
      window.dispatchEvent(new CustomEvent('wagmios:auth-failed'));
    }
    if (!this.getApiKey() && !data.success && data.error?.code === 'API_KEY_REQUIRED') {
      window.dispatchEvent(new CustomEvent('wagmios:auth-required'));
    }

    return data;
  }

  // Auth
  async getAuthStatus(): Promise<ApiResponse<AuthStatus>> {
    return this.request<AuthStatus>(AUTH_STATUS_URL);
  }

  async setupKey(scopes: string[], label: string): Promise<ApiResponse<{ key: string; meta: KeyMeta }>> {
    const res = await this.request<{ key: string; meta: KeyMeta }>(AUTH_SETUP_URL, {
      method: 'POST',
      body: JSON.stringify({ scopes, label }),
    });
    if (res.success && res.data.key) {
      this.setApiKey(res.data.key);
    }
    return res;
  }


  async getSettings(): Promise<ApiResponse<AuthStatus>> {
    return this.request<AuthStatus>(AUTH_STATUS_URL);
  }

  // Containers
  async getContainers(): Promise<ApiResponse<Container[]>> {
    return this.request<Container[]>(CONTAINERS_URL);
  }

  async startContainer(id: string): Promise<ApiResponse<any>> {
    return this.request(`${CONTAINER_START_URL(id)}`, { method: 'POST' });
  }

  async stopContainer(id: string): Promise<ApiResponse<any>> {
    return this.request(`${CONTAINER_STOP_URL(id)}`, { method: 'POST' });
  }

  async restartContainer(id: string): Promise<ApiResponse<any>> {
    return this.request(`${CONTAINER_RESTART_URL(id)}`, { method: 'POST' });
  }

  async deleteContainer(id: string): Promise<ApiResponse<any>> {
    return this.request(`${CONTAINER_DELETE_URL(id)}`, { method: 'POST' });
  }

  async createContainer(config: any): Promise<ApiResponse<{ id: string }>> {
    return this.request<{ id: string }>(CONTAINERS_URL, {
      method: 'POST',
      body: JSON.stringify(config),
    });
  }

  async pullImage(image: string): Promise<ApiResponse<any>> {
    return this.request(IMAGE_PULL_URL, {
      method: 'POST',
      body: JSON.stringify({ image }),
    });
  }

  async getContainerLogs(id: string, tail = 100): Promise<ApiResponse<{ logs: string }>> {
    return this.request<{ logs: string }>(`${CONTAINER_LOGS_URL(id)}?tail=${tail}`);
  }

  // System
  async getMetrics(): Promise<ApiResponse<any>> {
    return this.request(METRICS_URL);
  }

  async getMetricsSummary(): Promise<ApiResponse<any>> {
    return this.request(METRICS_SUMMARY_URL);
  }

  // Activity
  async getActivity(limit = 100): Promise<ApiResponse<{ events: ActivityEvent[]; total: number }>> {
    return this.request(`${ACTIVITY_URL}?limit=${limit}`);
  }

  async updateScopes(scopes: string[]): Promise<ApiResponse<KeyMeta>> {
    return this.request<KeyMeta>(SETTINGS_SCOPES_URL, {
      method: 'POST',
      body: JSON.stringify({ scopes }),
    });
  }

  // Marketplace
  async getMarketplace(): Promise<ApiResponse<any>> {
    return this.request(MARKETPLACE_URL);
  }

  async installMarketplaceApp(image: string, name: string): Promise<ApiResponse<any>> {
    return this.request(MARKETPLACE_INSTALL_URL, {
      method: 'POST',
      body: JSON.stringify({ image, name }),
    });
  }
}

export const client = new WagmiosClient();
