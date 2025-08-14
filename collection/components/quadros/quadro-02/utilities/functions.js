import { h } from "@stencil/core";
import { MtEspecialidadesEnum, MtProdutosEnum, } from "../../../../global/typescript/enums";
export const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("div", { class: "mt-quadro-02__container" }, h("div", { class: "mt-quadro-02__left" }, h("slot", { name: "left" })), h("div", { class: "mt-quadro-02__inner-container" }, h("p", { class: "mt-quadro-02__text" }, h("slot", null)))));
        }
    }
    return (h("p", null, h("slot", null)));
};
//# sourceMappingURL=functions.js.map
