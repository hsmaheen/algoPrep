import { arrangeMarbles } from './arrangeMarbles';

test('should arrange marbles i order', () => {
  const arr = [1, 0, 1, 2, 1, 0, 1, 2];
  const expected = [0, 0, 1, 1, 1, 1, 2, 2];
  expect(arrangeMarbles(arr)).toStrictEqual(expected);
});

test('should not change the marbles when already in order', () => {
  const arr = [0, 0, 1, 1, 1, 1, 2, 2];
  const expected = [0, 0, 1, 1, 1, 1, 2, 2];
  expect(arrangeMarbles(arr)).toStrictEqual(expected);
});
