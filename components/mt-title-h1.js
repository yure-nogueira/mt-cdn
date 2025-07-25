import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const titleH1Css = ":host{--line-color:#9abec0;--pre-title-color:#9a999e;--title-color:#455a5a;--subtitle-color:#607b7a;display:block}.mt-title-h1{display:flex;flex-direction:column;padding-left:12px;border-left:12px solid var(--line-color)}.mt-title-h1__pre-title,.mt-title-h1__title,.mt-title-h1__subtitle{margin:0;text-transform:uppercase;font-family:\"Roboto\", sans-serif;font-weight:300;line-height:1}.mt-title-h1__pre-title{font-size:16px;color:var(--pre-title-color)}.mt-title-h1__title{margin:4px 0;font-weight:600;font-size:40px;color:var(--title-color)}.mt-title-h1__subtitle{font-size:24px;color:var(--subtitle-color)}";

const TitleH1 = /*@__PURE__*/ proxyCustomElement(class TitleH1 extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '6b414ccac32e374b3f07cdef85b619be708d6d73' }, h("div", { key: 'de5cd145d703a252cfa2e1b6741d6dd5bb22f667', class: "mt-title-h1" }, h("p", { key: 'c45bb167930bfbdb6546aa7e75d591c7aaa6d832', class: "mt-title-h1__pre-title" }, h("slot", { key: '842121643e63d65016f335b7f920e7ed71a51b60', name: "pre-title" })), h("h1", { key: '2c26203da16fdc45e7e8c012d87b48e033558893', class: "mt-title-h1__title" }, h("slot", { key: '4263a746267ecd5ee46c729473136b08fd8ba996', name: "title" })), h("h2", { key: 'b5c9c8ea023eef237a3257c4598edeb46db89039', class: "mt-title-h1__subtitle" }, h("slot", { key: 'dc48d656b62869a6018bd45bb2f03df9b88bbe6f', name: "subtitle" })))));
    }
    static get style() { return titleH1Css; }
}, [257, "mt-title-h1"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-title-h1"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-title-h1":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TitleH1);
            }
            break;
    } });
}
defineCustomElement$1();

const MtTitleH1 = TitleH1;
const defineCustomElement = defineCustomElement$1;

export { MtTitleH1, defineCustomElement };
//# sourceMappingURL=mt-title-h1.js.map

//# sourceMappingURL=mt-title-h1.js.map