/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { release } = require('mazey/scripts/git-helper.js');

release(undefined, { defaultBranch: 'main' });
