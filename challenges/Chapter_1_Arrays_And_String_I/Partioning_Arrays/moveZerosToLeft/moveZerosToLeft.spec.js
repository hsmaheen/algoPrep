const { moveZerosToLeft } = require('./moveZerosToLeft').default;

test('should arrange zeros to the left', () => {
  const arr = [1, 0, 1, 0, 1, 0];
  const expected = [0, 0, 0, 1, 1, 1];
  expect(moveZerosToLeft(arr)).toStrictEqual(expected);
});

test('should return same array when array size is 1', () => {
  const arr = [1];
  const expected = [1];
  expect(moveZerosToLeft(arr)).toStrictEqual(expected);
});

test('should return same array when array size is 1 and content is 0', () => {
  const arr = [0];
  const expected = [0];
  expect(moveZerosToLeft(arr)).toStrictEqual(expected);
});

test('should move zeros to left when arr size is 2', () => {
  const arr = [1, 0];
  const expected = [0, 1];
  expect(moveZerosToLeft(arr)).toStrictEqual(expected);
});

test('should move three zeros to left', () => {
  const arr = [4, 2, 0, 1, 0, 3, 0];
  const expected = [0, 0, 0];
  expect(moveZerosToLeft(arr)[0]).toStrictEqual(0);
  expect(moveZerosToLeft(arr)[1]).toStrictEqual(0);
  expect(moveZerosToLeft(arr)[2]).toStrictEqual(0);
});
