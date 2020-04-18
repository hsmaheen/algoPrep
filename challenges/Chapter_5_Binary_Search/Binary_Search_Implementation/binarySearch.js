/*
Examples

[1,3,4,7,8],1 = 0
[1,3,4,7,8,10],3 = 1
[],3 = null
[1,3,4,7,8,10],11 = null

*/

export function binarySearch(arr, target) {
  if (arr.length === 0 || arr === undefined) {
    return null;
  }

  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return null;
}
