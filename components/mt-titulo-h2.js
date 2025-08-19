import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const tituloH2Css = ".sc-mt-titulo-h2-h{--mt-titulo-h2-padding:4px 0 0 0;--mt-titulo-h2-margin:0;--mt-titulo-h2-display:inline-block;color:#455a5a;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:20px;line-height:1;margin:var(--mt-titulo-h2-margin);padding:var(--mt-titulo-h2-padding);border-top:6px solid #ccdfdf;display:var(--mt-titulo-h2-display);letter-spacing:1px}";

const TituloH2 = /*@__PURE__*/ proxyCustomElement(class TituloH2 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '21ea9bcf3d33e9deb517c2fe5dc028c34dac9145', class: "mt-titulo-h2" }, h("h2", { key: 'a0ecfb8160ed7b73a7b35580b5ef5f3a086541f8' }, h("slot", { key: 'cd63a61203fc51cc7d2ef73b3d0a346fe78fe6c7' }))));
    }
    static get style() { return tituloH2Css; }
}, [262, "mt-titulo-h2"]);
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