'use strict';

var index = require('./index-Bc9EaQF1.js');

const tituloResumoCss = ".sc-mt-titulo-resumo-h{--mt-titulo-resumo-padding:4px 0 0 0;--mt-titulo-resumo-margin:0;color:#9abec0;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:14px;line-height:1;margin:var(--mt-titulo-resumo-margin);padding:var(--mt-titulo-resumo-padding);letter-spacing:1px}";

const TituloResumo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '82c6c9945226d9e196cd695233dd059dfcaf961d', class: "mt-titulo-resumo" }, index.h("h6", { key: '08402ec9efc98623ca8ed7151e99248b25f68084' }, index.h("slot", { key: '4ddfd54f571c213787dcb2f14bdcdb8fa96103b4' }))));
    }
};
TituloResumo.style = tituloResumoCss;

exports.mt_titulo_resumo = TituloResumo;
//# sourceMappingURL=mt-titulo-resumo.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-resumo.cjs.entry.js.map