import { findSmallest } from './findSmallestNumber';

test('should return the smallest num idx when arr size is 1', () => {
  const arr = [1];
  expect(findSmallest(arr)).toBe(0);
});

test('should return the smallest num idx when arr size is 3', () => {
  const arr = [2, 0, 1];
  expect(findSmallest(arr)).toBe(1);
});

test('should return the smallest num idx when arr size is 5', () => {
  const arr = [3, 5, 0, 1, 2];
  expect(findSmallest(arr)).toBe(2);
});

test('should return the smallest num idx when arr size is 5', () => {
  const arr = [2, 1];
  expect(findSmallest(arr)).toBe(1);
});

test('should return the smallest num idx when arr has -ve numbers', () => {
  const arr = [1, 2, -2, -1, 0];
  expect(findSmallest(arr)).toBe(2);
});
