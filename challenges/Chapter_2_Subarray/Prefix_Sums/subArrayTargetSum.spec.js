import { getArrayWithTargetSum } from './subArrayTargetSum';

test('should return the correct indices when sum exists', () => {
  const arr = [2, 4, -2, 1, -3, 5, -3];
  const targetSum = 0;
  const expected = [1, 4];
  expect(getArrayWithTargetSum(arr, targetSum)).toStrictEqual(expected);
});

test('should return the correct indices when sum exists', () => {
  const arr = [-1, 2, 1, -4, 2, 3, -1, 2];
  const targetSum = 0;
  const expected = [0, 4];
  expect(getArrayWithTargetSum(arr, targetSum)).toStrictEqual(expected);
});

test('should return the correct indices when sum exists', () => {
  const arr = [2, 4, -2, 1, -3, 5, -3];
  const targetSum = 5;
  const expected = [0, 3];
  expect(getArrayWithTargetSum(arr, targetSum)).toStrictEqual(expected);
});

test('should return the correct indices when sum exists', () => {
  const arr = [1, -2, 1, 2, 4, -2, 1];
  const targetSum = 5;
  const expected = [1, 4];
  expect(getArrayWithTargetSum(arr, targetSum)).toStrictEqual(expected);
});

test('should return the correct indices when sum exists', () => {
  const arr = [2, 6, 4, 5, 2, 7, 4];
  const targetSum = 0;
  const expected = null;
  expect(getArrayWithTargetSum(arr, targetSum)).toStrictEqual(expected);
});
