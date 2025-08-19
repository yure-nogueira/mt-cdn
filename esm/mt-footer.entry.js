import { r as registerInstance, h, H as Host } from './index-oGdjzoP8.js';

const footerCss = ".sc-mt-footer-h{--mt-footer-padding:32px 0;--mt-footer-margin:null;margin:var(--mt-footer-margin);padding:var(--mt-footer-padding);text-align:right}.mt-footer__left.sc-mt-footer{color:#9a999e;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px}.mt-footer__middle.sc-mt-footer{color:#607b7a;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:24px;margin:0 16px;padding:32px 0;align-items:center}.mt-footer__right.sc-mt-footer{color:#9a999e;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px}";

const Footer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '30e9392e5f3a2f290fa455220299c328b72fba38', class: "mt-footer" }, h("div", { key: '31d4bb6c6976b7f3d36e3ca197d94088bc4d5b86', class: "mt-container" }, h("span", { key: '106f75171ed2c500116e3048bc2e339932b03cdc', class: "mt-footer__left" }, h("slot", { key: '3dd92615d47d53567cc595e88f1de3d0f275f8cd', name: "start" })), h("span", { key: '4180e989d20b2ea2264921445a65f2a3ba638351', class: "mt-footer__middle" }, h("slot", { key: '1c80ff920c8ea475c6d61e7709c9b4f78f52da31' })), h("span", { key: '84e1d69377cc84f4f1678582abc92636637a8205', class: "mt-footer__right" }, h("slot", { key: '6e40e1d597d9f5a3aa6ac3728fc39ba03cae7358', name: "end" })))));
    }
};
Footer.style = footerCss;

export { Footer as mt_footer };
//# sourceMappingURL=mt-footer.entry.js.map

//# sourceMappingURL=mt-footer.entry.js.map