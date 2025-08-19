'use strict';

var index = require('./index-CtT_xTgK.js');

const listCss = ".sc-mt-list-h{color:#607b7a;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px;margin:16px 0 24px 0;padding-left:32px}";

const List = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'e5772382b51c2283364f73637c878a6935e420ac', class: "mt-list" }, index.h("slot", { key: '741f1f2346b5f2d5e8f400eed4467bfc917b601e' })));
    }
};
List.style = listCss;

exports.mt_list = List;
//# sourceMappingURL=mt-list.entry.cjs.js.map

//# sourceMappingURL=mt-list.cjs.entry.js.map