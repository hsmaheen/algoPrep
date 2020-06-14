export function getTheLongestPalindrome(string) {
  if (string === null || string === undefined) {
    return null;
  }
  if (string.length === 0) {
    return string;
  }

  let currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const odd = getPalindromeIdx(string, i - 1, i + 1);
    const even = getPalindromeIdx(string, i - 1, i);
    const longest = getMaxOfTuple(odd, even);
    currentLongest = getMaxOfTuple(longest, currentLongest);
  }

  return string.substring(currentLongest[0], currentLongest[1]);
}

function getPalindromeIdx(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) {
      break;
    }
    leftIdx--;
    rightIdx++;
  }

  return [leftIdx + 1, rightIdx];
}

function getMaxOfTuple(arrayOne, arrayTwo) {
  const arrOneLen = arrayOne[1] - arrayOne[0];
  const arrTwoLen = arrayTwo[1] - arrayTwo[0];

  if (arrOneLen > arrTwoLen) {
    return arrayOne;
  } else {
    return arrayTwo;
  }
}

//alternate way to find Max
// function getMaxOfTuple(arrayList) {
//   return arrayList.reduce(function (a, b) {
//     if (a[1] - a[0] > b[1] - b[0]) {
//       return a;
//     }
//     return b;
//   });
// }
