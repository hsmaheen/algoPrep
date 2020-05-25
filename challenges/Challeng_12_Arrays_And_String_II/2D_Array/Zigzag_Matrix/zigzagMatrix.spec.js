import { getZigzagElements } from './zigzagMatrix';

describe('Zigzag Algo should work', () => {
  test('should get the right elements in 3x3 elements', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const expected = [1, 2, 4, 7, 5, 3, 6, 8, 9];
    const result = getZigzagElements(arr);
    expect(result).toEqual(expected);
  });

  test('should get the right elements in 4x4 elements', () => {
    const arr = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    const expected = [1, 2, 5, 9, 6, 3, 4, 7, 10, 13, 14, 11, 8, 12, 15, 16];
    const result = getZigzagElements(arr);
    expect(result).toEqual(expected);
  });

  test('should get the right elements in 2x2 elements', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];

    const expected = [1, 2, 3, 4];
    const result = getZigzagElements(arr);
    expect(result).toEqual(expected);
  });

  test('should get the right elements in 2x2 elements', () => {
    const arr = [[1]];
    const expected = [1];
    const result = getZigzagElements(arr);
    expect(result).toEqual(expected);
  });

  test('should return null when arr length is 0', () => {
    const arr = [];
    const expected = null;
    const result = getZigzagElements(arr);
    expect(result).toEqual(expected);
  });
});
