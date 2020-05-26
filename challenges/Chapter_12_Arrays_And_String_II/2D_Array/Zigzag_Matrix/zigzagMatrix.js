export function getZigzagElements(arr) {
  if (arr === null || arr.length === 0) {
    return null;
  }

  const width = arr[0].length - 1;
  const height = arr.length - 1;
  let row = 0;
  let col = 0;
  let isUp = true;
  const res = [];

  while (!isOutOfBounds(height, col, row, width)) {
    res.push(arr[row][col]);
    if (isUp) {
      if (row === 0 || col === width) {
        isUp = false;
        if (col === width) {
          row++;
        } else {
          col++;
        }
      } else {
        row--;
        col++;
      }
    } else {
      if (row === height || col === 0) {
        isUp = true;
        if (row === height) {
          col++;
        } else {
          row++;
        }
      } else {
        row++;
        col--;
      }
    }
  }

  return res;
}

function isOutOfBounds(height, col, row, width) {
  if (row < 0 || row > height || col < 0 || col > width) {
    return true;
  }
  return false;
}
