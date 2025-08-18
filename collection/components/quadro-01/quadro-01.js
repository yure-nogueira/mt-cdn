import { h, Host } from "@stencil/core";
export class Quadro01 {
    render() {
        return (h(Host, { key: '1350c205db2b9aeca0a0c2aec15115ae90c22f63', class: "mt-quadro-01" }, h("div", { key: '0f5873f6cc5cee7b10fc46cbc3694157be58c222', class: "mt-quadro-01__title" }, h("slot", { key: 'ded79f437fd090e676bfb37344b7369a2ca33715', name: "title" })), h("p", { key: 'cd9f1a84b1400458203723e412b5e2824c7c9f82', class: "mt-quadro-01__text" }, h("slot", { key: '0831df921af3f48fc6cf7fbad9e00660eaffdeb1', name: "text" }))));
    }
    static get is() { return "mt-quadro-01"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["quadro-01.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["quadro-01.css"]
        };
    }
}
//# sourceMappingURL=quadro-01.js.map
