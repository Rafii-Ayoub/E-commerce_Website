var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name : String,
  description : String,
  price : Number,
  addedAt : {
    type : Date,
    default : Date.now
  },
 
});

module.exports = mongoose.model('Product', ProductSchema);
