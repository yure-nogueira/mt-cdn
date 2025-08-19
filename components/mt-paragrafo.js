import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const paragrafoCss = ".sc-mt-paragrafo-h{--mt-paragrafo-padding:0;--mt-paragrafo-margin:0}.sc-mt-paragrafo-h p.sc-mt-paragrafo{color:#000;font-family:\"Merriweather\", serif;font-weight:400;font-size:13px;line-height:1.3;margin:var(--mt-paragrafo-margin);padding:var(--mt-paragrafo-padding)}.sc-mt-paragrafo-s>u{text-decoration-color:#9abec0}.sc-mt-paragrafo-s>ul{padding-left:32px}";

const Paragrafo = /*@__PURE__*/ proxyCustomElement(class Paragrafo extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '73c29392a6750897d37df9b794ef2c71cc214121', class: "mt-paragrafo" }, h("p", { key: '9fe17ec847b059788150bf8f29a48363ae7b39bf' }, h("slot", { key: '035b0e5ce9ac1d1897daf7ac80fa7a99efd37795' }))));
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