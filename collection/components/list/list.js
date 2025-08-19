import { h, Host } from "@stencil/core";
export class List {
    render() {
        return (h(Host, { key: 'e5772382b51c2283364f73637c878a6935e420ac', class: "mt-list" }, h("slot", { key: '741f1f2346b5f2d5e8f400eed4467bfc917b601e' })));
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
