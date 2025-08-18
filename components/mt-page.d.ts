import type { Components, JSX } from "../types/components";

interface MtPage extends Components.MtPage, HTMLElement {}
export const MtPage: {
    prototype: MtPage;
    new (): MtPage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
