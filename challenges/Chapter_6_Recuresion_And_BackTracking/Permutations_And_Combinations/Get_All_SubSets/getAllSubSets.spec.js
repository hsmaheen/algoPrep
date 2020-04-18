import { getAllSubSets } from './getAllSubSets';

test('should get all subsets of an array of size 3', () => {
  const res = getAllSubSets([1, 2, 3]);
  expect(res).toStrictEqual([
    [],
    [1],
    [1, 2],
    [1, 2, 3],
    [1, 3],
    [2],
    [2, 3],
    [3],
  ]);
});

test('should get all subsets of an array of 5', () => {
  const res = getAllSubSets([1, 2, 3, 4, 5]);
  expect(res).toStrictEqual([
    [],
    [1],
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 5],
    [1, 2, 4],
    [1, 2, 4, 5],
    [1, 2, 5],
    [1, 3],
    [1, 3, 4],
    [1, 3, 4, 5],
    [1, 3, 5],
    [1, 4],
    [1, 4, 5],
    [1, 5],
    [2],
    [2, 3],
    [2, 3, 4],
    [2, 3, 4, 5],
    [2, 3, 5],
    [2, 4],
    [2, 4, 5],
    [2, 5],
    [3],
    [3, 4],
    [3, 4, 5],
    [3, 5],
    [4],
    [4, 5],
    [5],
  ]);
});

test('should return null when arr is empty', () => {
  const res = getAllSubSets([]);
  expect(res).toStrictEqual(null);
});
