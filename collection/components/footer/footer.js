import { h, Host } from "@stencil/core";
export class Footer {
    render() {
        return (h(Host, { key: '1cbf2aea3ad38974b6a42fd18e0be06057112aa7', class: "mt-footer" }, h("div", { key: '52fe3bf26609dbbe7cacdcf46e70c2423937074e', class: "mt-container" }, h("span", { key: 'e4c43ec6085d619d5ae42bfe582500448146ba65', class: "mt-footer__left" }, h("slot", { key: '5df8653f463a858b1eede33092aca8b95c383d75', name: "start" })), h("span", { key: 'a795548099bf40b2ba2c7391ae9882f3bb549d87', class: "mt-footer__middle" }, h("slot", { key: '5c21e9f0ec879e56fe03e08c1c45b898e5626107' })), h("span", { key: '9127a5a0be7f20addfff7f01561e08a8acdf0068', class: "mt-footer__right" }, h("slot", { key: '2b7fdb42049dcc2429586d74760f76327d206c59', name: "end" })))));
    }
    static get is() { return "mt-footer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["footer.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["footer.css"]
        };
    }
}
//# sourceMappingURL=footer.js.map
