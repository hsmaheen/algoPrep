/*
Examples

[7,8,1,1,2,4,6] = 2
[1,2,4,6,7,8] = 0
[2,4,6,7,8,1] = 5
*/

findSmallest([2, 1]);
export function findSmallest(arr = []) {
  if (arr.length === 0 || arr === null) {
    return null;
  }

  let start = 0;
  let end = arr.length - 1;
  const right = arr[arr.length - 1];

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (arr[mid] <= right) {
      if (mid === 0 || arr[mid - 1] > arr[mid]) {
        return mid;
      }
      end = mid - 1;
    } else if (arr[mid] > right) {
      start = mid + 1;
    }
  }

  return null;
}
