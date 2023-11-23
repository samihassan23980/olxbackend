const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdsPostSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
  },
  description: {
    type: String,
    required: true,
    minlength: 15,
  },
  price: {
    type: Number,
    required: true,
    min: 100,
  },
  imageURl : {
    type : String ,
    required : true
  }
});

const AdsPost = mongoose.model("olxAds", AdsPostSchema);

module.exports = AdsPost;
