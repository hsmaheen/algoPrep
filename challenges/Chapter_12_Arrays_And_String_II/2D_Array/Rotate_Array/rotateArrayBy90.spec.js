import { rotateArray } from './rotateArrayBy90';

describe('Rotate Matrix by 90 degree should work', () => {
  test('should rotate a 3x3 matrix', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];

    expect(rotateArray(arr)).toEqual(expected);
  });

  test('should rotate a 2x2 matrix', () => {
    const arr = [
      [1, 2],
      [4, 5],
    ];

    const expected = [
      [4, 1],
      [5, 2],
    ];

    expect(rotateArray(arr)).toEqual(expected);
  });

  test('should rotate a 4x4 matrix', () => {
    const arr = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    const expected = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ];

    expect(rotateArray(arr)).toEqual(expected);
  });

  test('should rotate a 1x1 matrix', () => {
    const arr = [[1]];

    const expected = [[1]];

    expect(rotateArray(arr)).toEqual(expected);
  });

  test('should return [] when matrix is empty', () => {
    const arr = [];
    const expected = [];

    expect(rotateArray(arr)).toEqual(expected);
  });

  test('should return null when arr is null', () => {
    const arr = null;
    const expected = null;
    expect(rotateArray(arr)).toEqual(expected);
  });
});
