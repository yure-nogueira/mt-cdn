import { html } from "lit";
const meta = {
    title: 'Components/Grid/Grid Row',
};
export default meta;
export const Default = {
    render: () => {
        return html `
      <mt-grid-row>
        <div slot="col-1">Column 1</div>
        <div slot="col-2">Column 2</div>
        <div slot="col-3">Column 3</div>
      </mt-grid-row>
    `;
    },
};
//# sourceMappingURL=grid-row.stories.js.map
