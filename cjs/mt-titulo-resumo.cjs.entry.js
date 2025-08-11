'use strict';

var index = require('./index-D-YE1rsj.js');
var functions = require('./functions-DWyFPlQy.js');

const tituloResumoCss = ".sc-mt-titulo-resumo-h{--mt-titulo-resumo-text-color:var(--mt-color-titulo-resumo-fonte);--mt-titulo-resumo-text-font-family:\"Roboto\", sans-serif;--mt-titulo-resumo-text-font-weight:900;--mt-titulo-resumo-text-text-transform:uppercase;--mt-titulo-resumo-text-font-size:14px;display:block}.mt-titulo-resumo__text.sc-mt-titulo-resumo{color:var(--mt-titulo-resumo-text-color);font-family:var(--mt-titulo-resumo-text-font-family);font-weight:var(--mt-titulo-resumo-text-font-weight);text-transform:var(--mt-titulo-resumo-text-text-transform);font-size:var(--mt-titulo-resumo-text-font-size);line-height:1;margin:0}";

const TituloResumo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (index.h(index.Host, { key: '45d924021212bf79a0420ebf8fa6f68230c0ae40', class: functions.generateClasses(produto, especialidade, ano, {
                'mt-titulo-resumo': true,
            }) }, index.h("h6", { key: '66c7ebf9107f982286670ede5f6fbc07fb839feb', class: "mt-titulo-resumo__text" }, index.h("slot", { key: '48b7aa1774ff1b0e097ec754b5883fda473d6cc4' }))));
    }
};
TituloResumo.style = tituloResumoCss;

exports.mt_titulo_resumo = TituloResumo;
//# sourceMappingURL=mt-titulo-resumo.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-resumo.cjs.entry.js.map