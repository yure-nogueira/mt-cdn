import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const backgroundCss = ".sc-mt-background-h{--mt-background-padding:#fff;--mt-background-background-color:#fff;padding:var(--mt-background-padding);background-color:var(--mt-background-background-color)}";

const Background = /*@__PURE__*/ proxyCustomElement(class Background extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '4d582935a8fa48cfa3364692662b6de4a094e680', class: "mt-background" }, h("slot", { key: '99274f1f823b8c75dfb179b446025a0483000e9a' })));
    }
    static get style() { return backgroundCss; }
}, [262, "mt-background"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-background"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-background":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Background);
            }
            break;
    } });
}
defineCustomElement$1();

const MtBackground = Background;
const defineCustomElement = defineCustomElement$1;

export { MtBackground, defineCustomElement };
//# sourceMappingURL=mt-background.js.map

//# sourceMappingURL=mt-background.js.map