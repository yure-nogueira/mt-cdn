import { r as registerInstance, h, H as Host } from './index-Cs-n2LsI.js';
import { g as generateClasses } from './functions-B5UvSsrV.js';

const paragrafoCss = ".sc-mt-paragrafo-h{--mt-paragrafo-text-color:var(--mt-color-textos-basico);--mt-paragrafo-text-font-family:\"Noto Sans\", sans-serif;--mt-paragrafo-text-font-weight:400;--mt-paragrafo-text-text-transform:none;--mt-paragrafo-text-font-size:16px;--mt-paragrafo-strong-font-weight:700;--mt-paragrafo-strong-text-transform:uppercase;--mt-paragrafo-strong-font-style:italic;display:block}.mt-paragrafo__text.sc-mt-paragrafo{color:var(--mt-paragrafo-text-color);font-family:var(--mt-paragrafo-text-font-family);font-weight:var(--mt-paragrafo-text-font-weight);text-transform:var(--mt-paragrafo-text-text-transform);font-size:var(--mt-paragrafo-text-font-size);line-height:1;margin:0}.mt-paragrafo__text.sc-mt-paragrafo strong.sc-mt-paragrafo{font-weight:var(--mt-paragrafo-strong-font-weight);text-transform:var(--mt-paragrafo-strong-text-transform);font-style:var(--mt-paragrafo-strong-font-style)}.mt-paragrafo__text.sc-mt-paragrafo u.sc-mt-paragrafo{color:var(--mt-color-textos-underline)}";

const Paragrafo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    produto;
    especialidade;
    ano;
    render() {
        const { produto, especialidade, ano } = this;
        return (h(Host, { key: '18f19d9c8732dbcfb3e12afe320f8973a8b8be1e', class: generateClasses(produto, especialidade, ano, {
                'mt-paragrafo': true,
            }) }, h("p", { key: '5356f7809cbe3640049f3fa3bd69c18eb03a6dcb', class: "mt-paragrafo__text" }, h("slot", { key: '265fb21e251adec86befdbb4bb4416bd2557ac84' }))));
    }
};
Paragrafo.style = paragrafoCss;

export { Paragrafo as mt_paragrafo };
//# sourceMappingURL=mt-paragrafo.entry.js.map

//# sourceMappingURL=mt-paragrafo.entry.js.map