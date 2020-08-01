import { getEndWordDistance } from '../Word_Ladder/wordLadder';

describe('Word Ladder Algo should work', () => {
  test('should find the correct levels to reach the end word', () => {
    const wordList = ['dot', 'mot', 'lot'];
    const distance = getEndWordDistance('dog', 'lot', wordList);
    expect(distance).toBe(2);
  });

  test('should return -1 when the word does not exist in the list', () => {
    const wordList = ['dot', 'mot', 'lot'];
    const distance = getEndWordDistance('dog', 'mop', wordList);
    expect(distance).toBe(-1);
  });

  test('should return -1 when the word cannot be reached', () => {
    const wordList = ['dot', 'mot', 'lot'];
    const distance = getEndWordDistance('abc', 'lot', wordList);
    expect(distance).toBe(-1);
  });
});
