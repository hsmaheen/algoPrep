export function getSpiralElements(arr) {
  if (arr === null || arr.length === 0) {
    return null;
  }

  const spiralSequence = [];

  let top = 0;
  let left = 0;
  let bottom = arr.length - 1;
  let right = arr[0].length - 1;

  let dir = 0;

  while (top <= bottom || top <= right) {
    if (dir === 0) {
      for (let i = left; i <= right; i++) {
        spiralSequence.push(arr[top][i]);
      }
      top++;
    } else if (dir === 1) {
      for (let i = top; i <= bottom; i++) {
        spiralSequence.push(arr[i][right]);
      }
      right--;
    } else if (dir === 2) {
      for (let i = right; i >= left; i--) {
        spiralSequence.push(arr[bottom][i]);
      }
      bottom--;
    } else {
      for (let i = bottom; i >= top; i--) {
        spiralSequence.push(arr[i][left]);
      }
      left++;
    }

    dir = (dir + 1) % 4;
  }

  return spiralSequence;
}
