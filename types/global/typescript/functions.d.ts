import type { MtAnos, MtCssClassMap, MtEspecialidades, MtProdutos } from './types';
export declare const generateClasses: (produto: MtProdutos | undefined | null, especialidade: MtEspecialidades | undefined | null, ano: MtAnos | undefined | null, cssClassMap: MtCssClassMap) => MtCssClassMap;
