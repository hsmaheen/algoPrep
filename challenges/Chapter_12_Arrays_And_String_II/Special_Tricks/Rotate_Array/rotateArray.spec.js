import { rotateArray } from './rotateArray';

describe('Rotate Array Algo should work', () => {
  test('should rotate array  of length 6 by 2 when number of rotations is 2', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const rotations = 2;
    const expected = [5, 6, 1, 2, 3, 4];
    expect(rotateArray(arr, rotations)).toEqual(expected);
  });

  test('should rotate array of length 6 by 2 when number of rotations is 8', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const rotations = 8;
    const expected = [5, 6, 1, 2, 3, 4];
    expect(rotateArray(arr, rotations)).toEqual(expected);
  });

  test('should rotate array of length 6 by 0 when number of rotations is 0', () => {
    const arr = [1, 2, 3];
    const rotations = 0;
    const expected = [1, 2, 3];
    expect(rotateArray(arr, rotations)).toEqual(expected);
  });

  test('should not break when arr is empty', () => {
    const arr = [];
    const rotations = 0;
    const expected = [];
    expect(rotateArray(arr, rotations)).toEqual(expected);
  });
});
