import { h, p as proxyCustomElement, H, a as Host } from './index.js';
import { M as MtProdutosEnum, a as MtEspecialidadesEnum, g as generateClasses } from './p-M0FWbnS6.js';

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("div", { class: "mt-titulo-h1__container" },
                h("p", { class: "mt-titulo-h1__pre-title" },
                    h("slot", { name: "pre-title" })),
                h("h1", { class: "mt-titulo-h1__title" },
                    h("slot", { name: "title" })),
                h("h2", { class: "mt-titulo-h1__subtitle" },
                    h("slot", { name: "subtitle" }))));
        }
    }
    return (h("h1", null,
        h("slot", null)));
};

const tituloH1Css = ".mt-medcurso.mt-car.mt-2026.mt-titulo-h1.sc-mt-titulo-h1-h .mt-titulo-h1__pre-title.sc-mt-titulo-h1{display:none}.sc-mt-titulo-h1-h{--mt-titulos-h1-line-color:var(--mt-color-titulos-capitulo-linha);--mt-titulos-h1-line-padding:0 0 0 8px;--mt-titulos-h1-pre-title-color:var(--mt-color-titulos-capitulo-fonte);--mt-titulos-h1-pre-title-font-family:\"Roboto\", sans-serif;--mt-titulos-h1-pre-title-font-weight:100;--mt-titulos-h1-pre-title-font-size:16px;--mt-titulos-h1-title-color:var(--mt-color-titulos-h1-fonte);--mt-titulos-h1-title-font-family:\"Roboto\", sans-serif;--mt-titulos-h1-title-font-weight:900;--mt-titulos-h1-title-font-size:40px;--mt-titulos-h1-title-margin:4px 0 4px 0;--mt-titulos-h1-subtitle-color:var(--mt-color-titulos-h2-fonte);--mt-titulos-h1-subtitle-font-family:\"Roboto\", sans-serif;--mt-titulos-h1-subtitle-font-weight:300;--mt-titulos-h1-subtitle-font-size:24px}.mt-titulo-h1__container.sc-mt-titulo-h1{padding:var(--mt-titulos-h1-line-padding);border-left:10px solid var(--mt-titulos-h1-line-color)}.mt-titulo-h1__pre-title.sc-mt-titulo-h1{color:var(--mt-titulos-h1-pre-title-color);font-family:var(--mt-titulos-h1-pre-title-font-family);font-weight:var(--mt-titulos-h1-pre-title-font-weight);font-size:var(--mt-titulos-h1-pre-title-font-size)}.mt-titulo-h1__title.sc-mt-titulo-h1{color:var(--mt-titulos-h1-title-color);font-family:var(--mt-titulos-h1-title-font-family);font-weight:var(--mt-titulos-h1-title-font-weight);font-size:var(--mt-titulos-h1-title-font-size);margin:var(--mt-titulos-h1-title-margin)}.mt-titulo-h1__subtitle.sc-mt-titulo-h1{color:var(--mt-titulos-h1-subtitle-color);font-family:var(--mt-titulos-h1-subtitle-font-family);font-weight:var(--mt-titulos-h1-subtitle-font-weight);font-size:var(--mt-titulos-h1-subtitle-font-size)}.sc-mt-titulo-h1-h{display:block}";

const TituloH1 = /*@__PURE__*/ proxyCustomElement(class TituloH1 extends H {
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
        return (h(Host, { key: '2554e8a651b61ffa074d6c7ccb5c60b2f9c08b35', class: generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-titulo-h1': true,
            }) }, markdown(produto, especialidade)));
    }
    static get style() { return tituloH1Css; }
}, [262, "mt-titulo-h1", {
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
    const components = ["mt-titulo-h1"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-titulo-h1":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TituloH1);
            }
            break;
    } });
}
defineCustomElement$1();

const MtTituloH1 = TituloH1;
const defineCustomElement = defineCustomElement$1;

export { MtTituloH1, defineCustomElement };
//# sourceMappingURL=mt-titulo-h1.js.map

//# sourceMappingURL=mt-titulo-h1.js.map