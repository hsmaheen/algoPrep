export function getEndWordDistance(
  beginWord = '',
  endWord = '',
  wordList = []
) {
  if (!wordList.includes(endWord)) {
    return -1;
  }

  const processQueue = [];
  const visitedWords = [];
  processQueue.push(beginWord);
  let currentLevel = 1;
  let itemsToProcess = 1;

  while (processQueue.length !== 0) {
    const currWord = processQueue.shift();

    for (let i = 0; i < currWord.length; i++) {
      const currWordArray = Array.from(currWord);
      for (let j = 0; j < 26; j++) {
        currWordArray[i] = String.fromCharCode(97 + j);
        const word = currWordArray.join('');

        if (endWord === word) {
          return currentLevel;
        }

        if (!visitedWords.includes(word) && wordList.includes(word)) {
          visitedWords.push(word);
          processQueue.push(word);
        }

        itemsToProcess--;

        if (itemsToProcess === 0) {
          itemsToProcess = processQueue.length;
          currentLevel++;
        }
      }
    }
  }

  return -1;
}
