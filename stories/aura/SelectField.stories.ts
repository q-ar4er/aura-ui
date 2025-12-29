import type { Meta, StoryObj } from '@storybook/vue3'
import { AuraSelectField } from '../../src'

const meta: Meta<typeof AuraSelectField> = {
  title: 'Aura/Atoms/SelectField',
  tags: ['autodocs'],
  component: AuraSelectField,
  args: {
    label: 'Team',
    modelValue: 'eng',
    options: [
      { value: 'eng', label: 'Engineering' },
      { value: 'prod', label: 'Product' },
      { value: 'sales', label: 'Sales' },
    ],
    state: 'default',
    message: '',
  },
  render: (args) => ({
    components: { AuraSelectField },
    setup: () => ({ args }),
    template: '<AuraSelectField v-bind="args" />',
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Error: Story = { args: { state: 'error', message: 'Please select a team' } }
export const Disabled: Story = { args: { disabled: true } }
