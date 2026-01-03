import { type PropType } from 'vue';
import { type IconifyIcon } from '@iconify/vue';
export interface TabItem {
    value: string;
    label: string;
    icon?: IconifyIcon | string;
}
type Placement = 'top' | 'bottom';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    items: {
        type: PropType<TabItem[]>;
        default: () => never[];
    };
    placement: {
        type: PropType<Placement>;
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
    items: {
        type: PropType<TabItem[]>;
        default: () => never[];
    };
    placement: {
        type: PropType<Placement>;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
}>, {
    modelValue: string;
    items: TabItem[];
    placement: Placement;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
