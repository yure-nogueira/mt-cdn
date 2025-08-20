import { h, Host } from "@stencil/core";
export class TituloResumo {
    render() {
        return (h(Host, { key: '64aa45361cf9a5010afb337c147b7b47a2fbb001', class: "mt-titulo-resumo" }, h("h6", { key: '3592f509e8342ee182b1715195b8e355f19b0a15' }, h("slot", { key: 'ef59429fb8764911a3a6aa62a60e289cd175411f' }))));
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
