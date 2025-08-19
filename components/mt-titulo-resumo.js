import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const tituloResumoCss = ".sc-mt-titulo-resumo-h{--mt-titulo-resumo-padding:4px 0 0 0;--mt-titulo-resumo-margin:0;color:#9abec0;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:14px;line-height:1;margin:var(--mt-titulo-resumo-margin);padding:var(--mt-titulo-resumo-padding);letter-spacing:1px}";

const TituloResumo = /*@__PURE__*/ proxyCustomElement(class TituloResumo extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '82c6c9945226d9e196cd695233dd059dfcaf961d', class: "mt-titulo-resumo" }, h("h6", { key: '08402ec9efc98623ca8ed7151e99248b25f68084' }, h("slot", { key: '4ddfd54f571c213787dcb2f14bdcdb8fa96103b4' }))));
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