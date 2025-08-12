import { h, Host } from "@stencil/core";
import { generateClasses } from "../../../global/typescript/functions";
export class TituloH5 {
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: 'ebbf9a41b6c3fde692e59cf7853c98944d734cd6', class: generateClasses(produto, especialidade, ano, {
                'mt-titulo-h5': true,
            }) }, h("div", { key: 'acb6ae13616dc00fc8c177f1cf4bbf9962d2449e', class: "mt-titulo-h5__container" }, h("div", { key: '7abdeee1c2be9c20ff9c734a8406a6b0e1be9478', class: "mt-titulo-h5__line" }, "\u25B6"), h("h5", { key: '89f04ae0cbd3cf416b964c832b5df11bc1cc1caf', class: "mt-titulo-h5__text" }, h("slot", { key: 'eef4bbf97205e3eb834a1ba0ee591bb1f96a6167' })))));
    }
    static get is() { return "mt-titulo-h5"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["titulo-h5.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["titulo-h5.css"]
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
//# sourceMappingURL=titulo-h5.js.map
