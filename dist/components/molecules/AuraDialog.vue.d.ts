type ModalVariant = 'dialog' | 'drawer-right';
type ModalSize = 'sm' | 'md' | 'lg' | 'xl';
type __VLS_Props = {
    open: boolean;
    title?: string;
    pretitle?: string;
    subtitle?: string;
    showClose?: boolean;
    closeAriaLabel?: string;
    variant?: ModalVariant;
    size?: ModalSize;
    role?: 'dialog' | 'alertdialog';
    ariaModal?: boolean;
    ariaLabel?: string;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
    closeOnBackdrop?: boolean;
    closeOnEscape?: boolean;
    lockScroll?: boolean;
    autoFocus?: boolean;
    containerClass?: string;
    overlayClass?: string;
    panelClass?: string;
};
declare var __VLS_10: {}, __VLS_12: {}, __VLS_14: {}, __VLS_16: {};
type __VLS_Slots = {} & {
    header?: (props: typeof __VLS_10) => any;
} & {
    'header-actions'?: (props: typeof __VLS_12) => any;
} & {
    default?: (props: typeof __VLS_14) => any;
} & {
    footer?: (props: typeof __VLS_16) => any;
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
    variant: ModalVariant;
    size: ModalSize;
    role: "dialog" | "alertdialog";
    ariaModal: boolean;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
