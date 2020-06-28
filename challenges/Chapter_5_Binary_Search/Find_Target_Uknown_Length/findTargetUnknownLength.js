/*
Examples
[1,2,4,5,6,9,10]
 */

export function findTargetUnknownLength(arr = [], target) {
  if (arr.length === 0 || arr === null) {
    return null;
  }
  let end = findEndOfTheArray(arr);
  let start = 0;

  while (start <= end) {
    const mid = start + Math.floor(end - start / 2);

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

function findEndOfTheArray(arr) {
  let end = 1;
  let start = 1;

  while (arr[end] !== undefined) {
    start = end;
    end = end * 2;
  }

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === undefined) {
      if (arr[mid - 1] !== undefined && mid > 0) return mid - 1;

      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}
