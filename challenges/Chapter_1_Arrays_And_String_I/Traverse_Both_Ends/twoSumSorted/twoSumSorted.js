function twoSum(arr = [], tSum) {
  if (arr.length === 0) {
    return null;
  }
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const sum = arr[start] + arr[end];

    if (sum < tSum) {
      start++;
    } else if (sum > tSum) {
      end--;
    } else {
      return [arr[start], arr[end]];
    }
  }

  return null;
}

export default { twoSum };
