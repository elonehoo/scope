import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<"small" | "nano" | "mini" | "medium" | "large">;
        default: string;
    };
    avatar: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<"small" | "nano" | "mini" | "medium" | "large">;
        default: string;
    };
    avatar: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    size: "small" | "nano" | "mini" | "medium" | "large";
    name: string;
}>;
export default _default;
