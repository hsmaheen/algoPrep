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
  let end = 1;
  let charMap = new Map();
  let longest = 1;
  let arr = [0, 0];

  charMap.set(word[0], 0);

  while (end < word.length) {
    const currChar = word[end];

    if (charMap.has(word[end])) {
      start = Math.max(start, charMap.get(currChar) + 1);
    }

    if (end - start + 1 > longest) {
      longest = end - start + 1;
      arr[0] = start;
      arr[1] = end;
    }

    charMap.set(currChar, end);
    end++;
  }

  return arr;
}
