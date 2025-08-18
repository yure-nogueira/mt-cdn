import { h, Host } from "@stencil/core";
export class Footer {
    render() {
        return (h(Host, { key: '1cbf2aea3ad38974b6a42fd18e0be06057112aa7', class: "mt-footer" }, h("div", { key: '52fe3bf26609dbbe7cacdcf46e70c2423937074e', class: "mt-container" }, h("span", { key: 'e4c43ec6085d619d5ae42bfe582500448146ba65', class: "mt-footer__left" }, h("slot", { key: '5df8653f463a858b1eede33092aca8b95c383d75', name: "start" })), h("span", { key: 'da8ca770f8cdc5821dad6fa066e331b2c36ea72e', class: "mt-footer__midle" }, h("slot", { key: 'ee2b29f8777fa6ba0ffc34f794535bc59b6a6143' })), h("span", { key: '43b4d0df6e5c5218d8fcd10b06293e2fded88b74', class: "mt-footer__right" }, h("slot", { key: 'de95e5843bd15173b6887f5ef135df063a05b0af', name: "end" })))));
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
