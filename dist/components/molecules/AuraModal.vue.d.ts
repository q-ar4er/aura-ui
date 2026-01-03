type ModalVariant = 'dialog' | 'drawer-right';
type ModalSize = 'sm' | 'md' | 'lg' | 'xl';
type __VLS_Props = {
    open: boolean;
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
declare var __VLS_9: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_9) => any;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
