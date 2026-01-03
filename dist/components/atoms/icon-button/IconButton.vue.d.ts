import { type PropType } from 'vue';
import { type IconifyIcon } from '@iconify/vue';
type AuraIcon = IconifyIcon | string;
declare var __VLS_10: {}, __VLS_12: {};
type __VLS_Slots = {} & {
    overlay?: (props: typeof __VLS_10) => any;
} & {
    default?: (props: typeof __VLS_12) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    icon: {
        type: PropType<AuraIcon>;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: PropType<AuraIcon>;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
