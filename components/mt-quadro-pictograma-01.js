import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const quadroPictograma01Css = ".sc-mt-quadro-pictograma-01-h{--mt-quadro-pictograma-01-margin:0;margin:var(--mt-quadro-pictograma-01-margin);padding:1px;background-color:#ccdfdf;border:1px solid #9abec0;display:block}.mt-quadro-pictograma-01__container.sc-mt-quadro-pictograma-01{padding:4px 8px;border:1px solid #9abec0}.mt-quadro-pictograma-01__text.sc-mt-quadro-pictograma-01{color:#455a5a;font-family:\"Merriweather\", serif;font-weight:600;font-size:12px;line-height:1.5}";

const QuadroPictograma01 = /*@__PURE__*/ proxyCustomElement(class QuadroPictograma01 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '07610ad349cf0585c21c2cd6f0c0925b8cb934bb', class: "mt-quadro-pictograma-01" }, h("div", { key: '31edd6d371932cf937fe3be991034e0d9133eea7', class: "mt-quadro-pictograma-01__container" }, h("p", { key: '2b3fda05140a7f1aecf495601a00f57643e88d14', class: "mt-quadro-pictograma-01__text" }, h("slot", { key: '951892f20c2b013e9b6f0acd4f42d79582d48e5e' })))));
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