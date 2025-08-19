import { h, Host } from "@stencil/core";
export class TituloH5 {
    render() {
        return (h(Host, { key: '23b4c692c9dc307f29d208c23b62350d46cd9da1', class: "mt-titulo-h5" }, h("h5", { key: '3bd2f2e6fc4968dafcbaeae9a24126ddafc8dc4f' }, h("slot", { key: '2015eb71ba7655017d82c2c2608792692e4f5ad6' }))));
    }
    static get is() { return "mt-titulo-h5"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["titulo-h5.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["titulo-h5.css"]
        };
    }
}
//# sourceMappingURL=titulo-h5.js.map
