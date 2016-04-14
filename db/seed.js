var locallydb = require('locallydb');

var db = new locallydb('db');
var collection = db.collection('testcollection');

if (collection.items.length === 0)
{
  collection.insert([
    {key: "value"}
  ]);
}

//console.log(collection.items.length);
