const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const apiRouter = require('./apiRouter');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api', apiRouter);
server.get('/', (req, res) => {
  res.status(200).json({ message: `What the fuck` });
});

module.exports = server;