/*
Examples
1.) "I live in a house" = "house a in live i"
2.)"hello" = "hello"
3.) "" = ""
*/

//Code
//Technique used - Reverse Traverse
function reverseSentence(sent = '') {
  //Base case
  if (sent === '' || sent.length === 1) {
    return sent;
  }

  let currWord = '';
  let newSent = '';

  for (let i = sent.length - 1; i >= 0; i--) {
    const currLetter = sent[i];

    if (currLetter === ' ') {
      if (newSent.length > 0) {
        newSent = newSent + ' ' + currWord;
      } else {
        newSent = newSent + currWord;
      }

      currWord = '';
    } else {
      currWord = sent[i] + currWord;
    }
  }

  if (currWord.length > 0 && newSent.length > 0) {
    newSent = newSent + ' ' + currWord;
  } else {
    newSent = currWord;
  }

  return newSent;
}

//Test
const passed = [];
const failed = [];
if (reverseSentence('I live in a house') === 'house a in live I') {
  passed.push(1);
} else failed.push(1);

if (reverseSentence('hello') === 'hello') {
  passed.push(2);
} else failed.push(2);

if (reverseSentence('') === '') {
  passed.push(3);
} else failed.push(3);

if (reverseSentence('i') === 'i') {
  passed.push(4);
} else failed.push(4);
console.log(`Test case ${JSON.stringify(passed)} passed`);
console.log(`Test case ${JSON.stringify(failed)} failed`);
