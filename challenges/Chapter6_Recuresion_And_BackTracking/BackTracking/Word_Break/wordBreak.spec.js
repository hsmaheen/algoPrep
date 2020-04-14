import { isWordBreakPossible } from './wordBreak';

test('should return false when the string cannnot be broken into words', () => {
  const dict = ['cats', 'dog', 'sand', 'and', 'cat'];
  const stringToFind = 'catsandog';
  const res = isWordBreakPossible(stringToFind, dict);
  expect(res).toBe(false);
});

test('should return false when the string can be broken into words', () => {
  const dict = ['i', 'like', 'mango', 'tango'];
  const stringToFind = 'ilikemangotango';
  const res = isWordBreakPossible(stringToFind, dict);
  expect(res).toBe(true);
});

test('should return null when the string is empty', () => {
  const dict = ['i', 'like', 'mango', 'tango'];
  const stringToFind = '';
  const res = isWordBreakPossible(stringToFind, dict);
  expect(res).toBe(null);
});
