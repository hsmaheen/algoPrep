export function robinKarpStringSearch(actualString = '', targetString = '') {
  if (targetString.length > actualString.length) {
    return -1;
  }

  if (targetString.length === 0 || actualString.length === 0) {
    return -1;
  }

  const prime = 53;

  let stringHash = getHash(
    actualString.substring(0, targetString.length),
    prime
  );
  const targetHash = getHash(targetString, prime);

  let xPow = 1;

  for (let i = 0; i < targetString.length - 1; i++) {
    xPow *= prime;
  }

  for (let i = targetString.length; i < actualString.length; i++) {
    const toRemove = actualString.charCodeAt(i - targetString.length);
    stringHash =
      (stringHash - toRemove * xPow) * prime + actualString.charCodeAt(i);

    if (
      stringHash === targetHash &&
      actualString.substring(i - targetString.length + 1, i + 1) ===
        targetString
    ) {
      return i - targetString.length + 1;
    }
  }

  return -1;
}

function getHash(key = '', prime) {
  let hash = 0;
  for (const char of key) {
    hash = hash * prime + char.charCodeAt(0);
  }
  return hash;
}
