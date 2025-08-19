'use strict';

var index = require('./index-CtT_xTgK.js');

const rowCss = ".sc-mt-row-h{--mt-gutter-right:24px;--mt-gutter-left:24px;display:flex;flex-wrap:wrap;margin-right:calc(-0.5 * var(--mt-gutter-right));margin-left:calc(-0.5 * var(--mt-gutter-left))}@media (min-width: 576px){.sc-mt-row-h{margin-right:calc(-0.5 * var(--mt-gutter-sm-right));margin-left:calc(-0.5 * var(--mt-gutter-sm-left))}}@media (min-width: 768px){.sc-mt-row-h{margin-right:calc(-0.5 * var(--mt-gutter-md-right));margin-left:calc(-0.5 * var(--mt-gutter-md-left))}}@media (min-width: 992px){.sc-mt-row-h{margin-right:calc(-0.5 * var(--mt-gutter-lg-right));margin-left:calc(-0.5 * var(--mt-gutter-lg-left))}}@media (min-width: 1200px){.sc-mt-row-h{margin-right:calc(-0.5 * var(--mt-gutter-xl-right));margin-left:calc(-0.5 * var(--mt-gutter-xl-left))}}@media (min-width: 1400px){.sc-mt-row-h{margin-right:calc(-0.5 * var(--mt-gutter-xxl-right));margin-left:calc(-0.5 * var(--mt-gutter-xxl-left))}}";

const Row = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '79e87886a891a3aca13c5882442d6dc522a98e5a', class: "mt-row" }, index.h("slot", { key: '68e0f0c0e06a50f41e29eb91d9401ad6d988c294' })));
    }
};
Row.style = rowCss;

exports.mt_row = Row;
//# sourceMappingURL=mt-row.entry.cjs.js.map

//# sourceMappingURL=mt-row.cjs.entry.js.map