'use strict';

const wordList = require('../../config/wordList');

function randomWords() {
  const tempWordList = wordList.slice();
  const words = [];
  let wordsLength = tempWordList.length;
  for (let i = 1; i <= 10; i += 1) {
    const wordIndex = Math.floor(Math.random() * wordsLength);
    words.push(tempWordList[wordIndex]);
    tempWordList[wordIndex] = tempWordList[wordsLength - 1];
    wordsLength -= 1;
  }
  return words;
}

exports.randomWords = randomWords;
