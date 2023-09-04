/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import babel from 'rollup-plugin-babel';
import rollupTypescript from 'rollup-plugin-typescript2';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import cleaner from 'rollup-plugin-cleaner';
import { terser } from 'rollup-plugin-terser';

const path = require('path');
const _resolve = (_path) => path.resolve(__dirname, _path);
const pkgName = require('../package.json').name;
const iifeName = pkgName.replace(/-/g, '_').toUpperCase();
const pkgVersion = process.env.SCRIPTS_NPM_PACKAGE_VERSION || process.env.VERSION || require('../package.json').version;
const inputResolve = _resolve('../src/index.ts');
const banner =
  '/*!\n' +
  ` * ${pkgName} v${pkgVersion}\n` +
  ` * (c) 2018-${new Date().getFullYear()} Mazey Chu https://www.npmjs.com/package/mazey-npm-template\n` +
  ' * Released under the MIT License.\n' +
  ' */';

const plugins = [
  rollupTypescript(),
  commonjs({
    include: /node_modules/,
  }),
  babel({
    runtimeHelpers: true,
    // Only transpile our source code, not dependencies.
    exclude: 'node_modules/**',
    // By default, Babel does not support TypeScript
    // and requires manual configuration to add support for it.
    extensions: [
      ...DEFAULT_EXTENSIONS,
      '.ts',
    ],
  }),
  // Add minification.
  terser({
    format: {
      // https://github.com/terser/terser#format-options
      comments: /^!\n\s\*\smazey-npm-template/, // `'some'`/`false` to omit comments in the output
    },
  }),
];

export default [
  {
    input: inputResolve,
    // https://rollupjs.org/guide/en/#outputformat
    output: [
      {
        file: _resolve('../lib/index.cjs.js'),
        format: 'cjs',
        banner,
      },
      {
        file: _resolve('../lib/index.esm.js'),
        format: 'esm',
        banner,
      },
    ],
    plugins: [
      // Remove the `lib` directory before rebuilding.
      cleaner({
        targets: [
          _resolve('../lib/'),
        ],
      }),
      ...plugins,
    ],
    external: [],
  },
  {
    input: inputResolve,
    // https://rollupjs.org/guide/en/#outputformat
    output: [
      {
        file: _resolve(`../lib/${pkgName}.min.js`),
        format: 'iife',
        name: iifeName,
        banner,
      },
    ],
    plugins: [
      resolve(),
      ...plugins,
    ],
  },
];
