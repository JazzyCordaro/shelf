// require and call express
var express = require('express');
var app = express();

// require path
var path = require('path');

// set up body-parser
var bodyParser = require('body-parser');
var urlencodedparser = bodyParser.urlencoded({extended: false});
app.use(urlencodedparser);
app.use(bodyParser.json());

// mongoose
var mongoose = require('mongoose');
var mongoURI = 'mongodb://localhost:27017/shelfdb';
var mongoDB = mongoose.connect(mongoURI).connection;

// mongo error handling
mongoDB.on('error', function(err){
  console.log(err);
});
mongoDB.once('open', function(){
  console.log('open');
});

// router
var thingsRouter = require('./routers/thingsRouter');
app.use('/things', thingsRouter);

// port
var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log('I can hear you');
});

// use public
app.use(express.static('public'));

// base url
app.get('/*', function(req, res){
 console.log('request params:',req.params);
 var file = req.params[0] || './views/index.html';
 res.sendFile(path.join(__dirname, '../public/', file));
});
