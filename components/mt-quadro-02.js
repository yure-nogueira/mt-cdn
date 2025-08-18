import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const quadro02Css = ".sc-mt-quadro-02-h{display:flex;align-items:center}.mt-quadro-02__left.sc-mt-quadro-02{margin:0 6px 0 0}.mt-quadro-02__inner-container.sc-mt-quadro-02{padding:12px;background-color:#e0eeed;flex:1}.mt-quadro-02__title.sc-mt-quadro-02{color:#9abec0;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:14px;line-height:1;margin:0;padding-bottom:4px;letter-spacing:1px}.mt-quadro-02__text.sc-mt-quadro-02{color:#000;font-family:\"Noto Sans\", sans-serif;font-weight:500;font-size:14px;margin:0;padding:0}";

const Quadro02 = /*@__PURE__*/ proxyCustomElement(class Quadro02 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'ce7eca7658284e8928f0db0536d415450d480fde', class: "mt-quadro-02" }, h("div", { key: '517e304dbb75edd5a5f3141bc17de39802861c0a', class: "mt-quadro-02__left" }, h("slot", { key: '9ec0219748a84bf022554f888c09c4436ffcffa7', name: "left" })), h("div", { key: '19352a8f7e7d80c93d61f842c05bf66bdb26c867', class: "mt-quadro-02__inner-container" }, h("h3", { key: '73590c564955aa809f738839fe8431d0d2f17143', class: "mt-quadro-02__title" }, h("slot", { key: '73f7e034b7c1cbc9ae8adba2b7bd1369519ff9e0', name: "title" })), h("p", { key: 'b87ce36ff7333bb8fc27fca0abd7b78d149c7dc7', class: "mt-quadro-02__text" }, h("slot", { key: '579394c8e3705f88885957fb6529408a33161dd2', name: "text" })))));
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