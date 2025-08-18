import type { Components, JSX } from "../types/components";

interface MtCol extends Components.MtCol, HTMLElement {}
export const MtCol: {
    prototype: MtCol;
    new (): MtCol;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
