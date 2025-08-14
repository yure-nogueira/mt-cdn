'use strict';

var index = require('./index-D-YE1rsj.js');
var enums = require('./enums-Bjj1_LNU.js');

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === enums.MtProdutosEnum.MEDCURSO) {
        if (especialidade === enums.MtEspecialidadesEnum.NEF) {
            return (index.h("div", { class: "mt-titulo-h1__container" },
                index.h("p", { class: "mt-titulo-h1__pre-title" },
                    index.h("slot", { name: "pre-title" })),
                index.h("h1", { class: "mt-titulo-h1__title" },
                    index.h("slot", { name: "title" })),
                index.h("h2", { class: "mt-titulo-h1__subtitle" },
                    index.h("slot", { name: "subtitle" }))));
        }
    }
    return (index.h("h1", null,
        index.h("slot", null)));
};

const tituloH1Css = ".mt-medcurso.mt-car.mt-2026.mt-titulo-h1.sc-mt-titulo-h1-h .mt-titulo-h1__pre-title.sc-mt-titulo-h1{display:none}.sc-mt-titulo-h1-h{--mt-titulos-h1-line-color:var(--mt-color-titulos-capitulo-linha);--mt-titulos-h1-line-padding:0 0 0 8px;--mt-titulos-h1-pre-title-color:var(--mt-color-titulos-capitulo-fonte);--mt-titulos-h1-pre-title-font-family:\"Roboto\", sans-serif;--mt-titulos-h1-pre-title-font-weight:100;--mt-titulos-h1-pre-title-font-size:16px;--mt-titulos-h1-title-color:var(--mt-color-titulos-h1-fonte);--mt-titulos-h1-title-font-family:\"Roboto\", sans-serif;--mt-titulos-h1-title-font-weight:900;--mt-titulos-h1-title-font-size:40px;--mt-titulos-h1-title-margin:4px 0 4px 0;--mt-titulos-h1-subtitle-color:var(--mt-color-titulos-h2-fonte);--mt-titulos-h1-subtitle-font-family:\"Roboto\", sans-serif;--mt-titulos-h1-subtitle-font-weight:300;--mt-titulos-h1-subtitle-font-size:24px}.mt-titulo-h1__container.sc-mt-titulo-h1{padding:var(--mt-titulos-h1-line-padding);border-left:10px solid var(--mt-titulos-h1-line-color)}.mt-titulo-h1__pre-title.sc-mt-titulo-h1{color:var(--mt-titulos-h1-pre-title-color);font-family:var(--mt-titulos-h1-pre-title-font-family);font-weight:var(--mt-titulos-h1-pre-title-font-weight);font-size:var(--mt-titulos-h1-pre-title-font-size)}.mt-titulo-h1__title.sc-mt-titulo-h1{color:var(--mt-titulos-h1-title-color);font-family:var(--mt-titulos-h1-title-font-family);font-weight:var(--mt-titulos-h1-title-font-weight);font-size:var(--mt-titulos-h1-title-font-size);margin:var(--mt-titulos-h1-title-margin)}.mt-titulo-h1__subtitle.sc-mt-titulo-h1{color:var(--mt-titulos-h1-subtitle-color);font-family:var(--mt-titulos-h1-subtitle-font-family);font-weight:var(--mt-titulos-h1-subtitle-font-weight);font-size:var(--mt-titulos-h1-subtitle-font-size)}.sc-mt-titulo-h1-h{display:block}";

const TituloH1 = class {
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
        return (index.h(index.Host, { key: '2554e8a651b61ffa074d6c7ccb5c60b2f9c08b35', class: enums.generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-titulo-h1': true,
            }) }, markdown(produto, especialidade)));
    }
};
TituloH1.style = tituloH1Css;

exports.mt_titulo_h1 = TituloH1;
//# sourceMappingURL=mt-titulo-h1.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-h1.cjs.entry.js.map