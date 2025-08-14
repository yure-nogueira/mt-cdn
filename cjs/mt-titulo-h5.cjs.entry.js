'use strict';

var index = require('./index-D-YE1rsj.js');
var enums = require('./enums-Bjj1_LNU.js');

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === enums.MtProdutosEnum.MEDCURSO) {
        if (especialidade === enums.MtEspecialidadesEnum.NEF) {
            return (index.h("h5", { class: "mt-titulo-h5__text" },
                index.h("slot", null)));
        }
    }
    return (index.h("h5", null,
        index.h("slot", null)));
};

const tituloH5Css = "@charset \"UTF-8\";.sc-mt-titulo-h5-h{--mt-titulo-h5-text-color:var(--mt-color-titulos-h5-fonte);--mt-titulo-h5-text-font-family:\"Roboto\", sans-serif;--mt-titulo-h5-text-font-weight:800;--mt-titulo-h5-text-font-size:10px;--mt-titulo-h5-text-content:\"▶\"}.mt-titulo-h5__text.sc-mt-titulo-h5{color:var(--mt-titulo-h5-text-color);font-family:var(--mt-titulo-h5-text-font-family);font-weight:var(--mt-titulo-h5-text-font-weight);font-size:var(--mt-titulo-h5-text-font-size)}.mt-titulo-h5__text.sc-mt-titulo-h5::before{content:var(--mt-titulo-h5-text-content);color:inherit}.sc-mt-titulo-h5-h{display:block}";

const TituloH5 = class {
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
        return (index.h(index.Host, { key: 'aae0747f2949e323647d2b6b2dae5e66d7afad2b', class: enums.generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-titulo-h5': true,
            }) }, markdown(produto, especialidade)));
    }
};
TituloH5.style = tituloH5Css;

exports.mt_titulo_h5 = TituloH5;
//# sourceMappingURL=mt-titulo-h5.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-h5.cjs.entry.js.map