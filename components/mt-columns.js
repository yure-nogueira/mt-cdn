import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const columnsCss = ".sc-mt-columns-h{margin:0 auto;display:block;column-count:var(--mt-columns-number);column-gap:var(--mt-column-gap);max-width:var(--mt-columns-max-width);--mt-columns-number:null;--mt-columns-max-width:100%;--mt-column-gap:40px}";

const Columns = /*@__PURE__*/ proxyCustomElement(class Columns extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'c0c0414d879e7674eca7b7a74202d7cea633e206', class: "mt-columns" }, h("slot", { key: 'fb2b800e86f93ecbf2fdb2524f0c2bc98547939d' })));
    }
    static get style() { return columnsCss; }
}, [262, "mt-columns"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-columns"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-columns":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Columns);
            }
            break;
    } });
}
defineCustomElement$1();

const MtColumns = Columns;
const defineCustomElement = defineCustomElement$1;

export { MtColumns, defineCustomElement };
//# sourceMappingURL=mt-columns.js.map

//# sourceMappingURL=mt-columns.js.map