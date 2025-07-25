import { html } from "lit";
const meta = {
    title: 'Components/Títulos/Título H1',
};
export default meta;
export const Default = {
    render: () => {
        return html `
      <mt-title-h1>
        <span slot="pre-title">Capítulo 00</span>
        <span slot="title">Título H1</span>
        <span slot="subtitle">Subtítulo H1</span>
      </mt-title-h1>
    `;
    },
};
//# sourceMappingURL=title-h1.stories.js.map
