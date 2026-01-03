import { type PropType } from 'vue';
type CardTone = 'default' | 'accent' | 'translucent' | 'muted' | 'strong';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tone: {
        type: PropType<CardTone>;
        default: string;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tone: {
        type: PropType<CardTone>;
        default: string;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    tone: CardTone;
    padded: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
