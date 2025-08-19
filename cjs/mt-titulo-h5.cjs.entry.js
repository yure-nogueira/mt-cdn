'use strict';

var index = require('./index-Bc9EaQF1.js');

const tituloH5Css = "@charset \"UTF-8\";.sc-mt-titulo-h5-h{--mt-titulo-h5-padding:0;--mt-titulo-h5-margin:0;color:#455a5a;font-family:\"Asap Condensed\", sans-serif;font-weight:600;font-size:13px;line-height:1;margin:var(--mt-titulo-h5-margin);padding:var(--mt-titulo-h5-padding);letter-spacing:1px}.mt-titulo-h5.sc-mt-titulo-h5::before{content:\"▶\";color:inherit;font-size:8px;position:relative;bottom:2px}";

const TituloH5 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '23b4c692c9dc307f29d208c23b62350d46cd9da1', class: "mt-titulo-h5" }, index.h("h5", { key: '3bd2f2e6fc4968dafcbaeae9a24126ddafc8dc4f' }, index.h("slot", { key: '2015eb71ba7655017d82c2c2608792692e4f5ad6' }))));
    }
};
TituloH5.style = tituloH5Css;

exports.mt_titulo_h5 = TituloH5;
//# sourceMappingURL=mt-titulo-h5.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-h5.cjs.entry.js.map