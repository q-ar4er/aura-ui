<script setup lang="ts">
import { computed } from 'vue'

import AuraCardSurface from '@/components/atoms/card/CardSurface.vue'
import AuraDial from '@/components/atoms/dial/Dial.vue'
import AuraKpiNumber from '@/components/atoms/kpi-number/KpiNumber.vue'
import AuraProgressLinear from '@/components/atoms/progress/ProgressLinear.vue'
import AuraChart from '@/components/atoms/chart/AuraChart.vue'

import type { AuraEChartsOption } from '@/charts/theme'

export type MetricDirection = 'up' | 'down'

const props = withDefaults(
  defineProps<{
    title: string
    value: number
    unit?: string
    direction?: MetricDirection
    progress?: number
    subtitle?: string
    chartOption?: AuraEChartsOption
    chartHeight?: string
  }>(),
  {
    unit: undefined,
    direction: undefined,
    progress: undefined,
    subtitle: undefined,
    chartOption: undefined,
    chartHeight: '160px',
  },
)

const progressLabel = computed(() => {
  if (props.progress === undefined) return undefined
  const v = Math.max(0, Math.min(1, props.progress))
  return `${Math.round(v * 100)}%`
})
</script>

<template>
  <AuraCardSurface class="p-4">
    <div class="flex items-start justify-between gap-4">
      <div class="min-w-0">
        <div class="text-sm font-medium text-ink-muted">{{ title }}</div>
        <div v-if="subtitle" class="mt-0.5 text-xs text-ink-muted/80">{{ subtitle }}</div>

        <div class="mt-3 flex items-center gap-3">
          <AuraKpiNumber :value="value" :unit="unit" :direction="direction" />
          <AuraDial v-if="progress !== undefined" :value="progress" size="sm" />
        </div>
      </div>

      <div v-if="progress !== undefined" class="w-40 shrink-0">
        <div class="flex items-center justify-between text-xs text-ink-muted">
          <span>Progress</span>
          <span>{{ progressLabel }}</span>
        </div>
        <AuraProgressLinear class="mt-2" :value="progress" />
      </div>
    </div>

    <div v-if="chartOption" class="mt-4">
      <AuraChart :option="chartOption" :height="chartHeight" tone="muted" />
    </div>
  </AuraCardSurface>
</template>
