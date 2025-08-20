import { h, Host } from "@stencil/core";
export class Quadro02 {
    render() {
        return (h(Host, { key: '5eb8a34212aec40f8426b3bf3f8e261cb38e93ff', class: "mt-quadro-02" }, h("div", { key: 'f331a9dd8635485eccc6e783d07e2c06848a5156', class: "mt-quadro-02__left" }, h("slot", { key: '93f276e1c726e25f4c4810ef18dceb8de2fadb77', name: "left" })), h("div", { key: 'b9427f5cd4b03228491b70520938ab6d0d3dc36c', class: "mt-quadro-02__inner-container" }, h("h3", { key: '9f0ff0985d5551788b1778e09825b33aa20c96f5', class: "mt-quadro-02__title" }, h("slot", { key: 'a48791592c0c2357e4efae3a7f55a130180bd642', name: "title" })), h("p", { key: '9cd97a60d99693fe781f7ab6bc1dd447a411bad5', class: "mt-quadro-02__text" }, h("slot", { key: 'ee81fe01ea27b8c25140a99c832b8cc5d9561f8c', name: "text" })))));
    }
    static get is() { return "mt-quadro-02"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["quadro-02.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["quadro-02.css"]
        };
    }
}
//# sourceMappingURL=quadro-02.js.map
