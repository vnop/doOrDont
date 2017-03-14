var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var appRouter = require('./routes/route');

var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exended: true}));

// double check on webpack if static files is needed
// app.use(express.static(path.join(__dirname, '/client')));

app.use(appRouter);

module.exports = app;