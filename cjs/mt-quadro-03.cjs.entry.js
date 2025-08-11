'use strict';

var index = require('./index-D-YE1rsj.js');
var functions = require('./functions-DWyFPlQy.js');

const quadro03Css = ".sc-mt-quadro-03-h{--mt-quadro-03-container-padding:12px;--mt-quadro-03-container-border:2px solid var(--mt-color-quadros-linha-01);--mt-quadro-03-title-color:var(--mt-color-quadros-fonte-02);--mt-quadro-03-title-font-family:\"Noto Sans\", sans-serif;--mt-quadro-03-title-font-weight:700;--mt-quadro-03-title-text-transform:none;--mt-quadro-03-title-font-size:16px;--mt-quadro-03-title-margin:0 0 12px 0;--mt-quadro-03-text-color:var(--mt-color-quadros-fonte-02);--mt-quadro-03-text-font-family:\"Noto Sans\", sans-serif;--mt-quadro-03-text-font-weight:400;--mt-quadro-03-text-text-transform:none;--mt-quadro-03-text-font-size:16px;--mt-quadro-03-list-color:var(--mt-color-quadros-fonte-02);--mt-quadro-03-list-font-family:\"Noto Sans\", sans-serif;--mt-quadro-03-list-font-weight:400;--mt-quadro-03-list-text-transform:none;--mt-quadro-03-list-font-size:16px;--mt-quadro-03-list-margin:12px 0 0 0;--mt-quadro-03-list-padding:0 0 0 20px;display:block}.mt-quadro-03__container.sc-mt-quadro-03{padding:var(--mt-quadro-03-container-padding);border:var(--mt-quadro-03-container-border)}.mt-quadro-03__title.sc-mt-quadro-03{color:var(--mt-quadro-03-title-color);font-family:var(--mt-quadro-03-title-font-family);font-weight:var(--mt-quadro-03-title-font-weight);text-transform:var(--mt-quadro-03-title-text-transform);font-size:var(--mt-quadro-03-title-font-size);line-height:1;margin:var(--mt-quadro-03-title-margin)}.mt-quadro-03__text.sc-mt-quadro-03{color:var(--mt-quadro-03-text-color);font-family:var(--mt-quadro-03-text-font-family);font-weight:var(--mt-quadro-03-text-font-weight);text-transform:var(--mt-quadro-03-text-text-transform);font-size:var(--mt-quadro-03-text-font-size);line-height:1;margin:0}.sc-mt-quadro-03-s>[slot=list]{color:var(--mt-quadro-03-list-color);font-family:var(--mt-quadro-03-list-font-family);font-weight:var(--mt-quadro-03-list-font-weight);text-transform:var(--mt-quadro-03-list-text-transform);font-size:var(--mt-quadro-03-list-font-size);line-height:1;margin:var(--mt-quadro-03-list-margin);padding:var(--mt-quadro-03-list-padding)}";

const Quadro03 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (index.h(index.Host, { key: '4a6ff76ef0c636db02b827f470fc92736f1b3794', class: functions.generateClasses(produto, especialidade, ano, {
                'mt-quadro-03': true,
            }) }, index.h("div", { key: 'f37a3296dfca66f53b267b2abfcb5f530b361c83', class: "mt-quadro-03__container" }, index.h("h3", { key: 'fdf876a0af1632805ab24af1c593ef5bff78271a', class: "mt-quadro-03__title" }, index.h("slot", { key: 'af5b1529c0b827f171f7ee243ce04c0cb68e9e67', name: "title" })), index.h("p", { key: '81363fbbb2a3a6ad8702c9f0661305255778b338', class: "mt-quadro-03__text" }, index.h("slot", { key: '0ed33894565a16ffe349aace67255381b3abbbd5', name: "text" })), index.h("div", { key: 'daaca84b406d6aa29acb88aafee38b4ae43242df', class: "mt-quadro-03__list" }, index.h("slot", { key: '1b7d0432c6992cf2ad0ca090ce3aaf123bc71603', name: "list" })))));
    }
};
Quadro03.style = quadro03Css;

exports.mt_quadro_03 = Quadro03;
//# sourceMappingURL=mt-quadro-03.entry.cjs.js.map

//# sourceMappingURL=mt-quadro-03.cjs.entry.js.map