import { h, Host } from "@stencil/core";
export class TituloH3 {
    render() {
        return (h(Host, { key: '459ce01898e8fa1013f7fe05ab762f13686428ed', class: "mt-titulo-h3" }, h("h3", { key: 'e067d3b64e441a2a2c08aae4e9b4113d4256f85b' }, h("slot", { key: '907231d1267d4d7ac33b4dfa699e50da30abc2a9' }))));
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
