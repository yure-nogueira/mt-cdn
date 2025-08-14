'use strict';

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

exports.MtProdutosEnum = void 0;
(function (MtProdutosEnum) {
    MtProdutosEnum["DEFAULT"] = "default";
    MtProdutosEnum["MEDCURSO"] = "medcurso";
})(exports.MtProdutosEnum || (exports.MtProdutosEnum = {}));
exports.MtEspecialidadesEnum = void 0;
(function (MtEspecialidadesEnum) {
    MtEspecialidadesEnum["DEFAULT"] = "default";
    MtEspecialidadesEnum["NEF"] = "nef";
})(exports.MtEspecialidadesEnum || (exports.MtEspecialidadesEnum = {}));
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

exports.generateClasses = generateClasses;
//# sourceMappingURL=enums-Bjj1_LNU.js.map

//# sourceMappingURL=enums-Bjj1_LNU.js.map