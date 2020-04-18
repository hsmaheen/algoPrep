//getCoinPerms([1, 2, 5], 5);

import { getCoinChange } from './getCoinChange';

test('should return correct coin change when target is 5', () => {
  const res = getCoinChange([1, 2, 5], 5);
  expect(res).toStrictEqual([[1, 1, 1, 1, 1], [1, 1, 1, 2], [1, 2, 2], [5]]);
});

test('should return correct coin change when target is 2', () => {
  const res = getCoinChange([1, 2, 5], 2);
  expect(res).toStrictEqual([[1, 1], [2]]);
});

test('should return [] if target is 0', () => {
  const res = getCoinChange([1, 2, 5], 0);
  expect(res).toStrictEqual([]);
});

test('should return correct null if target is -ve', () => {
  const res = getCoinChange([1, 2, 5], -1);
  expect(res).toStrictEqual(null);
});

test('should return [] if target is not possible give the coins', () => {
  const res = getCoinChange([7], 10);
  expect(res).toStrictEqual([]);
});
