import { html, nothing } from "lit";
import { MT_ANOS, MT_APOSTILAS, MT_ESPECIALIDADES, MT_PARTES, MT_PRODUTOS, } from "../../../../global/typescript/constants";
import { MtEspecialidadesEnum, MtProdutosEnum, } from "../../../../global/typescript/enums";
const meta = {
    title: 'Components/Quadros/Quadro 05',
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
        ['apostila']: {
            control: { type: 'select' },
            options: [...MT_APOSTILAS],
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
        ['especialidade']: {
            control: { type: 'select' },
            options: [...MT_ESPECIALIDADES],
            description: '',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'string' },
            },
        },
        ['parte']: {
            control: { type: 'select' },
            options: [...MT_PARTES],
            description: '',
            table: {
                defaultValue: { summary: 'undefined' },
                type: { summary: 'string' },
            },
        },
    },
    args: {
        produto: 'medcurso',
        apostila: null,
        ano: '2026',
        especialidade: 'nef',
        parte: null,
    },
};
export default meta;
export const Default = {
    render: ({ ...args }) => html `
    ${markdown(args['produto'], args['especialidade'], args['apostila'], args['parte'], args['ano'])}
  `,
};
const markdown = (produto, especialidade, apostila, parte, ano) => {
    if (produto === MtProdutosEnum.MEDCURSO) {
        if (especialidade === MtEspecialidadesEnum.NEF) {
            return html `
        <mt-quadro-05
          produto="${produto || nothing}"
          especialidade="${especialidade || nothing}"
          apostila="${apostila || nothing}"
          parte="${parte || nothing}"
          ano="${ano || nothing}"
        >
          <span slot="title">Título</span>
          <span>
            Assit quibus aut anim erspien ditatum quiscid etur sam rendam, ipsum soluptat.
          </span>
        </mt-quadro-05>
      `;
        }
    }
    return html `
    <mt-quadro-05
      produto="${produto || nothing}"
      especialidade="${especialidade || nothing}"
      apostila="${apostila || nothing}"
      parte="${parte || nothing}"
      ano="${ano || nothing}"
    >
      <span>QUADRO 05</span>
    </mt-quadro-05>
  `;
};
//# sourceMappingURL=quadro-05.stories.js.map
