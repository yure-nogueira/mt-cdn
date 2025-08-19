'use strict';

var index = require('./index-Bc9EaQF1.js');

const generateClassesLayout = (breakpoint, cssClassMap) => {
    return {
        [`mt-${breakpoint}`]: true,
        ...cssClassMap,
    };
};

const colCss = ".sc-mt-col-h{--mt-col-padding-top:0;--mt-col-padding-bottom:0;--mt-col-max-width:100%;--mt-col-background-color:null;background-color:var(--mt-col-background-color);width:100%;display:block;flex-shrink:1;box-sizing:border-box;flex-shrink:0;max-width:var(--mt-col-max-width);padding-top:var(--mt-col-padding-top);padding-right:calc(var(--mt-gutter-right) * 0.5);padding-bottom:var(--mt-col-padding-bottom), var(--mt-col-padding-bottom);padding-left:calc(var(--mt-gutter-left) * 0.5)}@media (min-width: 576px){.mt-col.mt-sm.sc-mt-col{flex:1 0 0;max-width:var(--mt-col-sm-max-width, var(--mt-col-max-width));padding-top:var(--mt-col-sm-padding-top, var(--mt-col-padding-top));padding-right:calc(var(--mt-gutter-sm-right, var(--mt-gutter-right)) * 0.5);padding-bottom:var(--mt-col-sm-padding-bottom, var(--mt-col-padding-bottom));padding-left:calc(var(--mt-gutter-sm-left, var(--mt-gutter-left)) * 0.5)}}@media (min-width: 768px){.mt-col.mt-md.sc-mt-col{flex:1 0 0;max-width:var(--mt-col-md-max-width, var(--mt-col-max-width));padding-top:var(--mt-col-md-padding-top, var(--mt-col-padding-top));padding-right:calc(var(--mt-gutter-md-right, var(--mt-gutter-right)) * 0.5);padding-bottom:var(--mt-col-md-padding-bottom, var(--mt-col-padding-bottom));padding-left:calc(var(--mt-gutter-md-left, var(--mt-gutter-left)) * 0.5)}}@media (min-width: 992px){.mt-col.mt-lg.sc-mt-col{flex:1 0 0;max-width:var(--mt-col-lg-max-width, var(--mt-col-max-width));padding-top:var(--mt-col-lg-padding-top, var(--mt-col-padding-top));padding-right:calc(var(--mt-gutter-lg-right, var(--mt-gutter-right)) * 0.5);padding-bottom:var(--mt-col-lg-padding-bottom, var(--mt-col-padding-bottom));padding-left:calc(var(--mt-gutter-lg-left, var(--mt-gutter-left)) * 0.5)}}@media (min-width: 1200px){.mt-col.mt-xl.sc-mt-col{flex:1 0 0;max-width:var(--mt-col-xl-max-width, var(--mt-col-max-width));padding-top:var(--mt-col-xl-padding-top, var(--mt-col-padding-top));padding-right:calc(var(--mt-gutter-xl-right, var(--mt-gutter-right)) * 0.5);padding-bottom:var(--mt-col-xl-padding-bottom, var(--mt-col-padding-bottom));padding-left:calc(var(--mt-gutter-xl-left, var(--mt-gutter-left)) * 0.5)}}@media (min-width: 1400px){.mt-col.mt-xxl.sc-mt-col{flex:1 0 0;max-width:var(--mt-col-xxl-max-width, var(--mt-col-max-width));padding-top:var(--mt-col-xxl-padding-top, var(--mt-col-padding-top));padding-right:calc(var(--mt-gutter-xxl-right, var(--mt-gutter-right)) * 0.5);padding-bottom:var(--mt-col-xxl-padding-bottom, var(--mt-col-padding-bottom));padding-left:calc(var(--mt-gutter-xxl-left, var(--mt-gutter-left)) * 0.5)}}";

const Col = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    breakpoint;
    render() {
        const { breakpoint } = this;
        return (index.h(index.Host, { key: '3ba93d4320fc88716ac4ce5094dcdf39d955857e', class: generateClassesLayout(breakpoint, {
                'mt-col': true,
            }) }, index.h("slot", { key: 'a145d0672c86e0bee4ff0cc85cd98f01e6a7a832' })));
    }
};
Col.style = colCss;

exports.mt_col = Col;
//# sourceMappingURL=mt-col.entry.cjs.js.map

//# sourceMappingURL=mt-col.cjs.entry.js.map