'use strict';

var index = require('./index-Bc9EaQF1.js');

const rowCss = ".sc-mt-row-h{--mt-gutter-right:24px;--mt-gutter-left:24px;display:flex;flex-wrap:wrap;margin-right:calc(-0.5 * var(--mt-gutter-right));margin-left:calc(-0.5 * var(--mt-gutter-left))}@media (min-width: 576px){.sc-mt-row-h{margin-right:calc(-0.5 * var(--mt-gutter-sm-right));margin-left:calc(-0.5 * var(--mt-gutter-sm-left))}}@media (min-width: 768px){.sc-mt-row-h{margin-right:calc(-0.5 * var(--mt-gutter-md-right));margin-left:calc(-0.5 * var(--mt-gutter-md-left))}}@media (min-width: 992px){.sc-mt-row-h{margin-right:calc(-0.5 * var(--mt-gutter-lg-right));margin-left:calc(-0.5 * var(--mt-gutter-lg-left))}}@media (min-width: 1200px){.sc-mt-row-h{margin-right:calc(-0.5 * var(--mt-gutter-xl-right));margin-left:calc(-0.5 * var(--mt-gutter-xl-left))}}@media (min-width: 1400px){.sc-mt-row-h{margin-right:calc(-0.5 * var(--mt-gutter-xxl-right));margin-left:calc(-0.5 * var(--mt-gutter-xxl-left))}}";

const Row = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'd43907695361ebdec337235e9b4337be8e5a9b92', class: "mt-row" }, index.h("slot", { key: '1fe88466e94acd3b0e41ef80c4c4681423df1751' })));
    }
};
Row.style = rowCss;

exports.mt_row = Row;
//# sourceMappingURL=mt-row.entry.cjs.js.map

//# sourceMappingURL=mt-row.cjs.entry.js.map