import { h, Host } from "@stencil/core";
export class Row {
    render() {
        return (h(Host, { key: 'd43907695361ebdec337235e9b4337be8e5a9b92', class: "mt-row" }, h("slot", { key: '1fe88466e94acd3b0e41ef80c4c4681423df1751' })));
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
