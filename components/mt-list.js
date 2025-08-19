import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const listCss = ".sc-mt-list-h{color:#607b7a;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px;margin:16px 0 24px 0;padding-left:32px}";

const List = /*@__PURE__*/ proxyCustomElement(class List extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'e5772382b51c2283364f73637c878a6935e420ac', class: "mt-list" }, h("slot", { key: '741f1f2346b5f2d5e8f400eed4467bfc917b601e' })));
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