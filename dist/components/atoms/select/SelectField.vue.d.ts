import { type PropType } from 'vue';
interface SelectOption {
    value: string;
    label: string;
}
type SelectState = 'default' | 'error';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: PropType<SelectOption[]>;
        default: () => never[];
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: PropType<SelectState>;
        default: string;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
    change: (value: string) => any;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: PropType<SelectOption[]>;
        default: () => never[];
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: PropType<SelectState>;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
}>, {
    options: SelectOption[];
    label: string;
    message: string;
    disabled: boolean;
    state: SelectState;
    modelValue: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
