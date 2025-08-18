import type { Components, JSX } from "../types/components";

interface MtBackground extends Components.MtBackground, HTMLElement {}
export const MtBackground: {
    prototype: MtBackground;
    new (): MtBackground;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
