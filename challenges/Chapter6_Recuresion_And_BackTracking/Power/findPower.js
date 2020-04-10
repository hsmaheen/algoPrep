/*
Examples
(x,n) = x^n
(2,2) = 4 
(2,-2) = 0.25 
 */

function memoizer(func) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const res = func.apply(this, args);
    cache[args] = res;
    return res;
  };
}

function positivePower(x, power) {
  if (power === 0) {
    return 1;
  }

  if (power === 1) {
    return x;
  }

  return x * positivePower(x, power - 1);
}

function slowFindPower(x, power) {
  if (x === 0 && power <= 0) {
    return undefined;
  }

  const result = positivePower(Math.abs(x), Math.abs(power));

  if (power < 1) {
    return 1 / result;
  }

  if (x < 0 && power % 2 !== 0) {
    return -1 * result;
  }

  return result;
}
export const findPower = memoizer(slowFindPower);
