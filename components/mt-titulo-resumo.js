import { h, p as proxyCustomElement, H, a as Host } from './index.js';
import { M as MtProdutosEnum, a as MtEspecialidadesEnum, g as generateClasses } from './p-M0FWbnS6.js';

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("h6", { class: "mt-titulo-resumo__text" },
                h("slot", null)));
        }
    }
    return (h("h6", null,
        h("slot", null)));
};

const tituloResumoCss = ".sc-mt-titulo-resumo-h{--mt-titulo-resumo-text-color:var(--mt-color-titulos-resumo-fonte);--mt-titulo-resumo-text-font-family:\"Roboto\", sans-serif;--mt-titulo-resumo-text-font-weight:900;--mt-titulo-resumo-text-text-transform:uppercase;--mt-titulo-resumo-text-font-size:14px}.mt-titulo-resumo__text.sc-mt-titulo-resumo{color:var(--mt-titulo-resumo-text-color);font-family:var(--mt-titulo-resumo-text-font-family);font-weight:var(--mt-titulo-resumo-text-font-weight);text-transform:var(--mt-titulo-resumo-text-text-transform);font-size:var(--mt-titulo-resumo-text-font-size)}.sc-mt-titulo-resumo-h{display:block}";

const TituloResumo = /*@__PURE__*/ proxyCustomElement(class TituloResumo extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    produto;
    apostila;
    ano;
    especialidade;
    parte;
    render() {
        const { produto, especialidade, apostila, parte, ano } = this;
        return (h(Host, { key: '0d3553e1c1323480a4a775d34ce8ce55315075ae', class: generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-titulo-resumo': true,
            }) }, markdown(produto, especialidade)));
    }
    static get style() { return tituloResumoCss; }
}, [262, "mt-titulo-resumo", {
        "produto": [513],
        "apostila": [513],
        "ano": [513],
        "especialidade": [513],
        "parte": [513]
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