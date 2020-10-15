const Browser = require('zombie');

function World() {
  this.browser = new Browser();

  this.server = process.env.HOST || 'http://localhost:5000';

  this.visit = (path) => this.browser.visit(this.server + path);
}

module.exports = function world() {
  this.World = World;
};
