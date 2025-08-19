import { h, Host } from "@stencil/core";
export class TituloH3 {
    render() {
        return (h(Host, { key: '5689a4788353c9720ed9e6da7a2aca14f59f2031', class: "mt-titulo-h3" }, h("h3", { key: '480ee1de5728cd09b9b4427f39a0b20c0f2eb232' }, h("slot", { key: 'f5831cf08a2e764f590ed27031962c74007ff15f' }))));
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
