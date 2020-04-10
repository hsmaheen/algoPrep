/*
Examples
[-1,2,1,-4,2,3,-1,2],0 =[0,4]

[1,-2, 1, 2, 4, -2, 1],5= [1,4]
 */

export function getArrayWithTargetSum(arr = [], tSum) {
  let sumMap = new Map();
  let preSum = 0;

  for (let i = 0; i < arr.length; i++) {
    preSum += arr[i];

    if (preSum === tSum) {
      return [0, i];
    }

    if (sumMap.has(preSum - tSum)) {
      return [sumMap.get(preSum - tSum) + 1, i];
    }

    sumMap.set(preSum, i);
  }

  return null;
}
