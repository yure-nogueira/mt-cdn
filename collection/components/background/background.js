import { h, Host } from "@stencil/core";
export class Background {
    render() {
        return (h(Host, { key: '4d582935a8fa48cfa3364692662b6de4a094e680', class: "mt-background" }, h("slot", { key: '99274f1f823b8c75dfb179b446025a0483000e9a' })));
    }
    static get is() { return "mt-background"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["background.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["background.css"]
        };
    }
}
//# sourceMappingURL=background.js.map
