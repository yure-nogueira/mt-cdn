import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { g as generateClasses } from './p-B5UvSsrV.js';

const tituloH5Css = ".sc-mt-titulo-h5-h{--mt-titulo-h5-text-color:var(--mt-color-titulo-h5-fonte);--mt-titulo-h5-text-font-family:\"Roboto\", sans-serif;--mt-titulo-h5-text-font-weight:800;--mt-titulo-h5-text-text-transform:uppercase;--mt-titulo-h5-text-font-size:10px;--mt-titulo-h5-line-color:var(--mt-titulo-h5-text-color);--mt-titulo-h5-line-font-size:8px;--mt-titulo-h5-line-margin:0 4px 0 0;display:block}.mt-titulo-h5__container.sc-mt-titulo-h5{display:flex;flex-direction:row;align-items:center}.mt-titulo-h5__line.sc-mt-titulo-h5{color:var(--mt-titulo-h5-line-color);font-size:var(--mt-titulo-h5-line-font-size);margin:var(--mt-titulo-h5-line-margin)}.mt-titulo-h5__text.sc-mt-titulo-h5{color:var(--mt-titulo-h5-text-color);font-family:var(--mt-titulo-h5-text-font-family);font-weight:var(--mt-titulo-h5-text-font-weight);text-transform:var(--mt-titulo-h5-text-text-transform);font-size:var(--mt-titulo-h5-text-font-size);line-height:1;margin:0}";

const TituloH5 = /*@__PURE__*/ proxyCustomElement(class TituloH5 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: 'ebbf9a41b6c3fde692e59cf7853c98944d734cd6', class: generateClasses(produto, especialidade, ano, {
                'mt-titulo-h5': true,
            }) }, h("div", { key: 'acb6ae13616dc00fc8c177f1cf4bbf9962d2449e', class: "mt-titulo-h5__container" }, h("div", { key: '7abdeee1c2be9c20ff9c734a8406a6b0e1be9478', class: "mt-titulo-h5__line" }, "\u25B6"), h("h5", { key: '89f04ae0cbd3cf416b964c832b5df11bc1cc1caf', class: "mt-titulo-h5__text" }, h("slot", { key: 'eef4bbf97205e3eb834a1ba0ee591bb1f96a6167' })))));
    }
    static get style() { return tituloH5Css; }
}, [262, "mt-titulo-h5", {
        "produto": [513],
        "especialidade": [513],
        "ano": [513]
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