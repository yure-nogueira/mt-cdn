import { h, Host } from "@stencil/core";
export class TituloH2 {
    render() {
        return (h(Host, { key: '21ea9bcf3d33e9deb517c2fe5dc028c34dac9145', class: "mt-titulo-h2" }, h("h2", { key: 'a0ecfb8160ed7b73a7b35580b5ef5f3a086541f8' }, h("slot", { key: 'cd63a61203fc51cc7d2ef73b3d0a346fe78fe6c7' }))));
    }
    static get is() { return "mt-titulo-h2"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["titulo-h2.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["titulo-h2.css"]
        };
    }
}
//# sourceMappingURL=titulo-h2.js.map
