import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const paragrafoCss = ".sc-mt-paragrafo-h{--mt-paragrafo-padding:0;--mt-paragrafo-margin:0}.sc-mt-paragrafo-h p.sc-mt-paragrafo{color:#000;font-family:\"Merriweather\", serif;font-weight:400;font-size:13px;line-height:1.3;margin:var(--mt-paragrafo-margin);padding:var(--mt-paragrafo-padding)}.sc-mt-paragrafo-s>u{text-decoration-color:#9abec0}.sc-mt-paragrafo-s>ul{padding-left:32px}";

const Paragrafo = /*@__PURE__*/ proxyCustomElement(class Paragrafo extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'ad44328cc2dbcf9e1e7d13a92e9c19995a3be2e7', class: "mt-paragrafo" }, h("p", { key: '1ead1fd12466350eca7bf0a086d72c0feae5bf83' }, h("slot", { key: '71a02fe62ab3c2f08efc75e02da94b3511eb4a9c' }))));
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