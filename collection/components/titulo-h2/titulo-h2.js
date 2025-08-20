import { h, Host } from "@stencil/core";
export class TituloH2 {
    render() {
        return (h(Host, { key: '52c772701adb2a62e0bff8956cbbbbca8121ee04', class: "mt-titulo-h2" }, h("h2", { key: '896f7c4fe7e1c108d241e3fdb1ec17d24cff7519' }, h("slot", { key: 'b282ff9a5eff2c60d5425242a78e59a93a5d5093' }))));
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
