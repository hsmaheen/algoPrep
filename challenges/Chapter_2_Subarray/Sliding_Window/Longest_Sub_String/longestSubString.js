/*
Examples:
whatwhywhere --> atwhy
whyistheworldsocruel"---> yistheworld
 */

//Code
export function getLongestSubString(word = '') {
  if (word.length === 0) {
    return null;
  }

  let start = 0;
  let end = 0;
  let charMap = new Map();
  let longest = 1;
  let arr = [0, 1];

  charMap.set(word[0], 0);

  while (end < word.length - 1) {
    end++;

    const currChar = word[end];

    if (charMap.has(word[end])) {
      start = Math.max(start, charMap.get(currChar));
    }

    if (end - start + 1 > longest) {
      longest = end - start + 1;
      arr[0] = start + 1;
      arr[1] = end;
    }

    charMap.set(currChar, end);
  }

  return arr;
}