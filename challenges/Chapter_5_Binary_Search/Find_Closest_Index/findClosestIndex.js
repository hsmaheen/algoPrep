/*
Examples

A = [1,2,4,5,7,8,9], Target = 6 -> Output Index = 3 or 4
*/

//console.log(getIndexOfSort([1, 2, 21, 27, 30, 40], 25));
export function findClosestIndex(arr = [], target) {
  if (arr.length === 0 || arr === null) {
    return null;
  }

  let start = 0,
    end = arr.length - 1,
    result = null;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    result = getResult(arr, result, mid, target);

    if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return result;
}

function getResult(arr, result, mid, target) {
  if (result === null) {
    return mid;
  }

  if (Math.abs(arr[mid] - target) < Math.abs(arr[result] - target)) {
    return mid;
  }

  return result;
}
