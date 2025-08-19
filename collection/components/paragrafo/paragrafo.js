import { h, Host } from "@stencil/core";
export class Paragrafo {
    render() {
        return (h(Host, { key: 'aa08c67ad5f2be4482518b6f1b659207f05d9c88', class: "mt-paragrafo" }, h("p", { key: '0c476cab309d4f1209f072f9237387100c1cf07c' }, h("slot", { key: '0c98e68005e28bb4028feb45f7e2c52ccb577f58' }))));
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
