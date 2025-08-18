import { h, Host } from "@stencil/core";
export class Quadro02 {
    render() {
        return (h(Host, { key: 'ce7eca7658284e8928f0db0536d415450d480fde', class: "mt-quadro-02" }, h("div", { key: '517e304dbb75edd5a5f3141bc17de39802861c0a', class: "mt-quadro-02__left" }, h("slot", { key: '9ec0219748a84bf022554f888c09c4436ffcffa7', name: "left" })), h("div", { key: '19352a8f7e7d80c93d61f842c05bf66bdb26c867', class: "mt-quadro-02__inner-container" }, h("h3", { key: '73590c564955aa809f738839fe8431d0d2f17143', class: "mt-quadro-02__title" }, h("slot", { key: '73f7e034b7c1cbc9ae8adba2b7bd1369519ff9e0', name: "title" })), h("p", { key: 'b87ce36ff7333bb8fc27fca0abd7b78d149c7dc7', class: "mt-quadro-02__text" }, h("slot", { key: '579394c8e3705f88885957fb6529408a33161dd2', name: "text" })))));
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
