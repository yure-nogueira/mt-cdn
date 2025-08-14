import { p as promiseResolve, b as bootstrapLazy } from './index-Cs-n2LsI.js';
export { s as setNonce } from './index-Cs-n2LsI.js';
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
  return bootstrapLazy([["mt-paragrafo",[[262,"mt-paragrafo",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-quadro-01",[[262,"mt-quadro-01",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-quadro-02",[[262,"mt-quadro-02",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-quadro-03",[[262,"mt-quadro-03",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-quadro-04",[[262,"mt-quadro-04",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-quadro-05",[[262,"mt-quadro-05",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-titulo-h1",[[262,"mt-titulo-h1",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-titulo-h2",[[262,"mt-titulo-h2",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-titulo-h3",[[262,"mt-titulo-h3",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-titulo-h4",[[262,"mt-titulo-h4",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-titulo-h5",[[262,"mt-titulo-h5",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-titulo-resumo",[[262,"mt-titulo-resumo",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]]], options);
});
//# sourceMappingURL=medtango-components.js.map

//# sourceMappingURL=medtango-components.js.map