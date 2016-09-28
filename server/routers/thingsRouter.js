// express and router
var express = require('express');
var router = express.Router();

// body-parser
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

// mongoose
var mongoose = require('mongoose');

// require model
var Thing = require('../models/things');

// get route
router.get('/', function(req, res){
  console.log('in get route');

  // find thing
  Thing.find({}, function(err, results){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(results);
      res.send(results);
    }
  }); // end find thing
}); // end get

// post route
router.post('/', function(req, res){
  console.log('in post route');

  var receivedThing = req.body;
  console.log(receivedThing);

  // create new Thing
  var newThing = new Thing({
    name: receivedThing.name,
    description: receivedThing.description,
    url: receivedThing.url,
  }); // end new Thing

  // save new Thing
  newThing.save(function(err){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('thing shelved');
      res.sendStatus(201);
    }
  }); // end save Thing
}); // end post

module.exports = router;
