import { h, p as proxyCustomElement, H, a as Host } from './index.js';
import { M as MtProdutosEnum, a as MtEspecialidadesEnum, g as generateClasses } from './p-M0FWbnS6.js';

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("h4", { class: "mt-titulo-h4__text" },
                h("slot", null)));
        }
    }
    return (h("h4", null,
        h("slot", null)));
};

const tituloH4Css = "@charset \"UTF-8\";.sc-mt-titulo-h4-h{--mt-titulo-h4-text-color:var(--mt-color-titulos-h4-fonte);--mt-titulo-h4-text-font-family:\"Roboto\", sans-serif;--mt-titulo-h4-text-font-weight:900;--mt-titulo-h4-text-font-size:12px;--mt-titulo-h4-text-content:\"▶\"}.mt-titulo-h4__text.sc-mt-titulo-h4{color:var(--mt-titulo-h4-text-color);font-family:var(--mt-titulo-h4-text-font-family);font-weight:var(--mt-titulo-h4-text-font-weight);font-size:var(--mt-titulo-h4-text-font-size)}.mt-titulo-h4__text.sc-mt-titulo-h4::before{content:var(--mt-titulo-h4-text-content);color:inherit}.sc-mt-titulo-h4-h{display:block}";

const TituloH4 = /*@__PURE__*/ proxyCustomElement(class TituloH4 extends H {
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
        return (h(Host, { key: '0cf03bacdb99684de6bb95bdba14b2310e5d8336', class: generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-titulo-h4': true,
            }) }, markdown(produto, especialidade)));
    }
    static get style() { return tituloH4Css; }
}, [262, "mt-titulo-h4", {
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
    const components = ["mt-titulo-h4"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-titulo-h4":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TituloH4);
            }
            break;
    } });
}
defineCustomElement$1();

const MtTituloH4 = TituloH4;
const defineCustomElement = defineCustomElement$1;

export { MtTituloH4, defineCustomElement };
//# sourceMappingURL=mt-titulo-h4.js.map

//# sourceMappingURL=mt-titulo-h4.js.map