const test = require('ava');
const random = require('../../app/models/randomWords');

test('returns an array of 10 words', (t) => {
  const testList = random.randomWords();
  t.is(testList.length, 10);
});

test('returns a random list', (t) => {
  const testList1 = random.randomWords();
  const testList2 = random.randomWords();
  t.not(testList1, testList2);
});
