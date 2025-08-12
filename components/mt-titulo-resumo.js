import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { g as generateClasses } from './p-B5UvSsrV.js';

const tituloResumoCss = ".sc-mt-titulo-resumo-h{--mt-titulo-resumo-text-color:var(--mt-color-titulo-resumo-fonte);--mt-titulo-resumo-text-font-family:\"Roboto\", sans-serif;--mt-titulo-resumo-text-font-weight:900;--mt-titulo-resumo-text-text-transform:uppercase;--mt-titulo-resumo-text-font-size:14px;display:block}.mt-titulo-resumo__text.sc-mt-titulo-resumo{color:var(--mt-titulo-resumo-text-color);font-family:var(--mt-titulo-resumo-text-font-family);font-weight:var(--mt-titulo-resumo-text-font-weight);text-transform:var(--mt-titulo-resumo-text-text-transform);font-size:var(--mt-titulo-resumo-text-font-size);line-height:1;margin:0}";

const TituloResumo = /*@__PURE__*/ proxyCustomElement(class TituloResumo extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: '45d924021212bf79a0420ebf8fa6f68230c0ae40', class: generateClasses(produto, especialidade, ano, {
                'mt-titulo-resumo': true,
            }) }, h("h6", { key: '66c7ebf9107f982286670ede5f6fbc07fb839feb', class: "mt-titulo-resumo__text" }, h("slot", { key: '48b7aa1774ff1b0e097ec754b5883fda473d6cc4' }))));
    }
    static get style() { return tituloResumoCss; }
}, [262, "mt-titulo-resumo", {
        "produto": [513],
        "especialidade": [513],
        "ano": [513]
    }]);
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