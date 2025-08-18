'use strict';

var index = require('./index-CtT_xTgK.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["mt-background.cjs",[[262,"mt-background"]]],["mt-col.cjs",[[262,"mt-col",{"breakpoint":[513]}]]],["mt-container.cjs",[[262,"mt-container"]]],["mt-content.cjs",[[262,"mt-content"]]],["mt-footer.cjs",[[262,"mt-footer"]]],["mt-list.cjs",[[262,"mt-list"]]],["mt-page.cjs",[[262,"mt-page"]]],["mt-paragrafo.cjs",[[262,"mt-paragrafo"]]],["mt-quadro-01.cjs",[[262,"mt-quadro-01"]]],["mt-quadro-02.cjs",[[262,"mt-quadro-02"]]],["mt-quadro-pictograma-01.cjs",[[262,"mt-quadro-pictograma-01"]]],["mt-row.cjs",[[262,"mt-row"]]],["mt-titulo-h1.cjs",[[262,"mt-titulo-h1"]]],["mt-titulo-h2.cjs",[[262,"mt-titulo-h2"]]],["mt-titulo-h3.cjs",[[262,"mt-titulo-h3"]]],["mt-titulo-h5.cjs",[[262,"mt-titulo-h5"]]],["mt-titulo-resumo.cjs",[[262,"mt-titulo-resumo"]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
//# sourceMappingURL=loader.cjs.js.map

//# sourceMappingURL=loader.cjs.js.map