'use strict';

var index = require('./index-D-YE1rsj.js');
var enums = require('./enums-Bjj1_LNU.js');

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === enums.MtProdutosEnum.MEDCURSO) {
        if (especialidade === enums.MtEspecialidadesEnum.NEF) {
            return (index.h("div", { class: "mt-quadro-02__container" },
                index.h("div", { class: "mt-quadro-02__left" },
                    index.h("slot", { name: "left" })),
                index.h("div", { class: "mt-quadro-02__inner-container" },
                    index.h("p", { class: "mt-quadro-02__text" },
                        index.h("slot", null)))));
        }
    }
    return (index.h("p", null,
        index.h("slot", null)));
};

const quadro02Css = ".sc-mt-quadro-02-h{--mt-quadro-02-left-margin:0 6px 0 0;--mt-quadro-02-text-color:var(--mt-color-quadros-fonte-02);--mt-quadro-02-text-font-family:\"Noto Sans\", sans-serif;--mt-quadro-02-text-font-weight:500;--mt-quadro-02-text-font-size:14px;--mt-quadro-02-inner-container-padding:12px;--mt-quadro-02-inner-container-background-color:var(--mt-color-quadros-bg-02);display:block}.mt-quadro-02__container.sc-mt-quadro-02{display:flex;align-items:center}.mt-quadro-02__left.sc-mt-quadro-02{margin:var(--mt-quadro-02-left-margin)}.mt-quadro-02__inner-container.sc-mt-quadro-02{padding:var(--mt-quadro-02-inner-container-padding);background-color:var(--mt-quadro-02-inner-container-background-color);flex:1}.mt-quadro-02__text.sc-mt-quadro-02{color:var(--mt-quadro-02-text-color);font-family:var(--mt-quadro-02-text-font-family);font-weight:var(--mt-quadro-02-text-font-weight);font-size:var(--mt-quadro-02-text-font-size)}.sc-mt-quadro-02-h{display:block}";

const Quadro02 = class {
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
        return (index.h(index.Host, { key: '7f078e6c3dce45c279d198521915e4206d65076c', class: enums.generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-quadro-02': true,
            }) }, markdown(produto, especialidade)));
    }
};
Quadro02.style = quadro02Css;

exports.mt_quadro_02 = Quadro02;
//# sourceMappingURL=mt-quadro-02.entry.cjs.js.map

//# sourceMappingURL=mt-quadro-02.cjs.entry.js.map