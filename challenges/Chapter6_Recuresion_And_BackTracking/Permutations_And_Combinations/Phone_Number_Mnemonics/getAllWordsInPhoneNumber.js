/**
 Examples
 012 -> [A], [B], [C
 023 - > [[AD],[AE], [AF]....[CF]
 */

const WORD_IN_NUMBER = {
  0: [],
  1: [],
  2: ['A', 'B', 'C'],
  3: ['D', 'E', 'F'],
  4: ['G', 'H', 'I'],
  5: ['J', 'K', 'L'],
  6: ['M', 'N', 'O'],
  7: ['P', 'Q', 'R', 'S'],
  8: ['T', 'U', 'V'],
  9: ['W', 'X', 'Y', 'Z'],
};

export function getAllWordsInPhoneNumber(numbers = []) {
  const resArr = [];
  getAllWordsHelper(numbers, [], 0, 0, numbers.length, resArr);
  return resArr;
}

function getAllWordsHelper(
  numbers = [],
  buffer = [],
  startIdx,
  buffIdx,
  size,
  resArr = []
) {
  //1. termination
  if (buffIdx >= size || startIdx === size) {
    // console.log(buffer);
    return buffer;
  }

  //2. gather all candidates
  const charArr = WORD_IN_NUMBER[numbers[startIdx]];

  if (charArr.length === 0) {
    getAllWordsHelper(numbers, buffer, startIdx + 1, buffIdx, size, resArr);
  }
  for (let i = 0; i < charArr.length; i++) {
    buffer[buffIdx] = charArr[i];
    const res = getAllWordsHelper(
      numbers,
      buffer,
      startIdx + 1,
      buffIdx + 1,
      size,
      resArr
    );
    if (res != undefined) {
      resArr.push(res.slice());
    }
  }
}
