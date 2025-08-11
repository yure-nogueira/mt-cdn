import { h, Host } from "@stencil/core";
import { generateClasses } from "../../../global/typescript/functions";
export class Quadro02 {
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: 'c13f19221d7f0f20d54ba9d172cfe9c5d7764149', class: generateClasses(produto, especialidade, ano, {
                'mt-quadro-02': true,
            }) }, h("div", { key: '68f73cb3710aa3a89f4448c95aa3f12404f37c2c', class: "mt-quadro-02__container" }, h("div", { key: 'b452b83ae68ccf44efab9735017a533676b8b468', class: "mt-quadro-02__left" }, h("slot", { key: '6783fdcbfb70ed603906d6948e78a19877030d9d', name: "left" })), h("div", { key: '30c277151ffa5f9f273444c3db0a18876cbdc0fc', class: "mt-quadro-02__inner-container" }, h("p", { key: '59aac554f7efeca0cb9df5d6d34c5c41dfdc159b', class: "mt-quadro-02__text" }, h("slot", { key: '0053cd6b47cb176dc71f5b7140f04d0851e82e4e' }))))));
    }
    static get is() { return "mt-quadro-02"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["quadro-02.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["quadro-02.css"]
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
//# sourceMappingURL=quadro-02.js.map
