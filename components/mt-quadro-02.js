import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const quadro02Css = ".sc-mt-quadro-02-h{display:flex;align-items:center}.mt-quadro-02__left.sc-mt-quadro-02{margin:0 6px 0 0}.mt-quadro-02__inner-container.sc-mt-quadro-02{padding:12px;background-color:#e0eeed;flex:1}.mt-quadro-02__title.sc-mt-quadro-02{color:#9abec0;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:14px;line-height:1;margin:0;padding-bottom:4px;letter-spacing:1px}.mt-quadro-02__text.sc-mt-quadro-02{color:#000;font-family:\"Noto Sans\", sans-serif;font-weight:500;font-size:14px;margin:0;padding:0}";

const Quadro02 = /*@__PURE__*/ proxyCustomElement(class Quadro02 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '2a37a5f981ee27a18233f218cc493ee460182ab1', class: "mt-quadro-02" }, h("div", { key: '3e2f8bd02c4ba21ddfef2ed4cd45cd04ce6292be', class: "mt-quadro-02__left" }, h("slot", { key: 'bd52ab2f9fb7908247444dbabf88e4f3b4decbe0', name: "left" })), h("div", { key: '88059a39d1200dbe65a159987d787df9db95649a', class: "mt-quadro-02__inner-container" }, h("h3", { key: '47833f895f23f59da264fca5a53a20d28db3cecd', class: "mt-quadro-02__title" }, h("slot", { key: '7e6bf28a0cfa6caebcfbe2237189a128bb149c81', name: "title" })), h("p", { key: '6a53732e6901f02bc2ea7c9af7895bb0e6a0101b', class: "mt-quadro-02__text" }, h("slot", { key: '5deb10284005f5f26a2edb678502ad6b5606ff6f', name: "text" })))));
    }
    static get style() { return quadro02Css; }
}, [262, "mt-quadro-02"]);
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