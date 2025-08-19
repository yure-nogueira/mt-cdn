import { h, Host } from "@stencil/core";
export class TituloH5 {
    render() {
        return (h(Host, { key: '1c438e656b92dc846cd11717226c0ad70c01e0b2', class: "mt-titulo-h5" }, h("h5", { key: '88f442efe51a4d115956c170d540b373c513e1ae' }, h("slot", { key: '3bc7829dd6f2d1a012f7572cece1877301153651' }))));
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
