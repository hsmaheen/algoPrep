function swap(start, end, sentence) {
  const temp = sentence[start];
  sentence[start] = sentence[end];
  sentence[end] = temp;
}

export function reverseWordsInSentence(sentence = '') {
  const sentArray = sentence.split('');
  if (sentArray === null || sentArray.length === 0) {
    return '';
  }

  reverseChars(sentArray, 0, sentArray.length - 1);

  let startOfWord = 0;

  for (let i = 0; i < sentArray.length; i++) {
    if (sentArray[i] === ' ' && i > 0) {
      reverseChars(sentArray, startOfWord, i - 1);
      startOfWord = i + 1;
    }
  }

  reverseChars(sentArray, startOfWord, sentArray.length - 1);

  return sentArray.join('');
}

function reverseChars(sentArray, start, end) {
  if (
    !sentArray ||
    start < 0 ||
    start > sentArray.length - 1 ||
    end < 0 ||
    end > sentArray.length - 1
  ) {
    return;
  }

  while (start < end) {
    swap(start, end, sentArray);
    start++;
    end--;
  }
}
