import { h, Host } from "@stencil/core";
export class TituloH1 {
    render() {
        return (h(Host, { key: '10d953a093e52ac829617b0d4ef02be48f8091a0', class: "mt-titulo-h1" }, h("p", { key: '57feaa2aef50e79ed811eccbf2053653cf1c81bc', class: "mt-titulo-h1__pre-title" }, h("slot", { key: 'f8e96e71b55164e43477ea48923de44952160bd1', name: "pre-title" })), h("h1", { key: 'fa4be6ba9ff9f9dbc35bec7d3f5e9b5820b485f4', class: "mt-titulo-h1__title" }, h("slot", { key: 'd8115afa167fb64371eb413ba6db55d6a96a6c50', name: "title" })), h("h2", { key: '3158002a4ed880f1f8b628d3be17346251c888f3', class: "mt-titulo-h1__subtitle" }, h("slot", { key: '1bd408e02cfe35c6efd8c3a174138ffa23a940ff', name: "subtitle" }))));
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
