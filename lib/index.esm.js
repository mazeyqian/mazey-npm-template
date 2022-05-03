import { isNumber } from 'mazey';

/* Function */
/**
 * @method foo
 * @description Foo description.
 * @return {Boolean} true or false
 */

function foo() {
  return isNumber(-1);
}
/**
 * @method bar
 * @description Bar description.
 * @return {Boolean} true or false
 */

function bar() {
  return isNumber(NaN);
}

export { bar, foo };
