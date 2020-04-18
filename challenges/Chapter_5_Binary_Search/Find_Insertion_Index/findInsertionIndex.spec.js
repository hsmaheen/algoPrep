import { getIndexOfSort } from './findInsertionIndex';

test('should return the correct  3 for the array of size 5', () => {
  const arr = [1, 3, 3, 7, 8];
  const res = getIndexOfSort(arr, 3);
  expect(res).toBe(2);
});

test('should return the correct index where 0 should be inserted', () => {
  const arr = [1, 3, 3, 7, 8];
  const res = getIndexOfSort(arr, 0);
  expect(res).toBe(0);
});

test('should return the correct index where 9 should be inserted', () => {
  const arr = [1, 3, 3, 7, 8];
  const res = getIndexOfSort(arr, 9);
  expect(res).toBe(5);
});

test('should return null when arr size is 0', () => {
  const arr = [];
  const res = getIndexOfSort(arr, 9);
  expect(res).toBe(null);
});
