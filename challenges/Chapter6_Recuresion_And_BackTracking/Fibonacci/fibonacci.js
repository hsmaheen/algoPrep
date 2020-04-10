function memoizer(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function getFibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fastFib(n - 1) + fastFib(n - 2);
}

export const fastFib = memoizer(getFibonacci);
