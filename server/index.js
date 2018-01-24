var express = require('express');
var bodyParser = require('body-parser');
var Users = require('../database-mysql/models/users.js').Users;

var app = express();

app.use( bodyParser.json() );

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/users', function (req, res) {
  return Users.findAll().then(users => {
    res.send(users);
  });
});

app.listen(1337, function() {
  console.log('listening on port 1337!');
});

