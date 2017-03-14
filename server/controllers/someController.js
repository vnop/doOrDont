var path = require('path');
var index = path.join(__dirname, '../../client/index.html');

module.exports = {
  home: function(req, res) {
    res.sendFile(index);
  }
};