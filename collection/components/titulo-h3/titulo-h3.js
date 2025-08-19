import { h, Host } from "@stencil/core";
export class TituloH3 {
    render() {
        return (h(Host, { key: '78b9772f7b625624cf84af3e3bf0844babdfecae', class: "mt-titulo-h3" }, h("h3", { key: '2640809423df9340536208522c4462517f2196f3' }, h("slot", { key: '6899e6f5684985392d632d73d31134c344639513' }))));
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
