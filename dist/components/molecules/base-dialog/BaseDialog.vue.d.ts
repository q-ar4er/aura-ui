type DialogSize = 'sm' | 'md' | 'lg' | 'xl';
type __VLS_Props = {
    open: boolean;
    title?: string;
    pretitle?: string;
    subtitle?: string;
    size?: DialogSize;
    showClose?: boolean;
    closeAriaLabel?: string;
    closeOnBackdrop?: boolean;
    closeOnEscape?: boolean;
    lockScroll?: boolean;
    /**
     * Selector for autofocus when opening.
     * If not set, the first focusable element inside the default slot will be used.
     */
    focusSelector?: string;
    /**
     * Forwarded classes to AuraModal.
     */
    containerClass?: string;
    overlayClass?: string;
    panelClass?: string;
    /**
     * Forwarded to AuraDialog/AuraModal.
     */
    autoFocus?: boolean;
};
declare var __VLS_10: {}, __VLS_12: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_10) => any;
} & {
    footer?: (props: typeof __VLS_12) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:open": (value: boolean) => any;
    close: (payload: {
        reason: "backdrop" | "escape" | "api";
    }) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    onClose?: ((payload: {
        reason: "backdrop" | "escape" | "api";
    }) => any) | undefined;
}>, {
    title: string;
    size: DialogSize;
    closeOnBackdrop: boolean;
    closeOnEscape: boolean;
    lockScroll: boolean;
    autoFocus: boolean;
    containerClass: string;
    overlayClass: string;
    panelClass: string;
    pretitle: string;
    subtitle: string;
    showClose: boolean;
    closeAriaLabel: string;
    focusSelector: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
