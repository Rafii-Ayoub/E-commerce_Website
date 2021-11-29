var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  title : String,
  description : String,
  shopID : {
        type:mongoose.Schema.Types.ObjectId,
        ref :  "Shop"
  },
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Category', CategorySchema);
