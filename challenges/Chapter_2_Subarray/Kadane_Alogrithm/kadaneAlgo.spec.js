import { kadaneAlgo } from './kadaneAlgo';

test('should return the sum as 7', () => {
  const arr = [-2, -3, 4, -1 - 2, 1, 5, -1];
  const expected = 7;
  expect(kadaneAlgo(arr)).toBe(expected);
});

test('should return the sum as 4', () => {
  const arr = [1, 2, -1, 2, -3, 2, -5];
  const expected = 4;
  expect(kadaneAlgo(arr)).toBe(expected);
});

test('should return the sum as null', () => {
  const arr = [];
  const expected = null;
  expect(kadaneAlgo(arr)).toBe(expected);
});

test('should return the sum as null', () => {
  const arr = null;
  const expected = null;
  expect(kadaneAlgo(arr)).toBe(expected);
});
