const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userChatScheema = new Schema({
  userId: {
    required: true,
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
});

const userChat = (collectionName) =>
mongoose.model('Chat', userChatScheema, collectionName);
module.exports = userChat;
