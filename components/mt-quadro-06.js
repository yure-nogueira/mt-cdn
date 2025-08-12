import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { g as generateClasses } from './p-B5UvSsrV.js';

const quadro06Css = ".sc-mt-quadro-06-h{--mt-quadro-06-padding:12px;--mt-quadro-06-background-color:var(--mt-color-quadros-bg-03);--mt-quadro-06-title-color:var(--mt-color-quadros-fonte-02);--mt-quadro-06-title-font-family:\"Noto Sans\", sans-serif;--mt-quadro-06-title-font-weight:700;--mt-quadro-06-title-text-transform:none;--mt-quadro-06-title-font-size:16px;--mt-quadro-06-title-margin:0 0 12px 0;--mt-quadro-06-text-color:var(--mt-color-quadros-fonte-02);--mt-quadro-06-text-font-family:\"Noto Sans\", sans-serif;--mt-quadro-06-text-font-weight:400;--mt-quadro-06-text-text-transform:none;--mt-quadro-06-text-font-size:16px;display:block}.mt-quadro-06__container.sc-mt-quadro-06{padding:var(--mt-quadro-06-padding);background-color:var(--mt-quadro-06-background-color)}.mt-quadro-06__title.sc-mt-quadro-06{color:var(--mt-quadro-06-title-color);font-family:var(--mt-quadro-06-title-font-family);font-weight:var(--mt-quadro-06-title-font-weight);text-transform:var(--mt-quadro-06-title-text-transform);font-size:var(--mt-quadro-06-title-font-size);line-height:1;margin:var(--mt-quadro-06-title-margin)}.mt-quadro-06__text.sc-mt-quadro-06{color:var(--mt-quadro-06-text-color);font-family:var(--mt-quadro-06-text-font-family);font-weight:var(--mt-quadro-06-text-font-weight);text-transform:var(--mt-quadro-06-text-text-transform);font-size:var(--mt-quadro-06-text-font-size);line-height:1;margin:0}";

const Quadro06 = /*@__PURE__*/ proxyCustomElement(class Quadro06 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: '38539d2a021ebb35cab904c9ff86d7d3b5287e7e', class: generateClasses(produto, especialidade, ano, {
                'mt-quadro-06': true,
            }) }, h("div", { key: 'fcddfaf8a54c6a6fca56f3f183085ddbf5e5d64c', class: "mt-quadro-06__container" }, h("h3", { key: 'f77d274455edeb618ac07a4ffc9a87aea7859e0c', class: "mt-quadro-06__title" }, h("slot", { key: 'ca4c2dd47a09244a40941e862c270881c90f8910', name: "title" })), h("p", { key: 'c3cb1c6c47e5358a4da1ae06e03e3730c23bc0ec', class: "mt-quadro-06__text" }, h("slot", { key: 'fcfe3085e8a52a4cd4137a7221f35b853dab98c9', name: "text" })))));
    }
    static get style() { return quadro06Css; }
}, [262, "mt-quadro-06", {
        "produto": [513],
        "especialidade": [513],
        "ano": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-quadro-06"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-quadro-06":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Quadro06);
            }
            break;
    } });
}
defineCustomElement$1();

const MtQuadro06 = Quadro06;
const defineCustomElement = defineCustomElement$1;

export { MtQuadro06, defineCustomElement };
//# sourceMappingURL=mt-quadro-06.js.map

//# sourceMappingURL=mt-quadro-06.js.map