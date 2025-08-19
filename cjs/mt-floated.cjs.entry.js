'use strict';

var index = require('./index-CtT_xTgK.js');

const floatedCss = ".sc-mt-floated-h{--mt-imagem-floated-image:null;--mt-imagem-floated-direction:null;--mt-imagem-floated-margin:null;display:block}.sc-mt-floated-h::after{content:\"\";display:table;clear:both}.sc-mt-floated-s>img{shape-outside:var(--mt-imagem-floated-image);float:var(--mt-imagem-floated-direction);margin:var(--mt-imagem-floated-margin);max-width:100%}";

const Floated = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'd6a8688134f69eda0935b9f9bd8e52417367c66d', class: "mt-floated" }, index.h("div", { key: '03ddc87e7b513efab2c1c91660ecd776005bcdc7' }, index.h("slot", { key: 'ed52a73d5039fdba6d7d6d4059cff0814fb91ab2', name: "image-right" }), index.h("slot", { key: 'a184b21f39557f670e4b999b9bde32a8b3b06ca5', name: "text" }), index.h("slot", { key: 'b441ed44673abcbdfdaaa95c8b73b2fbbd132e33', name: "image-left" }))));
    }
};
Floated.style = floatedCss;

exports.mt_floated = Floated;
//# sourceMappingURL=mt-floated.entry.cjs.js.map

//# sourceMappingURL=mt-floated.cjs.entry.js.map