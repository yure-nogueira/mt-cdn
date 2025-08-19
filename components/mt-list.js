import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const listCss = ".sc-mt-list-h{color:#607b7a;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px;margin:16px 0 24px 0;padding-left:32px}";

const List = /*@__PURE__*/ proxyCustomElement(class List extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'ba99bc94434c7ca7ba85f2aa373e29b33754e8a2', class: "mt-list" }, h("slot", { key: '03161ddeb963b70c7b0921bd0f8f9db6eb423c47' })));
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