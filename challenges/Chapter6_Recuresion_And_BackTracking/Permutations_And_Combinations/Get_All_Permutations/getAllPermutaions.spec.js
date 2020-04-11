import { getAllPermutations } from './getAllPermutations';

test('should return all permutations of an array of size 3', () => {
  const res = getAllPermutations([1, 2, 3], 2);
  expect(res).toStrictEqual([
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 3],
    [3, 1],
    [3, 2],
  ]);
});

test('should return all permutations of an array of size 4', () => {
  const res = getAllPermutations([1, 2, 3, 4], 3);
  expect(res).toStrictEqual([
    [1, 2, 3],
    [1, 2, 4],
    [1, 3, 2],
    [1, 3, 4],
    [1, 4, 2],
    [1, 4, 3],
    [2, 1, 3],
    [2, 1, 4],
    [2, 3, 1],
    [2, 3, 4],
    [2, 4, 1],
    [2, 4, 3],
    [3, 1, 2],
    [3, 1, 4],
    [3, 2, 1],
    [3, 2, 4],
    [3, 4, 1],
    [3, 4, 2],
    [4, 1, 2],
    [4, 1, 3],
    [4, 2, 1],
    [4, 2, 3],
    [4, 3, 1],
    [4, 3, 2],
  ]);
});

test('should return null when arr is empty', () => {
  const res = getAllPermutations([], 3);
  expect(res).toBe(null);
});

test('should return null when permutation size is greater than arr size', () => {
  const res = getAllPermutations([1, 2], 3);
  expect(res).toBe(null);
});
