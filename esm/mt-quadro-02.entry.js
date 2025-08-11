import { r as registerInstance, h, H as Host } from './index-Cs-n2LsI.js';
import { g as generateClasses } from './functions-B5UvSsrV.js';

const quadro02Css = ".sc-mt-quadro-02-h{--mt-quadro-02-left-margin:0 6px 0 0;--mt-quadro-02-text-color:var(--mt-color-quadros-fonte-02);--mt-quadro-02-text-font-family:\"Noto Sans\", sans-serif;--mt-quadro-02-text-font-weight:500;--mt-quadro-02-text-text-transform:none;--mt-quadro-02-text-font-size:16px;--mt-quadro-02-inner-container-padding:12px;--mt-quadro-02-inner-container-background-color:var(--mt-color-quadros-bg-02);display:block}.mt-quadro-02__container.sc-mt-quadro-02{display:flex;align-items:center}.mt-quadro-02__left.sc-mt-quadro-02{margin:var(--mt-quadro-02-left-margin)}.mt-quadro-02__inner-container.sc-mt-quadro-02{padding:var(--mt-quadro-02-inner-container-padding);background-color:var(--mt-quadro-02-inner-container-background-color);flex:1}.mt-quadro-02__text.sc-mt-quadro-02{color:var(--mt-quadro-02-text-color);font-family:var(--mt-quadro-02-text-font-family);font-weight:var(--mt-quadro-02-text-font-weight);text-transform:var(--mt-quadro-02-text-text-transform);font-size:var(--mt-quadro-02-text-font-size);line-height:1;margin:0}";

const Quadro02 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: 'c13f19221d7f0f20d54ba9d172cfe9c5d7764149', class: generateClasses(produto, especialidade, ano, {
                'mt-quadro-02': true,
            }) }, h("div", { key: '68f73cb3710aa3a89f4448c95aa3f12404f37c2c', class: "mt-quadro-02__container" }, h("div", { key: 'b452b83ae68ccf44efab9735017a533676b8b468', class: "mt-quadro-02__left" }, h("slot", { key: '6783fdcbfb70ed603906d6948e78a19877030d9d', name: "left" })), h("div", { key: '30c277151ffa5f9f273444c3db0a18876cbdc0fc', class: "mt-quadro-02__inner-container" }, h("p", { key: '59aac554f7efeca0cb9df5d6d34c5c41dfdc159b', class: "mt-quadro-02__text" }, h("slot", { key: '0053cd6b47cb176dc71f5b7140f04d0851e82e4e' }))))));
    }
};
Quadro02.style = quadro02Css;

export { Quadro02 as mt_quadro_02 };
//# sourceMappingURL=mt-quadro-02.entry.js.map

//# sourceMappingURL=mt-quadro-02.entry.js.map