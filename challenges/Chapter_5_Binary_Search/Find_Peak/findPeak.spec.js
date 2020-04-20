import { findPeak } from './findPeak';

test('should return the correct peak for arr of size 5', () => {
  const arr = [1, 3, 4, 5, 2];
  expect(findPeak(arr)).toBe(3);
});

test('should return the correct peak for arr of size 4', () => {
  const arr = [1, 3, 4, 5];
  expect(findPeak(arr)).toBe(3);
});

test('should return the correct peak for arr of size 4', () => {
  const arr = [5, 1, 3];
  expect(findPeak(arr)).toBe(0);
});

test('should return the correct peak for arr of size 7', () => {
  const arr = [10, 20, 15, 2, 23, 90, 67];
  expect(findPeak(arr)).toBe(1);
});

test('should return null if arr is []', () => {
  const arr = [];
  expect(findPeak(arr)).toBe(null);
});

test('should the correct peak if arr length is 1', () => {
  const arr = [1];
  expect(findPeak(arr)).toBe(0);
});
