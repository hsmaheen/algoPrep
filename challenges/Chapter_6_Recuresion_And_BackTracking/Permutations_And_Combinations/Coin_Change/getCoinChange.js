/*
Example
[1,2,5] = [1,1,1,1,1], [1,1,1,2] , [1,2,2], [5]
 */

export function getCoinChange(coinArr = [], total) {
  if (total < 0) {
    return null;
  }
  const resArr = [];
  bufferHelper(coinArr, [], 0, 0, total, resArr);
  return resArr;
}

function bufferHelper(
  coinArr = [],
  buff = [],
  currTotal,
  currIdx,
  total,
  resArr = []
) {
  if (currTotal > total) {
    return;
  }
  if (currTotal === total) {
    return buff;
  }

  for (let i = currIdx; i < coinArr.length; i++) {
    buff.push(coinArr[i]);
    const res = bufferHelper(
      coinArr,
      buff,
      currTotal + coinArr[i],
      i,
      total,
      resArr
    );
    if (res != undefined) {
      resArr.push(res.slice());
    }
    buff.pop();
  }
}
