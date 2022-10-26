/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// release
const pkgVersion = process.env.VERSION || require('../package.json').version;
const { release } = require('mazey/scripts/release');

release(pkgVersion);
