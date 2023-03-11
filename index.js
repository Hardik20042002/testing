const express = require('express');
const app = express();
require('dotenv').config();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    baseUrl: process.env.BASE_URL
  });
});

app.listen(2000, () => {
  console.log('Server listening on port 2000');
});