import { findTargetUnknownLength } from './findTargetUnknownLength';

test('should  target index for array size of 7', () => {
  const arr = [1, 3, 5, 7, 9, 11, 15];
  const target = 3;
  expect(findTargetUnknownLength(arr, target)).toBe(1);
});

test('should  target index for array size of 4', () => {
  const arr = [1, 3, 5, 7];
  const target = 3;
  expect(findTargetUnknownLength(arr, target)).toBe(1);
});

test('should  target index  when target is the first one', () => {
  const arr = [3, 5, 7];
  const target = 3;
  expect(findTargetUnknownLength(arr, target)).toBe(0);
});

test('should  target index  when target is the last one', () => {
  const arr = [3, 5, 7];
  const target = 7;
  expect(findTargetUnknownLength(arr, target)).toBe(2);
});

test('should  return null when target is not present', () => {
  const arr = [3, 5, 7];
  const target = 9;
  expect(findTargetUnknownLength(arr, target)).toBe(null);
});

test('should return index when arr size is 1', () => {
  const arr = [3];
  const target = 3;
  expect(findTargetUnknownLength(arr, target)).toBe(0);
});

test('should return null when arr []', () => {
  const arr = [];
  const target = 2;
  expect(findTargetUnknownLength(arr, target)).toBe(null);
});
