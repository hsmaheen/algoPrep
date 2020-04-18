/*
Examples

[0,1,2,4,5],3 = 2 
[1,2,4,5],0 = 0 
[1,2,4,5],4 = 2
*/

getIndexOfSort([], 9);

export function getIndexOfSort(arr = [], target) {
  if (arr.length === 0 || arr === null) {
    return null;
  }

  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (arr[mid] > target) {
      if (arr[mid - 1] < target || mid === 0) {
        return mid;
      }

      end = mid - 1;
    } else if (arr[mid] < target) {
      if (mid === arr.length - 1) {
        return arr.length;
      }
      start = mid + 1;
    } else {
      return mid;
    }
  }
}
