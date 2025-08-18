import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const tituloH1Css = ".sc-mt-titulo-h1-h{--mt-titulo-h1-padding:0 0 0 14px;--mt-titulo-h1-margin:0;margin:var(--mt-titulo-h1-margin);padding:var(--mt-titulo-h1-padding);border-left:14px solid #9abec0;display:block}.mt-titulo-h1__pre-title.sc-mt-titulo-h1{color:#9a999e;font-family:\"Roboto\", sans-serif;font-weight:300;font-size:16px;line-height:1;margin:0;padding:0}.mt-titulo-h1__title.sc-mt-titulo-h1{color:#455a5a;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:28px;line-height:1;margin:0;padding:0}.mt-titulo-h1__subtitle.sc-mt-titulo-h1{color:#9abec0;font-family:\"Roboto\", sans-serif;font-weight:300;font-size:32px;line-height:1;margin:0;padding:0}";

const TituloH1 = /*@__PURE__*/ proxyCustomElement(class TituloH1 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '2afa50b7c6e3e469b2b8a1e1cc8a7e6662e3b6f8', class: "mt-titulo-h1" }, h("p", { key: '41a3540c4c7b5d36128764a51d07d85e9692b8cd', class: "mt-titulo-h1__pre-title" }, h("slot", { key: 'fcc5c42c1dd3e7152a67298322733c3d1e202226', name: "pre-title" })), h("h1", { key: '636e394c59988c6ae5c0a92745b7c291b9e1cadc', class: "mt-titulo-h1__title" }, h("slot", { key: 'c13798d9c4bd6536c10bd612601a718cf1525301', name: "title" })), h("h2", { key: '8a87b5f08f31f870e4b470a74866c8456beabaca', class: "mt-titulo-h1__subtitle" }, h("slot", { key: 'ba89b64926f8bb850c9727e8b235ef981e656e77', name: "subtitle" }))));
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