import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const tituloH5Css = "@charset \"UTF-8\";.sc-mt-titulo-h5-h{--mt-titulo-h5-padding:0;--mt-titulo-h5-margin:0;color:#455a5a;font-family:\"Asap Condensed\", sans-serif;font-weight:600;font-size:13px;line-height:1;margin:var(--mt-titulo-h5-margin);padding:var(--mt-titulo-h5-padding);letter-spacing:1px}.mt-titulo-h5.sc-mt-titulo-h5::before{content:\"▶\";color:inherit;font-size:8px;position:relative;bottom:2px}";

const TituloH5 = /*@__PURE__*/ proxyCustomElement(class TituloH5 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '1c438e656b92dc846cd11717226c0ad70c01e0b2', class: "mt-titulo-h5" }, h("h5", { key: '88f442efe51a4d115956c170d540b373c513e1ae' }, h("slot", { key: '3bc7829dd6f2d1a012f7572cece1877301153651' }))));
    }
    static get style() { return tituloH5Css; }
}, [262, "mt-titulo-h5"]);
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