'use strict';

var index = require('./index-D-YE1rsj.js');
var functions = require('./functions-DWyFPlQy.js');

const quadro04Css = ".sc-mt-quadro-04-h{--mt-quadro-04-border:2px dotted var(--mt-color-quadros-linha-01);--mt-quadro-04-left-margin:0 6px 0 0;--mt-quadro-04-inner-container-padding:12px;--mt-quadro-04-text-color:var(--mt-color-quadros-fonte-02);--mt-quadro-04-text-font-family:\"Noto Sans\", sans-serif;--mt-quadro-04-text-font-weight:500;--mt-quadro-04-text-text-transform:none;--mt-quadro-04-text-font-size:16px;--mt-quadro-04-text-background-color:var(--mt-color-quadros-bg-02);display:block}.mt-quadro-04__container.sc-mt-quadro-04{background-color:var(--mt-quadro-04-background-color);display:flex;align-items:center;border:var(--mt-quadro-04-border)}.mt-quadro-04__left.sc-mt-quadro-04{margin:var(--mt-quadro-04-left-margin)}.mt-quadro-04__inner-container.sc-mt-quadro-04{padding:var(--mt-quadro-04-inner-container-padding)}.mt-quadro-04__text.sc-mt-quadro-04{color:var(--mt-quadro-04-text-color);font-family:var(--mt-quadro-04-text-font-family);font-weight:var(--mt-quadro-04-text-font-weight);text-transform:var(--mt-quadro-04-text-text-transform);font-size:var(--mt-quadro-04-text-font-size);line-height:1;margin:0}";

const Quadro04 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (index.h(index.Host, { key: '47af191a77d77f8e4d22076c7e3f31671e9fca53', class: functions.generateClasses(produto, especialidade, ano, {
                'mt-quadro-04': true,
            }) }, index.h("div", { key: '0e08ef662a3c66078722fa813e22f8f45dd57f21', class: "mt-quadro-04__container" }, index.h("div", { key: '9b05b677f9216fcf33718e34aeccb6c2d01b64d2', class: "mt-quadro-04__left" }, index.h("slot", { key: 'c222c4ffb8c396c76c47667bce547e84290f93f6', name: "left" })), index.h("div", { key: '5c17e86f89e024bc7a9031dc7cf251b1d8568322', class: "mt-quadro-04__inner-container" }, index.h("p", { key: 'b52d2a438218338bc680d29c6fcaaa5ed68c8912', class: "mt-quadro-04__text" }, index.h("slot", { key: 'a066a2f1e535c2e0f029831399ff52af3a81e9ee' }))))));
    }
};
Quadro04.style = quadro04Css;

exports.mt_quadro_04 = Quadro04;
//# sourceMappingURL=mt-quadro-04.entry.cjs.js.map

//# sourceMappingURL=mt-quadro-04.cjs.entry.js.map