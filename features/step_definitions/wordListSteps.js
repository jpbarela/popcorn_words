module.exports = function wordListSteps() {
  this.When(/^I visit the page$/, function visit() {
    return this.visit('/');
  });

  this.Then(/^I see a random word list$/, function seeRandomList() {
    this.browser.assert.text('h1', 'Word Quiz');
    this.browser.assert.elements('[data-word]', 10);
  });

  this.Then(/^I see a responsive layout$/, function responsiveLayout() {
    this.browser.assert.elements('.row', 5);
    this.browser.assert.elements('.medium-6', 10);
  });
};
