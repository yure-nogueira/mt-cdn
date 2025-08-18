import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const footerCss = ".sc-mt-footer-h{--mt-footer-padding:32px 0;--mt-footer-margin:null;margin:var(--mt-footer-margin);padding:var(--mt-footer-padding);text-align:right}.mt-footer__left.sc-mt-footer{color:#9a999e;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px}.mt-footer__middle.sc-mt-footer{color:#607b7a;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:24px;margin:0 16px;padding:32px 0;align-items:center}.mt-footer__right.sc-mt-footer{color:#9a999e;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px}";

const Footer = /*@__PURE__*/ proxyCustomElement(class Footer extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '1cbf2aea3ad38974b6a42fd18e0be06057112aa7', class: "mt-footer" }, h("div", { key: '52fe3bf26609dbbe7cacdcf46e70c2423937074e', class: "mt-container" }, h("span", { key: 'e4c43ec6085d619d5ae42bfe582500448146ba65', class: "mt-footer__left" }, h("slot", { key: '5df8653f463a858b1eede33092aca8b95c383d75', name: "start" })), h("span", { key: 'da8ca770f8cdc5821dad6fa066e331b2c36ea72e', class: "mt-footer__midle" }, h("slot", { key: 'ee2b29f8777fa6ba0ffc34f794535bc59b6a6143' })), h("span", { key: '43b4d0df6e5c5218d8fcd10b06293e2fded88b74', class: "mt-footer__right" }, h("slot", { key: 'de95e5843bd15173b6887f5ef135df063a05b0af', name: "end" })))));
    }
    static get style() { return footerCss; }
}, [262, "mt-footer"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-footer"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Footer);
            }
            break;
    } });
}
defineCustomElement$1();

const MtFooter = Footer;
const defineCustomElement = defineCustomElement$1;

export { MtFooter, defineCustomElement };
//# sourceMappingURL=mt-footer.js.map

//# sourceMappingURL=mt-footer.js.map