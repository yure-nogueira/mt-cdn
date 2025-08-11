import { html, nothing } from "lit";
import { MT_ANOS, MT_ESPECIALIDADES, MT_PRODUTOS, } from "../../../../global/typescript/constants";
const meta = {
    title: 'Components/Quadros/Quadro 02',
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
    <mt-quadro-02
      produto="${args['produto'] || nothing}"
      especialidade="${args['especialidade'] || nothing}"
      ano="${args['ano'] || nothing}"
    >
      Assit quibus aut anim erspien ditatum quiscid etur sam rendam, ipsum soluptat.
    </mt-quadro-02>
  `,
};
export const Pictograma = {
    render: ({ ...args }) => html `
    <mt-quadro-02
      produto="${args['produto'] || nothing}"
      especialidade="${args['especialidade'] || nothing}"
      ano="${args['ano'] || nothing}"
    >
      <img slot="left" src="/youtube-01.png" alt="image" width="40px" />
      Assit quibus aut anim erspien ditatum quiscid etur sam rendam, ipsum soluptat.
    </mt-quadro-02>
  `,
};
//# sourceMappingURL=quadro-02.stories.js.map
