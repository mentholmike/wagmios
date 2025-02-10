/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_PORT: string
  readonly VITE_ELIZA_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 