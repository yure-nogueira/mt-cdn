'use strict';

var index = require('./index-D-YE1rsj.js');
var functions = require('./functions-DWyFPlQy.js');

const tituloH2Css = ".sc-mt-titulo-h2-h{--mt-titulo-h2-text-color:var(--mt-color-titulo-h2-fonte);--mt-titulo-h2-text-font-family:\"Roboto\", sans-serif;--mt-titulo-h2-text-font-weight:900;--mt-titulo-h2-text-text-transform:uppercase;--mt-titulo-h2-text-font-size:16px;--mt-titulo-h2-line-color:var(--mt-color-titulo-h2-linha);--mt-titulo-h2-line-width:100%;--mt-titulo-h2-line-height:4px;--mt-titulo-h2-line-margin:0 0 2px 0;display:block}.mt-titulo-h2__container.sc-mt-titulo-h2{display:flex;flex-direction:column}.mt-titulo-h2__line.sc-mt-titulo-h2{margin:var(--mt-titulo-h2-line-margin);background-color:var(--mt-titulo-h2-line-color);width:var(--mt-titulo-h2-line-width);height:var(--mt-titulo-h2-line-height)}.mt-titulo-h2__text.sc-mt-titulo-h2{color:var(--mt-titulo-h2-text-color);font-family:var(--mt-titulo-h2-text-font-family);font-weight:var(--mt-titulo-h2-text-font-weight);text-transform:var(--mt-titulo-h2-text-text-transform);font-size:var(--mt-titulo-h2-text-font-size);line-height:1;margin:0}";

const TituloH2 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (index.h(index.Host, { key: '2e4e28f973ea6c7971b0a1c44a8c9c4493d30993', class: functions.generateClasses(produto, especialidade, ano, {
                'mt-titulo-h2': true,
            }) }, index.h("div", { key: 'bffedd10cdf503254568104fa05237f19d5daee1', class: "mt-titulo-h2__container" }, index.h("div", { key: '5b995ec40f1795240bc984d86a6b716c5301865c', class: "mt-titulo-h2__line" }), index.h("h2", { key: 'b6cacd8eeceeeaf914f84d61a703f488afb7aae9', class: "mt-titulo-h2__text" }, index.h("slot", { key: 'f0d7be531e1a53a5a140c3b518bad2ca1bdf23b0' })))));
    }
};
TituloH2.style = tituloH2Css;

exports.mt_titulo_h2 = TituloH2;
//# sourceMappingURL=mt-titulo-h2.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-h2.cjs.entry.js.map