import { h, Host } from "@stencil/core";
export class TituloH2 {
    render() {
        return (h(Host, { key: '10d953a093e52ac829617b0d4ef02be48f8091a0', class: "mt-titulo-h2" }, h("h2", { key: '27eccdd137c0f29c4e72f98c9fa47fd0a65ea9b8' }, h("slot", { key: 'ac29985bcc0bc14c49571707785db377951c3279' }))));
    }
    static get is() { return "mt-titulo-h2"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["titulo-h2.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["titulo-h2.css"]
        };
    }
}
//# sourceMappingURL=titulo-h2.js.map
