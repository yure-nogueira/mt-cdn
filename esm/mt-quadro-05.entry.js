import { h, r as registerInstance, H as Host } from './index-Cs-n2LsI.js';
import { M as MtProdutosEnum, a as MtEspecialidadesEnum, g as generateClasses } from './enums-M0FWbnS6.js';

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("div", { class: "mt-quadro-05__container" },
                h("h3", { class: "mt-quadro-05__title" },
                    h("slot", { name: "title" })),
                h("p", { class: "mt-quadro-05__text" },
                    h("slot", null))));
        }
    }
    return (h("p", null,
        h("slot", null)));
};

const quadro05Css = ".sc-mt-quadro-05-h{--mt-quadro-05-padding:12px;--mt-quadro-05-background-color:var(--mt-color-quadros-bg-03);--mt-quadro-05-title-color:var(--mt-color-quadros-fonte-02);--mt-quadro-05-title-font-family:\"Noto Sans\", sans-serif;--mt-quadro-05-title-font-weight:700;--mt-quadro-05-title-font-size:16px;--mt-quadro-05-title-margin:0 0 12px 0;--mt-quadro-05-text-color:var(--mt-color-quadros-fonte-02);--mt-quadro-05-text-font-family:\"Noto Sans\", sans-serif;--mt-quadro-05-text-font-weight:400;--mt-quadro-05-text-font-size:16px}.mt-quadro-05__container.sc-mt-quadro-05{padding:var(--mt-quadro-05-padding);background-color:var(--mt-quadro-05-background-color)}.mt-quadro-05__title.sc-mt-quadro-05{color:var(--mt-quadro-05-title-color);font-family:var(--mt-quadro-05-title-font-family);font-weight:var(--mt-quadro-05-title-font-weight);font-size:var(--mt-quadro-05-title-font-size);margin:var(--mt-quadro-05-title-margin)}.mt-quadro-05__text.sc-mt-quadro-05{color:var(--mt-quadro-05-text-color);font-family:var(--mt-quadro-05-text-font-family);font-weight:var(--mt-quadro-05-text-font-weight);font-size:var(--mt-quadro-05-text-font-size)}.sc-mt-quadro-05-h{display:block}";

const Quadro05 = class {
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
        return (h(Host, { key: '50ea74c1ddae4f552b719557fd25868d1a8a1d8e', class: generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-quadro-05': true,
            }) }, markdown(produto, especialidade)));
    }
};
Quadro05.style = quadro05Css;

export { Quadro05 as mt_quadro_05 };
//# sourceMappingURL=mt-quadro-05.entry.js.map

//# sourceMappingURL=mt-quadro-05.entry.js.map