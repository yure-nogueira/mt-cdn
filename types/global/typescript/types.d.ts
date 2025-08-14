import type { MtAnosEnum, MtApostilasEnum, MtEspecialidadesEnum, MtPartesEnum, MtProdutosEnum } from './enums';
export type MtLiteralUnion<T extends U, U = string> = T | (U & Record<never, never>);
export type MtCssClassMap = {
    [className: string]: boolean;
};
export type MtProdutos = `${MtProdutosEnum}`;
export type MtEspecialidades = `${MtEspecialidadesEnum}`;
export type MtApostilas = `${MtApostilasEnum}`;
export type MtPartes = `${MtPartesEnum}`;
export type MtAnos = `${MtAnosEnum}`;
