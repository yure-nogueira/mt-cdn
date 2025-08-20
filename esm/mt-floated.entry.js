import { r as registerInstance, g as getElement, h, H as Host } from './index-oGdjzoP8.js';

const floatedCss = ".sc-mt-floated-h{--mt-imagem-floated-margin:0 0 30px 0;display:block}.sc-mt-floated-h::after{content:\"\";display:table;clear:both}.sc-mt-floated-s>img{shape-outside:var(--mt-imagem-floated-image);float:right;margin:var(--mt-imagem-floated-margin);max-width:100%}";

const Floated = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get hostEl() { return getElement(this); }
    titleSlotEl;
    observer;
    observeImageSrcChange(imgElement, callback) {
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
            attributes: true,
            attributeFilter: ['src'],
        });
        return this.observer;
    }
    componentDidLoad() {
        if (this.titleSlotEl) {
            const nodes = this.titleSlotEl.assignedElements({ flatten: true });
            const img = nodes[0];
            const initialSrc = nodes[0].getAttribute('src');
            this.hostEl.style.setProperty('--mt-imagem-floated-image', `url('${initialSrc}')`);
            this.observeImageSrcChange(img, newSrc => {
                this.hostEl.style.setProperty('--mt-imagem-floated-image', `url('${newSrc}')`);
            });
        }
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    render() {
        return (h(Host, { key: '8da4cbc964b6ed4add2de1fe31dd10779cd33895', class: "mt-floated" }, h("slot", { key: '95720eb8b00b8a0738ab2016a346d2292e1bc5fc', name: "image", ref: el => (this.titleSlotEl = el) }), h("slot", { key: '0fa26284867d1ee9139c9cb440293efbae51c43f', name: "text" })));
    }
};
Floated.style = floatedCss;

export { Floated as mt_floated };
//# sourceMappingURL=mt-floated.entry.js.map

//# sourceMappingURL=mt-floated.entry.js.map