import type { Meta, StoryObj } from '@storybook/vue3'
import { AuraIconButton } from '../../src'

const meta: Meta<typeof AuraIconButton> = {
  title: 'Aura/Atoms/IconButton',
  tags: ['autodocs'],
  component: AuraIconButton,
  args: {
    disabled: false,
    icon: 'ph:gear-six',
    'aria-label': 'Settings',
  },
  render: (args) => ({
    components: { AuraIconButton },
    setup: () => ({ args }),
    template: '<AuraIconButton v-bind="args" />',
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Disabled: Story = { args: { disabled: true } }
