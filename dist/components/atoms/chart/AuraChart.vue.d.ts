import type { AuraEChartsOption } from '@/charts/theme';
type ChartHeight = string;
type __VLS_Props = {
    title?: string;
    option: AuraEChartsOption;
    height?: ChartHeight;
    tone?: 'neutral' | 'positive' | 'negative' | 'muted';
    ariaLabel?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    height: ChartHeight;
    tone: "neutral" | "positive" | "negative" | "muted";
    ariaLabel: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
