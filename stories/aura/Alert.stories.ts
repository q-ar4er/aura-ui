import type { Meta, StoryObj } from '@storybook/vue3'
import { AuraAlert } from '../../src'

const meta: Meta<typeof AuraAlert> = {
  title: 'Aura/Feedback/Alert',
  tags: ['autodocs'],
  component: AuraAlert,
  args: {
    tone: 'info',
    title: 'Heads up',
  },
  render: (args) => ({
    components: { AuraAlert },
    setup: () => ({ args }),
    template: '<AuraAlert v-bind="args">This is a message.</AuraAlert>',
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {}
export const Success: Story = { args: { tone: 'success', title: 'Saved' } }
export const Error: Story = { args: { tone: 'error', title: 'Something went wrong' } }
