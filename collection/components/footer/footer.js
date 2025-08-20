import { h, Host } from "@stencil/core";
export class Footer {
    render() {
        return (h(Host, { key: '0d415b709973e096149e2c12602f09a42833f586', class: "mt-footer" }, h("div", { key: 'c75e2f85f89b24a00ca51807588d37641c1e9906', class: "mt-container" }, h("span", { key: 'f1872963299149aebf7f8907d0652d04175b4443', class: "mt-footer__left" }, h("slot", { key: 'e895350919320df4d7a991f4cb6a7253340e00db', name: "start" })), h("span", { key: '5b657e990edb1630a1ec5e05083eab8abed16957', class: "mt-footer__middle" }, h("slot", { key: '3da48029ffba75a9237a5ea76e54ba2bcb8b14db' })), h("span", { key: 'e54d1eab7bb853f8789f0e461235fd587a89d231', class: "mt-footer__right" }, h("slot", { key: '90fed84d67ae0d056d26fdaef146eb36a1929cc5', name: "end" })))));
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
