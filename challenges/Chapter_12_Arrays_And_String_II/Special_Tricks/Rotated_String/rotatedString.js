export function isRotatedString(stringToCheck, originalString) {
  if (!stringToCheck || !originalString) {
    return false;
  }
  const stringToSearch = originalString + originalString;
  return stringToSearch.includes(stringToCheck);
}
