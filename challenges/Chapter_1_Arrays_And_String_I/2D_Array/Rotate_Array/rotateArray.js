export function rotateArray(arr) {
  if (arr === null) {
    return null;
  }

  const layers = Math.floor(arr.length / 2);
  const size = arr.length - 1;
  for (let layer = 0; layer < layers; layer++) {
    for (let j = layer; j < size - layer; j++) {
      const top = arr[layer][j];
      const right = arr[j][size - layer];
      const bottom = arr[size - layer][size - j];
      const left = arr[size - j][layer];

      arr[layer][j] = left;
      arr[j][size - layer] = top;
      arr[size - layer][size - j] = right;
      arr[size - j][layer] = bottom;
    }
  }

  return arr;
}
