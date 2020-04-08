/*
Examples
 [5,2,4,4,6,4,4,3],4 = [3,2,4,4,4,4,5,6]
 [4,5,6]=[4,5,6]
 [3,4,5]=[3,4,5]
 [2,3,4] = [2,3,4]
 [1] = [1]
 []=[]
*/
//console.log(pivotArray([5, 2, 4, 4, 6, 4, 4, 3], 4));
function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivotArray(arr = [], pivot) {
  if (arr.length === 0 || arr.length == 1) {
    return arr;
  }
  let leftBound = 0;
  let rightBound = arr.length - 1;
  let i = 0;
  while (i <= rightBound) {
    if (arr[i] < pivot) {
      swap(i, leftBound, arr);
      leftBound++;
      i++;
    } else if (arr[i] > pivot) {
      swap(i, rightBound, arr);
      rightBound--;
    } else {
      i++;
    }
  }

  return arr;
}

export default { pivotArray };
