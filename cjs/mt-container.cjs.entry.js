'use strict';

var index = require('./index-CtT_xTgK.js');

const containerCss = ".sc-mt-container-h{display:block}.sc-mt-container-h{--mt-container-padding-x:24px;--mt-container-xxl-max-width:1200px;--mt-container-xl-max-width:100%;--mt-container-lg-max-width:100%;--mt-container-md-max-width:100%;--mt-container-sm-max-width:100%;--mt-container-background-color:null;background-color:var(--mt-container-background-color);width:100%;padding-right:calc(var(--mt-container-padding-right, var(--mt-container-padding-x)) * 0.5);padding-left:calc(var(--mt-container-padding-left, var(--mt-container-padding-x)) * 0.5);margin-right:auto;margin-left:auto}@media (min-width: 576px){.sc-mt-container-h{max-width:var(--mt-container-sm-max-width)}}@media (min-width: 768px){.sc-mt-container-h{max-width:var(--mt-container-md-max-width)}}@media (min-width: 992px){.sc-mt-container-h{max-width:var(--mt-container-lg-max-width)}}@media (min-width: 1200px){.sc-mt-container-h{max-width:var(--mt-container-xl-max-width)}}@media (min-width: 1400px){.sc-mt-container-h{max-width:var(--mt-container-xxl-max-width)}}";

const Container = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '5b3de5c7b5e41d21452b8ec391a3b0caf7749f1f', class: "mt-container" }, index.h("slot", { key: '68c85e6c8106d188e45c19b4ceb72c978f38e3d3' })));
    }
};
Container.style = containerCss;

exports.mt_container = Container;
//# sourceMappingURL=mt-container.entry.cjs.js.map

//# sourceMappingURL=mt-container.cjs.entry.js.map