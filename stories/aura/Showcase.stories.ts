import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import {
  AuraAlert,
  AuraBadge,
  AuraButton,
  AuraCardSurface,
  AuraKpiNumber,
  AuraProgressLinear,
  AuraProgressRadial,
  AuraSegmentedControl,
  AuraSelectField,
  AuraStatRing,
  AuraTabs,
  AuraTextArea,
  AuraTextInput,
  AuraToggleSwitch,
  AuraMetricCard,
  AuraAnalyticsCard,
  AuraEmptyState,
  AuraErrorView,
  AuraToastOverlay,
  toast,
} from '../../src'

const simpleBarOption = {
  grid: { left: 24, right: 12, top: 16, bottom: 24 },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    axisTick: { show: false },
    axisLine: { show: false },
  },
  yAxis: { type: 'value', splitLine: { show: true } },
  series: [{ type: 'bar', data: [3, 4, 2, 6, 5] }],
} as any

const simpleLineOption = {
  grid: { left: 24, right: 12, top: 16, bottom: 24 },
  xAxis: {
    type: 'category',
    data: ['1', '2', '3', '4', '5', '6', '7'],
    axisTick: { show: false },
    axisLine: { show: false },
  },
  yAxis: { type: 'value', splitLine: { show: true } },
  series: [{ type: 'line', data: [10, 12, 8, 14, 13, 16, 18], smooth: true }],
} as any

const meta: Meta = {
  title: 'Aura/Showcase',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  render: () => ({
    components: {
      AuraAlert,
      AuraBadge,
      AuraButton,
      AuraCardSurface,
      AuraKpiNumber,
      AuraProgressLinear,
      AuraProgressRadial,
      AuraSegmentedControl,
      AuraSelectField,
      AuraStatRing,
      AuraTabs,
      AuraTextArea,
      AuraTextInput,
      AuraToggleSwitch,
      AuraMetricCard,
      AuraAnalyticsCard,
      AuraEmptyState,
      AuraErrorView,
      AuraToastOverlay,
    },
    setup: () => {
      const input = ref('')
      const notes = ref('')
      const toggled = ref(false)
      const seg = ref('week')
      const tab = ref('overview')
      const selected = ref('alpha')

      const pingToast = () => toast('Saved!', 'success')

      return {
        input,
        notes,
        toggled,
        seg,
        tab,
        selected,
        pingToast,
        simpleBarOption,
        simpleLineOption,
      }
    },
    template: `
      <div class="min-h-screen p-8">
        <AuraToastOverlay />

        <div class="mx-auto grid max-w-5xl gap-6">
          <header class="flex flex-wrap items-center justify-between gap-4">
            <div class="space-y-1">
              <div class="text-2xl font-semibold text-[color:var(--text)]">Aura UI — Showcase</div>
              <div class="text-sm text-[color:var(--muted)]">Atoms, molecules, and common patterns in one place.</div>
            </div>
            <div class="flex items-center gap-2">
              <AuraBadge>v0.1</AuraBadge>
              <AuraButton variant="subtle" @click="pingToast">Trigger toast</AuraButton>
            </div>
          </header>

          <AuraAlert title="Heads up" description="This is a neutral alert surface you can reuse across products." />

          <AuraCardSurface class="p-6">
            <div class="grid gap-5 md:grid-cols-2">
              <div class="space-y-4">
                <div class="text-sm font-semibold text-[color:var(--muted)]">Inputs</div>
                <AuraTextInput v-model="input" label="Name" placeholder="Type here" />
                <AuraTextArea v-model="notes" label="Notes" placeholder="Write something" :rows="4" />
                <AuraSelectField v-model="selected" label="Select" :options="[
                  { value: 'alpha', label: 'Alpha' },
                  { value: 'beta', label: 'Beta' },
                  { value: 'gamma', label: 'Gamma' }
                ]" />
                <div class="flex items-center justify-between rounded-[var(--radius-active)] border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <div class="text-sm font-medium">Enable feature</div>
                    <div class="text-xs text-[color:var(--muted)]">Example toggle row</div>
                  </div>
                  <AuraToggleSwitch v-model="toggled" />
                </div>
              </div>

              <div class="space-y-4">
                <div class="text-sm font-semibold text-[color:var(--muted)]">Navigation</div>
                <AuraSegmentedControl v-model="seg" :options="[
                  { value: 'day', label: 'Day' },
                  { value: 'week', label: 'Week' },
                  { value: 'month', label: 'Month' }
                ]" />
                <AuraTabs v-model="tab" :items="[
                  { value: 'overview', label: 'Overview' },
                  { value: 'details', label: 'Details' },
                  { value: 'history', label: 'History' }
                ]" />

                <div class="grid grid-cols-2 gap-4">
                  <AuraCardSurface class="p-4">
                    <AuraKpiNumber label="Revenue" value="1 284 900" suffix=" ₽" :trend="4" />
                  </AuraCardSurface>
                  <AuraCardSurface class="p-4">
                    <div class="text-sm text-[color:var(--muted)]">Progress</div>
                    <div class="mt-2 space-y-2">
                      <AuraProgressLinear :value="0.62" />
                      <AuraProgressRadial :value="0.62" />
                    </div>
                  </AuraCardSurface>
                </div>

                <AuraStatRing label="Completion" :value="78" description="Last 30 days" />
              </div>
            </div>
          </AuraCardSurface>

          <div class="grid gap-6 md:grid-cols-2">
            <AuraMetricCard
              title="Active users"
              :value="4019"
              direction="up"
              subtitle="Last 7 days"
              :progress="62"
              :chart-option="simpleLineOption"
            />
            <AuraAnalyticsCard
              title="Trend"
              subtitle="Example chart"
              :stat="{ label: 'Total', value: '5 120', badge: { label: '+8%', tone: 'accent' } }"
              :chart="{ option: simpleBarOption, tone: 'info', height: '220px' }"
            />
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <AuraEmptyState title="Nothing here yet" description="Use empty states to guide the user." action-label="Create" />
            <AuraErrorView title="Something went wrong" description="You can show errors with optional details." :details="['Network error', 'Try again later']" action-label="Retry" />
          </div>
        </div>
      </div>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
