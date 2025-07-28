import { Host, h } from "@stencil/core";
const generateClasses = (produto, // MtProdutos | undefined | null,
especialidade, // MtMedcursoEspecialidade | undefined | null,
ano, component, cssClassMap) => {
    return typeof produto === 'string' && produto.length > 0
        ? {
            [`mt-${produto}-${component}`]: true,
            [`mt-${especialidade}-${component}`]: true,
            [`mt-${ano}-${component}`]: true,
            ...cssClassMap,
        }
        : cssClassMap;
};
export class TitleH1 {
    produto; // MtProdutos
    especialidade; // MtMedcursoEspecialidade
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: '4a91fca3e99216ec059b27c74bc6243ad1ee05f6', class: generateClasses(produto, especialidade, ano, 'title-h1', {
                'mt-title-h1': true,
            }) }, h("p", { key: 'eef1d7894f5be238b1e146beef80dee54254deeb', class: "mt-title-h1__pre-title" }, h("slot", { key: 'ad69250ac18cbcc315dacd7efda5cbfc4c2020ee', name: "pre-title" })), h("h1", { key: 'd3c7cd38e55ced6b71d5425c3470711632a56166', class: "mt-title-h1__title" }, h("slot", { key: '0bda99489551a0ad64f016bd5b72abd679ce247f', name: "title" })), h("h2", { key: '7863b4636904309557db53e03fc84b2b8c738600', class: "mt-title-h1__subtitle" }, h("slot", { key: '3822d78eafcd30c5ab98a7c2e2149b043662a858', name: "subtitle" }))));
    }
    static get is() { return "mt-title-h1"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["title-h1.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["title-h1.css"]
        };
    }
    static get properties() {
        return {
            "produto": {
                "type": "string",
                "attribute": "produto",
                "mutable": false,
                "complexType": {
                    "original": "'medcurso' | 'med'",
                    "resolved": "\"med\" | \"medcurso\"",
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
                    "original": "'car' | 'nef'",
                    "resolved": "\"car\" | \"nef\"",
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
                    "original": "'202'",
                    "resolved": "\"202\"",
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
            }
        };
    }
}
//# sourceMappingURL=title-h1.js.map
