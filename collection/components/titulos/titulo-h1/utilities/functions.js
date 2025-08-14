import { h } from "@stencil/core";
import { MtEspecialidadesEnum, MtProdutosEnum, } from "../../../../global/typescript/enums";
export const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("div", { class: "mt-titulo-h1__container" }, h("p", { class: "mt-titulo-h1__pre-title" }, h("slot", { name: "pre-title" })), h("h1", { class: "mt-titulo-h1__title" }, h("slot", { name: "title" })), h("h2", { class: "mt-titulo-h1__subtitle" }, h("slot", { name: "subtitle" }))));
        }
    }
    return (h("h1", null, h("slot", null)));
};
//# sourceMappingURL=functions.js.map
