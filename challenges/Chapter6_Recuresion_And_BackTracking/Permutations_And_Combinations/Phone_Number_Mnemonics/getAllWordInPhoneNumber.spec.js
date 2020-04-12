import { getAllWordsInPhoneNumber } from './getAllWordsInPhoneNumber';

test('should return all combinations for phone number 1 2 3', () => {
  const res = getAllWordsInPhoneNumber([1, 2, 3]);
  expect(res).toStrictEqual([
    ['A', 'D'],
    ['A', 'E'],
    ['A', 'F'],
    ['B', 'D'],
    ['B', 'E'],
    ['B', 'F'],
    ['C', 'D'],
    ['C', 'E'],
    ['C', 'F'],
  ]);
});

test('should return all combinations for phone number 1 2 0', () => {
  const res = getAllWordsInPhoneNumber([1, 2, 0]);
  expect(res).toStrictEqual([['A'], ['B'], ['C']]);
});

test('should return all combinations for phone number 1 2 0', () => {
  const res = getAllWordsInPhoneNumber([2, 1, 0]);
  expect(res).toStrictEqual([['A'], ['B'], ['C']]);
});

test('should return  [] for phone number 1', () => {
  const res = getAllWordsInPhoneNumber([1]);
  expect(res).toStrictEqual([[]]);
});

test('should return  [] for phone number is []', () => {
  const res = getAllWordsInPhoneNumber([]);
  expect(res).toStrictEqual([]);
});
