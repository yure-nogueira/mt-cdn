import { h, Host } from "@stencil/core";
export class Floated {
    hostEl;
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
    static get is() { return "mt-floated"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["floated.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["floated.css"]
        };
    }
    static get elementRef() { return "hostEl"; }
}
//# sourceMappingURL=floated.js.map
