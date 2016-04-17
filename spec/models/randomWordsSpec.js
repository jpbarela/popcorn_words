const random = require('../../app/models/randomWords');

describe('randomWords', () => {
  it('returns an array of 10 words', () => {
    const testList = random.randomWords();
    expect(testList.length).toEqual(10);
  });

  it('returns a random list', () => {
    const testList1 = random.randomWords();
    const testList2 = random.randomWords();
    expect(testList1).not.toEqual(testList2);
  });
});
