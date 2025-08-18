'use strict';

var index = require('./index-CtT_xTgK.js');

const paragrafoCss = ".sc-mt-paragrafo-h{--mt-paragrafo-padding:0;--mt-paragrafo-margin:0;color:#000;font-family:\"Merriweather\", serif;font-weight:400;font-size:13px;line-height:1.3;margin:var(--mt-paragrafo-margin);padding:var(--mt-paragrafo-padding)}.sc-mt-paragrafo-s>u{text-decoration-color:#9abec0}.sc-mt-paragrafo-s>ul{padding-left:32px}";

const Paragrafo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'abf961315539da692db9500b5505ef29765ce963', class: "mt-paragrafo" }, index.h("p", { key: 'dea8295db6567ee34b010eca62a9bf66ca1d81d3' }, index.h("slot", { key: '2c8c4244fec71f546db6230d3edfbccc819e535d' }))));
    }
};
Paragrafo.style = paragrafoCss;

exports.mt_paragrafo = Paragrafo;
//# sourceMappingURL=mt-paragrafo.entry.cjs.js.map

//# sourceMappingURL=mt-paragrafo.cjs.entry.js.map