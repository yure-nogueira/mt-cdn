import { h, Host } from "@stencil/core";
export class Container {
    render() {
        return (h(Host, { key: '428225ee288fec1e2c6810bca2089d82d3d55b58', class: "mt-container" }, h("slot", { key: '7bb44d4bfaeb8093ab4865e60094c54362568ac6' })));
    }
    static get is() { return "mt-container"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["container.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["container.css"]
        };
    }
}
//# sourceMappingURL=container.js.map
