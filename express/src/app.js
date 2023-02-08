const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.get('/projects', (req, res) => {
  res.json([
    { id: 1, name: 'Hello World' },
    { id: 2, name: 'First HTML' },
    { id: 3, name: 'The Design Process' },
    { id: 4, name: 'It actually looks OK' },
    { id: 5, name: 'Portfolio React' },
    { id: 6, name: 'My very own Endpoint' },
  ]);
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
