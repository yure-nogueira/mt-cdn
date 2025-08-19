import { p as promiseResolve, b as bootstrapLazy } from './index-Bau8JtQz.js';
export { s as setNonce } from './index-Bau8JtQz.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.36.2 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["mt-background",[[262,"mt-background"]]],["mt-col",[[262,"mt-col",{"breakpoint":[513]}]]],["mt-columns",[[262,"mt-columns"]]],["mt-container",[[262,"mt-container"]]],["mt-content",[[262,"mt-content"]]],["mt-floated",[[262,"mt-floated"]]],["mt-footer",[[262,"mt-footer"]]],["mt-list",[[262,"mt-list"]]],["mt-page",[[262,"mt-page"]]],["mt-paragrafo",[[262,"mt-paragrafo"]]],["mt-quadro-01",[[262,"mt-quadro-01"]]],["mt-quadro-02",[[262,"mt-quadro-02"]]],["mt-quadro-pictograma-01",[[262,"mt-quadro-pictograma-01"]]],["mt-row",[[262,"mt-row"]]],["mt-titulo-h1",[[262,"mt-titulo-h1"]]],["mt-titulo-h2",[[262,"mt-titulo-h2"]]],["mt-titulo-h3",[[262,"mt-titulo-h3"]]],["mt-titulo-h5",[[262,"mt-titulo-h5"]]],["mt-titulo-resumo",[[262,"mt-titulo-resumo"]]]], options);
});
//# sourceMappingURL=medtango-components.js.map

//# sourceMappingURL=medtango-components.js.map