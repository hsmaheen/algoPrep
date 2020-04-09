import { getSubArraySum } from './subArraySumPositive';

test('should return the correct indices when sum exits', () => {
  const arr = [1, 2, 3, 5, 2];
  const targetSum = 8;
  const expected = [2, 3];
  expect(getSubArraySum(arr, targetSum)).toStrictEqual(expected);
});

test('should return null when sum does not exits', () => {
  const arr = [1, 2, 3, 5, 2];
  const targetSum = 100;
  const expected = null;
  expect(getSubArraySum(arr, targetSum)).toStrictEqual(expected);
});

test('should return the correct sum when array size is 7', () => {
  const arr = [5, 3, 1, 7, 6, 4, 2];
  const targetSum = 14;
  const expected = [2, 4];
  expect(getSubArraySum(arr, targetSum)).toStrictEqual(expected);
});

test('should return null when arry is empty', () => {
  const arr = [];
  const targetSum = 14;
  const expected = null;
  expect(getSubArraySum(arr, targetSum)).toStrictEqual(expected);
});
