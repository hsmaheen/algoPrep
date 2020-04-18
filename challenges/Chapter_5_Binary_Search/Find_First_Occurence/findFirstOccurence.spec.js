import { findFirstOccurence } from './findFirstOccurence';

test('should return the correct index of first occurence of 3 for the array of size 5', () => {
  const arr = [1, 3, 3, 7, 8];
  const res = findFirstOccurence(arr, 3);
  expect(res).toBe(1);
});

test('should return the correct index of first occurence of 3 for the array of size 4', () => {
  const arr = [3, 3, 3, 7, 8];
  const res = findFirstOccurence(arr, 3);
  expect(res).toBe(0);
});

test('should return null when searching an arr of length 0', () => {
  const arr = [];
  const res = findFirstOccurence(arr, 7);
  expect(res).toBe(null);
});

test('should return null when search element does not exist in the array', () => {
  const arr = [1, 3, 4, 7];
  const res = findFirstOccurence(arr, 10);
  expect(res).toBe(null);
});
