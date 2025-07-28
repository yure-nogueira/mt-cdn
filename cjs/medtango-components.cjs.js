'use strict';

var index = require('./index-D889KsCY.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.36.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('medtango-components.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["mt-grid-row.cjs",[[257,"mt-grid-row",{"cols":[2]}]]],["mt-title-h1.cjs",[[262,"mt-title-h1",{"produto":[513],"especialidade":[513],"ano":[513]}]]]], options);
});

exports.setNonce = index.setNonce;
//# sourceMappingURL=medtango-components.cjs.js.map

//# sourceMappingURL=medtango-components.cjs.js.map