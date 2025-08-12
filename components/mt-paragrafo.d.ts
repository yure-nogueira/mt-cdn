import type { Components, JSX } from "../types/components";

interface MtParagrafo extends Components.MtParagrafo, HTMLElement {}
export const MtParagrafo: {
    prototype: MtParagrafo;
    new (): MtParagrafo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
