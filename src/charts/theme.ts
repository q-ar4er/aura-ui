import type { ComposeOption } from 'echarts/core'
import type { BarSeriesOption, LineSeriesOption, PieSeriesOption } from 'echarts/charts'
import type { GridComponentOption, LegendComponentOption, TooltipComponentOption } from 'echarts/components'

export type AuraEChartsOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | PieSeriesOption
  | GridComponentOption
  | LegendComponentOption
  | TooltipComponentOption
>

// Chart tone controls palette selection. `muted` is a softer neutral preset.
export type ChartTone = 'neutral' | 'positive' | 'negative' | 'muted'

const getCssVar = (name: string): string => {
  if (typeof window === 'undefined') return ''
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

export const getChartPalette = (tone: ChartTone = 'neutral') => {
  const base = [
    getCssVar('--aura-accent-300'),
    getCssVar('--aura-accent-200'),
    getCssVar('--aura-accent-400'),
  ].filter(Boolean)

  const positive = [getCssVar('--aura-success-300'), getCssVar('--aura-success-200')].filter(Boolean)
  const negative = [getCssVar('--aura-danger-300'), getCssVar('--aura-danger-200')].filter(Boolean)

  if (tone === 'positive') return [...positive, ...base]
  if (tone === 'negative') return [...negative, ...base]
  // muted falls back to neutral for now (keeps API flexible)
  return base
}

export const getChartThemeBase = (): AuraEChartsOption => {
  const text = getCssVar('--fg-muted') || '#94a3b8'
  const grid = getCssVar('--border') || 'rgba(148,163,184,0.2)'

  return {
    backgroundColor: 'transparent',
    textStyle: { fontFamily: 'inherit', color: text },
    grid: { left: 16, right: 16, top: 16, bottom: 16, containLabel: true },
    xAxis: {
      axisLine: { lineStyle: { color: grid } },
      axisTick: { show: false },
      axisLabel: { color: text },
      splitLine: { lineStyle: { color: grid } },
    },
    yAxis: {
      axisLine: { lineStyle: { color: grid } },
      axisTick: { show: false },
      axisLabel: { color: text },
      splitLine: { lineStyle: { color: grid } },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'line' },
    },
  }
}
