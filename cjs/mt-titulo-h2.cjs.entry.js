'use strict';

var index = require('./index-Bc9EaQF1.js');

const tituloH2Css = ".sc-mt-titulo-h2-h{--mt-titulo-h2-padding:4px 0 0 0;--mt-titulo-h2-margin:0;--mt-titulo-h2-display:inline-block;color:#455a5a;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:20px;line-height:1;margin:var(--mt-titulo-h2-margin);padding:var(--mt-titulo-h2-padding);border-top:6px solid #ccdfdf;display:var(--mt-titulo-h2-display);letter-spacing:1px}";

const TituloH2 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'bcdd1f804287d4f3a15c487607ca11cffe55b67e', class: "mt-titulo-h2" }, index.h("h2", { key: '3b5a4a4b6158085f55dee769a6b424482af16edd' }, index.h("slot", { key: '5202a20cb2c247b0ef926fb2e3b429bba93298b4' }))));
    }
};
TituloH2.style = tituloH2Css;

exports.mt_titulo_h2 = TituloH2;
//# sourceMappingURL=mt-titulo-h2.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-h2.cjs.entry.js.map