var app = require('./server');
// var port = process.env.PORT || 3000;
var port = 3000;

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});