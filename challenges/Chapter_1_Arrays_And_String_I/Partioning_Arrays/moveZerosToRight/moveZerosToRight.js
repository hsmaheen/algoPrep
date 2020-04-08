/*
Examples
[0]=[0]
[1]=[1]
[1,0,1,0,1,0] = [1,1,1,0,0,0]
[1,2,1,0,1,0] = [1,2,1,0,0,0]
[1,2,4,0,0,0] = [1,2,4,0,0,0]
 */

//Code
function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function moveZerosToRight(arr = []) {
  let boundary = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      swap(i, boundary, arr);
      boundary--;
    }
  }

  return arr;
}

export default { moveZerosToRight };
