import { h, Host } from "@stencil/core";
export class List {
    render() {
        return (h(Host, { key: 'd9eea8eee4f127567b6d016ee2e8e6bc774effb5', class: "mt-list" }, h("slot", { key: 'd76eaed6c9be5a76cf7b731488e0600aa5a3ba4c' })));
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
