module.exports = function wordListSteps() {
  this.When(/^I visit the page$/, function visit() {
    return this.visit('/');
  });

  this.Then(/^I see a random word list$/, function seeRandomList() {
    this.browser.assert.text('h1', 'Word Quiz');
    this.browser.assert.elements('#quiz .row', 10);
  });
};
