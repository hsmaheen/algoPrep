/*
Examples
[1,2,3,4,5,6,7], 3 = [1,2,3] ,[1,2,4]....[1,2,7]
 */

export function getAllCombinations(arr = [], size) {
  if (arr.length === 0 || size > arr.length) {
    return null;
  }

  let resArr = [];
  bufferHelper(arr, [], 0, 0, size, resArr);
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
  if (buffIdx === buffSize) {
    // console.log(buffer);
    return buffer;
  }

  if (startIdx === arr.length) {
    return;
  }
  //find candidates
  for (let i = startIdx; i < arr.length; i++) {
    //place item into buffer
    buffer[buffIdx] = arr[i];
    //recurse
    const res = bufferHelper(arr, buffer, buffIdx + 1, i + 1, buffSize, resArr);
    if (res !== undefined) {
      resArr.push(res.slice());
    }
  }
}

getAllCombinations([1, 2, 3, 4, 5, 6, 7], 3);
