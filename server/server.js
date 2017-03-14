var express = require('express');
var path = require('path');
var db = require('./db/db.js');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var appRouter = require('./routes/route');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exended: true}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  next();
});

app.use(express.static(path.join(__dirname, '../client')));

app.use(appRouter);

module.exports = app;