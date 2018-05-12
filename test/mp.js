'use strict';

const iface = {
  fn1(x) {
    return x * 1;
  },
  fn2: x => x * 2,
  prop1: 'string',
  prop2: 1000,
  prop3: false,
  prop4: undefined,
  prop5: null
};

iface.fn3 = function(x) {
  return x * 3;
};

api.metatests.test('methods', (test) => {
  const result = api.common.methods(iface);
  test.strictSame(result, ['fn1', 'fn2', 'fn3']);
  test.end();
});

api.metatests.test('properties', (test) => {
  const result = api.common.properties(iface);
  test.strictSame(result, ['prop1', 'prop2', 'prop3', 'prop4', 'prop5']);
  test.end();
});
