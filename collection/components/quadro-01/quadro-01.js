import { h, Host } from "@stencil/core";
export class Quadro01 {
    render() {
        return (h(Host, { key: 'ceb988a6431a38a3a41be52c0f5ac2931f9a5611', class: "mt-quadro-01" }, h("div", { key: '5be1c11655b4b88a94e3e47932095201afcd7d6e', class: "mt-quadro-01__title" }, h("slot", { key: 'e25b2f5c088a9b3cf74c738a77fdbb7ffcc2ba8d', name: "title" })), h("p", { key: '221079f5cded082374b371fbcc7f12e5d8f827a5', class: "mt-quadro-01__text" }, h("slot", { key: '6b8466ca2f41330377d1091b6a67c0bf25983749', name: "text" }))));
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
