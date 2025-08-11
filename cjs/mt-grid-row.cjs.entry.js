'use strict';

var index = require('./index-D889KsCY.js');

const gridRowCss = ":host{display:flex;width:100%;padding:16px}.mt-grid-row__col{flex:1}.mt-grid-row__col:not(:first-of-type){margin-left:8px}";

const GridRow = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    cols = 2;
    render() {
        const { cols } = this;
        return (index.h(index.Host, { key: 'e1e9cfce7ff0b8b40e89ec8bb362cf0158ef5770', class: "mt-grid-row" }, index.h("div", { key: 'fd9e2aa8bc4b441b4611e83f1d6acf1dd2a1add2', class: "mt-grid-row__col" }, index.h("slot", { key: '2b372fdedcf44f13946b8b5ca67b88b915280947', name: "col-1" })), cols >= 2 && (index.h("div", { key: '828b585a817007bd5f2b15f65198cabe0b1a00a7', class: "mt-grid-row__col" }, index.h("slot", { key: 'f924186cdf4a52fb3117d3709fbcf0b8ac655f74', name: "col-2" }))), cols >= 3 && (index.h("div", { key: 'd65e33e842a64ad6e6280f0646e63cca5b321438', class: "mt-grid-row__col" }, index.h("slot", { key: '34d8621b0e2c7801e5f634233659fda539585544', name: "col-3" })))));
    }
};
GridRow.style = gridRowCss;

exports.mt_grid_row = GridRow;
//# sourceMappingURL=mt-grid-row.entry.cjs.js.map

//# sourceMappingURL=mt-grid-row.cjs.entry.js.map