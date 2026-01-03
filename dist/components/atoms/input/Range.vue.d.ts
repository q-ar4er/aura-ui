import { type PropType } from 'vue';
type NumberLike = number | string;
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<number>;
        default: number;
    };
    min: {
        type: PropType<NumberLike>;
        default: number;
    };
    max: {
        type: PropType<NumberLike>;
        default: number;
    };
    step: {
        type: PropType<NumberLike>;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    el: HTMLInputElement | null;
    focus: () => void | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: number) => any;
    change: (value: number) => any;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<number>;
        default: number;
    };
    min: {
        type: PropType<NumberLike>;
        default: number;
    };
    max: {
        type: PropType<NumberLike>;
        default: number;
    };
    step: {
        type: PropType<NumberLike>;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onChange?: ((value: number) => any) | undefined;
}>, {
    step: NumberLike;
    min: NumberLike;
    max: NumberLike;
    disabled: boolean;
    modelValue: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
