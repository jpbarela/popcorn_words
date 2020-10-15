const list = require('./models/randomWords');
const express = require('express');

const app = express();

app.set('views', `${__dirname}/views`);

app.get('/', (req, res) => {
  res.render('index', { quiz: list.randomWords() });
});

app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'pug');

function start(config) {
  app.listen(config.port);
  console.log('Express server listening on port %d in %s mode', config.port, app.settings.env);
}

exports.start = start;
exports.app = app;
