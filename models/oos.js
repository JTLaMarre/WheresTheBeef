const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const oosSchema = new Schema({
    storeName: {
    type: String,
    trim: true,
    required:true
  },
  item: {
    type: String,
    trim:true,
    required:true
  },
  storeAddress:{
      type: String,
      trim:true,
      required:true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const OOS = mongoose.model("OOS", oosSchema);

module.exports = OOS;