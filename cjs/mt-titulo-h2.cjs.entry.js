'use strict';

var index = require('./index-CtT_xTgK.js');

const tituloH2Css = ".sc-mt-titulo-h2-h{--mt-titulo-h2-padding:4px 0 0 0;--mt-titulo-h2-margin:0;--mt-titulo-h2-display:inline-block;color:#455a5a;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:20px;line-height:1;margin:var(--mt-titulo-h2-margin);padding:var(--mt-titulo-h2-padding);border-top:6px solid #ccdfdf;display:var(--mt-titulo-h2-display);letter-spacing:1px}";

const TituloH2 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '10d953a093e52ac829617b0d4ef02be48f8091a0', class: "mt-titulo-h2" }, index.h("h2", { key: '27eccdd137c0f29c4e72f98c9fa47fd0a65ea9b8' }, index.h("slot", { key: 'ac29985bcc0bc14c49571707785db377951c3279' }))));
    }
};
TituloH2.style = tituloH2Css;

exports.mt_titulo_h2 = TituloH2;
//# sourceMappingURL=mt-titulo-h2.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-h2.cjs.entry.js.map