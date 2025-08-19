import { h, Host } from "@stencil/core";
export class Page {
    render() {
        return (h(Host, { key: 'aa6a031983b2093ded5e09b72db72dce84745db2' }, h("slot", { key: '8825309d50409c17de80f41599de30a9b6b0e08b' })));
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
