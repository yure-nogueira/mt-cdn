'use strict';

var index = require('./index-Bc9EaQF1.js');

const tituloH3Css = ".sc-mt-titulo-h3-h{--mt-titulo-h3-padding:4px 0 0 0;--mt-titulo-h3-margin:0;--mt-titulo-h3-display:block;color:#607b7a;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:18px;line-height:1;margin:var(--mt-titulo-h3-margin);padding:var(--mt-titulo-h3-padding);border-top:6px solid #ccdfdf;display:var(--mt-titulo-h3-display);letter-spacing:1px}";

const TituloH3 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '59a6e824123b51c751b756ca7ab7b3d5e1898d0c', class: "mt-titulo-h3" }, index.h("h3", { key: 'cf39fab4f80c5d16ab6fd211eeae2648e9ea8b45' }, index.h("slot", { key: '3cc254191507f42841b1812452211867d055185d' }))));
    }
};
TituloH3.style = tituloH3Css;

exports.mt_titulo_h3 = TituloH3;
//# sourceMappingURL=mt-titulo-h3.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-h3.cjs.entry.js.map