import { sum } from './../helpers';

test('basic test', () => {
  expect(sum(2, 3)).toBeCloseTo(5);
});
