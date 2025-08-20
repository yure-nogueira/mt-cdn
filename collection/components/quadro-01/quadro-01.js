import { h, Host } from "@stencil/core";
export class Quadro01 {
    render() {
        return (h(Host, { key: 'ce7eca7658284e8928f0db0536d415450d480fde', class: "mt-quadro-01" }, h("div", { key: '882ff6dcb87631d505b74641ba0101de822c8d6a', class: "mt-quadro-01__title" }, h("slot", { key: 'c2d0d453d2b056dd0d20d5c334dcd8376c7c14f1', name: "title" })), h("p", { key: '4752c30bf7ef6493a17c5186c8a05d947d2b512c', class: "mt-quadro-01__text" }, h("slot", { key: 'd3a4ad3f2603832aecdf415059f5047fffb8d416', name: "text" }))));
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
