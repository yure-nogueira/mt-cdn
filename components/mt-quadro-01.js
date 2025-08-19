import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const quadro01Css = ".sc-mt-quadro-01-h{border-left:3px solid #455a5a;display:block}.mt-quadro-01__title.sc-mt-quadro-01{color:#fff;font-family:\"Roboto\", sans-serif;font-weight:700;font-size:14px;padding:2px 10px;background-color:#455a5a;display:inline-block}.mt-quadro-01__text.sc-mt-quadro-01{color:#455a5a;font-family:\"Merriweather\", serif;font-weight:700;font-size:14px;line-height:1.5;padding:6px}";

const Quadro01 = /*@__PURE__*/ proxyCustomElement(class Quadro01 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '08c36304b0897ea65b51c015d01414ee718a2279', class: "mt-quadro-01" }, h("div", { key: '6fdb42bdd878d442e1d5ca7d123aaccbc504bfcf', class: "mt-quadro-01__title" }, h("slot", { key: 'b9f5be4539869454b8f193eeaf4a1c35d6ba35e7', name: "title" })), h("p", { key: 'fbc98c1c55edf734fe955412a5a0ba954b671bd5', class: "mt-quadro-01__text" }, h("slot", { key: '69bf82514749e24390ecf389b5180737d3211328', name: "text" }))));
    }
    static get style() { return quadro01Css; }
}, [262, "mt-quadro-01"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-quadro-01"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-quadro-01":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Quadro01);
            }
            break;
    } });
}
defineCustomElement$1();

const MtQuadro01 = Quadro01;
const defineCustomElement = defineCustomElement$1;

export { MtQuadro01, defineCustomElement };
//# sourceMappingURL=mt-quadro-01.js.map

//# sourceMappingURL=mt-quadro-01.js.map