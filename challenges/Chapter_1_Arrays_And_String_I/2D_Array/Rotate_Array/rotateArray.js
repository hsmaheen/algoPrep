export function rotateArray(matrix) {
  if (matrix === null) {
    return null;
  }

  const layers = Math.floor(matrix.length / 2);
  const size = matrix.length - 1;
  for (let layer = 0; layer < layers; layer++) {
    for (let j = layer; j < size - layer; j++) {
      const top = matrix[layer][j];
      const right = matrix[j][size - layer];
      const bottom = matrix[size - layer][size - j];
      const left = matrix[size - j][layer];

      matrix[layer][j] = left;
      matrix[j][size - layer] = top;
      matrix[size - layer][size - j] = right;
      matrix[size - j][layer] = bottom;
    }
  }

  return matrix;
}
