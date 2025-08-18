import { h, Host } from "@stencil/core";
export class TituloH1 {
    render() {
        return (h(Host, { key: '2afa50b7c6e3e469b2b8a1e1cc8a7e6662e3b6f8', class: "mt-titulo-h1" }, h("p", { key: '41a3540c4c7b5d36128764a51d07d85e9692b8cd', class: "mt-titulo-h1__pre-title" }, h("slot", { key: 'fcc5c42c1dd3e7152a67298322733c3d1e202226', name: "pre-title" })), h("h1", { key: '636e394c59988c6ae5c0a92745b7c291b9e1cadc', class: "mt-titulo-h1__title" }, h("slot", { key: 'c13798d9c4bd6536c10bd612601a718cf1525301', name: "title" })), h("h2", { key: '8a87b5f08f31f870e4b470a74866c8456beabaca', class: "mt-titulo-h1__subtitle" }, h("slot", { key: 'ba89b64926f8bb850c9727e8b235ef981e656e77', name: "subtitle" }))));
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
