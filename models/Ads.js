const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdsSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
  },
  description: String,
  price: {
    type: Number,
    required: true,
    min: 100,
  },
});

const Ads = mongoose.model("mobiles", AdsSchema);

module.exports = Ads;
