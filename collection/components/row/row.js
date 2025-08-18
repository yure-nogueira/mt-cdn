import { h, Host } from "@stencil/core";
export class Row {
    render() {
        return (h(Host, { key: '06955ee9392984963004d2b5530505e1b61475e7', class: "mt-row" }, h("slot", { key: '0d4f5b2b4f91ef1028786e7bc06901787a28c778' })));
    }
    static get is() { return "mt-row"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["row.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["row.css"]
        };
    }
}
//# sourceMappingURL=row.js.map
