import { binarySearch } from './binarySearch';

test('should return the correct index when searching an arr of length 5', () => {
  const arr = [1, 3, 4, 7, 8];
  const res = binarySearch(arr, 1);
  expect(res).toBe(0);
});

test('should return the correct index when searching an arr of length 4', () => {
  const arr = [1, 3, 4, 7];
  const res = binarySearch(arr, 7);
  expect(res).toBe(3);
});

test('should return null when searching an arr of length 0', () => {
  const arr = [];
  const res = binarySearch(arr, 7);
  expect(res).toBe(null);
});

test('should return null when search element does not exist in the array', () => {
  const arr = [1, 3, 4, 7];
  const res = binarySearch(arr, 10);
  expect(res).toBe(null);
});
