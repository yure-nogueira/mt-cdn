'use strict';

var index = require('./index-CtT_xTgK.js');

const quadroPictograma01Css = ".sc-mt-quadro-pictograma-01-h{--mt-quadro-pictograma-01-margin:0;margin:var(--mt-quadro-pictograma-01-margin);padding:1px;background-color:#ccdfdf;border:1px solid #9abec0;display:block}.mt-quadro-pictograma-01__container.sc-mt-quadro-pictograma-01{padding:4px 8px;border:1px solid #9abec0}.mt-quadro-pictograma-01__text.sc-mt-quadro-pictograma-01{color:#455a5a;font-family:\"Merriweather\", serif;font-weight:600;font-size:12px;line-height:1.5}";

const QuadroPictograma01 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '466f1528a104d7ace71cde1b7f7d61971b620741', class: "mt-quadro-pictograma-01" }, index.h("div", { key: '7eed57018e3603afbb28b3ff81086650300fa47f', class: "mt-quadro-pictograma-01__container" }, index.h("p", { key: '0e4f7176ef9c5cefa09ca3003c75d50617103084', class: "mt-quadro-pictograma-01__text" }, index.h("slot", { key: '8783e67b46a257dd44bbbada71a5833385d4d90e' })))));
    }
};
QuadroPictograma01.style = quadroPictograma01Css;

exports.mt_quadro_pictograma_01 = QuadroPictograma01;
//# sourceMappingURL=mt-quadro-pictograma-01.entry.cjs.js.map

//# sourceMappingURL=mt-quadro-pictograma-01.cjs.entry.js.map