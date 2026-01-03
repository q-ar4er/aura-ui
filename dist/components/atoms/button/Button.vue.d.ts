import { type PropType } from 'vue';
import { type IconifyIcon } from '@iconify/vue';
type ButtonVariant = 'primary' | 'ghost' | 'subtle' | 'pill';
type ButtonSize = 'sm' | 'md' | 'lg';
type AuraIcon = IconifyIcon | string;
declare var __VLS_10: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_10) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    variant: {
        type: PropType<ButtonVariant>;
        default: string;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: PropType<AuraIcon>;
        default: undefined;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    variant: {
        type: PropType<ButtonVariant>;
        default: string;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: PropType<AuraIcon>;
        default: undefined;
    };
}>> & Readonly<{}>, {
    variant: ButtonVariant;
    size: ButtonSize;
    block: boolean;
    disabled: boolean;
    loading: boolean;
    icon: AuraIcon;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
