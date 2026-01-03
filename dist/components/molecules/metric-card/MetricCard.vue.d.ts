import type { AuraEChartsOption } from '@/charts/theme';
export type MetricDirection = 'up' | 'down';
type __VLS_Props = {
    title: string;
    value: number;
    unit?: string;
    direction?: MetricDirection;
    progress?: number;
    subtitle?: string;
    chartOption?: AuraEChartsOption;
    chartHeight?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    progress: number;
    direction: MetricDirection;
    unit: string;
    subtitle: string;
    chartOption: AuraEChartsOption;
    chartHeight: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
