import { h, Host } from "@stencil/core";
import { generateClasses } from "../../../global/typescript/functions";
export class TituloH4 {
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: 'a24ee3e031007dfb1c743bc82315ecf8dac76b6d', class: generateClasses(produto, especialidade, ano, {
                'mt-titulo-h4': true,
            }) }, h("div", { key: '562ec01fc6d84e6f4ae60209acd1cad1a8f59dcc', class: "mt-titulo-h4__container" }, h("div", { key: 'dbc4e3f3f9a0e4fb326c44dedf7c25f627ea5f53', class: "mt-titulo-h4__line" }, "\u25B6"), h("h4", { key: '86df144d7229a5dad2fa29cd5d51147a56cf2c0d', class: "mt-titulo-h4__text" }, h("slot", { key: '47524bb298d37c3e18e5cd0001ce29912a5a907b' })))));
    }
    static get is() { return "mt-titulo-h4"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["titulo-h4.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["titulo-h4.css"]
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
//# sourceMappingURL=titulo-h4.js.map
