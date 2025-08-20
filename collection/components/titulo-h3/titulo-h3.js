import { h, Host } from "@stencil/core";
export class TituloH3 {
    render() {
        return (h(Host, { key: '59a6e824123b51c751b756ca7ab7b3d5e1898d0c', class: "mt-titulo-h3" }, h("h3", { key: 'cf39fab4f80c5d16ab6fd211eeae2648e9ea8b45' }, h("slot", { key: '3cc254191507f42841b1812452211867d055185d' }))));
    }
    static get is() { return "mt-titulo-h3"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["titulo-h3.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["titulo-h3.css"]
        };
    }
}
//# sourceMappingURL=titulo-h3.js.map
