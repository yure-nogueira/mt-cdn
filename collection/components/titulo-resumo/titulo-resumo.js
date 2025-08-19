import { h, Host } from "@stencil/core";
export class TituloResumo {
    render() {
        return (h(Host, { key: '1073454489644a2d840124cf7c77d1387f975a1e', class: "mt-titulo-resumo" }, h("h6", { key: '98252d68bfa70d7eb98b066a9959e5a2a55a2d00' }, h("slot", { key: 'be6cd2e01236693c26a17c4cc839c01398b170f8' }))));
    }
    static get is() { return "mt-titulo-resumo"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["titulo-resumo.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["titulo-resumo.css"]
        };
    }
}
//# sourceMappingURL=titulo-resumo.js.map
