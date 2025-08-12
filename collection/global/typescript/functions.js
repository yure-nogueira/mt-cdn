export const generateClasses = (produto, especialidade, ano, cssClassMap) => {
    return typeof produto === 'string' && produto.length > 0
        ? {
            [`mt-${produto}`]: true,
            [`mt-${especialidade}`]: true,
            [`mt-${ano}`]: true,
            ...cssClassMap,
        }
        : cssClassMap;
};
//# sourceMappingURL=functions.js.map
