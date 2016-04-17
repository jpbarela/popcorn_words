const app = require('./app/app');

const config = { port: process.env.PORT || 3000 };

app.start(config);
