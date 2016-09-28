// require mongoose
var mongoose = require('mongoose');

// set up Schema
var Schema = mongoose.Schema;

// new Schema
var thingSchema = new Schema({
  name: String,
  description: String,
  url: {type: String, default: 'https://images-na.ssl-images-amazon.com/images/I/41B214BSZYL._AC_UL320_SR194,320_.jpg'}
});

// save Schema as model
var Thing = mongoose.model('things', thingSchema);

module.exports = Thing;
