const { getSubArrayToSort } = require('./subArrayToSort').default;

test('should get the unsorted sub array', () => {
  const arr = [1, 2, 4, 5, 3, 5, 6, 7];
  const expected = [2, 4];
  expect(getSubArrayToSort(arr)).toStrictEqual(expected);
});

test('should get the unsorted sub array for array size 9', () => {
  const arr = [1, 3, 5, 2, 6, 4, 7, 8, 9];
  const expected = [1, 5];
  expect(getSubArrayToSort(arr)).toStrictEqual(expected);
});

test('should return null when array is sorted', () => {
  const arr = [1, 2, 5, 7, 9];
  const expected = null;
  expect(getSubArrayToSort(arr)).toStrictEqual(expected);
});

test('should return null when array size is 1', () => {
  const arr = [1];
  const expected = null;
  expect(getSubArrayToSort(arr)).toStrictEqual(expected);
});

test('should return null when array size is 2 and sorted', () => {
  const arr = [1, 2];
  const expected = null;
  expect(getSubArrayToSort(arr)).toStrictEqual(expected);
});

test('should return null when array size is 0', () => {
  const arr = [];
  const expected = null;
  expect(getSubArrayToSort(arr)).toStrictEqual(expected);
});

test('Must return whole array when whole array is unsorted', () => {
  const arr = [2, 1, 0];
  const expectedSum = [0, 2];
  expect(getSubArrayToSort(arr)).toStrictEqual(expectedSum);
});
