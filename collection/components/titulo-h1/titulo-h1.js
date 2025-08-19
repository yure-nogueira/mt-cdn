import { h, Host } from "@stencil/core";
export class TituloH1 {
    render() {
        return (h(Host, { key: '7dffcfdc694f573bf1aa3c25741f591e5e47cd4e', class: "mt-titulo-h1" }, h("p", { key: 'ddcb6f1064d74417611cdba9fd358b7230a3cc43', class: "mt-titulo-h1__pre-title" }, h("slot", { key: 'd2eae21c736ef584899f67b6b426fc168ffc306c', name: "pre-title" })), h("h1", { key: 'a69bf633d1f68fc2a3d98065674a38cab3d74acc', class: "mt-titulo-h1__title" }, h("slot", { key: '2d982d3c0d7cff27705fd7bc1728dec4843d7747', name: "title" })), h("h2", { key: 'cc2e62c4527e2c9c00bb5a812e19020879cf52cb', class: "mt-titulo-h1__subtitle" }, h("slot", { key: 'b931ebe2c4419dfefe41bda8a647ecf6c4555d65', name: "subtitle" }))));
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
