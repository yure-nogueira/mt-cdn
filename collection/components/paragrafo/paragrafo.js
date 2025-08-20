import { h, Host } from "@stencil/core";
export class Paragrafo {
    render() {
        return (h(Host, { key: 'ad44328cc2dbcf9e1e7d13a92e9c19995a3be2e7', class: "mt-paragrafo" }, h("p", { key: '1ead1fd12466350eca7bf0a086d72c0feae5bf83' }, h("slot", { key: '71a02fe62ab3c2f08efc75e02da94b3511eb4a9c' }))));
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
