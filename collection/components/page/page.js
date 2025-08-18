import { h, Host } from "@stencil/core";
export class Page {
    render() {
        return (h(Host, { key: '478313fbe3b70a237a4ba99b17c5fa9eafbde0ee' }, h("slot", { key: '433bea5da8dde9acf8acf414035621469ce24530' })));
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
