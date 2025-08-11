import { h, Host } from "@stencil/core";
import { generateClasses } from "../../../global/typescript/functions";
export class TituloH1 {
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: '4e543ec44167f1972bd6bc36a8d9ba27425a77ef', class: generateClasses(produto, especialidade, ano, {
                'mt-titulo-h1': true,
            }) }, h("div", { key: 'dca76ef7066ac092e98549e71c40a960cfaf909b', class: "mt-titulo-h1__container" }, h("div", { key: '85be230c91be3a2eb47d633c2a4e91f80f2ad95f', class: "mt-titulo-h1__line" }), h("div", { key: 'd1b7c8147aa87e00e02d39723472634338d383db', class: "mt-titulo-h1__inner-container" }, h("p", { key: 'd2a9268ad2a77a6c3d306d4633a62c1cef069a16', class: "mt-titulo-h1__pre-title" }, h("slot", { key: '780be393166f6b6efdba4356be026add381c49f7', name: "pre-title" })), h("h1", { key: '1fbff1bc7f23f1e35b3c88e98a5281e860c10f91', class: "mt-titulo-h1__title" }, h("slot", { key: 'fc4d91c73049430d7e7e6d3cbb97bd3bc586cd99', name: "title" })), h("h2", { key: '25c8f48b6fc184c53792d92ea445d02f583f03e3', class: "mt-titulo-h1__subtitle" }, h("slot", { key: 'f4ddda4251cada2aab9fbdb101fb1aceac1204e8', name: "subtitle" }))))));
    }
    static get is() { return "mt-titulo-h1"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["titulo-h1.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["titulo-h1.css"]
        };
    }
    static get properties() {
        return {
            "produto": {
                "type": "string",
                "attribute": "produto",
                "mutable": false,
                "complexType": {
                    "original": "MtProdutos",
                    "resolved": "\"med\" | \"medcurso\"",
                    "references": {
                        "MtProdutos": {
                            "location": "import",
                            "path": "../../../global/typescript/types",
                            "id": "src/global/typescript/types.ts::MtProdutos"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "especialidade": {
                "type": "string",
                "attribute": "especialidade",
                "mutable": false,
                "complexType": {
                    "original": "MtEspecialidades",
                    "resolved": "\"car\" | \"nef\"",
                    "references": {
                        "MtEspecialidades": {
                            "location": "import",
                            "path": "../../../global/typescript/types",
                            "id": "src/global/typescript/types.ts::MtEspecialidades"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "ano": {
                "type": "string",
                "attribute": "ano",
                "mutable": false,
                "complexType": {
                    "original": "MtAnos",
                    "resolved": "\"2026\"",
                    "references": {
                        "MtAnos": {
                            "location": "import",
                            "path": "../../../global/typescript/types",
                            "id": "src/global/typescript/types.ts::MtAnos"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true
            }
        };
    }
}
//# sourceMappingURL=titulo-h1.js.map
