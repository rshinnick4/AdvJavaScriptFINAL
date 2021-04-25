var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("FinalDB");
  /*Return only the documents with the address "Park Lane 38":*/
  var query = { Name: "Richard Shinnick" };
  dbo.collection("Users").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});