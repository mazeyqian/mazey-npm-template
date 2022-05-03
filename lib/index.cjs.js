'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mazey = require('mazey');

/* Function */
/**
 * @method foo
 * @description Foo description.
 * @return {Boolean} true or false
 */

function foo() {
  return mazey.isNumber(-1);
}
/**
 * @method bar
 * @description Bar description.
 * @return {Boolean} true or false
 */

function bar() {
  return mazey.isNumber(NaN);
}

exports.bar = bar;
exports.foo = foo;
