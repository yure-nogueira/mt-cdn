import { h, p as proxyCustomElement, H, a as Host } from './index.js';
import { M as MtProdutosEnum, a as MtEspecialidadesEnum, g as generateClasses } from './p-M0FWbnS6.js';

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("h5", { class: "mt-titulo-h5__text" },
                h("slot", null)));
        }
    }
    return (h("h5", null,
        h("slot", null)));
};

const tituloH5Css = "@charset \"UTF-8\";.sc-mt-titulo-h5-h{--mt-titulo-h5-text-color:var(--mt-color-titulos-h5-fonte);--mt-titulo-h5-text-font-family:\"Roboto\", sans-serif;--mt-titulo-h5-text-font-weight:800;--mt-titulo-h5-text-font-size:10px;--mt-titulo-h5-text-content:\"▶\"}.mt-titulo-h5__text.sc-mt-titulo-h5{color:var(--mt-titulo-h5-text-color);font-family:var(--mt-titulo-h5-text-font-family);font-weight:var(--mt-titulo-h5-text-font-weight);font-size:var(--mt-titulo-h5-text-font-size)}.mt-titulo-h5__text.sc-mt-titulo-h5::before{content:var(--mt-titulo-h5-text-content);color:inherit}.sc-mt-titulo-h5-h{display:block}";

const TituloH5 = /*@__PURE__*/ proxyCustomElement(class TituloH5 extends H {
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
        return (h(Host, { key: 'aae0747f2949e323647d2b6b2dae5e66d7afad2b', class: generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-titulo-h5': true,
            }) }, markdown(produto, especialidade)));
    }
    static get style() { return tituloH5Css; }
}, [262, "mt-titulo-h5", {
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
    const components = ["mt-titulo-h5"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-titulo-h5":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TituloH5);
            }
            break;
    } });
}
defineCustomElement$1();

const MtTituloH5 = TituloH5;
const defineCustomElement = defineCustomElement$1;

export { MtTituloH5, defineCustomElement };
//# sourceMappingURL=mt-titulo-h5.js.map

//# sourceMappingURL=mt-titulo-h5.js.map