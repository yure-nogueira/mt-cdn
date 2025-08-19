'use strict';

var index = require('./index-Bc9EaQF1.js');

const columnsCss = ".sc-mt-columns-h{margin:0 auto;display:block;column-count:var(--mt-columns-number);column-gap:var(--mt-column-gap);max-width:var(--mt-columns-max-width);--mt-columns-number:null;--mt-columns-max-width:100%;--mt-column-gap:40px}";

const Columns = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'c0c0414d879e7674eca7b7a74202d7cea633e206', class: "mt-columns" }, index.h("slot", { key: 'fb2b800e86f93ecbf2fdb2524f0c2bc98547939d' })));
    }
};
Columns.style = columnsCss;

exports.mt_columns = Columns;
//# sourceMappingURL=mt-columns.entry.cjs.js.map

//# sourceMappingURL=mt-columns.cjs.entry.js.map