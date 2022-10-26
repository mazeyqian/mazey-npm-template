/* Function */

import { isNumber } from 'mazey';

/**
 * Foo foo foo, Foo description.
 * 
 * @returns {Boolean} true or false
 */
export function foo(): boolean {
  return isNumber(-1);
}

/**
 * Bar bar bar, Bar description.
 * 
 * @returns {Boolean} true or false
 */
 export function bar(): boolean {
  return isNumber(NaN);
}
