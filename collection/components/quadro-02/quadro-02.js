import { h, Host } from "@stencil/core";
export class Quadro02 {
    render() {
        return (h(Host, { key: '9a1e907eb16ee938dd82d71fd1a9320991fc2827', class: "mt-quadro-02" }, h("div", { key: 'e41a6c829989ac0d649224fd7f9583b120103f23', class: "mt-quadro-02__left" }, h("slot", { key: '9a5583f975c3bba2a332176836785d88f3d9121d', name: "left" })), h("div", { key: 'cb86a4fdecd4414817f5380b1188271e306153d0', class: "mt-quadro-02__inner-container" }, h("h3", { key: '19efb2db4e821dc865c05d076864d3ca892e2608', class: "mt-quadro-02__title" }, h("slot", { key: '9af554f02844bd1b400205ea57e7cb0007f81a1d', name: "title" })), h("p", { key: 'ca564eda32ac8526bbbdf1000fceca6b1caefcad', class: "mt-quadro-02__text" }, h("slot", { key: 'ad9c6ccf56c992d089bb964e430218d19ba670e6', name: "text" })))));
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
