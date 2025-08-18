'use strict';

var index = require('./index-CtT_xTgK.js');

const quadro01Css = ".sc-mt-quadro-01-h{border-left:3px solid #455a5a;display:block}.mt-quadro-01__title.sc-mt-quadro-01{color:#fff;font-family:\"Roboto\", sans-serif;font-weight:700;font-size:14px;padding:2px 10px;background-color:#455a5a;display:inline-block}.mt-quadro-01__text.sc-mt-quadro-01{color:#455a5a;font-family:\"Merriweather\", serif;font-weight:700;font-size:14px;line-height:1.5;padding:6px}";

const Quadro01 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '1350c205db2b9aeca0a0c2aec15115ae90c22f63', class: "mt-quadro-01" }, index.h("div", { key: '0f5873f6cc5cee7b10fc46cbc3694157be58c222', class: "mt-quadro-01__title" }, index.h("slot", { key: 'ded79f437fd090e676bfb37344b7369a2ca33715', name: "title" })), index.h("p", { key: 'cd9f1a84b1400458203723e412b5e2824c7c9f82', class: "mt-quadro-01__text" }, index.h("slot", { key: '0831df921af3f48fc6cf7fbad9e00660eaffdeb1', name: "text" }))));
    }
};
Quadro01.style = quadro01Css;

exports.mt_quadro_01 = Quadro01;
//# sourceMappingURL=mt-quadro-01.entry.cjs.js.map

//# sourceMappingURL=mt-quadro-01.cjs.entry.js.map