/**
 * Aura tokens version.
 *
 * This is versioned independently from the package version.
 * Source of truth:
 * - package.json#aura.tokensVersion
 * - src/assets/theme.css (header + --aura-tokens-version)
 */
export declare const AURA_TOKENS_VERSION: "0.1.0";
/**
 * Current package version.
 *
 * Note: this constant is manually maintained for now.
 * (When you add a release process, you can inject it during build.)
 */
export declare const AURA_UI_VERSION: "0.1.0";
export type AuraVersions = {
    ui: typeof AURA_UI_VERSION;
    tokens: typeof AURA_TOKENS_VERSION;
};
export declare const getAuraVersions: () => AuraVersions;
