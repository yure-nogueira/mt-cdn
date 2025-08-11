import { h, Host } from "@stencil/core";
import { generateClasses } from "../../../global/typescript/functions";
export class TituloH3 {
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: 'ef172e40e5f19da01e900660f365d9ce57b1944b', class: generateClasses(produto, especialidade, ano, {
                'mt-titulo-h3': true,
            }) }, h("div", { key: 'db72df7ebc7de3dd3dd19d6e4bac9982945ef8cb', class: "mt-titulo-h3__container" }, h("div", { key: '0147d245d5136655d75333924b12eca0bb690af0', class: "mt-titulo-h3__line" }), h("h3", { key: '9ada7a1a9946a497419615cbdc24f983452f1387', class: "mt-titulo-h3__text" }, h("slot", { key: '5cd4692423e528da53a0f22f6823071c59bc940e' })))));
    }
    static get is() { return "mt-titulo-h3"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["titulo-h3.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["titulo-h3.css"]
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
//# sourceMappingURL=titulo-h3.js.map
