import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const quadroPictograma01Css = ".sc-mt-quadro-pictograma-01-h{--mt-quadro-pictograma-01-margin:0;margin:var(--mt-quadro-pictograma-01-margin);padding:1px;background-color:#ccdfdf;border:1px solid #9abec0;display:block}.mt-quadro-pictograma-01__container.sc-mt-quadro-pictograma-01{padding:4px 8px;border:1px solid #9abec0}.mt-quadro-pictograma-01__text.sc-mt-quadro-pictograma-01{color:#455a5a;font-family:\"Merriweather\", serif;font-weight:600;font-size:12px;line-height:1.5}";

const QuadroPictograma01 = /*@__PURE__*/ proxyCustomElement(class QuadroPictograma01 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '551a0c08b69e1da883628704f34ec71e2476a17c', class: "mt-quadro-pictograma-01" }, h("div", { key: 'd03e6a45e3ab168718bb12a253ca0d9b8361d07a', class: "mt-quadro-pictograma-01__container" }, h("p", { key: '2b8e5a600cbff56e20c558224aa44be99962aeae', class: "mt-quadro-pictograma-01__text" }, h("slot", { key: 'c67b8adf4efd38fe0f66179b10ccb86988e06a3c' })))));
    }
    static get style() { return quadroPictograma01Css; }
}, [262, "mt-quadro-pictograma-01"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-quadro-pictograma-01"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-quadro-pictograma-01":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, QuadroPictograma01);
            }
            break;
    } });
}
defineCustomElement$1();

const MtQuadroPictograma01 = QuadroPictograma01;
const defineCustomElement = defineCustomElement$1;

export { MtQuadroPictograma01, defineCustomElement };
//# sourceMappingURL=mt-quadro-pictograma-01.js.map

//# sourceMappingURL=mt-quadro-pictograma-01.js.map