import { getSlidingWindowMax } from '../../Max_Queue/Sliding_Window/slidingWindowMax';

describe('Queue, Sliding Window Max Algo should work', () => {
  test('should return the correct max for array of size 6 and window size 3', () => {
    const arr = [4, 6, 5, 2, 4, 7];
    const windowSize = 3;
    const res = getSlidingWindowMax(arr, windowSize);
    expect(res).toEqual([6, 6, 5, 7]);
  });

  test('should return the correct max for array of size 6 and window size 2', () => {
    const arr = [4, 6, 5, 2, 4, 7];
    const windowSize = 2;
    const res = getSlidingWindowMax(arr, windowSize);
    expect(res).toEqual([6, 6, 5, 4, 7]);
  });

  test('should return the correct max for array of size 6 and window size 2', () => {
    const arr = [4];
    const windowSize = 2;
    const res = getSlidingWindowMax(arr, windowSize);
    expect(res).toEqual([]);
  });

  test('should return the correct max for array of size 6 and window size 2', () => {
    const arr = [4, 5];
    const windowSize = 2;
    const res = getSlidingWindowMax(arr, windowSize);
    expect(res).toEqual([5]);
  });

  test('should return the correct max for array of size 6 and window size 2', () => {
    const arr = [];
    const windowSize = 2;
    const res = getSlidingWindowMax(arr, windowSize);
    expect(res).toEqual(null);
  });
});
