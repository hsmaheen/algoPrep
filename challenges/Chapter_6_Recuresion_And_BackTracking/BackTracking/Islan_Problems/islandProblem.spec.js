import { isLandCount } from './islandProblem';

test('should return correct number of islands 3x3', () => {
  const res = isLandCount([
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
  ]);

  expect(res).toBe(2);
});

test('should return correct number of islands 3x3', () => {
  const res = isLandCount([
    [1, 0, 1],
    [0, 1, 1],
    [1, 0, 0],
  ]);

  expect(res).toBe(3);
});

test('should return correct number of islands 3x3', () => {
  const res = isLandCount([
    [1, 0, 1],
    [0, 1, 1],
    [1, 0, 0],
  ]);

  expect(res).toBe(3);
});

test('should return correct number of islands 2x2', () => {
  const res = isLandCount([
    [1, 0],
    [0, 1],
  ]);

  expect(res).toBe(2);
});

test('should return correct number of islands 1x1', () => {
  const res = isLandCount([[1]]);
  expect(res).toBe(1);
});

test('should return correct number of islands 1x1', () => {
  const res = isLandCount([[0]]);
  expect(res).toBe(0);
});

test('should return null when array is empty', () => {
  const res = isLandCount([]);
  expect(res).toBe(null);
});
