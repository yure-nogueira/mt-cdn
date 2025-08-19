import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const floatedCss = ".sc-mt-floated-h{--mt-imagem-floated-image:null;--mt-imagem-floated-direction:null;--mt-imagem-floated-margin:null;display:block}.sc-mt-floated-h::after{content:\"\";display:table;clear:both}.sc-mt-floated-s>img{shape-outside:var(--mt-imagem-floated-image);float:var(--mt-imagem-floated-direction);margin:var(--mt-imagem-floated-margin);max-width:100%}";

const Floated = /*@__PURE__*/ proxyCustomElement(class Floated extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    get hostEl() { return this; }
    titleSlotEl;
    observer;
    observeImageSrcChange(imgElement, callback) {
        console.log(imgElement);
        if (!(imgElement instanceof HTMLImageElement)) {
            throw new Error('Target must be an <img> element');
        }
        this.observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                    callback(imgElement.src);
                }
            });
        });
        this.observer.observe(imgElement, {
            attributes: true, // watch attributes
            attributeFilter: ['src'], // only watch src
        });
        return this.observer; // so you can later disconnect if needed
    }
    componentDidLoad() {
        if (this.titleSlotEl) {
            const nodes = this.titleSlotEl.assignedElements({ flatten: true });
            const img = nodes[0];
            this.observeImageSrcChange(img, newSrc => {
                this.hostEl.style.setProperty('--mt-imagem-floated-image', newSrc);
            });
        }
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    render() {
        return (h(Host, { key: '3a1d0ef47e871a1c4240a1ce7cd42218f7040e37', class: "mt-floated" }, h("div", { key: '52592beec7a7b5c3bd362a4ac043eb3f1d5ca08a' }, h("slot", { key: '00290e57a5d404d27470ae42c562f7658d35b2c0', name: "image", ref: el => (this.titleSlotEl = el) }), h("slot", { key: '7671a290835a0d866fbd4720a89b3bcaea7bc8a5', name: "text" }))));
    }
    static get style() { return floatedCss; }
}, [262, "mt-floated"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-floated"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-floated":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Floated);
            }
            break;
    } });
}
defineCustomElement$1();

const MtFloated = Floated;
const defineCustomElement = defineCustomElement$1;

export { MtFloated, defineCustomElement };
//# sourceMappingURL=mt-floated.js.map

//# sourceMappingURL=mt-floated.js.map