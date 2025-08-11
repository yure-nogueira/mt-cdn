import { r as registerInstance, h, H as Host } from './index-Cs-n2LsI.js';
import { g as generateClasses } from './functions-B5UvSsrV.js';

const quadro05Css = ".sc-mt-quadro-05-h{--mt-quadro-05-padding:12px;--mt-quadro-05-background-color:var(--mt-color-quadros-bg-03);--mt-quadro-05-title-color:var(--mt-color-quadros-fonte-02);--mt-quadro-05-title-font-family:\"Noto Sans\", sans-serif;--mt-quadro-05-title-font-weight:700;--mt-quadro-05-title-text-transform:none;--mt-quadro-05-title-font-size:16px;--mt-quadro-05-title-margin:0 0 12px 0;--mt-quadro-05-text-color:var(--mt-color-quadros-fonte-02);--mt-quadro-05-text-font-family:\"Noto Sans\", sans-serif;--mt-quadro-05-text-font-weight:400;--mt-quadro-05-text-text-transform:none;--mt-quadro-05-text-font-size:16px;display:block}.mt-quadro-05__container.sc-mt-quadro-05{padding:var(--mt-quadro-05-padding);background-color:var(--mt-quadro-05-background-color)}.mt-quadro-05__title.sc-mt-quadro-05{color:var(--mt-quadro-05-title-color);font-family:var(--mt-quadro-05-title-font-family);font-weight:var(--mt-quadro-05-title-font-weight);text-transform:var(--mt-quadro-05-title-text-transform);font-size:var(--mt-quadro-05-title-font-size);line-height:1;margin:var(--mt-quadro-05-title-margin)}.mt-quadro-05__text.sc-mt-quadro-05{color:var(--mt-quadro-05-text-color);font-family:var(--mt-quadro-05-text-font-family);font-weight:var(--mt-quadro-05-text-font-weight);text-transform:var(--mt-quadro-05-text-text-transform);font-size:var(--mt-quadro-05-text-font-size);line-height:1;margin:0}";

const Quadro05 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: '44733272aec6ca01a77ab16ec00c98a62d674d93', class: generateClasses(produto, especialidade, ano, {
                'mt-quadro-05': true,
            }) }, h("div", { key: 'e5d90ac6908d28fadde296dce84491855830cdf5', class: "mt-quadro-05__container" }, h("h3", { key: '26380ef662b09b73aab128b5a3852f1350bfc567', class: "mt-quadro-05__title" }, h("slot", { key: '084fbffbf30256800a739dba9f91ae952e51af02', name: "title" })), h("p", { key: '2f4e7fcfec5013c2efbf4dbf7172c5f6e0aa8fa5', class: "mt-quadro-05__text" }, h("slot", { key: '2a71b1769ff87fb264c9ee9817e1b2fa267b8c71', name: "text" })))));
    }
};
Quadro05.style = quadro05Css;

export { Quadro05 as mt_quadro_05 };
//# sourceMappingURL=mt-quadro-05.entry.js.map

//# sourceMappingURL=mt-quadro-05.entry.js.map