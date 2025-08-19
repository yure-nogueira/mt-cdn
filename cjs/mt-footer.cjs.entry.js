'use strict';

var index = require('./index-CtT_xTgK.js');

const footerCss = ".sc-mt-footer-h{--mt-footer-padding:32px 0;--mt-footer-margin:null;margin:var(--mt-footer-margin);padding:var(--mt-footer-padding);text-align:right}.mt-footer__left.sc-mt-footer{color:#9a999e;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px}.mt-footer__middle.sc-mt-footer{color:#607b7a;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:24px;margin:0 16px;padding:32px 0;align-items:center}.mt-footer__right.sc-mt-footer{color:#9a999e;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px}";

const Footer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '1cbf2aea3ad38974b6a42fd18e0be06057112aa7', class: "mt-footer" }, index.h("div", { key: '52fe3bf26609dbbe7cacdcf46e70c2423937074e', class: "mt-container" }, index.h("span", { key: 'e4c43ec6085d619d5ae42bfe582500448146ba65', class: "mt-footer__left" }, index.h("slot", { key: '5df8653f463a858b1eede33092aca8b95c383d75', name: "start" })), index.h("span", { key: 'a795548099bf40b2ba2c7391ae9882f3bb549d87', class: "mt-footer__middle" }, index.h("slot", { key: '5c21e9f0ec879e56fe03e08c1c45b898e5626107' })), index.h("span", { key: '9127a5a0be7f20addfff7f01561e08a8acdf0068', class: "mt-footer__right" }, index.h("slot", { key: '2b7fdb42049dcc2429586d74760f76327d206c59', name: "end" })))));
    }
};
Footer.style = footerCss;

exports.mt_footer = Footer;
//# sourceMappingURL=mt-footer.entry.cjs.js.map

//# sourceMappingURL=mt-footer.cjs.entry.js.map