'use strict';

var index = require('./index-Bc9EaQF1.js');

const quadro01Css = ".sc-mt-quadro-01-h{border-left:3px solid #455a5a;display:block}.mt-quadro-01__title.sc-mt-quadro-01{color:#fff;font-family:\"Roboto\", sans-serif;font-weight:700;font-size:14px;padding:2px 10px;background-color:#455a5a;display:inline-block}.mt-quadro-01__text.sc-mt-quadro-01{color:#455a5a;font-family:\"Merriweather\", serif;font-weight:700;font-size:14px;line-height:1.5;padding:6px}";

const Quadro01 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '08c36304b0897ea65b51c015d01414ee718a2279', class: "mt-quadro-01" }, index.h("div", { key: '6fdb42bdd878d442e1d5ca7d123aaccbc504bfcf', class: "mt-quadro-01__title" }, index.h("slot", { key: 'b9f5be4539869454b8f193eeaf4a1c35d6ba35e7', name: "title" })), index.h("p", { key: 'fbc98c1c55edf734fe955412a5a0ba954b671bd5', class: "mt-quadro-01__text" }, index.h("slot", { key: '69bf82514749e24390ecf389b5180737d3211328', name: "text" }))));
    }
};
Quadro01.style = quadro01Css;

exports.mt_quadro_01 = Quadro01;
//# sourceMappingURL=mt-quadro-01.entry.cjs.js.map

//# sourceMappingURL=mt-quadro-01.cjs.entry.js.map