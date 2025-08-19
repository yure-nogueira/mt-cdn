import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const containerCss = ".sc-mt-container-h{display:block}.sc-mt-container-h{--mt-container-padding-x:24px;--mt-container-xxl-max-width:1200px;--mt-container-xl-max-width:100%;--mt-container-lg-max-width:100%;--mt-container-md-max-width:100%;--mt-container-sm-max-width:100%;--mt-container-background-color:null;background-color:var(--mt-container-background-color);width:100%;padding-right:calc(var(--mt-container-padding-right, var(--mt-container-padding-x)) * 0.5);padding-left:calc(var(--mt-container-padding-left, var(--mt-container-padding-x)) * 0.5);margin-right:auto;margin-left:auto}@media (min-width: 576px){.sc-mt-container-h{max-width:var(--mt-container-sm-max-width)}}@media (min-width: 768px){.sc-mt-container-h{max-width:var(--mt-container-md-max-width)}}@media (min-width: 992px){.sc-mt-container-h{max-width:var(--mt-container-lg-max-width)}}@media (min-width: 1200px){.sc-mt-container-h{max-width:var(--mt-container-xl-max-width)}}@media (min-width: 1400px){.sc-mt-container-h{max-width:var(--mt-container-xxl-max-width)}}";

const Container = /*@__PURE__*/ proxyCustomElement(class Container extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '428225ee288fec1e2c6810bca2089d82d3d55b58', class: "mt-container" }, h("slot", { key: '7bb44d4bfaeb8093ab4865e60094c54362568ac6' })));
    }
    static get style() { return containerCss; }
}, [262, "mt-container"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-container"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-container":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Container);
            }
            break;
    } });
}
defineCustomElement$1();

const MtContainer = Container;
const defineCustomElement = defineCustomElement$1;

export { MtContainer, defineCustomElement };
//# sourceMappingURL=mt-container.js.map

//# sourceMappingURL=mt-container.js.map