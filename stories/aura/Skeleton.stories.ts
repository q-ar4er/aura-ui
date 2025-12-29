import type { Meta, StoryObj } from '@storybook/vue3'
import { AuraBlockSkeleton, AuraSkeleton } from '../../src'

const meta: Meta<typeof AuraSkeleton> = {
  title: 'Aura/Atoms/Skeleton',
  tags: ['autodocs'],
  component: AuraSkeleton,
  render: () => ({
    components: { AuraSkeleton, AuraBlockSkeleton },
    template: `
      <div class="space-y-5">
        <div class="space-y-2">
          <AuraSkeleton class="h-3 w-52" />
          <AuraSkeleton class="h-3 w-44" />
          <AuraSkeleton class="h-3 w-64" />
        </div>

        <AuraBlockSkeleton :lines="5" />
      </div>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
