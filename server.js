var express = require('express');
var path = require('path')
//var resources = require("./resources.js");
//require('./routes')(app);

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//var trips = require("./routes/trips.js")(app);
//var users = require("./routes/users.js")(app);
//var events = require("./routes/events.js")(app);

//app.get('/:fileName', function(req,res) {
//  console.log('fileName=' + req.params.fileName); 
//  var file = __dirname + "/" + req.params.fileName;
//  console.log(file);
//  res.sendFile(file);
//});

//app.use('resources/js',express.static(__dirname + 'resources/js/'));
//app.use('resources/css',express.static(__dirname + 'resources/css/'));
//app.use(express.static(__dirname + '/resources/'));
app.use('/resources', express.static(path.join(__dirname, 'resources')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));


app.get('/', function(req,res) {
  //console.log('fileName=' + req.params.fileName);
  //var file = __dirname + "/" + req.params.fileName;
  var file = __dirname + "/index.html";
  console.log(file);
  res.sendFile(file);

});

var server = app.listen(89, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
