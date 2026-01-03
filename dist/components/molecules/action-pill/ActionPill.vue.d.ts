import { type PropType } from 'vue';
import { type IconifyIcon } from '@iconify/vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    icon: {
        type: PropType<IconifyIcon | string>;
        required: true;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    progress: {
        type: NumberConstructor;
        default: undefined;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: PropType<IconifyIcon | string>;
        required: true;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    progress: {
        type: NumberConstructor;
        default: undefined;
    };
}>> & Readonly<{}>, {
    progress: number;
    description: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
