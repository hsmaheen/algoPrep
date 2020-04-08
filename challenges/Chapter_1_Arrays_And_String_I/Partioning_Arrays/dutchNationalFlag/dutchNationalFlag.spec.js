const { pivotArray } = require('./dutchNationalFlag').default;

test('should pivot array at 4', () => {
  const arr = [5, 2, 4, 4, 6, 4, 4, 3];
  const expected = [3, 2, 4, 4, 4, 4, 6, 5];
  expect(pivotArray(arr, 4)).toStrictEqual(expected);
});

test('should not change when array is already pivoted at center', () => {
  const arr = [4, 5, 6];
  const expected = [4, 6, 5];
  expect(pivotArray(arr, 4)).toStrictEqual(expected);
});

test('should not change when array is already pivoted at end', () => {
  const arr = [2, 3, 4];
  const expected = [2, 3, 4];
  expect(pivotArray(arr, 4)).toStrictEqual(expected);
});

test('should return [] when array is []', () => {
  const arr = [];
  const expected = [];
  expect(pivotArray(arr, 4)).toStrictEqual(expected);
});

test('should return [4] when array is [4]', () => {
  const arr = [1];
  const expected = [1];
  expect(pivotArray(arr, 4)).toStrictEqual(expected);
});
