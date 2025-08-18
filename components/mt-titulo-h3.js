import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const tituloH3Css = ".sc-mt-titulo-h3-h{--mt-titulo-h3-padding:4px 0 0 0;--mt-titulo-h3-margin:0;--mt-titulo-h3-display:block;color:#607b7a;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:18px;line-height:1;margin:var(--mt-titulo-h3-margin);padding:var(--mt-titulo-h3-padding);border-top:6px solid #ccdfdf;display:var(--mt-titulo-h3-display);letter-spacing:1px}";

const TituloH3 = /*@__PURE__*/ proxyCustomElement(class TituloH3 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '459ce01898e8fa1013f7fe05ab762f13686428ed', class: "mt-titulo-h3" }, h("h3", { key: 'e067d3b64e441a2a2c08aae4e9b4113d4256f85b' }, h("slot", { key: '907231d1267d4d7ac33b4dfa699e50da30abc2a9' }))));
    }
    static get style() { return tituloH3Css; }
}, [262, "mt-titulo-h3"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-titulo-h3"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-titulo-h3":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TituloH3);
            }
            break;
    } });
}
defineCustomElement$1();

const MtTituloH3 = TituloH3;
const defineCustomElement = defineCustomElement$1;

export { MtTituloH3, defineCustomElement };
//# sourceMappingURL=mt-titulo-h3.js.map

//# sourceMappingURL=mt-titulo-h3.js.map