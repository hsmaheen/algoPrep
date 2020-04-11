import { getAllCombinations } from './getAllCombinations';

test('should return all combinations of the array when combination size is 3', () => {
  const resArr = getAllCombinations([1, 2, 3, 4, 5, 6, 7], 3);
  expect(resArr).toEqual([
    [1, 2, 3],
    [1, 2, 4],
    [1, 2, 5],
    [1, 2, 6],
    [1, 2, 7],
    [1, 3, 4],
    [1, 3, 5],
    [1, 3, 6],
    [1, 3, 7],
    [1, 4, 5],
    [1, 4, 6],
    [1, 4, 7],
    [1, 5, 6],
    [1, 5, 7],
    [1, 6, 7],
    [2, 3, 4],
    [2, 3, 5],
    [2, 3, 6],
    [2, 3, 7],
    [2, 4, 5],
    [2, 4, 6],
    [2, 4, 7],
    [2, 5, 6],
    [2, 5, 7],
    [2, 6, 7],
    [3, 4, 5],
    [3, 4, 6],
    [3, 4, 7],
    [3, 5, 6],
    [3, 5, 7],
    [3, 6, 7],
    [4, 5, 6],
    [4, 5, 7],
    [4, 6, 7],
    [5, 6, 7],
  ]);
});

test('should return all combinations of the array when combination size is 2', () => {
  const resArr = getAllCombinations([1, 2, 3, 4, 5, 6, 7], 2);
  expect(resArr).toEqual([
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [1, 7],
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
    [2, 7],
    [3, 4],
    [3, 5],
    [3, 6],
    [3, 7],
    [4, 5],
    [4, 6],
    [4, 7],
    [5, 6],
    [5, 7],
    [6, 7],
  ]);
});

test('should return all combinations of the array when combination size is 1', () => {
  const resArr = getAllCombinations([1, 2, 3, 4, 5, 6, 7], 1);
  expect(resArr).toEqual([[1], [2], [3], [4], [5], [6], [7]]);
});

test('should return all empty array when combination size is 0', () => {
  const resArr = getAllCombinations([1, 2, 3, 4, 5, 6, 7], 0);
  expect(resArr).toEqual([]);
});