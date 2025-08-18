import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const tituloH2Css = ".sc-mt-titulo-h2-h{--mt-titulo-h2-padding:4px 0 0 0;--mt-titulo-h2-margin:0;--mt-titulo-h2-display:inline-block;color:#455a5a;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:20px;line-height:1;margin:var(--mt-titulo-h2-margin);padding:var(--mt-titulo-h2-padding);border-top:6px solid #ccdfdf;display:var(--mt-titulo-h2-display);letter-spacing:1px}";

const TituloH2 = /*@__PURE__*/ proxyCustomElement(class TituloH2 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '10d953a093e52ac829617b0d4ef02be48f8091a0', class: "mt-titulo-h2" }, h("h2", { key: '27eccdd137c0f29c4e72f98c9fa47fd0a65ea9b8' }, h("slot", { key: 'ac29985bcc0bc14c49571707785db377951c3279' }))));
    }
    static get style() { return tituloH2Css; }
}, [262, "mt-titulo-h2"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-titulo-h2"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-titulo-h2":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TituloH2);
            }
            break;
    } });
}
defineCustomElement$1();

const MtTituloH2 = TituloH2;
const defineCustomElement = defineCustomElement$1;

export { MtTituloH2, defineCustomElement };
//# sourceMappingURL=mt-titulo-h2.js.map

//# sourceMappingURL=mt-titulo-h2.js.map