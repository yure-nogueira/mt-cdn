import type { Components, JSX } from "../types/components";

interface MtFooter extends Components.MtFooter, HTMLElement {}
export const MtFooter: {
    prototype: MtFooter;
    new (): MtFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
