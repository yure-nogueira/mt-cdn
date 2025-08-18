import type { Components, JSX } from "../types/components";

interface MtList extends Components.MtList, HTMLElement {}
export const MtList: {
    prototype: MtList;
    new (): MtList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
