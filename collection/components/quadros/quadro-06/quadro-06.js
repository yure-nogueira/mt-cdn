import { h, Host } from "@stencil/core";
import { generateClasses } from "../../../global/typescript/functions";
export class Quadro06 {
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: '38539d2a021ebb35cab904c9ff86d7d3b5287e7e', class: generateClasses(produto, especialidade, ano, {
                'mt-quadro-06': true,
            }) }, h("div", { key: 'fcddfaf8a54c6a6fca56f3f183085ddbf5e5d64c', class: "mt-quadro-06__container" }, h("h3", { key: 'f77d274455edeb618ac07a4ffc9a87aea7859e0c', class: "mt-quadro-06__title" }, h("slot", { key: 'ca4c2dd47a09244a40941e862c270881c90f8910', name: "title" })), h("p", { key: 'c3cb1c6c47e5358a4da1ae06e03e3730c23bc0ec', class: "mt-quadro-06__text" }, h("slot", { key: 'fcfe3085e8a52a4cd4137a7221f35b853dab98c9', name: "text" })))));
    }
    static get is() { return "mt-quadro-06"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["quadro-06.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["quadro-06.css"]
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
//# sourceMappingURL=quadro-06.js.map
