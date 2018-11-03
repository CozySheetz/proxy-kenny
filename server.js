const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios')
const bodyParser = require('body-parser');
const cors = require('cors')

const port = process.env.PORT || 4000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser());
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));

// Booker API Routes
app.get('/listings/:id', function(req, res) {
  const id = req.params.id;
  axios
    .get(`http://18.219.227.74/listings/${id}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch(e => console.log('there is an error!', e));
});

app.get('/unavailabilities/:id', function(req, res) {
  const id = req.params.id;
  axios
    .get(`http://18.219.227.74/unavailabilities/${id}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch(e => console.log('there is an error!', e));
});

app.post('/bookings/', function(req, res) {
  axios
    .get(`http://18.219.227.74/bookings/`)
    .then((response) => {
      res.send(response.data)
    })
    .catch(e => console.log('there is an error!', e));
});

app.get('/unavailabilities/:id', function(req, res) {
  const id = req.params.id;
  axios
    .get(`http://18.219.227.74/unavailabilities/${id}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch(e => console.log('there is an error!', e));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// app.get('/test', (req, res) => {
//   res.send('TEST')
// })

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
