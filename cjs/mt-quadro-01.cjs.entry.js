'use strict';

var index = require('./index-CtT_xTgK.js');

const quadro01Css = ".sc-mt-quadro-01-h{border-left:3px solid #455a5a;display:block}.mt-quadro-01__title.sc-mt-quadro-01{color:#fff;font-family:\"Roboto\", sans-serif;font-weight:700;font-size:14px;padding:2px 10px;background-color:#455a5a;display:inline-block}.mt-quadro-01__text.sc-mt-quadro-01{color:#455a5a;font-family:\"Merriweather\", serif;font-weight:700;font-size:14px;line-height:1.5;padding:6px}";

const Quadro01 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'ceb988a6431a38a3a41be52c0f5ac2931f9a5611', class: "mt-quadro-01" }, index.h("div", { key: '5be1c11655b4b88a94e3e47932095201afcd7d6e', class: "mt-quadro-01__title" }, index.h("slot", { key: 'e25b2f5c088a9b3cf74c738a77fdbb7ffcc2ba8d', name: "title" })), index.h("p", { key: '221079f5cded082374b371fbcc7f12e5d8f827a5', class: "mt-quadro-01__text" }, index.h("slot", { key: '6b8466ca2f41330377d1091b6a67c0bf25983749', name: "text" }))));
    }
};
Quadro01.style = quadro01Css;

exports.mt_quadro_01 = Quadro01;
//# sourceMappingURL=mt-quadro-01.entry.cjs.js.map

//# sourceMappingURL=mt-quadro-01.cjs.entry.js.map