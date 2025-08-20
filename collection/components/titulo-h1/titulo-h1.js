import { h, Host } from "@stencil/core";
export class TituloH1 {
    render() {
        return (h(Host, { key: '81de1d22eeb0fce6794fcd524f1ed158962d93ef', class: "mt-titulo-h1" }, h("p", { key: '494735c2a4a91ab959b5abbfcc23a2f588110ca3', class: "mt-titulo-h1__pre-title" }, h("slot", { key: '080a70237fdf21a58155494b8f87f802b1625e6d', name: "pre-title" })), h("h1", { key: 'b9e3457b2dee7e53cf54a64c0768e3200953bb47', class: "mt-titulo-h1__title" }, h("slot", { key: '3d41ebf33dd6c6ea752b47794b490833968b83a4', name: "title" })), h("h2", { key: 'ca589900d4b0ff5d8ab2efea725ddf210ffd6a64', class: "mt-titulo-h1__subtitle" }, h("slot", { key: '864c6802320e526aa91c3b08e0e31b8fef32cb9d', name: "subtitle" }))));
    }
    static get is() { return "mt-titulo-h1"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["titulo-h1.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["titulo-h1.css"]
        };
    }
}
//# sourceMappingURL=titulo-h1.js.map
