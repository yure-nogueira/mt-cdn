import { h, Host } from "@stencil/core";
export class List {
    render() {
        return (h(Host, { key: '5bd25c7f5b86ff4c72a2f7920296df8776932071', class: "mt-list" }, h("slot", { key: '92e28d35b2687f2aff9b48a13652371af27ee135' })));
    }
    static get is() { return "mt-list"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["list.css"]
        };
    }
}
//# sourceMappingURL=list.js.map
