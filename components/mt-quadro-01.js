import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const quadro01Css = ".sc-mt-quadro-01-h{border-left:3px solid #455a5a;display:block}.mt-quadro-01__title.sc-mt-quadro-01{color:#fff;font-family:\"Roboto\", sans-serif;font-weight:700;font-size:14px;padding:2px 10px;background-color:#455a5a;display:inline-block}.mt-quadro-01__text.sc-mt-quadro-01{color:#455a5a;font-family:\"Merriweather\", serif;font-weight:700;font-size:14px;line-height:1.5;padding:6px}";

const Quadro01 = /*@__PURE__*/ proxyCustomElement(class Quadro01 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '1350c205db2b9aeca0a0c2aec15115ae90c22f63', class: "mt-quadro-01" }, h("div", { key: '0f5873f6cc5cee7b10fc46cbc3694157be58c222', class: "mt-quadro-01__title" }, h("slot", { key: 'ded79f437fd090e676bfb37344b7369a2ca33715', name: "title" })), h("p", { key: 'cd9f1a84b1400458203723e412b5e2824c7c9f82', class: "mt-quadro-01__text" }, h("slot", { key: '0831df921af3f48fc6cf7fbad9e00660eaffdeb1', name: "text" }))));
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