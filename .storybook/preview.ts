import type { Preview } from '@storybook/vue3'

// Keep the same look & feel as the kit.
import '../src/style.css'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Aura theme mode',
    defaultValue: 'dark',
    toolbar: {
      icon: 'contrast',
      items: [
        { value: 'dark', title: 'Dark' },
        { value: 'light', title: 'Light' },
      ],
      dynamicTitle: true,
    },
  },
  radius: {
    name: 'Radius',
    description: 'Radius mode',
    defaultValue: 'xl',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'xl', title: 'XL' },
        { value: '2xl', title: '2XL' },
      ],
      dynamicTitle: true,
    },
  },
  neo: {
    name: 'Neo Shadows',
    description: 'Enable/disable neomorphic shadows',
    defaultValue: 'true',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'true', title: 'On' },
        { value: 'false', title: 'Off' },
      ],
      dynamicTitle: true,
    },
  },
}

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
    backgrounds: {
      default: 'App',
      values: [
        { name: 'App', value: 'var(--bg)' },
        { name: 'Panel', value: 'var(--panel)' },
      ],
    },
  },
  decorators: [
    (story, ctx) => {
      // Apply global UI switches to <html>
      if (typeof document !== 'undefined') {
        const el = document.documentElement
        el.dataset.theme = ctx.globals.theme
        el.dataset.radius = ctx.globals.radius === '2xl' ? '2xl' : ''
        el.dataset.neo = ctx.globals.neo

        // Clean empty attributes (nicer DOM)
        if (!el.dataset.radius) delete el.dataset.radius
      }

      return {
        components: { story },
        template: '<div class="p-6 w-[min(920px,95vw)]"><story /></div>',
      }
    },
  ],
}

export default preview
