import { MaxQueue } from "../Implementation/maxQueue";

export function getSlidingWindowMax(arr, windowSize) {
  if (!arr || arr.length === 0) {
    return null;
  }

  const maxArr = [];
  const maxQueue = new MaxQueue();

  if (arr.length < windowSize) {
    return maxArr;
  }

  for (let i = 0; i < arr.length; i++) {
    if (maxQueue.length() === windowSize) {
      maxArr.push(maxQueue.getMax());
      maxQueue.dequeue();
    }

    const curr = arr[i];
    maxQueue.enqueue(curr);
  }

  if (maxQueue.length() === windowSize) {
    maxArr.push(maxQueue.getMax());
  }

  return maxArr;
}
