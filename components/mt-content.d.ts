import type { Components, JSX } from "../types/components";

interface MtContent extends Components.MtContent, HTMLElement {}
export const MtContent: {
    prototype: MtContent;
    new (): MtContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
