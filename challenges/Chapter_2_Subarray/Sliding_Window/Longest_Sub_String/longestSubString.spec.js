import { getLongestSubString } from './longestSubString';

test('should return the longest string = whatwhywhere', () => {
  const word = 'whatwhywhere';
  const expected = 'atwhy';
  const arr = getLongestSubString(word);
  expect(word.substring(arr[0], arr[1] + 1)).toBe(expected);
});

test('should return the longest string = istheworld', () => {
  const word = 'whyistheworldsocruel';
  const expected = 'yistheworld';
  const arr = getLongestSubString(word);
  expect(word.substring(arr[0], arr[1] + 1)).toBe(expected);
});

test('should return null when word length is 0', () => {
  const word = '';
  const expected = null;
  expect(getLongestSubString(word)).toBe(expected);
});

test('should return "h" all letters are the same', () => {
  const word = 'hhhhhhhhhhh';
  const expected = 'h';
  const arr = getLongestSubString(word);
  expect(word.substring(arr[0], arr[1] + 1)).toBe(expected);
});

test('should return "hi" all hi is the longest', () => {
  const word = 'hhhhhihhhhhh';
  const expected = 'hi';
  const arr = getLongestSubString(word);
  expect(word.substring(arr[0], arr[1] + 1)).toBe(expected);
});

test('should return "hi" all hi is the longest', () => {
  const word = 'hhhhhhhhhhhhhhi';
  const expected = 'hi';
  const arr = getLongestSubString(word);
  expect(word.substring(arr[0], arr[1] + 1)).toBe(expected);
});

test('should return "hi" all hi is the longest', () => {
  const word = 'l';
  const expected = 'l';
  const arr = getLongestSubString(word);
  expect(word.substring(arr[0], arr[1] + 1)).toBe(expected);
});
