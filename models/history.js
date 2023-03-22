const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const historySchema = new Schema({
  orderId: String,
  // userId: String,
  time: { type : Date, default: Date.now },
  coordinates: {
    type: [Number],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("History", historySchema);