import { h, r as registerInstance, H as Host } from './index-Cs-n2LsI.js';
import { M as MtProdutosEnum, a as MtEspecialidadesEnum, g as generateClasses } from './enums-M0FWbnS6.js';

const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("div", { class: "mt-quadro-01__container" },
                h("span", { class: "mt-quadro-01__title" },
                    h("slot", { name: "title" })),
                h("p", { class: "mt-quadro-01__text" },
                    h("slot", null))));
        }
    }
    return (h("p", null,
        h("slot", null)));
};

const quadro01Css = ".sc-mt-quadro-01-h{--mt-quadro-01-span-color:var(--mt-color-quadros-fonte-01);--mt-quadro-01-span-font-family:\"Noto Sans\", sans-serif;--mt-quadro-01-span-font-weight:900;--mt-quadro-01-span-font-size:14px;--mt-quadro-01-span-padding:6px;--mt-quadro-01-span-background-color:var(--mt-color-quadros-bg-01);--mt-quadro-01-container-border:2px solid var(--mt-color-quadros-fonte-02);--mt-quadro-01-text-color:var(--mt-color-quadros-fonte-02);--mt-quadro-01-text-font-family:\"Noto Sans\", sans-serif;--mt-quadro-01-text-font-weight:500;--mt-quadro-01-text-font-size:16px;--mt-quadro-01-text-padding:6px;display:block}.mt-quadro-01__container.sc-mt-quadro-01{border-left:var(--mt-quadro-01-container-border)}.mt-quadro-01__title.sc-mt-quadro-01{color:var(--mt-quadro-01-span-color);font-family:var(--mt-quadro-01-span-font-family);font-weight:var(--mt-quadro-01-span-font-weight);font-size:var(--mt-quadro-01-span-font-size);padding:var(--mt-quadro-01-span-padding);border-left:var(--mt-quadro-01-container-border);background-color:var(--mt-quadro-01-span-background-color);display:inline-block}.mt-quadro-01__text.sc-mt-quadro-01{color:var(--mt-quadro-01-text-color);font-family:var(--mt-quadro-01-text-font-family);font-weight:var(--mt-quadro-01-text-font-weight);font-size:var(--mt-quadro-01-text-font-size);padding:var(--mt-quadro-01-text-padding)}.sc-mt-quadro-01-h{display:block}";

const Quadro01 = class {
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
        return (h(Host, { key: '9270114a5d10a56fe6cd47f5b49ae846f49ecbaf', class: generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-quadro-01': true,
            }) }, markdown(produto, especialidade)));
    }
};
Quadro01.style = quadro01Css;

export { Quadro01 as mt_quadro_01 };
//# sourceMappingURL=mt-quadro-01.entry.js.map

//# sourceMappingURL=mt-quadro-01.entry.js.map