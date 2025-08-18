import { h, Host } from "@stencil/core";
export class Content {
    render() {
        return (h(Host, { key: '6003087948fc6dc3191803768f8ee5401aa7e387', class: "mt-content" }, h("slot", { key: '6f6c323620d7e82783626942cb8dc7487489df1c' })));
    }
    static get is() { return "mt-content"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["content.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["content.css"]
        };
    }
}
//# sourceMappingURL=content.js.map
