const generateClasses = (produto, apostila, ano, especialidade, parte, cssClassMap) => {
    return {
        [`mt-${produto}`]: true,
        [`mt-${apostila}`]: true,
        [`mt-${ano}`]: true,
        [`mt-${especialidade}`]: !!especialidade,
        [`mt-${parte}`]: !!parte,
        ...cssClassMap,
    };
};

var MtProdutosEnum;
(function (MtProdutosEnum) {
    MtProdutosEnum["DEFAULT"] = "default";
    MtProdutosEnum["MEDCURSO"] = "medcurso";
})(MtProdutosEnum || (MtProdutosEnum = {}));
var MtEspecialidadesEnum;
(function (MtEspecialidadesEnum) {
    MtEspecialidadesEnum["DEFAULT"] = "default";
    MtEspecialidadesEnum["NEF"] = "nef";
})(MtEspecialidadesEnum || (MtEspecialidadesEnum = {}));
var MtApostilasEnum;
(function (MtApostilasEnum) {
    MtApostilasEnum["DEFAULT"] = "default";
    MtApostilasEnum["NEF_01"] = "nef-01";
})(MtApostilasEnum || (MtApostilasEnum = {}));
var MtPartesEnum;
(function (MtPartesEnum) {
    MtPartesEnum["DEFAULT"] = "default";
    MtPartesEnum["REVPRE"] = "revpre";
    MtPartesEnum["DIGIPRE"] = "digipre";
})(MtPartesEnum || (MtPartesEnum = {}));
var MtAnosEnum;
(function (MtAnosEnum) {
    MtAnosEnum["DEFAULT"] = "default";
    MtAnosEnum["ANO_2026"] = "2026";
})(MtAnosEnum || (MtAnosEnum = {}));

export { MtProdutosEnum as M, MtEspecialidadesEnum as a, generateClasses as g };
//# sourceMappingURL=p-M0FWbnS6.js.map

//# sourceMappingURL=p-M0FWbnS6.js.map