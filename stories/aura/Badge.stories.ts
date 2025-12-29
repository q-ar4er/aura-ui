import type { Meta, StoryObj } from '@storybook/vue3'
import { AuraBadge } from '../../src'

const meta: Meta<typeof AuraBadge> = {
  title: 'Aura/Atoms/Badge',
  tags: ['autodocs'],
  component: AuraBadge,
  args: {
    tone: 'default',
  },
  render: (args) => ({
    components: { AuraBadge },
    setup: () => ({ args }),
    template: '<AuraBadge v-bind="args">New</AuraBadge>',
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Accent: Story = { args: { tone: 'accent' } }
export const Muted: Story = { args: { tone: 'muted' } }
