/* Examples

1.) [2,2,1,-1,-1] = [2,2,2,2,1]
2.) [1,1,1] = [1,1,1]
3.) [] = []

*/

/* Sols
getLastNumber
if even move the number twice
if odd then move the number once
*/

//Code
//Technique used - Reverse Traverse

function getLastNumber(arr = []) {
  let i = arr.length - 1;

  while (arr[i] === -1) {
    i--;
  }

  return i;
}

function doubleEvenNumbers(arr = []) {
  if (arr === null || arr.length === 0) {
    return arr;
  }

  let endIdx = arr.length - 1;

  let lastNumIdx = getLastNumber(arr);

  while (lastNumIdx >= 0) {
    const currentNum = arr[lastNumIdx];

    if (currentNum % 2 === 0) {
      arr[endIdx] = currentNum;
      endIdx--;
      arr[endIdx] = currentNum;
      endIdx--;
    } else {
      arr[endIdx] = currentNum;
      endIdx--;
    }

    lastNumIdx--;
  }

  return arr;
}

if (
  doubleEvenNumbers([2, 2, 1, -1, -1]).toString() === [2, 2, 2, 2, 1].toString()
) {
  console.log('Test Has Passed');
}

if (doubleEvenNumbers([1, 1]).toString() === [1, 1].toString()) {
  console.log('Test Has Passed');
}

if (doubleEvenNumbers([]).toString() === [].toString()) {
  console.log('Test Has Passed');
}

if (doubleEvenNumbers([1]).toString() === [1].toString()) {
  console.log('Test Has Passed');
}

if (doubleEvenNumbers([2, -1]).toString() === [2, 2].toString()) {
  console.log('Test Has Passed');
} else console.log('Test Has Failed');
