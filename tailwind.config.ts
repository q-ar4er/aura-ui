import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './stories/**/*.{vue,js,ts,jsx,tsx,mdx}', './.storybook/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        ring: 'var(--ring)',
        accent: {
          DEFAULT: 'var(--accent)',
          2: 'var(--accent-2)',
        },
        field: {
          DEFAULT: 'var(--field-bg)',
          hover: 'var(--field-bg-hover)',
          focus: 'var(--field-bg-focus)',
          disabled: 'var(--field-bg-disabled)',
          autofill: 'var(--field-bg-autofill)',
        },
        'field-border': {
          DEFAULT: 'var(--field-border)',
          hover: 'var(--field-border-hover)',
          focus: 'var(--field-border-focus)',
        },
        'field-text': 'var(--field-text)',
        'field-muted': 'var(--field-muted)',
        'field-ring': 'var(--field-ring)',
        'field-caret': 'var(--field-caret)',
        'field-selection': 'var(--field-selection)',
        'field-selection-text': 'var(--field-selection-text)',
      },
      borderRadius: {
        xl: 'var(--r-xl)',
        '2xl': 'var(--r-2xl)',
        pill: '9999px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      boxShadow: {
        neo: 'var(--shadow-neo)',
        'neo-inset': 'var(--shadow-neo-inset)',
        'neo-ring': '0 0 0 1px var(--ring), var(--shadow-neo)',
        'neo-accent': 'var(--shadow-neo-accent)',
      },
      dropShadow: {
        glow: 'var(--shadow-glow)',
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
  plugins: [forms, typography],
} satisfies Config
