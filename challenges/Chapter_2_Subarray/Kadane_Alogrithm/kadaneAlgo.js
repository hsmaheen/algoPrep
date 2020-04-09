/*

[1,2,-1,2,-3,2,-5]
[-2, -3, 4, -1 - 2, 1, 5, -1])

 */

export function kadaneAlgo(arr = []) {
  if (arr === null) {
    return null;
  }
  if (arr.length === 0) {
    return null;
  }

  let result = 0;
  let currMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currMax = Math.max(arr[i], currMax + arr[i]);
    result = Math.max(result, currMax);
  }

  return result;
}
