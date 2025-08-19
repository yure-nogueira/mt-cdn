import { h, Host } from "@stencil/core";
export class Columns {
    render() {
        return (h(Host, { key: 'c0c0414d879e7674eca7b7a74202d7cea633e206', class: "mt-columns" }, h("slot", { key: 'fb2b800e86f93ecbf2fdb2524f0c2bc98547939d' })));
    }
    static get is() { return "mt-columns"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["columns.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["columns.css"]
        };
    }
}
//# sourceMappingURL=columns.js.map
