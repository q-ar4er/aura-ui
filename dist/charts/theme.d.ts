import type { ComposeOption } from 'echarts/core';
import type { BarSeriesOption, LineSeriesOption, PieSeriesOption } from 'echarts/charts';
import type { GridComponentOption, LegendComponentOption, TooltipComponentOption } from 'echarts/components';
export type AuraEChartsOption = ComposeOption<BarSeriesOption | LineSeriesOption | PieSeriesOption | GridComponentOption | LegendComponentOption | TooltipComponentOption>;
export type ChartTone = 'neutral' | 'positive' | 'negative' | 'muted';
export declare const getChartPalette: (tone?: ChartTone) => string[];
export declare const getChartThemeBase: () => AuraEChartsOption;
