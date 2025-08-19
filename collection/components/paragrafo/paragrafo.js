import { h, Host } from "@stencil/core";
export class Paragrafo {
    render() {
        return (h(Host, { key: '73c29392a6750897d37df9b794ef2c71cc214121', class: "mt-paragrafo" }, h("p", { key: '9fe17ec847b059788150bf8f29a48363ae7b39bf' }, h("slot", { key: '035b0e5ce9ac1d1897daf7ac80fa7a99efd37795' }))));
    }
    static get is() { return "mt-paragrafo"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["paragrafo.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["paragrafo.css"]
        };
    }
}
//# sourceMappingURL=paragrafo.js.map
