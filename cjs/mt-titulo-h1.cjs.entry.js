'use strict';

var index = require('./index-CtT_xTgK.js');

const tituloH1Css = ".sc-mt-titulo-h1-h{--mt-titulo-h1-padding:0 0 0 14px;--mt-titulo-h1-margin:0;margin:var(--mt-titulo-h1-margin);padding:var(--mt-titulo-h1-padding);border-left:14px solid #9abec0;display:block}.mt-titulo-h1__pre-title.sc-mt-titulo-h1{color:#9a999e;font-family:\"Roboto\", sans-serif;font-weight:300;font-size:16px;line-height:1;margin:0;padding:0}.mt-titulo-h1__title.sc-mt-titulo-h1{color:#455a5a;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:28px;line-height:1;margin:0;padding:0}.mt-titulo-h1__subtitle.sc-mt-titulo-h1{color:#9abec0;font-family:\"Roboto\", sans-serif;font-weight:300;font-size:32px;line-height:1;margin:0;padding:0}";

const TituloH1 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '2afa50b7c6e3e469b2b8a1e1cc8a7e6662e3b6f8', class: "mt-titulo-h1" }, index.h("p", { key: '41a3540c4c7b5d36128764a51d07d85e9692b8cd', class: "mt-titulo-h1__pre-title" }, index.h("slot", { key: 'fcc5c42c1dd3e7152a67298322733c3d1e202226', name: "pre-title" })), index.h("h1", { key: '636e394c59988c6ae5c0a92745b7c291b9e1cadc', class: "mt-titulo-h1__title" }, index.h("slot", { key: 'c13798d9c4bd6536c10bd612601a718cf1525301', name: "title" })), index.h("h2", { key: '8a87b5f08f31f870e4b470a74866c8456beabaca', class: "mt-titulo-h1__subtitle" }, index.h("slot", { key: 'ba89b64926f8bb850c9727e8b235ef981e656e77', name: "subtitle" }))));
    }
};
TituloH1.style = tituloH1Css;

exports.mt_titulo_h1 = TituloH1;
//# sourceMappingURL=mt-titulo-h1.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-h1.cjs.entry.js.map