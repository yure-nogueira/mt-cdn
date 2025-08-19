import type { Components, JSX } from "../types/components";

interface MtFloated extends Components.MtFloated, HTMLElement {}
export const MtFloated: {
    prototype: MtFloated;
    new (): MtFloated;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
