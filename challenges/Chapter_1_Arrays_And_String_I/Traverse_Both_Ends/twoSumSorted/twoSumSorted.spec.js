const { twoSum } = require('./twoSumSorted').default;

test('Must return correct sum', () => {
  const arr = [1, 2, 4, 5, 6];
  const targetSum = 8;
  const expected = [2, 6];
  const sum = twoSum(arr, targetSum);

  expect(twoSum(arr, targetSum)).toStrictEqual(expected);
});

test('Must return null', () => {
  const arr = [];
  const targetSum = 8;
  const expected = null;
  const sum = twoSum(arr, targetSum);

  expect(twoSum(arr, targetSum)).toStrictEqual(expected);
});

test('Must return null when 1 value is there', () => {
  const arr = [1];
  const targetSum = 8;
  const expected = null;
  const sum = twoSum(arr, targetSum);

  expect(twoSum(arr, targetSum)).toStrictEqual(expected);
});
