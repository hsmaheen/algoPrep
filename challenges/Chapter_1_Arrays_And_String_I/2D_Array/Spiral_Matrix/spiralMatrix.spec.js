import { getSpiralElements } from './spiralMatrix';
describe('Should print the spiral elements of a matrix', () => {
  test('should print the correct output for 1x1 Matrix', () => {
    const arr = [[1]];
    const expected = [1];
    expect(getSpiralElements(arr)).toEqual(expected);
  });

  test('should print the correct output for 3x3 Matrix', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    expect(getSpiralElements(arr)).toEqual(expected);
  });

  test('should print the correct output for 4x4 Matrix', () => {
    const arr = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    expect(getSpiralElements(arr)).toEqual(expected);
  });

  test('should print the correct output for 4x3 Matrix', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ];
    const expected = [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8];
    expect(getSpiralElements(arr)).toEqual(expected);
  });

  test('should print the correct output for 4x3 Matrix', () => {
    const arr = [];
    const expected = null;
    expect(getSpiralElements(arr)).toEqual(expected);
  });
});
