import { h, p as proxyCustomElement, H, a as Host } from './index.js';
import { M as MtProdutosEnum, a as MtEspecialidadesEnum, g as generateClasses } from './p-M0FWbnS6.js';

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("h2", { class: "mt-titulo-h2__text" },
                h("slot", null)));
        }
    }
    return (h("h2", null,
        h("slot", null)));
};

const tituloH2Css = ".sc-mt-titulo-h2-h{--mt-titulo-h2-text-color:var(--mt-color-titulos-h2-fonte);--mt-titulo-h2-text-font-family:\"Roboto\", sans-serif;--mt-titulo-h2-text-font-weight:900;--mt-titulo-h2-text-font-size:16px;--mt-titulo-h2-line-color:var(--mt-color-titulos-h2-linha);--mt-titulo-h2-line-height:4px;--mt-titulo-h2-line-padding:4px 0 0 0}.mt-titulo-h2__text.sc-mt-titulo-h2{color:var(--mt-titulo-h2-text-color);font-family:var(--mt-titulo-h2-text-font-family);font-weight:var(--mt-titulo-h2-text-font-weight);font-size:var(--mt-titulo-h2-text-font-size);padding:var(--mt-titulo-h2-line-padding);border-top:var(--mt-titulo-h2-line-height) solid var(--mt-titulo-h2-line-color)}.sc-mt-titulo-h2-h{display:block}";

const TituloH2 = /*@__PURE__*/ proxyCustomElement(class TituloH2 extends H {
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
        return (h(Host, { key: '5de73b8a469bf5bdbd72bd7385fb975301da3ed4', class: generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-titulo-h2': true,
            }) }, markdown(produto, especialidade)));
    }
    static get style() { return tituloH2Css; }
}, [262, "mt-titulo-h2", {
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