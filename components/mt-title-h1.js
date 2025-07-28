import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const titleH1Css = ".mt-medcurso-title-h1.mt-car-title-h1.mt-2026-title-h1.sc-mt-title-h1-h .mt-title-h1__pre-title.sc-mt-title-h1{border:1px solid red}.sc-mt-title-h1-h{--mt-title-h1-line-color:#9abec0;--mt-title-h1-pre-title-color:#9a999e;--mt-title-h1-title-color:#455a5a;--mt-title-h1-subtitle-color:#607b7a;display:block}.mt-title-h1.sc-mt-title-h1{display:flex;flex-direction:column;padding-left:12px;border-left:12px solid var(--mt-title-h1-line-color)}.mt-title-h1__pre-title.sc-mt-title-h1,.mt-title-h1__title.sc-mt-title-h1,.mt-title-h1__subtitle.sc-mt-title-h1{margin:0;text-transform:uppercase;font-family:\"Roboto\", sans-serif;font-weight:300;line-height:1}.mt-title-h1__pre-title.sc-mt-title-h1{font-size:16px;color:var(--mt-title-h1-pre-title-color)}.mt-title-h1__title.sc-mt-title-h1{margin:4px 0;font-weight:600;font-size:40px;color:var(--mt-title-h1-title-color)}.mt-title-h1__subtitle.sc-mt-title-h1{font-size:24px;color:var(--mt-title-h1-subtitle-color)}";

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
const TitleH1 = /*@__PURE__*/ proxyCustomElement(class TitleH1 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    produto; // MtProdutos
    especialidade; // MtMedcursoEspecialidade
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: '4a91fca3e99216ec059b27c74bc6243ad1ee05f6', class: generateClasses(produto, especialidade, ano, 'title-h1', {
                'mt-title-h1': true,
            }) }, h("p", { key: 'eef1d7894f5be238b1e146beef80dee54254deeb', class: "mt-title-h1__pre-title" }, h("slot", { key: 'ad69250ac18cbcc315dacd7efda5cbfc4c2020ee', name: "pre-title" })), h("h1", { key: 'd3c7cd38e55ced6b71d5425c3470711632a56166', class: "mt-title-h1__title" }, h("slot", { key: '0bda99489551a0ad64f016bd5b72abd679ce247f', name: "title" })), h("h2", { key: '7863b4636904309557db53e03fc84b2b8c738600', class: "mt-title-h1__subtitle" }, h("slot", { key: '3822d78eafcd30c5ab98a7c2e2149b043662a858', name: "subtitle" }))));
    }
    static get style() { return titleH1Css; }
}, [262, "mt-title-h1", {
        "produto": [513],
        "especialidade": [513],
        "ano": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-title-h1"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-title-h1":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TitleH1);
            }
            break;
    } });
}
defineCustomElement$1();

const MtTitleH1 = TitleH1;
const defineCustomElement = defineCustomElement$1;

export { MtTitleH1, defineCustomElement };
//# sourceMappingURL=mt-title-h1.js.map

//# sourceMappingURL=mt-title-h1.js.map