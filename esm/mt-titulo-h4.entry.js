import { h, r as registerInstance, H as Host } from './index-Cs-n2LsI.js';
import { M as MtProdutosEnum, a as MtEspecialidadesEnum, g as generateClasses } from './enums-M0FWbnS6.js';

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("h4", { class: "mt-titulo-h4__text" },
                h("slot", null)));
        }
    }
    return (h("h4", null,
        h("slot", null)));
};

const tituloH4Css = "@charset \"UTF-8\";.sc-mt-titulo-h4-h{--mt-titulo-h4-text-color:var(--mt-color-titulos-h4-fonte);--mt-titulo-h4-text-font-family:\"Roboto\", sans-serif;--mt-titulo-h4-text-font-weight:900;--mt-titulo-h4-text-font-size:12px;--mt-titulo-h4-text-content:\"▶\"}.mt-titulo-h4__text.sc-mt-titulo-h4{color:var(--mt-titulo-h4-text-color);font-family:var(--mt-titulo-h4-text-font-family);font-weight:var(--mt-titulo-h4-text-font-weight);font-size:var(--mt-titulo-h4-text-font-size)}.mt-titulo-h4__text.sc-mt-titulo-h4::before{content:var(--mt-titulo-h4-text-content);color:inherit}.sc-mt-titulo-h4-h{display:block}";

const TituloH4 = class {
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
        return (h(Host, { key: '0cf03bacdb99684de6bb95bdba14b2310e5d8336', class: generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-titulo-h4': true,
            }) }, markdown(produto, especialidade)));
    }
};
TituloH4.style = tituloH4Css;

export { TituloH4 as mt_titulo_h4 };
//# sourceMappingURL=mt-titulo-h4.entry.js.map

//# sourceMappingURL=mt-titulo-h4.entry.js.map