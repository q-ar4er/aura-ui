export type AuraThemeMode = 'light' | 'dark' | 'auto'

export type AuraThemeOptions = {
  /**
   * Where to apply the theme. Defaults to `document.documentElement`.
   * If you're running SSR, call this only in the browser.
   */
  target?: HTMLElement
  /**
   * Storage key for `persistTheme` helpers.
   */
  storageKey?: string
}

const DEFAULT_STORAGE_KEY = 'aura-theme'

const isBrowser = () => typeof window !== 'undefined' && typeof document !== 'undefined'

const resolveTarget = (options?: AuraThemeOptions) => {
  if (!isBrowser()) return null
  return options?.target ?? document.documentElement
}

const prefersLight = () =>
  isBrowser() && window.matchMedia?.('(prefers-color-scheme: light)').matches

export const applyAuraTheme = (mode: AuraThemeMode, options?: AuraThemeOptions) => {
  const target = resolveTarget(options)
  if (!target) return

  const effective: Exclude<AuraThemeMode, 'auto'> =
    mode === 'auto' ? (prefersLight() ? 'light' : 'dark') : mode

  target.dataset.theme = effective
}

export const readPersistedAuraTheme = (options?: AuraThemeOptions): AuraThemeMode | null => {
  if (!isBrowser()) return null
  const key = options?.storageKey ?? DEFAULT_STORAGE_KEY
  const raw = window.localStorage.getItem(key)
  if (raw === 'light' || raw === 'dark' || raw === 'auto') return raw
  return null
}

export const persistAuraTheme = (mode: AuraThemeMode, options?: AuraThemeOptions) => {
  if (!isBrowser()) return
  const key = options?.storageKey ?? DEFAULT_STORAGE_KEY
  window.localStorage.setItem(key, mode)
  applyAuraTheme(mode, options)
}

/**
 * Apply a persisted theme or fall back to `auto`.
 * Useful to run as early as possible in app bootstrap.
 */
export const initAuraTheme = (options?: AuraThemeOptions) => {
  const mode = readPersistedAuraTheme(options) ?? 'auto'
  applyAuraTheme(mode, options)
  return mode
}
