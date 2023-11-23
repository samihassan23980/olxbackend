const  mongoose  = require("mongoose");

const mongoURL =
  "mongodb+srv://Karachi123:Karachi123@cluster0.4pispfb.mongodb.net/ads";

mongoose.connect(mongoURL);

module.exports = mongoose;
