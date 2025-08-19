import { h, Host } from "@stencil/core";
export class Footer {
    render() {
        return (h(Host, { key: '30e9392e5f3a2f290fa455220299c328b72fba38', class: "mt-footer" }, h("div", { key: '31d4bb6c6976b7f3d36e3ca197d94088bc4d5b86', class: "mt-container" }, h("span", { key: '106f75171ed2c500116e3048bc2e339932b03cdc', class: "mt-footer__left" }, h("slot", { key: '3dd92615d47d53567cc595e88f1de3d0f275f8cd', name: "start" })), h("span", { key: '4180e989d20b2ea2264921445a65f2a3ba638351', class: "mt-footer__middle" }, h("slot", { key: '1c80ff920c8ea475c6d61e7709c9b4f78f52da31' })), h("span", { key: '84e1d69377cc84f4f1678582abc92636637a8205', class: "mt-footer__right" }, h("slot", { key: '6e40e1d597d9f5a3aa6ac3728fc39ba03cae7358', name: "end" })))));
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
