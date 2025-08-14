import { h, r as registerInstance, H as Host } from './index-Cs-n2LsI.js';
import { M as MtProdutosEnum, a as MtEspecialidadesEnum, g as generateClasses } from './enums-M0FWbnS6.js';

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("h3", { class: "mt-titulo-h3__text" },
                h("slot", null)));
        }
    }
    return (h("h3", null,
        h("slot", null)));
};

const tituloH3Css = ".sc-mt-titulo-h3-h{--mt-titulo-h3-text-color:var(--mt-color-titulos-h3-fonte);--mt-titulo-h3-text-font-family:\"Roboto\", sans-serif;--mt-titulo-h3-text-font-weight:900;--mt-titulo-h3-text-font-size:14px;--mt-titulo-h3-line-color:var(--mt-color-titulos-h2-linha);--mt-titulo-h3-line-height:4px;--mt-titulo-h3-line-padding:4px 0 0 0}.mt-titulo-h3__text.sc-mt-titulo-h3{color:var(--mt-titulo-h3-text-color);font-family:var(--mt-titulo-h3-text-font-family);font-weight:var(--mt-titulo-h3-text-font-weight);font-size:var(--mt-titulo-h3-text-font-size);padding:var(--mt-titulo-h3-line-padding);border-top:var(--mt-titulo-h3-line-height) solid var(--mt-titulo-h3-line-color)}.sc-mt-titulo-h3-h{display:block}";

const TituloH3 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    produto;
    apostila;
    ano;
    especialidade;
    parte;
    render() {
        const { produto, especialidade, apostila, parte, ano } = this;
        return (h(Host, { key: '2ccb1a0a70928d9446271dc43e63814c73c30bc2', class: generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-titulo-h3': true,
            }) }, markdown(produto, especialidade)));
    }
};
TituloH3.style = tituloH3Css;

export { TituloH3 as mt_titulo_h3 };
//# sourceMappingURL=mt-titulo-h3.entry.js.map

//# sourceMappingURL=mt-titulo-h3.entry.js.map