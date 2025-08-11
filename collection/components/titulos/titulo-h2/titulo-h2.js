import { h, Host } from "@stencil/core";
import { generateClasses } from "../../../global/typescript/functions";
export class TituloH2 {
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: '2e4e28f973ea6c7971b0a1c44a8c9c4493d30993', class: generateClasses(produto, especialidade, ano, {
                'mt-titulo-h2': true,
            }) }, h("div", { key: 'bffedd10cdf503254568104fa05237f19d5daee1', class: "mt-titulo-h2__container" }, h("div", { key: '5b995ec40f1795240bc984d86a6b716c5301865c', class: "mt-titulo-h2__line" }), h("h2", { key: 'b6cacd8eeceeeaf914f84d61a703f488afb7aae9', class: "mt-titulo-h2__text" }, h("slot", { key: 'f0d7be531e1a53a5a140c3b518bad2ca1bdf23b0' })))));
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
//# sourceMappingURL=titulo-h2.js.map
