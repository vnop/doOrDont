var mongoose = require('mongoose');
var uri = 'mongodb://localhost/doOrDont';

mongoose.connect(uri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected');
});

module.exports = db;