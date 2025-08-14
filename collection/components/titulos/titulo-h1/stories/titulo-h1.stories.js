import { html, nothing } from "lit";
import { MT_ANOS, MT_APOSTILAS, MT_ESPECIALIDADES, MT_PARTES, MT_PRODUTOS, } from "../../../../global/typescript/constants";
import { MtEspecialidadesEnum, MtProdutosEnum, } from "../../../../global/typescript/enums";
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
        <mt-titulo-h1
          produto="${produto || nothing}"
          especialidade="${especialidade || nothing}"
          apostila="${apostila || nothing}"
          parte="${parte || nothing}"
          ano="${ano || nothing}"
        >
          <span slot="pre-title">CAPÍTULO 00</span>
          <span slot="title">TÍTULO H1</span>
          <span slot="subtitle">SUBTÍTULO H1</span>
        </mt-titulo-h1>
      `;
        }
    }
    return html `
    <mt-titulo-h1
      produto="${produto || nothing}"
      especialidade="${especialidade || nothing}"
      apostila="${apostila || nothing}"
      parte="${parte || nothing}"
      ano="${ano || nothing}"
    >
      <span>Título H1</span>
    </mt-titulo-h1>
  `;
};
//# sourceMappingURL=titulo-h1.stories.js.map
