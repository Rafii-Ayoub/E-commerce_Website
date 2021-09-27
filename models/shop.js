var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ShopSchema = new Schema({
  title : String,
  description : String,
});

module.exports = mongoose.model('Shop', ShopSchema);