import type { Meta, StoryObj } from '@storybook/vue3'
import { AuraTextInput } from '../../src'

const meta: Meta<typeof AuraTextInput> = {
  title: 'Aura/Atoms/TextInput',
  tags: ['autodocs'],
  component: AuraTextInput,
  args: {
    label: 'Email',
    placeholder: 'name@example.com',
    modelValue: '',
    state: 'default',
    message: '',
  },
  render: (args) => ({
    components: { AuraTextInput },
    setup: () => ({ args }),
    template: '<AuraTextInput v-bind="args" />',
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Error: Story = { args: { state: 'error', message: 'Invalid email' } }
export const Success: Story = { args: { state: 'success', message: 'Looks good' } }
export const Disabled: Story = { args: { disabled: true, modelValue: 'disabled@example.com' } }
