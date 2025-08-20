import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const tituloH2Css = ".sc-mt-titulo-h2-h{--mt-titulo-h2-padding:4px 0 0 0;--mt-titulo-h2-margin:0;--mt-titulo-h2-display:inline-block;color:#455a5a;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:20px;line-height:1;margin:var(--mt-titulo-h2-margin);padding:var(--mt-titulo-h2-padding);border-top:6px solid #ccdfdf;display:var(--mt-titulo-h2-display);letter-spacing:1px}";

const TituloH2 = /*@__PURE__*/ proxyCustomElement(class TituloH2 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '52c772701adb2a62e0bff8956cbbbbca8121ee04', class: "mt-titulo-h2" }, h("h2", { key: '896f7c4fe7e1c108d241e3fdb1ec17d24cff7519' }, h("slot", { key: 'b282ff9a5eff2c60d5425242a78e59a93a5d5093' }))));
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