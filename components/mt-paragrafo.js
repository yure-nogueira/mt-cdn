import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const paragrafoCss = ".sc-mt-paragrafo-h{--mt-paragrafo-padding:0;--mt-paragrafo-margin:0;color:#000;font-family:\"Merriweather\", serif;font-weight:400;font-size:13px;line-height:1.3;margin:var(--mt-paragrafo-margin);padding:var(--mt-paragrafo-padding)}.sc-mt-paragrafo-s>u{text-decoration-color:#9abec0}.sc-mt-paragrafo-s>ul{padding-left:32px}";

const Paragrafo = /*@__PURE__*/ proxyCustomElement(class Paragrafo extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'abf961315539da692db9500b5505ef29765ce963', class: "mt-paragrafo" }, h("p", { key: 'dea8295db6567ee34b010eca62a9bf66ca1d81d3' }, h("slot", { key: '2c8c4244fec71f546db6230d3edfbccc819e535d' }))));
    }
    static get style() { return paragrafoCss; }
}, [262, "mt-paragrafo"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-paragrafo"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-paragrafo":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Paragrafo);
            }
            break;
    } });
}
defineCustomElement$1();

const MtParagrafo = Paragrafo;
const defineCustomElement = defineCustomElement$1;

export { MtParagrafo, defineCustomElement };
//# sourceMappingURL=mt-paragrafo.js.map

//# sourceMappingURL=mt-paragrafo.js.map