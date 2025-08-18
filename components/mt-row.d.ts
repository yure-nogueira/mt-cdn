import type { Components, JSX } from "../types/components";

interface MtRow extends Components.MtRow, HTMLElement {}
export const MtRow: {
    prototype: MtRow;
    new (): MtRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
