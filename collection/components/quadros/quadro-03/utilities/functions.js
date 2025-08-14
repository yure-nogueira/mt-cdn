import { h } from "@stencil/core";
import { MtEspecialidadesEnum, MtProdutosEnum, } from "../../../../global/typescript/enums";
export const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("div", { class: "mt-quadro-03__container" }, h("h3", { class: "mt-quadro-03__title" }, h("slot", { name: "title" })), h("p", { class: "mt-quadro-03__text" }, h("slot", { name: "text" })), h("div", { class: "mt-quadro-03__list" }, h("slot", { name: "list" }))));
        }
    }
    return (h("p", null, h("slot", null)));
};
//# sourceMappingURL=functions.js.map
