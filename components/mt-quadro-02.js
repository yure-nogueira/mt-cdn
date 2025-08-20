import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const quadro02Css = ".sc-mt-quadro-02-h{display:flex;align-items:center}.mt-quadro-02__left.sc-mt-quadro-02{margin:0 6px 0 0}.mt-quadro-02__inner-container.sc-mt-quadro-02{padding:12px;background-color:#e0eeed;flex:1}.mt-quadro-02__title.sc-mt-quadro-02{color:#9abec0;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:14px;line-height:1;margin:0;padding-bottom:4px;letter-spacing:1px}.mt-quadro-02__text.sc-mt-quadro-02{color:#000;font-family:\"Noto Sans\", sans-serif;font-weight:500;font-size:14px;margin:0;padding:0}";

const Quadro02 = /*@__PURE__*/ proxyCustomElement(class Quadro02 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '5eb8a34212aec40f8426b3bf3f8e261cb38e93ff', class: "mt-quadro-02" }, h("div", { key: 'f331a9dd8635485eccc6e783d07e2c06848a5156', class: "mt-quadro-02__left" }, h("slot", { key: '93f276e1c726e25f4c4810ef18dceb8de2fadb77', name: "left" })), h("div", { key: 'b9427f5cd4b03228491b70520938ab6d0d3dc36c', class: "mt-quadro-02__inner-container" }, h("h3", { key: '9f0ff0985d5551788b1778e09825b33aa20c96f5', class: "mt-quadro-02__title" }, h("slot", { key: 'a48791592c0c2357e4efae3a7f55a130180bd642', name: "title" })), h("p", { key: '9cd97a60d99693fe781f7ab6bc1dd447a411bad5', class: "mt-quadro-02__text" }, h("slot", { key: 'ee81fe01ea27b8c25140a99c832b8cc5d9561f8c', name: "text" })))));
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