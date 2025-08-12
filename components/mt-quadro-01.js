import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { g as generateClasses } from './p-B5UvSsrV.js';

const quadro01Css = ".sc-mt-quadro-01-h{--mt-quadro-01-span-color:var(--mt-color-quadros-fonte-01);--mt-quadro-01-span-font-family:\"Noto Sans\", sans-serif;--mt-quadro-01-span-font-weight:900;--mt-quadro-01-span-text-transform:uppercase;--mt-quadro-01-span-font-size:16px;--mt-quadro-01-span-padding:6px;--mt-quadro-01-span-background-color:var(--mt-color-quadros-bg-01);--mt-quadro-01-container-border:2px solid var(--mt-color-quadros-fonte-02);--mt-quadro-01-text-color:var(--mt-color-quadros-fonte-02);--mt-quadro-01-text-font-family:\"Noto Sans\", sans-serif;--mt-quadro-01-text-font-weight:500;--mt-quadro-01-text-text-transform:none;--mt-quadro-01-text-font-size:16px;--mt-quadro-01-text-padding:6px;display:block}.mt-quadro-01__container.sc-mt-quadro-01{border-left:var(--mt-quadro-01-container-border)}.mt-quadro-01__span.sc-mt-quadro-01{color:var(--mt-quadro-01-span-color);font-family:var(--mt-quadro-01-span-font-family);font-weight:var(--mt-quadro-01-span-font-weight);text-transform:var(--mt-quadro-01-span-text-transform);font-size:var(--mt-quadro-01-span-font-size);line-height:1;margin:0;padding:var(--mt-quadro-01-span-padding);background-color:var(--mt-quadro-01-span-background-color);display:inline-block;border-left:var(--mt-quadro-01-container-border)}.mt-quadro-01__text.sc-mt-quadro-01{color:var(--mt-quadro-01-text-color);font-family:var(--mt-quadro-01-text-font-family);font-weight:var(--mt-quadro-01-text-font-weight);text-transform:var(--mt-quadro-01-text-text-transform);font-size:var(--mt-quadro-01-text-font-size);line-height:1;margin:0;padding:var(--mt-quadro-01-text-padding)}";

const Quadro01 = /*@__PURE__*/ proxyCustomElement(class Quadro01 extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: 'e42a3639c457e50f96b5f64ab1ba8f13a6689685', class: generateClasses(produto, especialidade, ano, {
                'mt-quadro-01': true,
            }) }, h("div", { key: '417700abdb5e649fbf1511f88b7a4c8432929288', class: "mt-quadro-01__container" }, h("span", { key: 'e625ba3cf72d281fae3e4440cb491bce2da954f5', class: "mt-quadro-01__span" }, h("slot", { key: 'fd483a5044b9f0a30dbf0f1bdf085c0caf7e6957', name: "span" })), h("p", { key: 'ba2c3e456bf17d04d859bb6530ed92144d6241cd', class: "mt-quadro-01__text" }, h("slot", { key: 'e6445cea646549fbeb118c1c0e316af14ee0ff84' })))));
    }
    static get style() { return quadro01Css; }
}, [262, "mt-quadro-01", {
        "produto": [513],
        "especialidade": [513],
        "ano": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-quadro-01"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-quadro-01":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Quadro01);
            }
            break;
    } });
}
defineCustomElement$1();

const MtQuadro01 = Quadro01;
const defineCustomElement = defineCustomElement$1;

export { MtQuadro01, defineCustomElement };
//# sourceMappingURL=mt-quadro-01.js.map

//# sourceMappingURL=mt-quadro-01.js.map