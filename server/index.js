var app = require('./server');
// add process env port later
var port = 3000;

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});