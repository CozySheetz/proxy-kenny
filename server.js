const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const axios = require('axios')
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;

const proxy = express();
proxy.use(morgan('dev'));
proxy.use(bodyParser());

proxy.listen(port, function() {
  console.log(`port is up on ${port}`);
});

proxy.use(express.static(path.join(__dirname, 'public')));

proxy.get('/rooms/:id', function(req, res) {
  const id = req.params.id;``
  axios
    .get(`http://18.219.227.74/listings/${id}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch(e => console.log('there is an error!', e));
});

proxy.get('/test', (req, res) => {
  res.send('TEST')
})

proxy.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
