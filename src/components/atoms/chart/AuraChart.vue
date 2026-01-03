<script setup lang="ts">
import { computed } from 'vue'
import VChart from 'vue-echarts'
import type { AuraEChartsOption } from '@/charts/theme'
import { useChart } from '@/charts/useChart'

// Accept any valid CSS height value (e.g. '160px', '12rem', '40vh', '100%').
type ChartHeight = string

const props = withDefaults(
  defineProps<{
    title?: string
    option: AuraEChartsOption
    height?: ChartHeight
    tone?: 'neutral' | 'positive' | 'negative' | 'muted'
    ariaLabel?: string
  }>(),
  {
    height: '192px',
    tone: 'neutral',
    ariaLabel: undefined,
  },
)

const { themedOption } = useChart(props.option, { tone: props.tone })

const rootStyle = computed(() => ({ height: props.height }))
</script>

<template>
  <div class="neo-chart" :style="rootStyle">
    <div v-if="title" class="neo-chart__title">{{ title }}</div>
    <VChart autoresize :option="themedOption" class="neo-chart__chart" />
  </div>
</template>

<style scoped>
.neo-chart {
  position: relative;
  width: 100%;
}

.neo-chart__title {
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fg-muted);
  margin: 0 0 8px;
}

.neo-chart__chart {
  width: 100%;
  height: 100%;
}
</style>
