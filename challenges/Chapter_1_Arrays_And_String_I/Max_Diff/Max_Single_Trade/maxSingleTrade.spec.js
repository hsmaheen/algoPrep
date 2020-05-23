import { maxInSingleTrade } from './maxSingleTrade';
describe('Single Trade Max Algorithm Should Work ', () => {
  test('should get the max trade for array of size 10 ', () => {
    const arr = [9, 3, 2, 1, 5, 7, 2, 8, 3, 4];
    const res = maxInSingleTrade(arr);
    expect(res).toBe(7);
  });

  test('should get the max trade as 0 for array of size 1', () => {
    const arr = [1];
    const res = maxInSingleTrade(arr);
    expect(res).toBe(0);
  });

  test('should return null for array of size 0', () => {
    const arr = [];
    const res = maxInSingleTrade(arr);
    expect(res).toBe(null);
  });
});
