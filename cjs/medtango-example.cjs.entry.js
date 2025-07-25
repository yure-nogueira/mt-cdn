'use strict';

var index = require('./index-DM3_8Z6I.js');

const medtangoExampleCss = ".sc-medtango-example-h{display:block}.medtango-example__button.sc-medtango-example{padding:8px 12px;background:lightcoral;color:#222;font-weight:600;font-size:20px;border:2px solid #aaa;border-radius:8px;cursor:pointer;transition:transform 300ms ease-in-out}.medtango-example__button.sc-medtango-example:active{transform:scale(0.95)}";

const MedtangoExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '9b269fd264db490afc07079a71469caa55d0c182', class: "medtango-example" }, index.h("button", { key: '00e7b41546cfb917db071bf792060f541d850968', class: "medtango-example__button" }, index.h("slot", { key: 'be8936f46296b1c680f9fc74febb7d37ad2050b1' }))));
    }
};
MedtangoExample.style = medtangoExampleCss;

exports.medtango_example = MedtangoExample;
//# sourceMappingURL=medtango-example.entry.cjs.js.map

//# sourceMappingURL=medtango-example.cjs.entry.js.map