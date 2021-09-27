var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  client : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  product : [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
  }],

  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Order', OrderSchema);