'use strict';

var index = require('./index-D-YE1rsj.js');
var enums = require('./enums-Bjj1_LNU.js');

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === enums.MtProdutosEnum.MEDCURSO) {
        if (especialidade === enums.MtEspecialidadesEnum.NEF) {
            return (index.h("p", { class: "mt-paragrafo__text" },
                index.h("slot", null)));
        }
    }
    return (index.h("p", null,
        index.h("slot", null)));
};

const paragrafoCss = ".sc-mt-paragrafo-h{--mt-paragrafo-text-color:var(--mt-color-textos-paragrafo-fonte);--mt-paragrafo-text-font-family:\"Noto Sans\", sans-serif;--mt-paragrafo-text-font-weight:400;--mt-paragrafo-text-font-size:16px;--mt-paragrafo-strong-color:var(--mt-color-textos-paragrafo-strong);--mt-paragrafo-strong-font-weight:700;--mt-paragrafo-strong-text-transform:uppercase;--mt-paragrafo-strong-font-style:italic;--mt-paragrafo-underline-text-decoration-color:var(--mt-color-textos-paragrafo-underline)}.mt-paragrafo__text.sc-mt-paragrafo{color:var(--mt-paragrafo-text-color);font-family:var(--mt-paragrafo-text-font-family);font-weight:var(--mt-paragrafo-text-font-weight);font-size:var(--mt-paragrafo-text-font-size);line-height:1;margin:0}.sc-mt-paragrafo-s strong{color:var(--mt-paragrafo-strong-color);font-weight:var(--mt-paragrafo-strong-font-weight) !important;text-transform:var(--mt-paragrafo-strong-text-transform);font-style:var(--mt-paragrafo-strong-font-style) !important}.sc-mt-paragrafo-s u{text-decoration-color:var(--mt-paragrafo-underline-text-decoration-color)}.sc-mt-paragrafo-h{display:block}";

const Paragrafo = class {
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
        return (index.h(index.Host, { key: '8648b120d74193cc04bcf4a68b9aae19f01dd05b', class: enums.generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-paragrafo': true,
            }) }, markdown(produto, especialidade)));
    }
};
Paragrafo.style = paragrafoCss;

exports.mt_paragrafo = Paragrafo;
//# sourceMappingURL=mt-paragrafo.entry.cjs.js.map

//# sourceMappingURL=mt-paragrafo.cjs.entry.js.map