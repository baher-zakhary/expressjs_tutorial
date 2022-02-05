var myApp = require('./myApp');
var express = require('express');
var app = express();

const port = process.env.PORT;

app.use('/', myApp);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
