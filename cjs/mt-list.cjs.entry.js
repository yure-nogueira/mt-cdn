'use strict';

var index = require('./index-CtT_xTgK.js');

const listCss = ".sc-mt-list-h{color:#607b7a;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px;margin:16px 0 24px 0;padding-left:32px}";

const List = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '5bd25c7f5b86ff4c72a2f7920296df8776932071', class: "mt-list" }, index.h("slot", { key: '92e28d35b2687f2aff9b48a13652371af27ee135' })));
    }
};
List.style = listCss;

exports.mt_list = List;
//# sourceMappingURL=mt-list.entry.cjs.js.map

//# sourceMappingURL=mt-list.cjs.entry.js.map