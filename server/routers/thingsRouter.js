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

// find thing
router.get('/', function(req, res){
  
}); // end get
