/**
 * Aura tokens version.
 *
 * This is versioned independently from the package version.
 * Source of truth:
 * - package.json#aura.tokensVersion
 * - src/assets/theme.css (header + --aura-tokens-version)
 */
export const AURA_TOKENS_VERSION = '0.1.0' as const

/**
 * Current package version.
 *
 * Note: this constant is manually maintained for now.
 * (When you add a release process, you can inject it during build.)
 */
export const AURA_UI_VERSION = '0.1.0' as const

export type AuraVersions = {
  ui: typeof AURA_UI_VERSION
  tokens: typeof AURA_TOKENS_VERSION
}

export const getAuraVersions = (): AuraVersions => ({
  ui: AURA_UI_VERSION,
  tokens: AURA_TOKENS_VERSION,
})
