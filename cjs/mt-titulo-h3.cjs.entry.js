'use strict';

var index = require('./index-D-YE1rsj.js');
var functions = require('./functions-DWyFPlQy.js');

const tituloH3Css = ".sc-mt-titulo-h3-h{--mt-titulo-h3-text-color:var(--mt-color-titulo-h3-fonte);--mt-titulo-h3-text-font-family:\"Roboto\", sans-serif;--mt-titulo-h3-text-font-weight:900;--mt-titulo-h3-text-text-transform:uppercase;--mt-titulo-h3-text-font-size:14px;--mt-titulo-h3-line-color:var(--mt-color-titulo-h3-linha);--mt-titulo-h3-line-width:100%;--mt-titulo-h3-line-height:4px;--mt-titulo-h3-line-margin:0 0 2px 0;display:block}.mt-titulo-h3__container.sc-mt-titulo-h3{display:flex;flex-direction:column}.mt-titulo-h3__line.sc-mt-titulo-h3{margin:var(--mt-titulo-h3-line-margin);background-color:var(--mt-titulo-h3-line-color);width:var(--mt-titulo-h3-line-width);height:var(--mt-titulo-h3-line-height)}.mt-titulo-h3__text.sc-mt-titulo-h3{color:var(--mt-titulo-h3-text-color);font-family:var(--mt-titulo-h3-text-font-family);font-weight:var(--mt-titulo-h3-text-font-weight);text-transform:var(--mt-titulo-h3-text-text-transform);font-size:var(--mt-titulo-h3-text-font-size);line-height:1;margin:0}";

const TituloH3 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (index.h(index.Host, { key: 'ef172e40e5f19da01e900660f365d9ce57b1944b', class: functions.generateClasses(produto, especialidade, ano, {
                'mt-titulo-h3': true,
            }) }, index.h("div", { key: 'db72df7ebc7de3dd3dd19d6e4bac9982945ef8cb', class: "mt-titulo-h3__container" }, index.h("div", { key: '0147d245d5136655d75333924b12eca0bb690af0', class: "mt-titulo-h3__line" }), index.h("h3", { key: '9ada7a1a9946a497419615cbdc24f983452f1387', class: "mt-titulo-h3__text" }, index.h("slot", { key: '5cd4692423e528da53a0f22f6823071c59bc940e' })))));
    }
};
TituloH3.style = tituloH3Css;

exports.mt_titulo_h3 = TituloH3;
//# sourceMappingURL=mt-titulo-h3.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-h3.cjs.entry.js.map