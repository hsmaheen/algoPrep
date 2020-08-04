import { findCourseSchedule } from './courseSchedule';

describe('Course Schedule Algo should work', () => {
  test('Should return the correct order of courses to be taken', () => {
    const ans = [0, 2, 1, 3];
    const response = findCourseSchedule(4, [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ]);
    expect(response).toEqual(ans);
  });

  test('Should return the correct order of courses to be taken', () => {
    const ans = [0, 1];
    const response = findCourseSchedule(2, [[1, 0]]);
    expect(response).toEqual(ans);
  });
});
