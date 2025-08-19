import { h, Host } from "@stencil/core";
export class Footer {
    render() {
        return (h(Host, { key: '7da9be8effb85128c179fe254f5f9da4558b3bd3', class: "mt-footer" }, h("div", { key: '7af698a9abf866008dd1b8678122a991d43c9ba1', class: "mt-container" }, h("span", { key: 'dbf07540c58cd8bedabe3e4c3dafb76a6c9ea66d', class: "mt-footer__left" }, h("slot", { key: 'd8d7bb9bf59dd0ec3465acadefd7eb5a3597748b', name: "start" })), h("span", { key: '847e7aaead6aabc7b973fa803366d49752b71722', class: "mt-footer__middle" }, h("slot", { key: 'c7c4909858ac147c142eb38b124708560e38b8ea' })), h("span", { key: '8add11263f05eef314b76792525536c75aab6d28', class: "mt-footer__right" }, h("slot", { key: '33fa96cac9a237b1a1235cf65dfbd88b00828187', name: "end" })))));
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
