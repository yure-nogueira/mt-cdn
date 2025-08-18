'use strict';

var index = require('./index-CtT_xTgK.js');

const contentCss = ".sc-mt-content-h{height:100%;display:block}";

const Content = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '6003087948fc6dc3191803768f8ee5401aa7e387', class: "mt-content" }, index.h("slot", { key: '6f6c323620d7e82783626942cb8dc7487489df1c' })));
    }
};
Content.style = contentCss;

exports.mt_content = Content;
//# sourceMappingURL=mt-content.entry.cjs.js.map

//# sourceMappingURL=mt-content.cjs.entry.js.map