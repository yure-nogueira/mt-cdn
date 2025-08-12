import { html, nothing } from "lit";
import { MT_ANOS, MT_ESPECIALIDADES, MT_PRODUTOS, } from "../../../../global/typescript/constants";
const meta = {
    title: 'Components/Títulos/Título H1',
    argTypes: {
        ['produto']: {
            control: { type: 'select' },
            options: [...MT_PRODUTOS],
            description: '',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'string' },
            },
        },
        ['especialidade']: {
            control: { type: 'select' },
            options: [...MT_ESPECIALIDADES],
            description: '',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'string' },
            },
        },
        ['ano']: {
            control: { type: 'select' },
            options: [...MT_ANOS],
            description: '',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'string' },
            },
        },
    },
    args: {
        produto: 'medcurso',
        especialidade: 'nef',
        ano: '2026',
    },
};
export default meta;
export const Default = {
    render: ({ ...args }) => html `
    <mt-titulo-h1
      produto="${args['produto'] || nothing}"
      especialidade="${args['especialidade'] || nothing}"
      ano="${args['ano'] || nothing}"
    >
      <span slot="pre-title">Capítulo 00</span>
      <span slot="title">Título H1</span>
      <span slot="subtitle">Subtítulo H1</span>
    </mt-titulo-h1>
  `,
};
//# sourceMappingURL=titulo-h1.stories.js.map
