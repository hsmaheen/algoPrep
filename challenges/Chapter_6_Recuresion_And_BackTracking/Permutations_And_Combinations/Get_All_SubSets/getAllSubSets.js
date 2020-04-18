/*
Examples
[1,2,3,4,5,6,7], 3 = [1,2,3] ,[1,2,4]....[1,2,7]
 */

export function getAllSubSets(arr = []) {
  if (arr.length === 0) {
    return null;
  }

  let resArr = [];
  bufferHelper(arr, [], 0, 0, arr.length, resArr);
  return resArr;
}
function bufferHelper(
  arr = [],
  buffer = [],
  buffIdx,
  startIdx,
  buffSize,
  resArr
) {
  //termination cases
  resArr.push(buffer.slice(0, buffIdx));
  if (buffIdx === buffSize) {
    return;
  }

  if (startIdx === arr.length) {
    return;
  }
  //find candidates
  for (let i = startIdx; i < arr.length; i++) {
    //place item into buffer
    buffer[buffIdx] = arr[i];
    //recurse
    bufferHelper(arr, buffer, buffIdx + 1, i + 1, buffSize, resArr);
    // if (res !== undefined) {
    //   resArr.push(res.slice());
    // }
  }
}
