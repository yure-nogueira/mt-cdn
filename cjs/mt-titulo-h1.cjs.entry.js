'use strict';

var index = require('./index-Bc9EaQF1.js');

const tituloH1Css = ".sc-mt-titulo-h1-h{--mt-titulo-h1-padding:0 0 0 14px;--mt-titulo-h1-margin:0;margin:var(--mt-titulo-h1-margin);padding:var(--mt-titulo-h1-padding);border-left:14px solid #9abec0;display:block}.mt-titulo-h1__pre-title.sc-mt-titulo-h1{color:#9a999e;font-family:\"Roboto\", sans-serif;font-weight:300;font-size:16px;line-height:1;margin:0;padding:0}.mt-titulo-h1__title.sc-mt-titulo-h1{color:#455a5a;font-family:\"Roboto\", sans-serif;font-weight:900;font-size:28px;line-height:1;margin:0;padding:0}.mt-titulo-h1__subtitle.sc-mt-titulo-h1{color:#9abec0;font-family:\"Roboto\", sans-serif;font-weight:300;font-size:32px;line-height:1;margin:0;padding:0}";

const TituloH1 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '7dffcfdc694f573bf1aa3c25741f591e5e47cd4e', class: "mt-titulo-h1" }, index.h("p", { key: 'ddcb6f1064d74417611cdba9fd358b7230a3cc43', class: "mt-titulo-h1__pre-title" }, index.h("slot", { key: 'd2eae21c736ef584899f67b6b426fc168ffc306c', name: "pre-title" })), index.h("h1", { key: 'a69bf633d1f68fc2a3d98065674a38cab3d74acc', class: "mt-titulo-h1__title" }, index.h("slot", { key: '2d982d3c0d7cff27705fd7bc1728dec4843d7747', name: "title" })), index.h("h2", { key: 'cc2e62c4527e2c9c00bb5a812e19020879cf52cb', class: "mt-titulo-h1__subtitle" }, index.h("slot", { key: 'b931ebe2c4419dfefe41bda8a647ecf6c4555d65', name: "subtitle" }))));
    }
};
TituloH1.style = tituloH1Css;

exports.mt_titulo_h1 = TituloH1;
//# sourceMappingURL=mt-titulo-h1.entry.cjs.js.map

//# sourceMappingURL=mt-titulo-h1.cjs.entry.js.map