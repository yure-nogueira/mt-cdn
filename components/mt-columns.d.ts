import type { Components, JSX } from "../types/components";

interface MtColumns extends Components.MtColumns, HTMLElement {}
export const MtColumns: {
    prototype: MtColumns;
    new (): MtColumns;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
