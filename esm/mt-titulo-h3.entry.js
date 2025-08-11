import { r as registerInstance, h, H as Host } from './index-Cs-n2LsI.js';
import { g as generateClasses } from './functions-B5UvSsrV.js';

const tituloH3Css = ".sc-mt-titulo-h3-h{--mt-titulo-h3-text-color:var(--mt-color-titulo-h3-fonte);--mt-titulo-h3-text-font-family:\"Roboto\", sans-serif;--mt-titulo-h3-text-font-weight:900;--mt-titulo-h3-text-text-transform:uppercase;--mt-titulo-h3-text-font-size:14px;--mt-titulo-h3-line-color:var(--mt-color-titulo-h3-linha);--mt-titulo-h3-line-width:100%;--mt-titulo-h3-line-height:4px;--mt-titulo-h3-line-margin:0 0 2px 0;display:block}.mt-titulo-h3__container.sc-mt-titulo-h3{display:flex;flex-direction:column}.mt-titulo-h3__line.sc-mt-titulo-h3{margin:var(--mt-titulo-h3-line-margin);background-color:var(--mt-titulo-h3-line-color);width:var(--mt-titulo-h3-line-width);height:var(--mt-titulo-h3-line-height)}.mt-titulo-h3__text.sc-mt-titulo-h3{color:var(--mt-titulo-h3-text-color);font-family:var(--mt-titulo-h3-text-font-family);font-weight:var(--mt-titulo-h3-text-font-weight);text-transform:var(--mt-titulo-h3-text-text-transform);font-size:var(--mt-titulo-h3-text-font-size);line-height:1;margin:0}";

const TituloH3 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: 'ef172e40e5f19da01e900660f365d9ce57b1944b', class: generateClasses(produto, especialidade, ano, {
                'mt-titulo-h3': true,
            }) }, h("div", { key: 'db72df7ebc7de3dd3dd19d6e4bac9982945ef8cb', class: "mt-titulo-h3__container" }, h("div", { key: '0147d245d5136655d75333924b12eca0bb690af0', class: "mt-titulo-h3__line" }), h("h3", { key: '9ada7a1a9946a497419615cbdc24f983452f1387', class: "mt-titulo-h3__text" }, h("slot", { key: '5cd4692423e528da53a0f22f6823071c59bc940e' })))));
    }
};
TituloH3.style = tituloH3Css;

export { TituloH3 as mt_titulo_h3 };
//# sourceMappingURL=mt-titulo-h3.entry.js.map

//# sourceMappingURL=mt-titulo-h3.entry.js.map