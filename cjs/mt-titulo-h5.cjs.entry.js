'use strict';

var index = require('./index-CtT_xTgK.js');

const tituloH5Css = "@charset \"UTF-8\";.sc-mt-titulo-h5-h{--mt-titulo-h5-padding:0;--mt-titulo-h5-margin:0;color:#455a5a;font-family:\"Asap Condensed\", sans-serif;font-weight:600;font-size:13px;line-height:1;margin:var(--mt-titulo-h5-margin);padding:var(--mt-titulo-h5-padding);letter-spacing:1px}.mt-titulo-h5.sc-mt-titulo-h5::before{content:\"▶\";color:inherit;font-size:8px;position:relative;bottom:2px}";

const TituloH5 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '1c438e656b92dc846cd11717226c0ad70c01e0b2', class: "mt-titulo-h5" }, index.h("h5", { key: '88f442efe51a4d115956c170d540b373c513e1ae' }, index.h("slot", { key: '3bc7829dd6f2d1a012f7572cece1877301153651' }))));
    }
};
TituloH5.style = tituloH5Css;

exports.mt_titulo_h5 = TituloH5;
//# sourceMappingURL=mt-titulo-h5.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-h5.cjs.entry.js.map