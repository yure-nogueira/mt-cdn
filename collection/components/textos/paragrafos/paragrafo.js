import { h, Host } from "@stencil/core";
import { generateClasses } from "../../../global/typescript/functions";
export class Paragrafo {
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: '18f19d9c8732dbcfb3e12afe320f8973a8b8be1e', class: generateClasses(produto, especialidade, ano, {
                'mt-paragrafo': true,
            }) }, h("p", { key: '5356f7809cbe3640049f3fa3bd69c18eb03a6dcb', class: "mt-paragrafo__text" }, h("slot", { key: '265fb21e251adec86befdbb4bb4416bd2557ac84' }))));
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
//# sourceMappingURL=paragrafo.js.map
