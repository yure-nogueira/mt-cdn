import { h, Host } from "@stencil/core";
export class TituloResumo {
    render() {
        return (h(Host, { key: '82c6c9945226d9e196cd695233dd059dfcaf961d', class: "mt-titulo-resumo" }, h("h6", { key: '08402ec9efc98623ca8ed7151e99248b25f68084' }, h("slot", { key: '4ddfd54f571c213787dcb2f14bdcdb8fa96103b4' }))));
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
