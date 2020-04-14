const newStates = {
  VISITED: 'VISITED',
  VISITING: 'VISITING',
  NOT_FOUND: 'NOT_FOUND',
};

export function isWordBreakPossible(word, wordDict = []) {
  if (word.length === 0) {
    return null;
  }

  const memo = new Map();
  const result = [];

  if (wordBreakHelper(word, 0, memo, result, wordDict)) {
    return true;
  }
  return false;
}

function wordBreakHelper(
  s = '',
  start,
  memo = new Map(),
  result = [],
  wordDict = []
) {
  if (s.length === start) {
    return true;
  }

  if (memo.has(start) && memo.get(start) === newStates.NOT_FOUND) {
    return false;
  }

  for (let i = start; i < s.length; i++) {
    const currWord = s.substring(start, i + 1);

    if (wordDict.includes(currWord)) {
      result.push(currWord);

      if (wordBreakHelper(s, i + 1, memo, result, wordDict)) {
        return true;
      } else {
        result.pop();
        memo.set(i + 1, newStates.NOT_FOUND);
      }
    }
  }

  return false;
}
