export type AuraToastType = 'success' | 'error' | 'info';
export interface AuraToastDetail {
    type: AuraToastType;
    message: string;
}
/**
 * Dispatch a toast event listened by <AuraToastOverlay/>.
 *
 * This is intentionally framework-agnostic (just DOM events), so it works
 * across multiple apps without bringing a global store.
 */
export declare const toast: (message: string, type?: AuraToastType) => void;
