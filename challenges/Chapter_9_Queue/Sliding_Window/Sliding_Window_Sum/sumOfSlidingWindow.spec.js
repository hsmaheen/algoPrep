import { findSumOfSlidingWindow } from './sumOfSlidingWindow';

describe('Queue, Sliding Window Algo should work', () => {
  test('should return the correct arr for an Array of size 5 and window size 2', () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 2;
    const expectedArr = [3, 5, 7, 9];
    expect(findSumOfSlidingWindow(arr, size)).toEqual(expectedArr);
  });

  test('should return the correct arr for an Array of size 5 and window size 3', () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 3;
    const expectedArr = [6, 9, 12];
    expect(findSumOfSlidingWindow(arr, size)).toEqual(expectedArr);
  });

  test('should return null when arr size is smaller than window size', () => {
    const arr = [1];
    const size = 3;
    const expectedArr = [];
    expect(findSumOfSlidingWindow(arr, size)).toEqual(expectedArr);
  });

  test('should return correct arr when window size is 1', () => {
    const arr = [1, 2, 4];
    const size = 1;
    const expectedArr = [1, 2, 4];
    expect(findSumOfSlidingWindow(arr, size)).toEqual(expectedArr);
  });
});
