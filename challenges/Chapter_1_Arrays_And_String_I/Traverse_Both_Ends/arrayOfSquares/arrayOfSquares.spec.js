const { squareSum } = require('./arrayOfSquares').default;

test('Must return correct answer', () => {
  const arr = [-4, -2, -1, 0, 3, 5];
  const expectedSum = [0, 1, 4, 9, 16, 25];
  expect(squareSum(arr)).toStrictEqual(expectedSum);
});

test('Must not return correct answer', () => {
  const arr = [-1, 0, 3, 5];
  const expectedSum = [0, 1, 4, 9, 16, 25];
  expect(squareSum(arr)).not.toStrictEqual(expectedSum);
});

test('Must return correct answer when array length is 2', () => {
  const arr = [-4, 3];
  const expectedSum = [9, 16];
  expect(squareSum(arr)).toStrictEqual(expectedSum);
});

test('Must return correct answer when array length is 1', () => {
  const arr = [3];
  const expectedSum = [9];
  expect(squareSum(arr)).toStrictEqual(expectedSum);
});

test('Must return correct answer when array length is 0', () => {
  const arr = [];
  const expectedSum = [];
  expect(squareSum(arr)).toStrictEqual(expectedSum);
});
