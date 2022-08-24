/* eslint-disable no-undef */
// Foo

import { foo } from '../lib/index.esm';

test('Is foo() true?', () => {
  expect(foo()).toBe(true);
});
