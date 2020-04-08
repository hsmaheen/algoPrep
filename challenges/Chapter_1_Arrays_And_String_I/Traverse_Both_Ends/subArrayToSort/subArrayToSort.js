/*
Example

[1,2,4,5,3,5,6,7]   --> [4,5,3] -
[1,3,5,2,6,4,7,8,9] --> [3,5,2,6,4] 
*/

//Code
function getSubArrayToSort(arr = []) {
  let start;
  let end;

  //Find Dip

  for (start = 0; start < arr.length; start++) {
    if (arr[start + 1] < arr[start]) {
      break;
    }
  }

  //if no dip array is sorted return null
  if (start === arr.length) {
    return null;
  }

  //Find Bump
  for (end = arr.length - 1; end >= 0; end--) {
    if (arr[end - 1] > arr[end]) {
      break;
    }
  }

  let max = Number.NEGATIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;

  for (let i = start; i <= end; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  while (start > 0 && arr[start - 1] > min) {
    start--;
  }

  while (end < arr.length - 1 && arr[end + 1] < max) {
    end++;
  }

  return [start, end];
}

export default { getSubArrayToSort };
