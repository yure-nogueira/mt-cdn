import { html, nothing } from "lit";
import { MT_ANOS, MT_ESPECIALIDADES, MT_PRODUTOS, } from "../../../../global/typescript/constants";
const meta = {
    title: 'Components/Paragrafos/Paragrafo',
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
    <mt-paragrafo
      produto="${args['produto'] || nothing}"
      especialidade="${args['especialidade'] || nothing}"
      ano="${args['ano'] || nothing}"
    >
      Pis duciamusda sinctas ex eumquam, optatiam, <strong>FIG. 1</strong> con porem que
      nesci tem ventibus ideles estion ressimendi conseru ptiusandita doluptur, apellor
      itatem cus et am facepudae <u>erchillat as quiaerc hilit, adit fuga.</u>
    </mt-paragrafo>
  `,
};
//# sourceMappingURL=paragrafo.stories.js.map
