import { h, p as proxyCustomElement, H, a as Host } from './index.js';
import { M as MtProdutosEnum, a as MtEspecialidadesEnum, g as generateClasses } from './p-M0FWbnS6.js';

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("div", { class: "mt-quadro-05__container" },
                h("h3", { class: "mt-quadro-05__title" },
                    h("slot", { name: "title" })),
                h("p", { class: "mt-quadro-05__text" },
                    h("slot", null))));
        }
    }
    return (h("p", null,
        h("slot", null)));
};

const quadro05Css = ".sc-mt-quadro-05-h{--mt-quadro-05-padding:12px;--mt-quadro-05-background-color:var(--mt-color-quadros-bg-03);--mt-quadro-05-title-color:var(--mt-color-quadros-fonte-02);--mt-quadro-05-title-font-family:\"Noto Sans\", sans-serif;--mt-quadro-05-title-font-weight:700;--mt-quadro-05-title-font-size:16px;--mt-quadro-05-title-margin:0 0 12px 0;--mt-quadro-05-text-color:var(--mt-color-quadros-fonte-02);--mt-quadro-05-text-font-family:\"Noto Sans\", sans-serif;--mt-quadro-05-text-font-weight:400;--mt-quadro-05-text-font-size:16px}.mt-quadro-05__container.sc-mt-quadro-05{padding:var(--mt-quadro-05-padding);background-color:var(--mt-quadro-05-background-color)}.mt-quadro-05__title.sc-mt-quadro-05{color:var(--mt-quadro-05-title-color);font-family:var(--mt-quadro-05-title-font-family);font-weight:var(--mt-quadro-05-title-font-weight);font-size:var(--mt-quadro-05-title-font-size);margin:var(--mt-quadro-05-title-margin)}.mt-quadro-05__text.sc-mt-quadro-05{color:var(--mt-quadro-05-text-color);font-family:var(--mt-quadro-05-text-font-family);font-weight:var(--mt-quadro-05-text-font-weight);font-size:var(--mt-quadro-05-text-font-size)}.sc-mt-quadro-05-h{display:block}";

const Quadro05 = /*@__PURE__*/ proxyCustomElement(class Quadro05 extends H {
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
        return (h(Host, { key: '50ea74c1ddae4f552b719557fd25868d1a8a1d8e', class: generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-quadro-05': true,
            }) }, markdown(produto, especialidade)));
    }
    static get style() { return quadro05Css; }
}, [262, "mt-quadro-05", {
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
    const components = ["mt-quadro-05"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-quadro-05":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Quadro05);
            }
            break;
    } });
}
defineCustomElement$1();

const MtQuadro05 = Quadro05;
const defineCustomElement = defineCustomElement$1;

export { MtQuadro05, defineCustomElement };
//# sourceMappingURL=mt-quadro-05.js.map

//# sourceMappingURL=mt-quadro-05.js.map