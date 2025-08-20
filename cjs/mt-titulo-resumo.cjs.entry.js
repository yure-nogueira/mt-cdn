'use strict';

var index = require('./index-Bc9EaQF1.js');

const tituloResumoCss = ".sc-mt-titulo-resumo-h{--mt-titulo-resumo-padding:4px 0 0 0;--mt-titulo-resumo-margin:0;color:#9abec0;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:14px;line-height:1;margin:var(--mt-titulo-resumo-margin);padding:var(--mt-titulo-resumo-padding);letter-spacing:1px}";

const TituloResumo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '64aa45361cf9a5010afb337c147b7b47a2fbb001', class: "mt-titulo-resumo" }, index.h("h6", { key: '3592f509e8342ee182b1715195b8e355f19b0a15' }, index.h("slot", { key: 'ef59429fb8764911a3a6aa62a60e289cd175411f' }))));
    }
};
TituloResumo.style = tituloResumoCss;

exports.mt_titulo_resumo = TituloResumo;
//# sourceMappingURL=mt-titulo-resumo.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-resumo.cjs.entry.js.map