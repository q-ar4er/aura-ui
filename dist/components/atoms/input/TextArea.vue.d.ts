import { type PropType } from 'vue';
type TextAreaState = 'default' | 'error' | 'success';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    state: {
        type: PropType<TextAreaState>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
    change: (value: string) => any;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    state: {
        type: PropType<TextAreaState>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
}>, {
    label: string;
    message: string;
    disabled: boolean;
    state: TextAreaState;
    placeholder: string;
    modelValue: string;
    rows: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
