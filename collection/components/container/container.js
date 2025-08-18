import { h, Host } from "@stencil/core";
export class Container {
    render() {
        return (h(Host, { key: '5b3de5c7b5e41d21452b8ec391a3b0caf7749f1f', class: "mt-container" }, h("slot", { key: '68c85e6c8106d188e45c19b4ceb72c978f38e3d3' })));
    }
    static get is() { return "mt-container"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["container.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["container.css"]
        };
    }
}
//# sourceMappingURL=container.js.map
