/*
Examples
[1,2,3,5,2] = 8
 */

export function getSubArraySum(arr = [], tSum) {
  if (arr.length === 0) {
    return null;
  }
  let start = 0;
  let end = 0;
  let sum = arr[0];

  while (start < arr.length) {
    if (start > end) {
      end = start;
      sum = arr[start];
    }
    if (sum < tSum) {
      if (end === arr.length - 1) {
        break;
      }
      end++;
      sum += arr[end];
    } else if (sum > tSum) {
      sum -= arr[start];
      start++;
    } else {
      return [start, end];
    }
  }

  return null;
}
