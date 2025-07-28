'use strict';

var index = require('./index-D889KsCY.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["mt-grid-row.cjs",[[257,"mt-grid-row",{"cols":[2]}]]],["mt-title-h1.cjs",[[262,"mt-title-h1",{"produto":[513],"especialidade":[513],"ano":[513]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
//# sourceMappingURL=loader.cjs.js.map

//# sourceMappingURL=loader.cjs.js.map