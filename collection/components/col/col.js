import { h, Host } from "@stencil/core";
import { generateClassesLayout } from "../../global/typescript/functions";
export class Col {
    breakpoint;
    render() {
        const { breakpoint } = this;
        return (h(Host, { key: '3ba93d4320fc88716ac4ce5094dcdf39d955857e', class: generateClassesLayout(breakpoint, {
                'mt-col': true,
            }) }, h("slot", { key: 'a145d0672c86e0bee4ff0cc85cd98f01e6a7a832' })));
    }
    static get is() { return "mt-col"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["col.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["col.css"]
        };
    }
    static get properties() {
        return {
            "breakpoint": {
                "type": "string",
                "attribute": "breakpoint",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true
            }
        };
    }
}
//# sourceMappingURL=col.js.map
