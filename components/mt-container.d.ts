import type { Components, JSX } from "../types/components";

interface MtContainer extends Components.MtContainer, HTMLElement {}
export const MtContainer: {
    prototype: MtContainer;
    new (): MtContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
