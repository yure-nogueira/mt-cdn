import { h, Host } from "@stencil/core";
import { generateClasses } from "../../../global/typescript/functions";
export class Quadro03 {
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: '4a6ff76ef0c636db02b827f470fc92736f1b3794', class: generateClasses(produto, especialidade, ano, {
                'mt-quadro-03': true,
            }) }, h("div", { key: 'f37a3296dfca66f53b267b2abfcb5f530b361c83', class: "mt-quadro-03__container" }, h("h3", { key: 'fdf876a0af1632805ab24af1c593ef5bff78271a', class: "mt-quadro-03__title" }, h("slot", { key: 'af5b1529c0b827f171f7ee243ce04c0cb68e9e67', name: "title" })), h("p", { key: '81363fbbb2a3a6ad8702c9f0661305255778b338', class: "mt-quadro-03__text" }, h("slot", { key: '0ed33894565a16ffe349aace67255381b3abbbd5', name: "text" })), h("div", { key: 'daaca84b406d6aa29acb88aafee38b4ae43242df', class: "mt-quadro-03__list" }, h("slot", { key: '1b7d0432c6992cf2ad0ca090ce3aaf123bc71603', name: "list" })))));
    }
    static get is() { return "mt-quadro-03"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["quadro-03.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["quadro-03.css"]
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
//# sourceMappingURL=quadro-03.js.map
