import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      // Better props/events/slots extraction for Vue SFCs
      docgen: {
        plugin: 'vue-component-meta',
        tsconfig: 'tsconfig.app.json',
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
}

export default config
