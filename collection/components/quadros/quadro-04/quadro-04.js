import { h, Host } from "@stencil/core";
import { generateClasses } from "../../../global/typescript/functions";
export class Quadro04 {
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: '47af191a77d77f8e4d22076c7e3f31671e9fca53', class: generateClasses(produto, especialidade, ano, {
                'mt-quadro-04': true,
            }) }, h("div", { key: '0e08ef662a3c66078722fa813e22f8f45dd57f21', class: "mt-quadro-04__container" }, h("div", { key: '9b05b677f9216fcf33718e34aeccb6c2d01b64d2', class: "mt-quadro-04__left" }, h("slot", { key: 'c222c4ffb8c396c76c47667bce547e84290f93f6', name: "left" })), h("div", { key: '5c17e86f89e024bc7a9031dc7cf251b1d8568322', class: "mt-quadro-04__inner-container" }, h("p", { key: 'b52d2a438218338bc680d29c6fcaaa5ed68c8912', class: "mt-quadro-04__text" }, h("slot", { key: 'a066a2f1e535c2e0f029831399ff52af3a81e9ee' }))))));
    }
    static get is() { return "mt-quadro-04"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["quadro-04.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["quadro-04.css"]
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
//# sourceMappingURL=quadro-04.js.map
