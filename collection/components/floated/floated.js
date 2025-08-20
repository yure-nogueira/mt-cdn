import { h, Host } from "@stencil/core";
export class Floated {
    hostEl;
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
