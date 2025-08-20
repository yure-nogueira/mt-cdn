import { h, Host } from "@stencil/core";
export class Row {
    render() {
        return (h(Host, { key: '9f83c4bacac3e5e6fe6f52d885264166f95d6b86', class: "mt-row" }, h("slot", { key: 'a2c9ec9c9ee17fdd6194c6478e4a831dcf296596' })));
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
