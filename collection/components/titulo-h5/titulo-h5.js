import { h, Host } from "@stencil/core";
export class TituloH5 {
    render() {
        return (h(Host, { key: '3c5ab335051cb2b81132eef3d1734afa452f1824', class: "mt-titulo-h5" }, h("h5", { key: 'ab06cc9c6562051ea479b34fc4f9760622fe35e0' }, h("slot", { key: '07f86c431edbdf00dccd0e3ac1ca148246a0e203' }))));
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
