'use strict';

var index = require('./index-DM3_8Z6I.js');

const titleH1Css = ":host{--line-color:#9abec0;--pre-title-color:#9a999e;--title-color:#455a5a;--subtitle-color:#607b7a;display:block}.mt-title-h1{display:flex;flex-direction:column;padding-left:12px;border-left:12px solid var(--line-color)}.mt-title-h1__pre-title,.mt-title-h1__title,.mt-title-h1__subtitle{margin:0;text-transform:uppercase;font-family:\"Roboto\", sans-serif;font-weight:300;line-height:1}.mt-title-h1__pre-title{font-size:16px;color:var(--pre-title-color)}.mt-title-h1__title{margin:4px 0;font-weight:600;font-size:40px;color:var(--title-color)}.mt-title-h1__subtitle{font-size:24px;color:var(--subtitle-color)}";

const TitleH1 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '6b414ccac32e374b3f07cdef85b619be708d6d73' }, index.h("div", { key: 'de5cd145d703a252cfa2e1b6741d6dd5bb22f667', class: "mt-title-h1" }, index.h("p", { key: 'c45bb167930bfbdb6546aa7e75d591c7aaa6d832', class: "mt-title-h1__pre-title" }, index.h("slot", { key: '842121643e63d65016f335b7f920e7ed71a51b60', name: "pre-title" })), index.h("h1", { key: '2c26203da16fdc45e7e8c012d87b48e033558893', class: "mt-title-h1__title" }, index.h("slot", { key: '4263a746267ecd5ee46c729473136b08fd8ba996', name: "title" })), index.h("h2", { key: 'b5c9c8ea023eef237a3257c4598edeb46db89039', class: "mt-title-h1__subtitle" }, index.h("slot", { key: 'dc48d656b62869a6018bd45bb2f03df9b88bbe6f', name: "subtitle" })))));
    }
};
TitleH1.style = titleH1Css;

exports.mt_title_h1 = TitleH1;
//# sourceMappingURL=mt-title-h1.entry.cjs.js.map

//# sourceMappingURL=mt-title-h1.cjs.entry.js.map