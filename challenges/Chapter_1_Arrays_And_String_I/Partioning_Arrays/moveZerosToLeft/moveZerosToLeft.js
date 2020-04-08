/*
Examples
[0]=[0]
[1]=[1]
[1,0,1,0,1,0] = [0,0,0,1,1,1]
[1,2,1,0,1,0] = [0,0,0,1,2,1]
[1,2,4,0,0,0] = [0,0,0,1,2,4]
 */

//Code
function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function moveZerosToLeft(arr = []) {
  let boundary = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      swap(i, boundary, arr);
      boundary++;
    }
  }

  return arr;
}

export default { moveZerosToLeft };
