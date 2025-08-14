import { h, r as registerInstance, H as Host } from './index-Cs-n2LsI.js';
import { M as MtProdutosEnum, a as MtEspecialidadesEnum, g as generateClasses } from './enums-M0FWbnS6.js';

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("h2", { class: "mt-titulo-h2__text" },
                h("slot", null)));
        }
    }
    return (h("h2", null,
        h("slot", null)));
};

const tituloH2Css = ".sc-mt-titulo-h2-h{--mt-titulo-h2-text-color:var(--mt-color-titulos-h2-fonte);--mt-titulo-h2-text-font-family:\"Roboto\", sans-serif;--mt-titulo-h2-text-font-weight:900;--mt-titulo-h2-text-font-size:16px;--mt-titulo-h2-line-color:var(--mt-color-titulos-h2-linha);--mt-titulo-h2-line-height:4px;--mt-titulo-h2-line-padding:4px 0 0 0}.mt-titulo-h2__text.sc-mt-titulo-h2{color:var(--mt-titulo-h2-text-color);font-family:var(--mt-titulo-h2-text-font-family);font-weight:var(--mt-titulo-h2-text-font-weight);font-size:var(--mt-titulo-h2-text-font-size);padding:var(--mt-titulo-h2-line-padding);border-top:var(--mt-titulo-h2-line-height) solid var(--mt-titulo-h2-line-color)}.sc-mt-titulo-h2-h{display:block}";

const TituloH2 = class {
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
        return (h(Host, { key: '5de73b8a469bf5bdbd72bd7385fb975301da3ed4', class: generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-titulo-h2': true,
            }) }, markdown(produto, especialidade)));
    }
};
TituloH2.style = tituloH2Css;

export { TituloH2 as mt_titulo_h2 };
//# sourceMappingURL=mt-titulo-h2.entry.js.map

//# sourceMappingURL=mt-titulo-h2.entry.js.map