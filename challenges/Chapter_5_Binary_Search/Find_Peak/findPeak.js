/**
A = [1,3,4,5,2] => Peak = 5
A = [5,3,1] => Peak = 5
A = [1,3,5] => Peak = 5
 */
findPeak([10, 20, 15, 2, 23, 90, 67]);
export function findPeak(arr = []) {
  if (arr.length === 0) {
    return null;
  }
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const left = mid === 0 ? Number.NEGATIVE_INFINITY : arr[mid - 1];
    const right =
      mid === arr.length - 1 ? Number.NEGATIVE_INFINITY : arr[mid + 1];

    if (arr[mid] > left && arr[mid] > right) {
      return mid;
    } else if (arr[mid] > left && arr[mid] < right) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}
