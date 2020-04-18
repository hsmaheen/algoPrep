/*
Examples
[1,2,3], 2 =  [1,2], [1,3] ,[2,1], [2,3],[3,2], [3,1]
 */

export function getAllPermutations(num = [], size) {
  if (size > num.length || num.length === 0) {
    return null;
  }

  const resArr = [];
  bufferHelper(num, [], 0, size, [], resArr);
  return resArr;
}

function bufferHelper(
  num,
  buffer,
  buffIdx,
  size,
  isInBuffer = [],
  resArr = []
) {
  if (buffIdx === size) {
    return buffer;
  }

  for (let i = 0; i < num.length; i++) {
    if (!isInBuffer[i]) {
      buffer[buffIdx] = num[i];
      isInBuffer[i] = true;
      const res = bufferHelper(
        num,
        buffer,
        buffIdx + 1,
        size,
        isInBuffer,
        resArr
      );
      if (res != undefined) {
        resArr.push(res.slice());
      }
      isInBuffer[i] = false;
    }
  }
}
