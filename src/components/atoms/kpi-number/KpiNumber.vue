<template>
  <div class="space-y-2">
    <p
      v-if="label"
      class="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]"
    >
      {{ label }}
    </p>

    <div class="flex items-baseline gap-3">
      <h3
        class="font-display font-semibold text-[color:var(--text)]"
        style="font-size: calc(2.4rem * var(--font-scale)); line-height: 1.06;"
      >
        {{ formattedValue }}
      </h3>

      <!-- Trend pill (percentage) - for dashboards/KPI views -->
      <span v-if="trend !== undefined" :class="trendClasses">
        <Icon :icon="trendIcon" class="h-4 w-4" aria-hidden="true" />
        <span>{{ Math.abs(trend) }}%</span>
      </span>

      <!-- Direction indicator (no percent) - for compact metric cards -->
      <span
        v-else-if="direction"
        class="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-[color:var(--muted)]"
      >
        <Icon :icon="directionIcon" class="h-4 w-4" aria-hidden="true" />
      </span>
    </div>

    <p v-if="description" class="text-sm text-[color:var(--muted)]">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

import trendUp from '@/icons/trend-up.json'
import trendDown from '@/icons/trend-down.json'

export type MetricDirection = 'up' | 'down'

const props = withDefaults(
  defineProps<{
    /** Optional caption above the number */
    label?: string
    value: number | string
    /** Optional long description */
    description?: string

    /** Optional prefix/suffix (kept for backward-compat) */
    prefix?: string
    suffix?: string

    /** Optional unit (alias of suffix for convenience) */
    unit?: string

    /** Optional trend percent (shows pill + arrow) */
    trend?: number

    /** Optional direction indicator (up/down), when `trend` is not provided */
    direction?: MetricDirection
  }>(),
  {
    label: undefined,
    description: '',
    prefix: '',
    suffix: '',
    unit: undefined,
    trend: undefined,
    direction: undefined,
  },
)

const effectiveSuffix = computed(() => props.unit ?? props.suffix)

const formattedValue = computed(() => `${props.prefix}${props.value}${effectiveSuffix.value}`)

const trendClasses = computed(() =>
  props.trend !== undefined && props.trend >= 0
    ? 'inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-200'
    : 'inline-flex items-center gap-1 rounded-full bg-rose-500/15 px-2.5 py-1 text-xs font-medium text-rose-200',
)

const trendIcon = computed(() => (props.trend !== undefined && props.trend >= 0 ? trendUp : trendDown))

const directionIcon = computed(() =>
  props.direction === 'up'
    ? 'mdi:trending-up'
    : props.direction === 'down'
      ? 'mdi:trending-down'
      : 'mdi:minus',
)
</script>
