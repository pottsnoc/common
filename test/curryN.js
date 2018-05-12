'use strict';

api.metatests.test('curryN', (test) => {
  const sum = (x, y, z) => (x + y + z);
  const sumC = api.common.curryN(sum, 2, 1);
  const sumC2 = sumC(2);
  const res = sumC2(3);
  test.strictSame(res, 6);
  test.end();
});
