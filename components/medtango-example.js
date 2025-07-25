import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const medtangoExampleCss = ".sc-medtango-example-h{display:block}.medtango-example__button.sc-medtango-example{padding:8px 12px;background:lightcoral;color:#222;font-weight:600;font-size:20px;border:2px solid #aaa;border-radius:8px;cursor:pointer;transition:transform 300ms ease-in-out}.medtango-example__button.sc-medtango-example:active{transform:scale(0.95)}";

const MedtangoExample$1 = /*@__PURE__*/ proxyCustomElement(class MedtangoExample extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '9b269fd264db490afc07079a71469caa55d0c182', class: "medtango-example" }, h("button", { key: '00e7b41546cfb917db071bf792060f541d850968', class: "medtango-example__button" }, h("slot", { key: 'be8936f46296b1c680f9fc74febb7d37ad2050b1' }))));
    }
    static get style() { return medtangoExampleCss; }
}, [262, "medtango-example"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["medtango-example"];
    components.forEach(tagName => { switch (tagName) {
        case "medtango-example":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MedtangoExample$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MedtangoExample = MedtangoExample$1;
const defineCustomElement = defineCustomElement$1;

export { MedtangoExample, defineCustomElement };
//# sourceMappingURL=medtango-example.js.map

//# sourceMappingURL=medtango-example.js.map