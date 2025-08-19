'use strict';

var index = require('./index-Bc9EaQF1.js');

const listCss = ".sc-mt-list-h{color:#607b7a;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px;margin:16px 0 24px 0;padding-left:32px}";

const List = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'ba99bc94434c7ca7ba85f2aa373e29b33754e8a2', class: "mt-list" }, index.h("slot", { key: '03161ddeb963b70c7b0921bd0f8f9db6eb423c47' })));
    }
};
List.style = listCss;

exports.mt_list = List;
//# sourceMappingURL=mt-list.entry.cjs.js.map

//# sourceMappingURL=mt-list.cjs.entry.js.map