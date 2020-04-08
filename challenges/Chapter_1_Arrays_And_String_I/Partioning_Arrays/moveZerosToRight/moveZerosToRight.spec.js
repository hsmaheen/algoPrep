const { moveZerosToRight } = require('./moveZerosToRight').default;

test('should arrange zeros to the right', () => {
  const arr = [1, 0, 1, 0, 1, 0];
  const expected = [1, 1, 1, 0, 0, 0];
  expect(moveZerosToRight(arr)).toStrictEqual(expected);
});

test('should return same array when array size is 1', () => {
  const arr = [1];
  const expected = [1];
  expect(moveZerosToRight(arr)).toStrictEqual(expected);
});

test('should return same array when array size is 1 and content is 0', () => {
  const arr = [0];
  const expected = [0];
  expect(moveZerosToRight(arr)).toStrictEqual(expected);
});

test('should move zeros to right when arr size is 2', () => {
  const arr = [1, 0];
  const expected = [1, 0];
  expect(moveZerosToRight(arr)).toStrictEqual(expected);
});

test('should move three zeros to right', () => {
  const arr = [4, 2, 0, 1, 0, 3, 0];
  expect(moveZerosToRight(arr)[4]).toStrictEqual(0);
  expect(moveZerosToRight(arr)[5]).toStrictEqual(0);
  expect(moveZerosToRight(arr)[6]).toStrictEqual(0);
});
