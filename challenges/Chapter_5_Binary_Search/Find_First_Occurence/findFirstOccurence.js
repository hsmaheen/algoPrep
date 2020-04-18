/*
Examples

[1,3,3,7,8],3 = 2
[3,3,3,7,8],3 = 0
[3,3,3,7,8],9 = null
[],9 = null

*/

export function findFirstOccurence(arr, target) {
  if (arr.length === 0 || arr === null || target === null) {
    return null;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (mid > 0 && arr[mid] === target && arr[mid - 1] === target) {
      end = mid - 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return null;
}
