'use strict';

var index = require('./index-D-YE1rsj.js');
var enums = require('./enums-Bjj1_LNU.js');

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === enums.MtProdutosEnum.MEDCURSO) {
        if (especialidade === enums.MtEspecialidadesEnum.NEF) {
            return (index.h("h6", { class: "mt-titulo-resumo__text" },
                index.h("slot", null)));
        }
    }
    return (index.h("h6", null,
        index.h("slot", null)));
};

const tituloResumoCss = ".sc-mt-titulo-resumo-h{--mt-titulo-resumo-text-color:var(--mt-color-titulos-resumo-fonte);--mt-titulo-resumo-text-font-family:\"Roboto\", sans-serif;--mt-titulo-resumo-text-font-weight:900;--mt-titulo-resumo-text-text-transform:uppercase;--mt-titulo-resumo-text-font-size:14px}.mt-titulo-resumo__text.sc-mt-titulo-resumo{color:var(--mt-titulo-resumo-text-color);font-family:var(--mt-titulo-resumo-text-font-family);font-weight:var(--mt-titulo-resumo-text-font-weight);text-transform:var(--mt-titulo-resumo-text-text-transform);font-size:var(--mt-titulo-resumo-text-font-size)}.sc-mt-titulo-resumo-h{display:block}";

const TituloResumo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    produto;
    apostila;
    ano;
    especialidade;
    parte;
    render() {
        const { produto, especialidade, apostila, parte, ano } = this;
        return (index.h(index.Host, { key: '0d3553e1c1323480a4a775d34ce8ce55315075ae', class: enums.generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-titulo-resumo': true,
            }) }, markdown(produto, especialidade)));
    }
};
TituloResumo.style = tituloResumoCss;

exports.mt_titulo_resumo = TituloResumo;
//# sourceMappingURL=mt-titulo-resumo.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-resumo.cjs.entry.js.map