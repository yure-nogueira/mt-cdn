'use strict';

var index = require('./index-Bc9EaQF1.js');

const footerCss = ".sc-mt-footer-h{--mt-footer-padding:32px 0;--mt-footer-margin:null;margin:var(--mt-footer-margin);padding:var(--mt-footer-padding);text-align:right}.mt-footer__left.sc-mt-footer{color:#9a999e;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px}.mt-footer__middle.sc-mt-footer{color:#607b7a;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:24px;margin:0 16px;padding:32px 0;align-items:center}.mt-footer__right.sc-mt-footer{color:#9a999e;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px}";

const Footer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '30e9392e5f3a2f290fa455220299c328b72fba38', class: "mt-footer" }, index.h("div", { key: '31d4bb6c6976b7f3d36e3ca197d94088bc4d5b86', class: "mt-container" }, index.h("span", { key: '106f75171ed2c500116e3048bc2e339932b03cdc', class: "mt-footer__left" }, index.h("slot", { key: '3dd92615d47d53567cc595e88f1de3d0f275f8cd', name: "start" })), index.h("span", { key: '4180e989d20b2ea2264921445a65f2a3ba638351', class: "mt-footer__middle" }, index.h("slot", { key: '1c80ff920c8ea475c6d61e7709c9b4f78f52da31' })), index.h("span", { key: '84e1d69377cc84f4f1678582abc92636637a8205', class: "mt-footer__right" }, index.h("slot", { key: '6e40e1d597d9f5a3aa6ac3728fc39ba03cae7358', name: "end" })))));
    }
};
Footer.style = footerCss;

exports.mt_footer = Footer;
//# sourceMappingURL=mt-footer.entry.cjs.js.map

//# sourceMappingURL=mt-footer.cjs.entry.js.map