import { Host, h } from "@stencil/core";
export class TitleH1 {
    render() {
        return (h(Host, { key: '6b414ccac32e374b3f07cdef85b619be708d6d73' }, h("div", { key: 'de5cd145d703a252cfa2e1b6741d6dd5bb22f667', class: "mt-title-h1" }, h("p", { key: 'c45bb167930bfbdb6546aa7e75d591c7aaa6d832', class: "mt-title-h1__pre-title" }, h("slot", { key: '842121643e63d65016f335b7f920e7ed71a51b60', name: "pre-title" })), h("h1", { key: '2c26203da16fdc45e7e8c012d87b48e033558893', class: "mt-title-h1__title" }, h("slot", { key: '4263a746267ecd5ee46c729473136b08fd8ba996', name: "title" })), h("h2", { key: 'b5c9c8ea023eef237a3257c4598edeb46db89039', class: "mt-title-h1__subtitle" }, h("slot", { key: 'dc48d656b62869a6018bd45bb2f03df9b88bbe6f', name: "subtitle" })))));
    }
    static get is() { return "mt-title-h1"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["title-h1.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["title-h1.css"]
        };
    }
}
//# sourceMappingURL=title-h1.js.map
