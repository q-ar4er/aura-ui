import type { EChartsType } from 'echarts/core';
import type { AuraEChartsOption, ChartTone } from './theme';
import './registry';
export type MaybeECharts = EChartsType | null;
export interface UseChartOptions {
    tone?: ChartTone;
}
export declare const useChart: (option: AuraEChartsOption, { tone }?: UseChartOptions) => {
    themedOption: import("vue").ComputedRef<AuraEChartsOption>;
};
