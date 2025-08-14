import { h, p as proxyCustomElement, H, a as Host } from './index.js';
import { M as MtProdutosEnum, a as MtEspecialidadesEnum, g as generateClasses } from './p-M0FWbnS6.js';

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("p", { class: "mt-paragrafo__text" },
                h("slot", null)));
        }
    }
    return (h("p", null,
        h("slot", null)));
};

const paragrafoCss = ".sc-mt-paragrafo-h{--mt-paragrafo-text-color:var(--mt-color-textos-paragrafo-fonte);--mt-paragrafo-text-font-family:\"Noto Sans\", sans-serif;--mt-paragrafo-text-font-weight:400;--mt-paragrafo-text-font-size:16px;--mt-paragrafo-strong-color:var(--mt-color-textos-paragrafo-strong);--mt-paragrafo-strong-font-weight:700;--mt-paragrafo-strong-text-transform:uppercase;--mt-paragrafo-strong-font-style:italic;--mt-paragrafo-underline-text-decoration-color:var(--mt-color-textos-paragrafo-underline)}.mt-paragrafo__text.sc-mt-paragrafo{color:var(--mt-paragrafo-text-color);font-family:var(--mt-paragrafo-text-font-family);font-weight:var(--mt-paragrafo-text-font-weight);font-size:var(--mt-paragrafo-text-font-size);line-height:1;margin:0}.sc-mt-paragrafo-s strong{color:var(--mt-paragrafo-strong-color);font-weight:var(--mt-paragrafo-strong-font-weight) !important;text-transform:var(--mt-paragrafo-strong-text-transform);font-style:var(--mt-paragrafo-strong-font-style) !important}.sc-mt-paragrafo-s u{text-decoration-color:var(--mt-paragrafo-underline-text-decoration-color)}.sc-mt-paragrafo-h{display:block}";

const Paragrafo = /*@__PURE__*/ proxyCustomElement(class Paragrafo extends H {
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
        return (h(Host, { key: '8648b120d74193cc04bcf4a68b9aae19f01dd05b', class: generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-paragrafo': true,
            }) }, markdown(produto, especialidade)));
    }
    static get style() { return paragrafoCss; }
}, [262, "mt-paragrafo", {
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
    const components = ["mt-paragrafo"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-paragrafo":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Paragrafo);
            }
            break;
    } });
}
defineCustomElement$1();

const MtParagrafo = Paragrafo;
const defineCustomElement = defineCustomElement$1;

export { MtParagrafo, defineCustomElement };
//# sourceMappingURL=mt-paragrafo.js.map

//# sourceMappingURL=mt-paragrafo.js.map