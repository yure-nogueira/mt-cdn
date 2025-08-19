import { h, Host } from "@stencil/core";
export class Row {
    render() {
        return (h(Host, { key: '79e87886a891a3aca13c5882442d6dc522a98e5a', class: "mt-row" }, h("slot", { key: '68e0f0c0e06a50f41e29eb91d9401ad6d988c294' })));
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
