export type MetricDirection = 'up' | 'down';
type __VLS_Props = {
    /** Optional caption above the number */
    label?: string;
    value: number | string;
    /** Optional long description */
    description?: string;
    /** Optional prefix/suffix (kept for backward-compat) */
    prefix?: string;
    suffix?: string;
    /** Optional unit (alias of suffix for convenience) */
    unit?: string;
    /** Optional trend percent (shows pill + arrow) */
    trend?: number;
    /** Optional direction indicator (up/down), when `trend` is not provided */
    direction?: MetricDirection;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    label: string;
    direction: MetricDirection;
    description: string;
    prefix: string;
    suffix: string;
    unit: string;
    trend: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
