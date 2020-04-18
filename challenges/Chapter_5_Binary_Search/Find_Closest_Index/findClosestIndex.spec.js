import { findClosestIndex } from './findClosestIndex';

test('should return the closest index when arr size is 5', () => {
  const arr = [1, 3, 4, 5, 6];
  const res = findClosestIndex(arr, 2);
  expect(res).toBe(0);
});

test('should return the closest index when arr size has large numbers', () => {
  const arr = [1, 20, 25, 35, 46];
  const res = findClosestIndex(arr, 24);
  expect(res).toBe(2);
});

test('should return the closest index when arr already has the number', () => {
  const arr = [1, 20, 25, 35, 46];
  const res = findClosestIndex(arr, 25);
  expect(res).toBe(2);
});

test('should return the closest index when arr already has the number', () => {
  const arr = [1, 20, 25, 35, 46];
  const res = findClosestIndex(arr, 47);
  expect(res).toBe(4);
});

test('should return the closest index when arr already has the number', () => {
  const arr = [1, 20, 25, 35, 46];
  const res = findClosestIndex(arr, 0);
  expect(res).toBe(0);
});

test('should return null when arr is []', () => {
  const arr = [];
  const res = findClosestIndex(arr, 25);
  expect(res).toBe(null);
});
