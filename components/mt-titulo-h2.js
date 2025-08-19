import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const tituloH2Css = ".sc-mt-titulo-h2-h{--mt-titulo-h2-padding:4px 0 0 0;--mt-titulo-h2-margin:0;--mt-titulo-h2-display:inline-block;color:#455a5a;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:20px;line-height:1;margin:var(--mt-titulo-h2-margin);padding:var(--mt-titulo-h2-padding);border-top:6px solid #ccdfdf;display:var(--mt-titulo-h2-display);letter-spacing:1px}";

const TituloH2 = /*@__PURE__*/ proxyCustomElement(class TituloH2 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'bcdd1f804287d4f3a15c487607ca11cffe55b67e', class: "mt-titulo-h2" }, h("h2", { key: '3b5a4a4b6158085f55dee769a6b424482af16edd' }, h("slot", { key: '5202a20cb2c247b0ef926fb2e3b429bba93298b4' }))));
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