import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const contentCss = ".sc-mt-content-h{height:100%;display:block}";

const Content = /*@__PURE__*/ proxyCustomElement(class Content extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'ccbdeaaacae75942083f823627bfd9649eb1af66', class: "mt-content" }, h("slot", { key: '7897329f08ce666b7c335f5722e83861fdb38c70' })));
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