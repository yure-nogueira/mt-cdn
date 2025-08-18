import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const listCss = ".sc-mt-list-h{color:#607b7a;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px;margin:16px 0 24px 0;padding-left:32px}";

const List = /*@__PURE__*/ proxyCustomElement(class List extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '5bd25c7f5b86ff4c72a2f7920296df8776932071', class: "mt-list" }, h("slot", { key: '92e28d35b2687f2aff9b48a13652371af27ee135' })));
    }
    static get style() { return listCss; }
}, [262, "mt-list"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-list"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, List);
            }
            break;
    } });
}
defineCustomElement$1();

const MtList = List;
const defineCustomElement = defineCustomElement$1;

export { MtList, defineCustomElement };
//# sourceMappingURL=mt-list.js.map

//# sourceMappingURL=mt-list.js.map