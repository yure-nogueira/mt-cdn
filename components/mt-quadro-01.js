import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const quadro01Css = ".sc-mt-quadro-01-h{border-left:3px solid #455a5a;display:block}.mt-quadro-01__title.sc-mt-quadro-01{color:#fff;font-family:\"Roboto\", sans-serif;font-weight:700;font-size:14px;padding:2px 10px;background-color:#455a5a;display:inline-block}.mt-quadro-01__text.sc-mt-quadro-01{color:#455a5a;font-family:\"Merriweather\", serif;font-weight:700;font-size:14px;line-height:1.5;padding:6px}";

const Quadro01 = /*@__PURE__*/ proxyCustomElement(class Quadro01 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'ce7eca7658284e8928f0db0536d415450d480fde', class: "mt-quadro-01" }, h("div", { key: '882ff6dcb87631d505b74641ba0101de822c8d6a', class: "mt-quadro-01__title" }, h("slot", { key: 'c2d0d453d2b056dd0d20d5c334dcd8376c7c14f1', name: "title" })), h("p", { key: '4752c30bf7ef6493a17c5186c8a05d947d2b512c', class: "mt-quadro-01__text" }, h("slot", { key: 'd3a4ad3f2603832aecdf415059f5047fffb8d416', name: "text" }))));
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