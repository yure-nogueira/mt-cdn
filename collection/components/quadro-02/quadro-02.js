import { h, Host } from "@stencil/core";
export class Quadro02 {
    render() {
        return (h(Host, { key: '2a37a5f981ee27a18233f218cc493ee460182ab1', class: "mt-quadro-02" }, h("div", { key: '3e2f8bd02c4ba21ddfef2ed4cd45cd04ce6292be', class: "mt-quadro-02__left" }, h("slot", { key: 'bd52ab2f9fb7908247444dbabf88e4f3b4decbe0', name: "left" })), h("div", { key: '88059a39d1200dbe65a159987d787df9db95649a', class: "mt-quadro-02__inner-container" }, h("h3", { key: '47833f895f23f59da264fca5a53a20d28db3cecd', class: "mt-quadro-02__title" }, h("slot", { key: '7e6bf28a0cfa6caebcfbe2237189a128bb149c81', name: "title" })), h("p", { key: '6a53732e6901f02bc2ea7c9af7895bb0e6a0101b', class: "mt-quadro-02__text" }, h("slot", { key: '5deb10284005f5f26a2edb678502ad6b5606ff6f', name: "text" })))));
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
