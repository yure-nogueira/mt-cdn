'use strict';

var index = require('./index-CtT_xTgK.js');

const paragrafoCss = ".sc-mt-paragrafo-h{--mt-paragrafo-padding:0;--mt-paragrafo-margin:0}.sc-mt-paragrafo-h p.sc-mt-paragrafo{color:#000;font-family:\"Merriweather\", serif;font-weight:400;font-size:13px;line-height:1.3;margin:var(--mt-paragrafo-margin);padding:var(--mt-paragrafo-padding)}.sc-mt-paragrafo-s>u{text-decoration-color:#9abec0}.sc-mt-paragrafo-s>ul{padding-left:32px}";

const Paragrafo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'aa08c67ad5f2be4482518b6f1b659207f05d9c88', class: "mt-paragrafo" }, index.h("p", { key: '0c476cab309d4f1209f072f9237387100c1cf07c' }, index.h("slot", { key: '0c98e68005e28bb4028feb45f7e2c52ccb577f58' }))));
    }
};
Paragrafo.style = paragrafoCss;

exports.mt_paragrafo = Paragrafo;
//# sourceMappingURL=mt-paragrafo.entry.cjs.js.map

//# sourceMappingURL=mt-paragrafo.cjs.entry.js.map