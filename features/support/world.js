const Browser = require('zombie');
const app = require('../../app/app.js');

function World() {
  this.browser = new Browser();

  this.server = process.env.HOST;
  if (this.server === undefined) {
    const port = 5000;
    app.start({ port });
    this.server = `http://localhost:${port}`;
  }

  this.visit = path => this.browser.visit(this.server + path);
}

module.exports = function world() {
  this.World = World;
};
