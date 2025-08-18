'use strict';

var index = require('./index-CtT_xTgK.js');

const pageCss = ".sc-mt-page-h{--mt-page-justify-content:space-between;--mt-page-gap:16px;--mt-page-padding:0;--mt-page-margin:var(--mt-page-gap) 0 var(--mt-page-gap) 0;--mt-page-background-image:null;--mt-page-background-size:null;margin:var(--mt-page-margin);padding:var(--mt-page-padding);background-color:#fff;display:flex;flex-direction:column;box-shadow:1px 0px 10px 1px rgba(0, 0, 0, 0.5);min-height:calc(100vh - var(--mt-page-gap) * 2);justify-content:var(--mt-page-justify-content);background-image:var(--mt-page-background-image);background-size:var(--mt-page-background-size);background-repeat:no-repeat}";

const Page = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '478313fbe3b70a237a4ba99b17c5fa9eafbde0ee' }, index.h("slot", { key: '433bea5da8dde9acf8acf414035621469ce24530' })));
    }
};
Page.style = pageCss;

exports.mt_page = Page;
//# sourceMappingURL=mt-page.entry.cjs.js.map

//# sourceMappingURL=mt-page.cjs.entry.js.map