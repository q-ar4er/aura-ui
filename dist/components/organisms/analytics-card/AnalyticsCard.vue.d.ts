import type { SegmentedOption } from '@/components/atoms/segmented-control/SegmentedControl.vue';
import type { AuraEChartsOption } from '@/charts/theme';
type Tone = 'default' | 'muted' | 'strong';
type __VLS_Props = {
    title: string;
    subtitle?: string;
    description?: string;
    tone?: Tone;
    stat?: {
        label: string;
        value: string;
        badge?: {
            label: string;
            tone?: 'default' | 'accent' | 'muted';
        };
    };
    chart?: {
        option: AuraEChartsOption;
        tone?: 'default' | 'success' | 'info' | 'warning' | 'danger';
        height?: string;
    };
    segments?: {
        options: SegmentedOption[];
        modelValue: string;
    };
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:segment": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:segment"?: ((value: string) => any) | undefined;
}>, {
    tone: Tone;
    description: string;
    chart: {
        option: AuraEChartsOption;
        tone?: "default" | "success" | "info" | "warning" | "danger";
        height?: string;
    };
    subtitle: string;
    stat: {
        label: string;
        value: string;
        badge?: {
            label: string;
            tone?: "default" | "accent" | "muted";
        };
    };
    segments: {
        options: SegmentedOption[];
        modelValue: string;
    };
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
