import { h, Host } from "@stencil/core";
import { generateClasses } from "../../../global/typescript/functions";
export class Quadro01 {
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: 'e42a3639c457e50f96b5f64ab1ba8f13a6689685', class: generateClasses(produto, especialidade, ano, {
                'mt-quadro-01': true,
            }) }, h("div", { key: '417700abdb5e649fbf1511f88b7a4c8432929288', class: "mt-quadro-01__container" }, h("span", { key: 'e625ba3cf72d281fae3e4440cb491bce2da954f5', class: "mt-quadro-01__span" }, h("slot", { key: 'fd483a5044b9f0a30dbf0f1bdf085c0caf7e6957', name: "span" })), h("p", { key: 'ba2c3e456bf17d04d859bb6530ed92144d6241cd', class: "mt-quadro-01__text" }, h("slot", { key: 'e6445cea646549fbeb118c1c0e316af14ee0ff84' })))));
    }
    static get is() { return "mt-quadro-01"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["quadro-01.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["quadro-01.css"]
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
//# sourceMappingURL=quadro-01.js.map
