import { h, Host } from "@stencil/core";
export class Content {
    render() {
        return (h(Host, { key: 'ccbdeaaacae75942083f823627bfd9649eb1af66', class: "mt-content" }, h("slot", { key: '7897329f08ce666b7c335f5722e83861fdb38c70' })));
    }
    static get is() { return "mt-content"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["content.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["content.css"]
        };
    }
}
//# sourceMappingURL=content.js.map
