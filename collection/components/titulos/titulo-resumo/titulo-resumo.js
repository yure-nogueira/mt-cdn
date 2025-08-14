import { h, Host } from "@stencil/core";
import { generateClasses } from "../../../global/typescript/functions";
import { markdown } from "./utilities/functions";
export class TituloResumo {
    produto;
    apostila;
    ano;
    especialidade;
    parte;
    render() {
        const { produto, especialidade, apostila, parte, ano } = this;
        return (h(Host, { key: '0d3553e1c1323480a4a775d34ce8ce55315075ae', class: generateClasses(produto, apostila, ano, especialidade, parte, {
                'mt-titulo-resumo': true,
            }) }, markdown(produto, especialidade, apostila, parte, ano)));
    }
    static get is() { return "mt-titulo-resumo"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["titulo-resumo.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["titulo-resumo.css"]
        };
    }
    static get properties() {
        return {
            "produto": {
                "type": "string",
                "attribute": "produto",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
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
            "apostila": {
                "type": "string",
                "attribute": "apostila",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
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
                    "original": "string",
                    "resolved": "string",
                    "references": {}
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
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "parte": {
                "type": "string",
                "attribute": "parte",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
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
//# sourceMappingURL=titulo-resumo.js.map
