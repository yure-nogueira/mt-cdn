import type { Components, JSX } from "../types/components";

interface MedtangoExample extends Components.MedtangoExample, HTMLElement {}
export const MedtangoExample: {
    prototype: MedtangoExample;
    new (): MedtangoExample;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
