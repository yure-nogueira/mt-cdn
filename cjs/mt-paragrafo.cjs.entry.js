'use strict';

var index = require('./index-Bc9EaQF1.js');

const paragrafoCss = ".sc-mt-paragrafo-h{--mt-paragrafo-padding:0;--mt-paragrafo-margin:0}.sc-mt-paragrafo-h p.sc-mt-paragrafo{color:#000;font-family:\"Merriweather\", serif;font-weight:400;font-size:13px;line-height:1.3;margin:var(--mt-paragrafo-margin);padding:var(--mt-paragrafo-padding)}.sc-mt-paragrafo-s>u{text-decoration-color:#9abec0}.sc-mt-paragrafo-s>ul{padding-left:32px}";

const Paragrafo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'ad44328cc2dbcf9e1e7d13a92e9c19995a3be2e7', class: "mt-paragrafo" }, index.h("p", { key: '1ead1fd12466350eca7bf0a086d72c0feae5bf83' }, index.h("slot", { key: '71a02fe62ab3c2f08efc75e02da94b3511eb4a9c' }))));
    }
};
Paragrafo.style = paragrafoCss;

exports.mt_paragrafo = Paragrafo;
//# sourceMappingURL=mt-paragrafo.entry.cjs.js.map

//# sourceMappingURL=mt-paragrafo.cjs.entry.js.map