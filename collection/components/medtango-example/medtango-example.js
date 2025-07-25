import { Host, h } from "@stencil/core";
export class MedtangoExample {
    render() {
        return (h(Host, { key: '9b269fd264db490afc07079a71469caa55d0c182', class: "medtango-example" }, h("button", { key: '00e7b41546cfb917db071bf792060f541d850968', class: "medtango-example__button" }, h("slot", { key: 'be8936f46296b1c680f9fc74febb7d37ad2050b1' }))));
    }
    static get is() { return "medtango-example"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["medtango-example.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["medtango-example.css"]
        };
    }
}
//# sourceMappingURL=medtango-example.js.map
