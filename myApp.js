require('dotenv').config()

let bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

// root level middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
  const responseObj = {message: "Hello json"};
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    responseObj.message = responseObj.message.toUpperCase();
  }
  res.json(responseObj);
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({time: req.time})
});

app.get('/:word/echo', (req, res) => {
  res.json({echo: req.params.word});
});

app.get('/name', (req, res) => {
  res.json({name: `${req.query.first} ${req.query.last}`});
});

































module.exports = app;
