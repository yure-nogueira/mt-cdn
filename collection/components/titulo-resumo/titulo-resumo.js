import { h, Host } from "@stencil/core";
export class TituloResumo {
    render() {
        return (h(Host, { key: '746602818df57ced7992f9577c73438e00a4981a', class: "mt-titulo-resumo" }, h("h6", { key: '9e8d72be4bb980c1aaf8649bfd7c85f8d47ac953' }, h("slot", { key: '6ea47cfd7efd1059c83e96d826b6a2d8d0dd3f66' }))));
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
