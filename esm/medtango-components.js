import { p as promiseResolve, b as bootstrapLazy } from './index-Dalv8umA.js';
export { s as setNonce } from './index-Dalv8umA.js';
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
  return bootstrapLazy([["medtango-example",[[262,"medtango-example"]]],["mt-title-h1",[[257,"mt-title-h1"]]]], options);
});
//# sourceMappingURL=medtango-components.js.map

//# sourceMappingURL=medtango-components.js.map