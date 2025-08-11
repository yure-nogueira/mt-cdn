import type { Components, JSX } from "../types/components";

interface MtGridRow extends Components.MtGridRow, HTMLElement {}
export const MtGridRow: {
    prototype: MtGridRow;
    new (): MtGridRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
