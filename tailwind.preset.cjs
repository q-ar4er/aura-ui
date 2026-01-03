/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Aura Tailwind Preset
 *
 * IMPORTANT:
 * This file is executed in the consumer project's Node process (Tailwind config load).
 * So it MUST NOT throw if optional plugins are not installed.
 */

function loadPlugin(name) {
  try {
    // CJS require - may return a function or { default: fn } depending on package/interop
    const mod = require(name)
    if (mod && typeof mod === 'object' && 'default' in mod) return mod.default
    return mod
  } catch (_e) {
    return undefined
  }
}

const forms = loadPlugin('@tailwindcss/forms')
const typography = loadPlugin('@tailwindcss/typography')

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // CSS variables exposed by Aura styles
        bg: 'var(--bg)',
        fg: 'var(--fg)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        danger: 'var(--danger)',
        warning: 'var(--warning)',
        success: 'var(--success)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        card: 'var(--shadow-card)',
        pop: 'var(--shadow-pop)',
      },
      backgroundImage: {
        accent: 'var(--gradient-accent)',
        'accent-soft': 'var(--gradient-accent-soft)',
      },
      backdropBlur: {
        glass: 'var(--blur)',
      },
      transitionTimingFunction: {
        glide: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  // Tailwind crashes if plugins array contains null/undefined, so filter them out
  plugins: [forms, typography].filter(Boolean),
}
