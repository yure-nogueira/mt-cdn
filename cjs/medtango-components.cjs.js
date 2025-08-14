'use strict';

var index = require('./index-D-YE1rsj.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.36.2 | MIT Licensed | https://stenciljs.com
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
  return index.bootstrapLazy([["mt-paragrafo.cjs",[[262,"mt-paragrafo",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-quadro-01.cjs",[[262,"mt-quadro-01",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-quadro-02.cjs",[[262,"mt-quadro-02",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-quadro-03.cjs",[[262,"mt-quadro-03",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-quadro-04.cjs",[[262,"mt-quadro-04",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-quadro-05.cjs",[[262,"mt-quadro-05",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-titulo-h1.cjs",[[262,"mt-titulo-h1",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-titulo-h2.cjs",[[262,"mt-titulo-h2",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-titulo-h3.cjs",[[262,"mt-titulo-h3",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-titulo-h4.cjs",[[262,"mt-titulo-h4",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-titulo-h5.cjs",[[262,"mt-titulo-h5",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]],["mt-titulo-resumo.cjs",[[262,"mt-titulo-resumo",{"produto":[513],"apostila":[513],"ano":[513],"especialidade":[513],"parte":[513]}]]]], options);
});

exports.setNonce = index.setNonce;
//# sourceMappingURL=medtango-components.cjs.js.map

//# sourceMappingURL=medtango-components.cjs.js.map