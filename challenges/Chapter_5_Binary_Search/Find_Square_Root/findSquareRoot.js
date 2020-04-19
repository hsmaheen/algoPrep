/*
Examples
9 => 3
8 => 2
16 => 4
20 = 4
 */

export function getSquareRoot(num) {
  if (num === null) {
    return null;
  }
  if (num === 0 || num === 1) {
    return num;
  }

  let start = 0;
  let end = Math.floor(num / 2);

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const square = mid * mid;

    if (square > num) {
      end = mid - 1;
    } else if (square < num) {
      if ((mid + 1) * (mid + 1) > num) {
        return mid;
      }
      start = mid + 1;
    } else {
      return mid;
    }
  }
}
