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

function slowFindPower(x, power) {
  if (x === 0 && power <= 0) {
    return undefined;
  }

  if (power == 0) {
    return 1;
  }

  if (power == 1) {
    return x;
  }

  if (power < 1) {
    return 1 / (x * findPower(x, power * -1 - 1));
  }

  return x * findPower(x, power - 1);
}
export const findPower = memoizer(slowFindPower);
