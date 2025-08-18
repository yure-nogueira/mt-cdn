import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const rowCss = ".sc-mt-row-h{--mt-gutter-right:24px;--mt-gutter-left:24px;display:flex;flex-wrap:wrap;margin-right:calc(-0.5 * var(--mt-gutter-right));margin-left:calc(-0.5 * var(--mt-gutter-left))}@media (min-width: 576px){.sc-mt-row-h{margin-right:calc(-0.5 * var(--mt-gutter-sm-right));margin-left:calc(-0.5 * var(--mt-gutter-sm-left))}}@media (min-width: 768px){.sc-mt-row-h{margin-right:calc(-0.5 * var(--mt-gutter-md-right));margin-left:calc(-0.5 * var(--mt-gutter-md-left))}}@media (min-width: 992px){.sc-mt-row-h{margin-right:calc(-0.5 * var(--mt-gutter-lg-right));margin-left:calc(-0.5 * var(--mt-gutter-lg-left))}}@media (min-width: 1200px){.sc-mt-row-h{margin-right:calc(-0.5 * var(--mt-gutter-xl-right));margin-left:calc(-0.5 * var(--mt-gutter-xl-left))}}@media (min-width: 1400px){.sc-mt-row-h{margin-right:calc(-0.5 * var(--mt-gutter-xxl-right));margin-left:calc(-0.5 * var(--mt-gutter-xxl-left))}}";

const Row = /*@__PURE__*/ proxyCustomElement(class Row extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '06955ee9392984963004d2b5530505e1b61475e7', class: "mt-row" }, h("slot", { key: '0d4f5b2b4f91ef1028786e7bc06901787a28c778' })));
    }
    static get style() { return rowCss; }
}, [262, "mt-row"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-row"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-row":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Row);
            }
            break;
    } });
}
defineCustomElement$1();

const MtRow = Row;
const defineCustomElement = defineCustomElement$1;

export { MtRow, defineCustomElement };
//# sourceMappingURL=mt-row.js.map

//# sourceMappingURL=mt-row.js.map