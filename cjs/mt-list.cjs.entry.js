'use strict';

var index = require('./index-Bc9EaQF1.js');

const listCss = ".sc-mt-list-h{color:#607b7a;font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-size:14px;margin:16px 0 24px 0;padding-left:32px}";

const List = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'd9eea8eee4f127567b6d016ee2e8e6bc774effb5', class: "mt-list" }, index.h("slot", { key: 'd76eaed6c9be5a76cf7b731488e0600aa5a3ba4c' })));
    }
};
List.style = listCss;

exports.mt_list = List;
//# sourceMappingURL=mt-list.entry.cjs.js.map

//# sourceMappingURL=mt-list.cjs.entry.js.map