import { h } from "@stencil/core";
import { MtEspecialidadesEnum, MtProdutosEnum, } from "../../../../global/typescript/enums";
export const markdown = (produto, especialidade, _apostila, _parte, _ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return (h("h6", { class: "mt-titulo-resumo__text" }, h("slot", null)));
        }
    }
    return (h("h6", null, h("slot", null)));
};
//# sourceMappingURL=functions.js.map
