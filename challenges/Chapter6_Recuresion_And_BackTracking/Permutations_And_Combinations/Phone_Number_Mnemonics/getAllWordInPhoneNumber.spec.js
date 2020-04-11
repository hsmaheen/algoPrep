import { getAllWordsInPhoneNumber } from './getAllWordsInPhoneNumber';

test('should return all combination for phone number 1 2 3', () => {
  const res = getAllWordsInPhoneNumber([1, 2, 3]);
  expect(res).toStrictEqual([
    ['A', 'D'],
    ['A', 'E'],
    ['A', 'F'],
    ['B', 'D'],
    ['B', 'E'],
    ['B', 'F'],
    ['C', 'D'],
    ['C', 'E'],
    ['C', 'F'],
  ]);
});

// test('should return all combination for phone number 1 2 0', () => {
//   const res = getAllWordsInPhoneNumber([1, 2, 0]);
//   console.log('res', res);
//   expect(res).toStrictEqual([
//     ['A', 'D'],
//     ['A', 'E'],
//     ['A', 'F'],
//     ['B', 'D'],
//     ['B', 'E'],
//     ['B', 'F'],
//     ['C', 'D'],
//     ['C', 'E'],
//     ['C', 'F'],
//   ]);
// });
