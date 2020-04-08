/*
Example
[-4,-2,-1,0,3,5] = [0,1,4,9,16,25]
[-5,-1,0,5,6]=[0,1,25,25,36]
*/

//Code
function squareSum(arr = []) {
  if (arr.length === 0) {
    return arr;
  }
  if (arr.length === 1) {
    return [arr[0] * arr[0]];
  }
  let start = 0;
  let end = arr.length - 1;

  const squareArr = [];
  let pointer = arr.length - 1;

  while (start <= end) {
    const startNum = arr[start] * arr[start];
    const endNum = arr[end] * arr[end];

    if (startNum > endNum) {
      squareArr[pointer] = startNum;
      start++;
    } else {
      squareArr[pointer] = endNum;
      end--;
    }

    pointer--;
  }

  return squareArr;
}

export default { squareSum };
