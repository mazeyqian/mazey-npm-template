/* Function */

import { isNumber } from 'mazey';

/**
 * @method foo
 * @description Foo description.
 * @return {Boolean} true or false
 */
export function foo(): boolean {
  return isNumber(-1);
}

/**
 * @method bar
 * @description Bar description.
 * @return {Boolean} true or false
 */
 export function bar(): boolean {
  return isNumber(NaN);
}
