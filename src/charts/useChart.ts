import { computed } from 'vue'
import type { EChartsType } from 'echarts/core'
import { deepMerge } from '@/lib/deepMerge'
import type { AuraEChartsOption, ChartTone } from './theme'
import { getChartPalette, getChartThemeBase } from './theme'
import './registry'

export type MaybeECharts = EChartsType | null

export interface UseChartOptions {
  tone?: ChartTone
}

export const useChart = (
  option: AuraEChartsOption,
  { tone = 'neutral' }: UseChartOptions = {},
) => {
  const themedOption = computed<AuraEChartsOption>(() => {
    const palette = getChartPalette(tone)
    const base = getChartThemeBase()

    return deepMerge(base, deepMerge({ color: palette }, option))
  })

  return {
    themedOption,
  }
}
