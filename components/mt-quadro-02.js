import { h, p as proxyCustomElement, H, a as Host } from './index.js';
import { M as MtProdutosEnum, a as MtEspecialidadesEnum, g as generateClasses } from './p-M0FWbnS6.js';

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("div", { class: "mt-quadro-02__container" },
                h("div", { class: "mt-quadro-02__left" },
                    h("slot", { name: "left" })),
                h("div", { class: "mt-quadro-02__inner-container" },
                    h("p", { class: "mt-quadro-02__text" },
                        h("slot", null)))));
        }
    }
    return (h("p", null,
        h("slot", null)));
};

const quadro02Css = ".sc-mt-quadro-02-h{--mt-quadro-02-left-margin:0 6px 0 0;--mt-quadro-02-text-color:var(--mt-color-quadros-fonte-02);--mt-quadro-02-text-font-family:\"Noto Sans\", sans-serif;--mt-quadro-02-text-font-weight:500;--mt-quadro-02-text-font-size:14px;--mt-quadro-02-inner-container-padding:12px;--mt-quadro-02-inner-container-background-color:var(--mt-color-quadros-bg-02);display:block}.mt-quadro-02__container.sc-mt-quadro-02{display:flex;align-items:center}.mt-quadro-02__left.sc-mt-quadro-02{margin:var(--mt-quadro-02-left-margin)}.mt-quadro-02__inner-container.sc-mt-quadro-02{padding:var(--mt-quadro-02-inner-container-padding);background-color:var(--mt-quadro-02-inner-container-background-color);flex:1}.mt-quadro-02__text.sc-mt-quadro-02{color:var(--mt-quadro-02-text-color);font-family:var(--mt-quadro-02-text-font-family);font-weight:var(--mt-quadro-02-text-font-weight);font-size:var(--mt-quadro-02-text-font-size)}.sc-mt-quadro-02-h{display:block}";

const Quadro02 = /*@__PURE__*/ proxyCustomElement(class Quadro02 extends H {
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
        return (h(Host, { key: '7f078e6c3dce45c279d198521915e4206d65076c', class: generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-quadro-02': true,
            }) }, markdown(produto, especialidade)));
    }
    static get style() { return quadro02Css; }
}, [262, "mt-quadro-02", {
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
    const components = ["mt-quadro-02"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-quadro-02":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Quadro02);
            }
            break;
    } });
}
defineCustomElement$1();

const MtQuadro02 = Quadro02;
const defineCustomElement = defineCustomElement$1;

export { MtQuadro02, defineCustomElement };
//# sourceMappingURL=mt-quadro-02.js.map

//# sourceMappingURL=mt-quadro-02.js.map