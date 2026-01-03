<script setup lang="ts">
import { computed, ref } from 'vue'

import AuraBadge from '@/components/atoms/badge/Badge.vue'
import AuraCardSurface from '@/components/atoms/card/CardSurface.vue'
import AuraSegmentedControl from '@/components/atoms/segmented-control/SegmentedControl.vue'
import type { SegmentedOption } from '@/components/atoms/segmented-control/SegmentedControl.vue'
import AuraChart from '@/components/atoms/chart/AuraChart.vue'
import type { AuraEChartsOption } from '@/charts/theme'

type Tone = 'default' | 'muted' | 'strong'

const props = withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    description?: string
    tone?: Tone
    stat?: {
      label: string
      value: string
      badge?: { label: string; tone?: 'default' | 'accent' | 'muted' }
    }
    chart?: {
      option: AuraEChartsOption
      tone?: 'default' | 'success' | 'info' | 'warning' | 'danger'
      height?: string
    }
    segments?: {
      options: SegmentedOption[]
      modelValue: string
    }
  }>(),
  {
    subtitle: undefined,
    description: undefined,
    tone: 'default',
    stat: undefined,
    chart: undefined,
    segments: undefined,
  },
)

const emit = defineEmits<{ (e: 'update:segment', value: string): void }>()

const segmentValue = ref(props.segments?.modelValue ?? '')

const surfaceTone = computed(() => (props.tone === 'muted' ? 'muted' : props.tone === 'strong' ? 'strong' : 'default'))

const chartTone = computed<'neutral' | 'positive' | 'negative' | 'muted'>(() => {
  const t = props.chart?.tone ?? 'default'
  if (t === 'success') return 'positive'
  if (t === 'danger') return 'negative'
  if (t === 'warning') return 'muted'
  return 'neutral'
})

const onSegmentUpdate = (value: string) => {
  segmentValue.value = value
  emit('update:segment', value)
}
</script>

<template>
  <AuraCardSurface class="p-6" :tone="surfaceTone">
    <div class="flex items-start justify-between gap-4">
      <div class="min-w-0">
        <div class="flex items-center gap-3">
          <h3 class="text-sm font-semibold">{{ title }}</h3>
          <AuraBadge
            v-if="stat?.badge"
            :tone="stat.badge.tone ?? 'muted'"
            size="sm"
          >
            {{ stat.badge.label }}
          </AuraBadge>
        </div>

        <p v-if="subtitle" class="mt-1 text-xs text-muted">{{ subtitle }}</p>
        <p v-if="description" class="mt-3 text-sm text-muted leading-relaxed">{{ description }}</p>
      </div>

      <div v-if="stat" class="text-right">
        <p class="text-xs text-muted">{{ stat.label }}</p>
        <p class="mt-1 text-lg font-semibold">{{ stat.value }}</p>
      </div>
    </div>

    <div v-if="segments" class="mt-4">
      <AuraSegmentedControl
        :options="segments.options"
        :model-value="segmentValue"
        @update:model-value="onSegmentUpdate"
      />
    </div>

    <div v-if="chart" class="mt-4">
      <AuraChart
        :option="chart.option"
        :height="chart.height ?? '220px'"
        :tone="chartTone"
        :aria-label="title"
      />
    </div>
  </AuraCardSurface>
</template>
