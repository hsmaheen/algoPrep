import { reverseWordsInSentence } from './reverseWords';
describe('Reverse Words in a Sentence Algo should work', () => {
  test('should reverse the words in the sentence with 4 words', () => {
    const sentence = 'Hello how are you';
    const expected = 'you are how Hello';
    expect(reverseWordsInSentence(sentence)).toBe(expected);
  });

  test('should not reverse the words in the sentence with 1 word', () => {
    const sentence = 'Hello';
    const expected = 'Hello';
    expect(reverseWordsInSentence(sentence)).toBe(expected);
  });

  test('should not reverse the words in the sentence with 1 word', () => {
    const sentence = 'Hello hi';
    const expected = 'hi Hello';
    expect(reverseWordsInSentence(sentence)).toBe(expected);
  });

  test('should not reverse the words in the sentence when there is space in the beginning', () => {
    const sentence = ' Hello hi';
    const expected = 'hi Hello ';
    expect(reverseWordsInSentence(sentence)).toBe(expected);
  });

  test('should not reverse the words in the sentence when there is space in the beginning', () => {
    const sentence = '';
    const expected = '';
    expect(reverseWordsInSentence(sentence)).toBe(expected);
  });
});
