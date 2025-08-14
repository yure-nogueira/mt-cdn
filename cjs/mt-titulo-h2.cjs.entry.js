'use strict';

var index = require('./index-D-YE1rsj.js');
var enums = require('./enums-Bjj1_LNU.js');

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === enums.MtProdutosEnum.MEDCURSO) {
        if (especialidade === enums.MtEspecialidadesEnum.NEF) {
            return (index.h("h2", { class: "mt-titulo-h2__text" },
                index.h("slot", null)));
        }
    }
    return (index.h("h2", null,
        index.h("slot", null)));
};

const tituloH2Css = ".sc-mt-titulo-h2-h{--mt-titulo-h2-text-color:var(--mt-color-titulos-h2-fonte);--mt-titulo-h2-text-font-family:\"Roboto\", sans-serif;--mt-titulo-h2-text-font-weight:900;--mt-titulo-h2-text-font-size:16px;--mt-titulo-h2-line-color:var(--mt-color-titulos-h2-linha);--mt-titulo-h2-line-height:4px;--mt-titulo-h2-line-padding:4px 0 0 0}.mt-titulo-h2__text.sc-mt-titulo-h2{color:var(--mt-titulo-h2-text-color);font-family:var(--mt-titulo-h2-text-font-family);font-weight:var(--mt-titulo-h2-text-font-weight);font-size:var(--mt-titulo-h2-text-font-size);padding:var(--mt-titulo-h2-line-padding);border-top:var(--mt-titulo-h2-line-height) solid var(--mt-titulo-h2-line-color)}.sc-mt-titulo-h2-h{display:block}";

const TituloH2 = class {
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
        return (index.h(index.Host, { key: '5de73b8a469bf5bdbd72bd7385fb975301da3ed4', class: enums.generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-titulo-h2': true,
            }) }, markdown(produto, especialidade)));
    }
};
TituloH2.style = tituloH2Css;

exports.mt_titulo_h2 = TituloH2;
//# sourceMappingURL=mt-titulo-h2.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-h2.cjs.entry.js.map