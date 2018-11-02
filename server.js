import bodyParser from 'body-parser';
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

const proxy = express();
proxy.use(morgan('dev'));
proxy.use(bodyParser());

proxy.listen(port, function() {
  console.log(`port is up on ${port}`);
});

proxy.use(express.static(path.join(__dirname, 'public')));

proxy.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
