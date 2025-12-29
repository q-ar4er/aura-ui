import type { Meta, StoryObj } from '@storybook/vue3'
import { AuraButton } from '../../src'

const meta: Meta<typeof AuraButton> = {
  title: 'Aura/Atoms/Button',
  tags: ['autodocs'],
  component: AuraButton,
  args: {
    variant: 'primary',
    size: 'md',
    block: false,
    disabled: false,
    loading: false,
  },
  render: (args) => ({
    components: { AuraButton },
    setup: () => ({ args }),
    template: '<AuraButton v-bind="args">Click me</AuraButton>',
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Subtle: Story = { args: { variant: 'subtle' } }
export const Pill: Story = { args: { variant: 'pill' } }
export const Loading: Story = { args: { loading: true } }
export const Disabled: Story = { args: { disabled: true } }
