export function maxInSingleTrade(arr = []) {
  if (arr === null || arr.length === 0) {
    return null;
  }
  let currMin = Number.POSITIVE_INFINITY;
  let maxTrade = 0;

  for (let i = 0; i < arr.length; i++) {
    currMin = Math.min(arr[i], currMin);
    const currTrade = arr[i] - currMin;

    if (currTrade > maxTrade) {
      maxTrade = currTrade;
    }
  }

  return maxTrade;
}
