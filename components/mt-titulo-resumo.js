import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const tituloResumoCss = ".sc-mt-titulo-resumo-h{--mt-titulo-resumo-padding:4px 0 0 0;--mt-titulo-resumo-margin:0;color:#9abec0;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:14px;line-height:1;margin:var(--mt-titulo-resumo-margin);padding:var(--mt-titulo-resumo-padding);letter-spacing:1px}";

const TituloResumo = /*@__PURE__*/ proxyCustomElement(class TituloResumo extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '1073454489644a2d840124cf7c77d1387f975a1e', class: "mt-titulo-resumo" }, h("h6", { key: '98252d68bfa70d7eb98b066a9959e5a2a55a2d00' }, h("slot", { key: 'be6cd2e01236693c26a17c4cc839c01398b170f8' }))));
    }
    static get style() { return tituloResumoCss; }
}, [262, "mt-titulo-resumo"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-titulo-resumo"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-titulo-resumo":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TituloResumo);
            }
            break;
    } });
}
defineCustomElement$1();

const MtTituloResumo = TituloResumo;
const defineCustomElement = defineCustomElement$1;

export { MtTituloResumo, defineCustomElement };
//# sourceMappingURL=mt-titulo-resumo.js.map

//# sourceMappingURL=mt-titulo-resumo.js.map