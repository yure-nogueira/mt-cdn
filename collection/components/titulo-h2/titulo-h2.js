import { h, Host } from "@stencil/core";
export class TituloH2 {
    render() {
        return (h(Host, { key: 'bcdd1f804287d4f3a15c487607ca11cffe55b67e', class: "mt-titulo-h2" }, h("h2", { key: '3b5a4a4b6158085f55dee769a6b424482af16edd' }, h("slot", { key: '5202a20cb2c247b0ef926fb2e3b429bba93298b4' }))));
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
