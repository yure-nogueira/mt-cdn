import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const tituloH1Css = ".sc-mt-titulo-h1-h{--mt-titulo-h1-padding:0 0 0 14px;--mt-titulo-h1-margin:0;margin:var(--mt-titulo-h1-margin);padding:var(--mt-titulo-h1-padding);border-left:14px solid #9abec0;display:block}.mt-titulo-h1__pre-title.sc-mt-titulo-h1{color:#9a999e;font-family:\"Roboto\", sans-serif;font-weight:300;font-size:16px;line-height:1;margin:0;padding:0}.mt-titulo-h1__title.sc-mt-titulo-h1{color:#455a5a;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:28px;line-height:1;margin:0;padding:0}.mt-titulo-h1__subtitle.sc-mt-titulo-h1{color:#9abec0;font-family:\"Roboto\", sans-serif;font-weight:300;font-size:32px;line-height:1;margin:0;padding:0}";

const TituloH1 = /*@__PURE__*/ proxyCustomElement(class TituloH1 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '10d953a093e52ac829617b0d4ef02be48f8091a0', class: "mt-titulo-h1" }, h("p", { key: '57feaa2aef50e79ed811eccbf2053653cf1c81bc', class: "mt-titulo-h1__pre-title" }, h("slot", { key: 'f8e96e71b55164e43477ea48923de44952160bd1', name: "pre-title" })), h("h1", { key: 'fa4be6ba9ff9f9dbc35bec7d3f5e9b5820b485f4', class: "mt-titulo-h1__title" }, h("slot", { key: 'd8115afa167fb64371eb413ba6db55d6a96a6c50', name: "title" })), h("h2", { key: '3158002a4ed880f1f8b628d3be17346251c888f3', class: "mt-titulo-h1__subtitle" }, h("slot", { key: '1bd408e02cfe35c6efd8c3a174138ffa23a940ff', name: "subtitle" }))));
    }
    static get style() { return tituloH1Css; }
}, [262, "mt-titulo-h1"]);
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