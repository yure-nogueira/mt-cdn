'use strict';

var index = require('./index-D-YE1rsj.js');
var enums = require('./enums-Bjj1_LNU.js');

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === enums.MtProdutosEnum.MEDCURSO) {
        if (especialidade === enums.MtEspecialidadesEnum.NEF) {
            return (index.h("div", { class: "mt-quadro-03__container" },
                index.h("h3", { class: "mt-quadro-03__title" },
                    index.h("slot", { name: "title" })),
                index.h("p", { class: "mt-quadro-03__text" },
                    index.h("slot", { name: "text" })),
                index.h("div", { class: "mt-quadro-03__list" },
                    index.h("slot", { name: "list" }))));
        }
    }
    return (index.h("p", null,
        index.h("slot", null)));
};

const quadro03Css = "@charset \"UTF-8\";.sc-mt-quadro-03-h{--mt-quadro-03-container-padding:12px;--mt-quadro-03-container-border:2px solid var(--mt-color-quadros-linha-01);--mt-quadro-03-title-color:var(--mt-color-quadros-fonte-02);--mt-quadro-03-title-font-family:\"Noto Sans\", sans-serif;--mt-quadro-03-title-font-weight:700;--mt-quadro-03-title-font-size:16px;--mt-quadro-03-title-margin:0 0 12px 0;--mt-quadro-03-text-color:var(--mt-color-quadros-fonte-02);--mt-quadro-03-text-font-family:\"Noto Sans\", sans-serif;--mt-quadro-03-text-font-weight:400;--mt-quadro-03-text-font-size:16px;--mt-quadro-03-list-color:var(--mt-color-quadros-fonte-02);--mt-quadro-03-list-font-family:\"Noto Sans\", sans-serif;--mt-quadro-03-list-font-weight:400;--mt-quadro-03-list-font-size:16px;--mt-quadro-03-list-margin:12px 0 0 0;--mt-quadro-03-item-dot-font-size:10px;--mt-quadro-03-item-dot-padding:0 8px 0 0;--mt-quadro-03-item-dot-content:\"●\"}.mt-quadro-03__container.sc-mt-quadro-03{padding:var(--mt-quadro-03-container-padding);border:var(--mt-quadro-03-container-border)}.mt-quadro-03__title.sc-mt-quadro-03{color:var(--mt-quadro-03-title-color);font-family:var(--mt-quadro-03-title-font-family);font-weight:var(--mt-quadro-03-title-font-weight);font-size:var(--mt-quadro-03-title-font-size);margin:var(--mt-quadro-03-title-margin)}.mt-quadro-03__text.sc-mt-quadro-03{color:var(--mt-quadro-03-text-color);font-family:var(--mt-quadro-03-text-font-family);font-weight:var(--mt-quadro-03-text-font-weight);font-size:var(--mt-quadro-03-text-font-size)}.sc-mt-quadro-03-s>[slot=list] li{color:var(--mt-quadro-03-list-color);font-family:var(--mt-quadro-03-list-font-family);font-weight:var(--mt-quadro-03-list-font-weight);font-size:var(--mt-quadro-03-list-font-size);margin:var(--mt-quadro-03-list-margin);display:flex;align-items:center}.sc-mt-quadro-03-s>[slot=list] li::before{font-size:var(--mt-quadro-03-item-dot-font-size);padding:var(--mt-quadro-03-item-dot-padding);content:var(--mt-quadro-03-item-dot-content)}.sc-mt-quadro-03-h{display:block}";

const Quadro03 = class {
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
        return (index.h(index.Host, { key: '65b3cd48b750a1c668f3dc396ff56984d9c4c7d1', class: enums.generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-quadro-03': true,
            }) }, markdown(produto, especialidade)));
    }
};
Quadro03.style = quadro03Css;

exports.mt_quadro_03 = Quadro03;
//# sourceMappingURL=mt-quadro-03.entry.cjs.js.map

//# sourceMappingURL=mt-quadro-03.cjs.entry.js.map