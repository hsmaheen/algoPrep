/*
Examples

[1,0,1,2,1,0,1,2] = [0,0,1,1,1,1,2,2]

 */

function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export function arrangeMarbles(arr = []) {
  const COLORS = {
    RED: 0,
    WHITE: 1,
    BLUE: 2,
  };

  let leftBound = 0;
  let rightBound = arr.length - 1;
  let i = 0;
  while (i <= rightBound) {
    if (arr[i] === COLORS.RED) {
      swap(i, leftBound, arr);
      leftBound++;
      i++;
    } else if (arr[i] === COLORS.BLUE) {
      swap(i, rightBound, arr);
      rightBound--;
    } else {
      i++;
    }
  }

  return arr;
}
