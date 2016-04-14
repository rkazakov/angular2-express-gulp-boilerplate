var express = require('express');
var path = require('path');
var app = express();
var router = require('./server/router');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(router);

app.use('/app', express.static(__dirname + '/app'));

// app.set('views', __dirname + '/server/views');
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;
});
