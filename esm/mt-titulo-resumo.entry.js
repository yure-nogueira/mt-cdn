import { h, r as registerInstance, H as Host } from './index-Cs-n2LsI.js';
import { M as MtProdutosEnum, a as MtEspecialidadesEnum, g as generateClasses } from './enums-M0FWbnS6.js';

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("h6", { class: "mt-titulo-resumo__text" },
                h("slot", null)));
        }
    }
    return (h("h6", null,
        h("slot", null)));
};

const tituloResumoCss = ".sc-mt-titulo-resumo-h{--mt-titulo-resumo-text-color:var(--mt-color-titulos-resumo-fonte);--mt-titulo-resumo-text-font-family:\"Roboto\", sans-serif;--mt-titulo-resumo-text-font-weight:900;--mt-titulo-resumo-text-text-transform:uppercase;--mt-titulo-resumo-text-font-size:14px}.mt-titulo-resumo__text.sc-mt-titulo-resumo{color:var(--mt-titulo-resumo-text-color);font-family:var(--mt-titulo-resumo-text-font-family);font-weight:var(--mt-titulo-resumo-text-font-weight);text-transform:var(--mt-titulo-resumo-text-text-transform);font-size:var(--mt-titulo-resumo-text-font-size)}.sc-mt-titulo-resumo-h{display:block}";

const TituloResumo = class {
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
        return (h(Host, { key: '0d3553e1c1323480a4a775d34ce8ce55315075ae', class: generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-titulo-resumo': true,
            }) }, markdown(produto, especialidade)));
    }
};
TituloResumo.style = tituloResumoCss;

export { TituloResumo as mt_titulo_resumo };
//# sourceMappingURL=mt-titulo-resumo.entry.js.map

//# sourceMappingURL=mt-titulo-resumo.entry.js.map