function swap(start, end, arr) {
  const temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}

export function rotateArray(arr, numOfRotations) {
  if (!arr) {
    return null;
  }

  const actualNumOfRotations = numOfRotations % arr.length;

  reverseArray(arr, 0, arr.length - 1);
  reverseArray(arr, 0, actualNumOfRotations - 1);
  reverseArray(arr, actualNumOfRotations, arr.length - 1);
  return arr;
}

function reverseArray(arr, start, end) {
  if (start < 0 || start > arr.length - 1 || end < 0 || end > arr.length - 1) {
    return;
  }

  while (start < end) {
    swap(start, end, arr);
    start++;
    end--;
  }
}
