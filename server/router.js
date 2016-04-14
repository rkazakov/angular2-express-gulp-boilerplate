var locallydb = require('locallydb');
var db = new locallydb('db');
var collection = db.collection('testcollection');

var router = module.exports = require('express').Router();

router
  .get('/', function (req, res, next) {
    res.writeHead(200);
    res.end();
  })
  .get('/healthcheck', function (req, res, next) {
    res.writeHead(200);
    res.end();
  });
