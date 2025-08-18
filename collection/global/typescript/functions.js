export const generateClasses = (produto, apostila, ano, especialidade, parte, cssClassMap) => {
    return {
        [`mt-${produto}`]: true,
        [`mt-${apostila}`]: true,
        [`mt-${ano}`]: true,
        [`mt-${especialidade}`]: !!especialidade,
        [`mt-${parte}`]: !!parte,
        ...cssClassMap,
    };
};
export const generateClassesLayout = (breakpoint, cssClassMap) => {
    return {
        [`mt-${breakpoint}`]: true,
        ...cssClassMap,
    };
};
//# sourceMappingURL=functions.js.map
