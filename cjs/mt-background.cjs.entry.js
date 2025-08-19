'use strict';

var index = require('./index-Bc9EaQF1.js');

const backgroundCss = ".sc-mt-background-h{--mt-background-padding:#fff;--mt-background-background-color:#fff;padding:var(--mt-background-padding);background-color:var(--mt-background-background-color)}";

const Background = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '4d582935a8fa48cfa3364692662b6de4a094e680', class: "mt-background" }, index.h("slot", { key: '99274f1f823b8c75dfb179b446025a0483000e9a' })));
    }
};
Background.style = backgroundCss;

exports.mt_background = Background;
//# sourceMappingURL=mt-background.entry.cjs.js.map

//# sourceMappingURL=mt-background.cjs.entry.js.map