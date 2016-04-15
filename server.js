var express = require('express');
var path = require('path');
var app = express();
var router = require('./server/router');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(router);

app.use('/app', express.static(__dirname + '/app'));

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;
});
