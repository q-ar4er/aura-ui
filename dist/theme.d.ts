export type AuraThemeMode = 'light' | 'dark' | 'auto';
export type AuraThemeOptions = {
    /**
     * Where to apply the theme. Defaults to `document.documentElement`.
     * If you're running SSR, call this only in the browser.
     */
    target?: HTMLElement;
    /**
     * Storage key for `persistTheme` helpers.
     */
    storageKey?: string;
};
export declare const applyAuraTheme: (mode: AuraThemeMode, options?: AuraThemeOptions) => void;
export declare const readPersistedAuraTheme: (options?: AuraThemeOptions) => AuraThemeMode | null;
export declare const persistAuraTheme: (mode: AuraThemeMode, options?: AuraThemeOptions) => void;
/**
 * Apply a persisted theme or fall back to `auto`.
 * Useful to run as early as possible in app bootstrap.
 */
export declare const initAuraTheme: (options?: AuraThemeOptions) => AuraThemeMode;
