import { h, p as proxyCustomElement, H, a as Host } from './index.js';
import { M as MtProdutosEnum, a as MtEspecialidadesEnum, g as generateClasses } from './p-M0FWbnS6.js';

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("h3", { class: "mt-titulo-h3__text" },
                h("slot", null)));
        }
    }
    return (h("h3", null,
        h("slot", null)));
};

const tituloH3Css = ".sc-mt-titulo-h3-h{--mt-titulo-h3-text-color:var(--mt-color-titulos-h3-fonte);--mt-titulo-h3-text-font-family:\"Roboto\", sans-serif;--mt-titulo-h3-text-font-weight:900;--mt-titulo-h3-text-font-size:14px;--mt-titulo-h3-line-color:var(--mt-color-titulos-h2-linha);--mt-titulo-h3-line-height:4px;--mt-titulo-h3-line-padding:4px 0 0 0}.mt-titulo-h3__text.sc-mt-titulo-h3{color:var(--mt-titulo-h3-text-color);font-family:var(--mt-titulo-h3-text-font-family);font-weight:var(--mt-titulo-h3-text-font-weight);font-size:var(--mt-titulo-h3-text-font-size);padding:var(--mt-titulo-h3-line-padding);border-top:var(--mt-titulo-h3-line-height) solid var(--mt-titulo-h3-line-color)}.sc-mt-titulo-h3-h{display:block}";

const TituloH3 = /*@__PURE__*/ proxyCustomElement(class TituloH3 extends H {
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
        return (h(Host, { key: '2ccb1a0a70928d9446271dc43e63814c73c30bc2', class: generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-titulo-h3': true,
            }) }, markdown(produto, especialidade)));
    }
    static get style() { return tituloH3Css; }
}, [262, "mt-titulo-h3", {
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
    const components = ["mt-titulo-h3"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-titulo-h3":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TituloH3);
            }
            break;
    } });
}
defineCustomElement$1();

const MtTituloH3 = TituloH3;
const defineCustomElement = defineCustomElement$1;

export { MtTituloH3, defineCustomElement };
//# sourceMappingURL=mt-titulo-h3.js.map

//# sourceMappingURL=mt-titulo-h3.js.map