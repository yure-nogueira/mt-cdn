import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const contentCss = ".sc-mt-content-h{height:100%;display:block}";

const Content = /*@__PURE__*/ proxyCustomElement(class Content extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '6003087948fc6dc3191803768f8ee5401aa7e387', class: "mt-content" }, h("slot", { key: '6f6c323620d7e82783626942cb8dc7487489df1c' })));
    }
    static get style() { return contentCss; }
}, [262, "mt-content"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-content"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Content);
            }
            break;
    } });
}
defineCustomElement$1();

const MtContent = Content;
const defineCustomElement = defineCustomElement$1;

export { MtContent, defineCustomElement };
//# sourceMappingURL=mt-content.js.map

//# sourceMappingURL=mt-content.js.map