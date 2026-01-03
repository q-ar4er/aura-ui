type __VLS_Props = {
    title: string;
    description?: string;
    details?: readonly string[];
    detailsLabel?: string;
    actionLabel?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    action: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onAction?: (() => any) | undefined;
}>, {
    details: readonly string[];
    description: string;
    actionLabel: string;
    detailsLabel: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
