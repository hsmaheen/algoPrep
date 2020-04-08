/*
Reverse Order of arrays
Examples:
1.) [3,4,7,9,8]=[8,9,7,4,3]
2.) [2]=[2]
3.) [3,1]=[1,3]
4.) []=[]
 */

/*
Solutions
- swap first and last
- move until first<last
*/

/*
Test:
Base case
1.) [3,4,7,9,8]=[8,9,7,4,3]
2.) [2]=[2]
3.) [3,1]=[1,3]

Edge Case 
4.) []=[]
 */

//Code

function swap(first, last, arr = []) {
  const temp = arr[first];
  arr[first] = arr[last];
  arr[last] = temp;
}
function reverseNumberArray(arr = []) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  let first = 0;
  let last = arr.length - 1;

  while (first < last) {
    swap(first, last, arr);
    first++;
    last--;
  }

  return arr;
}

//Test
if (
  reverseNumberArray([3, 4, 7, 9, 8]).toString() === [8, 9, 7, 4, 3].toString()
) {
  console.log('Test Passed');
}
if (reverseNumberArray([3, 4]).toString() === [4, 3].toString()) {
  console.log('Test Passed');
}
if (reverseNumberArray([4]).toString() === [4].toString()) {
  console.log('Test Passed');
}
if (reverseNumberArray([]).toString() === [].toString()) {
  console.log('Test Passed');
} else console.log('Test Failed');
