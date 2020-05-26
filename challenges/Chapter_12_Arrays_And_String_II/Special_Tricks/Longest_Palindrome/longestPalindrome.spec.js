import { getTheLongestPalindrome } from './longestPalindrome';
describe('Longest Palindromic Substring Algo should work', () => {
  test('should return the longest palindrome in "abaxyzzyx"', () => {
    const string = 'abaxyzzyx';
    const resultPalindrome = 'xyzzyx';
    expect(getTheLongestPalindrome(string)).toBe(resultPalindrome);
  });

  test("should return the longest palindrome in it's highnoon", () => {
    const string = "it's highnoon";
    const resultPalindrome = 'noon';
    expect(getTheLongestPalindrome(string)).toBe(resultPalindrome);
  });

  test('should return the longest palindrome in "zzzzzzz2345abbbba5432zzbbababa"', () => {
    const string = 'zzzzzzz2345abbbba5432zzbbababa';
    const resultPalindrome = 'zz2345abbbba5432zz';
    expect(getTheLongestPalindrome(string)).toBe(resultPalindrome);
  });

  test('should return the longest palindrome in "a"', () => {
    const string = 'a';
    const resultPalindrome = 'a';
    expect(getTheLongestPalindrome(string)).toBe(resultPalindrome);
  });

  test('should return the longest palindrome in "a"', () => {
    const string = 'a';
    const resultPalindrome = 'a';
    expect(getTheLongestPalindrome(string)).toBe(resultPalindrome);
  });

  test('should return empty string when input in empty', () => {
    const string = '';
    const resultPalindrome = '';
    expect(getTheLongestPalindrome(string)).toBe(resultPalindrome);
  });

  test('should return null when input is null', () => {
    const string = null;
    const resultPalindrome = null;
    expect(getTheLongestPalindrome(string)).toBe(resultPalindrome);
  });
});
