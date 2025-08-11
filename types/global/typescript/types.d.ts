import type { MtProdutosEnum, MtEspecialidadesEnum, MtAnosEnum } from './enums';
export type MtLiteralUnion<T extends U, U = string> = T | (U & Record<never, never>);
export type MtCssClassMap = {
    [className: string]: boolean;
};
export type MtProdutos = `${MtProdutosEnum}`;
export type MtEspecialidades = `${MtEspecialidadesEnum}`;
export type MtAnos = `${MtAnosEnum}`;
