'use strict';

var index = require('./index-CtT_xTgK.js');

const tituloH3Css = ".sc-mt-titulo-h3-h{--mt-titulo-h3-padding:4px 0 0 0;--mt-titulo-h3-margin:0;--mt-titulo-h3-display:block;color:#607b7a;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:18px;line-height:1;margin:var(--mt-titulo-h3-margin);padding:var(--mt-titulo-h3-padding);border-top:6px solid #ccdfdf;display:var(--mt-titulo-h3-display);letter-spacing:1px}";

const TituloH3 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '459ce01898e8fa1013f7fe05ab762f13686428ed', class: "mt-titulo-h3" }, index.h("h3", { key: 'e067d3b64e441a2a2c08aae4e9b4113d4256f85b' }, index.h("slot", { key: '907231d1267d4d7ac33b4dfa699e50da30abc2a9' }))));
    }
};
TituloH3.style = tituloH3Css;

exports.mt_titulo_h3 = TituloH3;
//# sourceMappingURL=mt-titulo-h3.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-h3.cjs.entry.js.map