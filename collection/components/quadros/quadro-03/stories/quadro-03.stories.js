import { html, nothing } from "lit";
import { MT_ANOS, MT_ESPECIALIDADES, MT_PRODUTOS, } from "../../../../global/typescript/constants";
const meta = {
    title: 'Components/Quadros/Quadro 03',
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
    <mt-quadro-03
      produto="${args['produto'] || nothing}"
      especialidade="${args['especialidade'] || nothing}"
      ano="${args['ano'] || nothing}"
    >
      <span slot="title">Título</span>
      <span slot="text">Texto</span>
      <ul slot="list">
        <li>Bullet</li>
      </ul>
    </mt-quadro-03>
  `,
};
//# sourceMappingURL=quadro-03.stories.js.map
