'use strict';

var index = require('./index-CtT_xTgK.js');

const tituloH3Css = ".sc-mt-titulo-h3-h{--mt-titulo-h3-padding:4px 0 0 0;--mt-titulo-h3-margin:0;--mt-titulo-h3-display:block;color:#607b7a;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:18px;line-height:1;margin:var(--mt-titulo-h3-margin);padding:var(--mt-titulo-h3-padding);border-top:6px solid #ccdfdf;display:var(--mt-titulo-h3-display);letter-spacing:1px}";

const TituloH3 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '5689a4788353c9720ed9e6da7a2aca14f59f2031', class: "mt-titulo-h3" }, index.h("h3", { key: '480ee1de5728cd09b9b4427f39a0b20c0f2eb232' }, index.h("slot", { key: 'f5831cf08a2e764f590ed27031962c74007ff15f' }))));
    }
};
TituloH3.style = tituloH3Css;

exports.mt_titulo_h3 = TituloH3;
//# sourceMappingURL=mt-titulo-h3.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-h3.cjs.entry.js.map