'use strict';

var index = require('./index-CtT_xTgK.js');

const tituloH2Css = ".sc-mt-titulo-h2-h{--mt-titulo-h2-padding:4px 0 0 0;--mt-titulo-h2-margin:0;--mt-titulo-h2-display:inline-block;color:#455a5a;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:20px;line-height:1;margin:var(--mt-titulo-h2-margin);padding:var(--mt-titulo-h2-padding);border-top:6px solid #ccdfdf;display:var(--mt-titulo-h2-display);letter-spacing:1px}";

const TituloH2 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '21ea9bcf3d33e9deb517c2fe5dc028c34dac9145', class: "mt-titulo-h2" }, index.h("h2", { key: 'a0ecfb8160ed7b73a7b35580b5ef5f3a086541f8' }, index.h("slot", { key: 'cd63a61203fc51cc7d2ef73b3d0a346fe78fe6c7' }))));
    }
};
TituloH2.style = tituloH2Css;

exports.mt_titulo_h2 = TituloH2;
//# sourceMappingURL=mt-titulo-h2.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-h2.cjs.entry.js.map