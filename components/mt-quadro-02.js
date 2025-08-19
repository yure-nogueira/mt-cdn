import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const quadro02Css = ".sc-mt-quadro-02-h{display:flex;align-items:center}.mt-quadro-02__left.sc-mt-quadro-02{margin:0 6px 0 0}.mt-quadro-02__inner-container.sc-mt-quadro-02{padding:12px;background-color:#e0eeed;flex:1}.mt-quadro-02__title.sc-mt-quadro-02{color:#9abec0;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:14px;line-height:1;margin:0;padding-bottom:4px;letter-spacing:1px}.mt-quadro-02__text.sc-mt-quadro-02{color:#000;font-family:\"Noto Sans\", sans-serif;font-weight:500;font-size:14px;margin:0;padding:0}";

const Quadro02 = /*@__PURE__*/ proxyCustomElement(class Quadro02 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '9a1e907eb16ee938dd82d71fd1a9320991fc2827', class: "mt-quadro-02" }, h("div", { key: 'e41a6c829989ac0d649224fd7f9583b120103f23', class: "mt-quadro-02__left" }, h("slot", { key: '9a5583f975c3bba2a332176836785d88f3d9121d', name: "left" })), h("div", { key: 'cb86a4fdecd4414817f5380b1188271e306153d0', class: "mt-quadro-02__inner-container" }, h("h3", { key: '19efb2db4e821dc865c05d076864d3ca892e2608', class: "mt-quadro-02__title" }, h("slot", { key: '9af554f02844bd1b400205ea57e7cb0007f81a1d', name: "title" })), h("p", { key: 'ca564eda32ac8526bbbdf1000fceca6b1caefcad', class: "mt-quadro-02__text" }, h("slot", { key: 'ad9c6ccf56c992d089bb964e430218d19ba670e6', name: "text" })))));
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