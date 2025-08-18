import type { MtCssClassMap } from './types';
export declare const generateClasses: (produto: string, apostila: string, ano: string, especialidade?: string, parte?: string, cssClassMap?: MtCssClassMap) => MtCssClassMap;
export declare const generateClassesLayout: (breakpoint: string, cssClassMap?: MtCssClassMap) => MtCssClassMap;
