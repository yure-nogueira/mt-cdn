import { p as promiseResolve, b as bootstrapLazy } from './index-B4O2AaR1.js';
export { s as setNonce } from './index-B4O2AaR1.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.36.1 | MIT Licensed | https://stenciljs.com
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
  return bootstrapLazy([["mt-grid-row",[[257,"mt-grid-row",{"cols":[2]}]]],["mt-title-h1",[[262,"mt-title-h1",{"produto":[513],"especialidade":[513],"ano":[513]}]]]], options);
});
//# sourceMappingURL=medtango-components.js.map

//# sourceMappingURL=medtango-components.js.map