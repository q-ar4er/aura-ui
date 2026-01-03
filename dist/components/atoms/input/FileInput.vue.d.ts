declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    el: HTMLInputElement | null;
    open: () => void;
    reset: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (event: Event) => any;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((event: Event) => any) | undefined;
}>, {
    disabled: boolean;
    multiple: boolean;
    accept: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
