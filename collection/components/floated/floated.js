import { h, Host } from "@stencil/core";
export class Floated {
    render() {
        return (h(Host, { key: 'd6a8688134f69eda0935b9f9bd8e52417367c66d', class: "mt-floated" }, h("div", { key: '03ddc87e7b513efab2c1c91660ecd776005bcdc7' }, h("slot", { key: 'ed52a73d5039fdba6d7d6d4059cff0814fb91ab2', name: "image-right" }), h("slot", { key: 'a184b21f39557f670e4b999b9bde32a8b3b06ca5', name: "text" }), h("slot", { key: 'b441ed44673abcbdfdaaa95c8b73b2fbbd132e33', name: "image-left" }))));
    }
    static get is() { return "mt-floated"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["floated.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["floated.css"]
        };
    }
}
//# sourceMappingURL=floated.js.map
