import { h, Host } from "@stencil/core";
export class Paragrafo {
    render() {
        return (h(Host, { key: 'abf961315539da692db9500b5505ef29765ce963', class: "mt-paragrafo" }, h("p", { key: 'dea8295db6567ee34b010eca62a9bf66ca1d81d3' }, h("slot", { key: '2c8c4244fec71f546db6230d3edfbccc819e535d' }))));
    }
    static get is() { return "mt-paragrafo"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["paragrafo.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["paragrafo.css"]
        };
    }
}
//# sourceMappingURL=paragrafo.js.map
