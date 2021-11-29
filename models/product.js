var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name : String,
  description : String,
  price : Number,
  categoryID : {
        type:mongoose.Schema.Types.ObjectId,
        ref :  "Category"
  },
  
  addedAt : {
    type : Date,
    default : Date.now
  },
 
});

module.exports = mongoose.model('Product', ProductSchema);
