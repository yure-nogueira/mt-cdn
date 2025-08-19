import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const quadroPictograma01Css = ".sc-mt-quadro-pictograma-01-h{--mt-quadro-pictograma-01-margin:0;margin:var(--mt-quadro-pictograma-01-margin);padding:1px;background-color:#ccdfdf;border:1px solid #9abec0;display:block}.mt-quadro-pictograma-01__container.sc-mt-quadro-pictograma-01{padding:4px 8px;border:1px solid #9abec0}.mt-quadro-pictograma-01__text.sc-mt-quadro-pictograma-01{color:#455a5a;font-family:\"Merriweather\", serif;font-weight:600;font-size:12px;line-height:1.5}";

const QuadroPictograma01 = /*@__PURE__*/ proxyCustomElement(class QuadroPictograma01 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '466f1528a104d7ace71cde1b7f7d61971b620741', class: "mt-quadro-pictograma-01" }, h("div", { key: '7eed57018e3603afbb28b3ff81086650300fa47f', class: "mt-quadro-pictograma-01__container" }, h("p", { key: '0e4f7176ef9c5cefa09ca3003c75d50617103084', class: "mt-quadro-pictograma-01__text" }, h("slot", { key: '8783e67b46a257dd44bbbada71a5833385d4d90e' })))));
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