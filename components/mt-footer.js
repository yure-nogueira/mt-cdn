import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const footerCss = ".sc-mt-footer-h{--mt-footer-padding:32px 0;--mt-footer-margin:null;margin:var(--mt-footer-margin);padding:var(--mt-footer-padding);text-align:right}.mt-footer__left.sc-mt-footer{color:#9a999e;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px}.mt-footer__middle.sc-mt-footer{color:#607b7a;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:24px;margin:0 16px;padding:32px 0;align-items:center}.mt-footer__right.sc-mt-footer{color:#9a999e;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px}";

const Footer = /*@__PURE__*/ proxyCustomElement(class Footer extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '7da9be8effb85128c179fe254f5f9da4558b3bd3', class: "mt-footer" }, h("div", { key: '7af698a9abf866008dd1b8678122a991d43c9ba1', class: "mt-container" }, h("span", { key: 'dbf07540c58cd8bedabe3e4c3dafb76a6c9ea66d', class: "mt-footer__left" }, h("slot", { key: 'd8d7bb9bf59dd0ec3465acadefd7eb5a3597748b', name: "start" })), h("span", { key: '847e7aaead6aabc7b973fa803366d49752b71722', class: "mt-footer__middle" }, h("slot", { key: 'c7c4909858ac147c142eb38b124708560e38b8ea' })), h("span", { key: '8add11263f05eef314b76792525536c75aab6d28', class: "mt-footer__right" }, h("slot", { key: '33fa96cac9a237b1a1235cf65dfbd88b00828187', name: "end" })))));
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