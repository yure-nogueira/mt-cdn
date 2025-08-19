import { h, Host } from "@stencil/core";
export class List {
    render() {
        return (h(Host, { key: 'ba99bc94434c7ca7ba85f2aa373e29b33754e8a2', class: "mt-list" }, h("slot", { key: '03161ddeb963b70c7b0921bd0f8f9db6eb423c47' })));
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
