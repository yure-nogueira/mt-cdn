'use strict';

var index = require('./index-Bc9EaQF1.js');

const footerCss = ".sc-mt-footer-h{--mt-footer-padding:32px 0;--mt-footer-margin:null;margin:var(--mt-footer-margin);padding:var(--mt-footer-padding);text-align:right}.mt-footer__left.sc-mt-footer{color:#9a999e;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px}.mt-footer__middle.sc-mt-footer{color:#607b7a;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:24px;margin:0 16px;padding:32px 0;align-items:center}.mt-footer__right.sc-mt-footer{color:#9a999e;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px}";

const Footer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0d415b709973e096149e2c12602f09a42833f586', class: "mt-footer" }, index.h("div", { key: 'c75e2f85f89b24a00ca51807588d37641c1e9906', class: "mt-container" }, index.h("span", { key: 'f1872963299149aebf7f8907d0652d04175b4443', class: "mt-footer__left" }, index.h("slot", { key: 'e895350919320df4d7a991f4cb6a7253340e00db', name: "start" })), index.h("span", { key: '5b657e990edb1630a1ec5e05083eab8abed16957', class: "mt-footer__middle" }, index.h("slot", { key: '3da48029ffba75a9237a5ea76e54ba2bcb8b14db' })), index.h("span", { key: 'e54d1eab7bb853f8789f0e461235fd587a89d231', class: "mt-footer__right" }, index.h("slot", { key: '90fed84d67ae0d056d26fdaef146eb36a1929cc5', name: "end" })))));
    }
};
Footer.style = footerCss;

exports.mt_footer = Footer;
//# sourceMappingURL=mt-footer.entry.cjs.js.map

//# sourceMappingURL=mt-footer.cjs.entry.js.map