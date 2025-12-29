import 'vite/client'
import './types/playwright-stubs'

declare global {
  interface ImportMetaEnv {
    readonly VITE_API_BASE_URL?: string
    readonly VITE_USE_MOCKS?: string
    readonly VITE_TENANT_ID?: string
  }
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  type ComponentProps = Record<string, unknown>
  type ComponentEmits = Record<string, unknown>

  const component: DefineComponent<ComponentProps, ComponentEmits, unknown>
  export default component
}

export {}
