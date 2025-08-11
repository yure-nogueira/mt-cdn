import { html, nothing } from "lit";
import { MT_ANOS, MT_ESPECIALIDADES, MT_PRODUTOS, } from "../../../../global/typescript/constants";
const meta = {
    title: 'Components/Títulos/Título H2',
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
    <mt-titulo-h2
      produto="${args['produto'] || nothing}"
      especialidade="${args['especialidade'] || nothing}"
      ano="${args['ano'] || nothing}"
    >
      título h2
    </mt-titulo-h2>
  `,
};
//# sourceMappingURL=titulo-h2.stories.js.map
