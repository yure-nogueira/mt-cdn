'use strict';

var index = require('./index-CtT_xTgK.js');

const tituloResumoCss = ".sc-mt-titulo-resumo-h{--mt-titulo-resumo-padding:4px 0 0 0;--mt-titulo-resumo-margin:0;color:#9abec0;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:14px;line-height:1;margin:var(--mt-titulo-resumo-margin);padding:var(--mt-titulo-resumo-padding);letter-spacing:1px}";

const TituloResumo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '746602818df57ced7992f9577c73438e00a4981a', class: "mt-titulo-resumo" }, index.h("h6", { key: '9e8d72be4bb980c1aaf8649bfd7c85f8d47ac953' }, index.h("slot", { key: '6ea47cfd7efd1059c83e96d826b6a2d8d0dd3f66' }))));
    }
};
TituloResumo.style = tituloResumoCss;

exports.mt_titulo_resumo = TituloResumo;
//# sourceMappingURL=mt-titulo-resumo.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-resumo.cjs.entry.js.map