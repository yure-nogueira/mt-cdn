import { h, Host } from "@stencil/core";
export class Page {
    render() {
        return (h(Host, { key: 'bbdc43d0e3fa1c62816f158f8951706cf76b3d37' }, h("slot", { key: '82be28725a1abb4bb82ac67f640f8b9e2371d118' })));
    }
    static get is() { return "mt-page"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["page.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["page.css"]
        };
    }
}
//# sourceMappingURL=page.js.map
