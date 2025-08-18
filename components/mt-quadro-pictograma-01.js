import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const quadroPictograma01Css = ".sc-mt-quadro-pictograma-01-h{--mt-quadro-pictograma-01-margin:0;margin:var(--mt-quadro-pictograma-01-margin);padding:1px;background-color:#ccdfdf;border:1px solid #9abec0;display:block}.mt-quadro-pictograma-01__container.sc-mt-quadro-pictograma-01{padding:4px 8px;border:1px solid #9abec0}.mt-quadro-pictograma-01__text.sc-mt-quadro-pictograma-01{color:#455a5a;font-family:\"Merriweather\", serif;font-weight:600;font-size:12px;line-height:1.5}";

const QuadroPictograma01 = /*@__PURE__*/ proxyCustomElement(class QuadroPictograma01 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'e6cf15ffcd4845daca0e1e14520ef2a2a3888004', class: "mt-quadro-pictograma-01" }, h("div", { key: '43fd1e9783f8ef280bc78924028a6de387633909', class: "mt-quadro-pictograma-01__container" }, h("p", { key: 'bddd6283dce367894df1c9bb14928dbbecd7d9b3', class: "mt-quadro-pictograma-01__text" }, h("slot", { key: '21f7d979132ba2394fda8c020a776e07f9d94e71' })))));
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