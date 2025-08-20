import { h, Host } from "@stencil/core";
export class Page {
    render() {
        return (h(Host, { key: 'a238ea9e3d20359ff5fd32f746486ee936bcc5c8' }, h("slot", { key: '59cd25380c7b8f88fa3de07358a89edab81764de' })));
    }
    static get is() { return "mt-page"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["page.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["page.css"]
        };
    }
}
//# sourceMappingURL=page.js.map
