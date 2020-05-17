import { Queue } from '../../Implementation/queueImplementation';

/*
[1,2,3,4,5] = > 1-2 2-3 3-4 4-5
 */
export function findSumOfSlidingWindow(arr = [], size) {
  if (!arr || !size) {
    return null;
  }

  if (arr.length === 0 || size === 0) {
    return 0;
  }

  let sum = 0;
  let currSize = 0;
  const queue = new Queue();
  let sumArr = [];

  for (let i = 0; i < arr.length; i++) {
    currSize++;
    sum = sum + arr[i];
    queue.enqueue(arr[i]);
    if (currSize > size) {
      const num = queue.dequeue().data;
      sum = sum - num;
      currSize--;
    }
    if (currSize == size) {
      sumArr.push(sum);
    }
  }

  return sumArr;

  /*
  2nd Approach
    let start = 0;
    let end = 0;
    let currSize = 0;
    let sum = 0;
    let sumArr = [];
    while (end < arr.length) {
      sum = sum + arr[end];
      end++;
      currSize++;
      if (currSize > size) {
        sum = sum - arr[start];
        currSize--;
        start++;
      }
      if (currSize === size) {
        sumArr.push(sum);
      }
    }

    return sumArr;
  */

  /*
  1st Approach
    const queue = new Queue();
    let sum = 0;
    let sumArr = [];
    let currSize = 0;
    for (let i = 0; i < arr.length; i++) {
      currSize++;
      sum = sum + arr[i];
      if (currSize > size) {
        sum = sum - arr[Math.abs(size - i)];
        currSize--;
      }
      if (currSize === size) {
        sumArr.push(sum);
      }
    }

    return sumArr;
    */
}
