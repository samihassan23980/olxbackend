const express = require("express");
const router = express.Router();
const MongoUser = require("../models/MessengerUser");
const userChatModel = require("../models/Chat");

router.get("/", async (req, res) => {
  const user = await MongoUser.find({});
  res.send({
    message: "sucess boss",
    data: user,
  });
});

router.get("/sigleUser/:id", async (req, res) => {
  const user = await MongoUser.findOne({ _id: req.params.id });
  res.send({
    data: user,
  });
});

router.post("/addMonogoUser", async (req, res) => {
  const user = new MongoUser(req.body);
  await user.save();
  res.send({
    message: "user add sucesssfully",
  });
});

router.post("/userMessage", async (req, res) => {
  const { userId, message } = req.body;
  const collectionName = userId;
  const Bhat = userChatModel(collectionName);

  try {
    const data = new Bhat(req.body);
    await data.save();
    res.send({
      message: "send sucessfully message",
    });
  } catch (e) {
    res.send({
      message: e.message,
    });
  }
});

router.post("/getUserMessageCollection", async (req, res) => {

  const { userID } = req.body;
  const getChat = userChatModel(userID)
  try {
    
    const resUSer = await getChat.find({});
   
    res.send({
      data : resUSer
    })
  } catch (e) {
    res.send({
      message: e.message,
    });
  }
});

module.exports = router;
