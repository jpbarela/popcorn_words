const app = require('../../app/app.js');

function startServer() {
  this.registerHandler('BeforeFeatures', (event, callback) => {
    const server = process.env.HOST;
    if (server === undefined) {
      app.start({ port: 5000 });
    }
    callback();
  });
}

module.exports = startServer;
