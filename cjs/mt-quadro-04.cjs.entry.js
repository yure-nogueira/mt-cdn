'use strict';

var index = require('./index-D-YE1rsj.js');
var enums = require('./enums-Bjj1_LNU.js');

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === enums.MtProdutosEnum.MEDCURSO) {
        if (especialidade === enums.MtEspecialidadesEnum.NEF) {
            return (index.h("div", { class: "mt-quadro-04__container" },
                index.h("div", { class: "mt-quadro-04__left" },
                    index.h("slot", { name: "left" })),
                index.h("div", { class: "mt-quadro-04__inner-container" },
                    index.h("p", { class: "mt-quadro-04__text" },
                        index.h("slot", null)))));
        }
    }
    return (index.h("p", null,
        index.h("slot", null)));
};

const quadro04Css = ".sc-mt-quadro-04-h{--mt-quadro-04-background-color:var(--mt-color-quadros-bg-02);--mt-quadro-04-border:2px dotted var(--mt-color-quadros-linha-01);--mt-quadro-04-left-margin:0 6px 0 0;--mt-quadro-04-inner-container-padding:12px;--mt-quadro-04-text-color:var(--mt-color-quadros-fonte-02);--mt-quadro-04-text-font-family:\"Noto Sans\", sans-serif;--mt-quadro-04-text-font-weight:500;--mt-quadro-04-text-font-size:16px;--mt-quadro-04-text-background-color:var(--mt-color-quadros-bg-02);display:block}.mt-quadro-04__container.sc-mt-quadro-04{background-color:var(--mt-quadro-04-background-color);display:flex;align-items:center;border:var(--mt-quadro-04-border)}.mt-quadro-04__left.sc-mt-quadro-04{margin:var(--mt-quadro-04-left-margin)}.mt-quadro-04__inner-container.sc-mt-quadro-04{padding:var(--mt-quadro-04-inner-container-padding)}.mt-quadro-04__text.sc-mt-quadro-04{color:var(--mt-quadro-04-text-color);font-family:var(--mt-quadro-04-text-font-family);font-weight:var(--mt-quadro-04-text-font-weight);font-size:var(--mt-quadro-04-text-font-size)}.sc-mt-quadro-04-h{display:block}";

const Quadro04 = class {
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
        return (index.h(index.Host, { key: '9b93a8c267a56ed0678510a656bd05ca1c2eb54a', class: enums.generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-quadro-04': true,
            }) }, markdown(produto, especialidade)));
    }
};
Quadro04.style = quadro04Css;

exports.mt_quadro_04 = Quadro04;
//# sourceMappingURL=mt-quadro-04.entry.cjs.js.map

//# sourceMappingURL=mt-quadro-04.cjs.entry.js.map