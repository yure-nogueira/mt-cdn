import { h, Host } from "@stencil/core";
export class Quadro01 {
    render() {
        return (h(Host, { key: '08c36304b0897ea65b51c015d01414ee718a2279', class: "mt-quadro-01" }, h("div", { key: '6fdb42bdd878d442e1d5ca7d123aaccbc504bfcf', class: "mt-quadro-01__title" }, h("slot", { key: 'b9f5be4539869454b8f193eeaf4a1c35d6ba35e7', name: "title" })), h("p", { key: 'fbc98c1c55edf734fe955412a5a0ba954b671bd5', class: "mt-quadro-01__text" }, h("slot", { key: '69bf82514749e24390ecf389b5180737d3211328', name: "text" }))));
    }
    static get is() { return "mt-quadro-01"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["quadro-01.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["quadro-01.css"]
        };
    }
}
//# sourceMappingURL=quadro-01.js.map
