/*
Examples:
[[0 1]
 [1, 0]] => 2 islands
 
 [[1 1]
 [1, 0]] => 1 island
 
 [0 0 0] => 2 islands
 [0 1 0]
 [0 0 1]
*/

function isOutOfBounds(arr, i, j) {
  const height = arr.length - 1;
  const width = arr[0].length - 1;

  if (i < 0 || i > height) {
    return true;
  }

  if (j < 0 || j > width) {
    return true;
  }

  return false;
}

export function isLandCount(arr) {
  if (arr === null || arr.length === 0) {
    return null;
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 1) {
        isLandChecker(arr, i, j);
        count++;
      }
    }
  }
  return count;
}

function isLandChecker(arr, i, j) {
  if (isOutOfBounds(arr, i, j)) {
    return;
  }

  if (arr[i][j] === -1 || arr[i][j] === 0) {
    return;
  }

  if (arr[i][j] === 1) {
    arr[i][j] = -1;
  }

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (const [dRow, dCol] of dirs) {
    const nRow = dRow + i;
    const nCol = dCol + j;
    isLandChecker(arr, nRow, nCol);
  }
}
