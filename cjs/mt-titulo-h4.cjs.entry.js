'use strict';

var index = require('./index-D-YE1rsj.js');
var enums = require('./enums-Bjj1_LNU.js');

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === enums.MtProdutosEnum.MEDCURSO) {
        if (especialidade === enums.MtEspecialidadesEnum.NEF) {
            return (index.h("h4", { class: "mt-titulo-h4__text" },
                index.h("slot", null)));
        }
    }
    return (index.h("h4", null,
        index.h("slot", null)));
};

const tituloH4Css = "@charset \"UTF-8\";.sc-mt-titulo-h4-h{--mt-titulo-h4-text-color:var(--mt-color-titulos-h4-fonte);--mt-titulo-h4-text-font-family:\"Roboto\", sans-serif;--mt-titulo-h4-text-font-weight:900;--mt-titulo-h4-text-font-size:12px;--mt-titulo-h4-text-content:\"▶\"}.mt-titulo-h4__text.sc-mt-titulo-h4{color:var(--mt-titulo-h4-text-color);font-family:var(--mt-titulo-h4-text-font-family);font-weight:var(--mt-titulo-h4-text-font-weight);font-size:var(--mt-titulo-h4-text-font-size)}.mt-titulo-h4__text.sc-mt-titulo-h4::before{content:var(--mt-titulo-h4-text-content);color:inherit}.sc-mt-titulo-h4-h{display:block}";

const TituloH4 = class {
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
        return (index.h(index.Host, { key: '0cf03bacdb99684de6bb95bdba14b2310e5d8336', class: enums.generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-titulo-h4': true,
            }) }, markdown(produto, especialidade)));
    }
};
TituloH4.style = tituloH4Css;

exports.mt_titulo_h4 = TituloH4;
//# sourceMappingURL=mt-titulo-h4.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-h4.cjs.entry.js.map