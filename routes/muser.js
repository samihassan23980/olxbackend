const express = require("express");
const router = express.Router();
const MongoUser = require("../models/MessengerUser");

router.get("/", async (req, res) => {
  const user = await MongoUser.find({});
  res.send({
    message: "sucess boss",
    data: user,
  });
});


router.get("/sigleUser/:id", async (req , res)=>{
  
    const user = await MongoUser.findOne({_id : req.params.id})
    res.send({
        data : user,
    })
})

router.post("/addMonogoUser" ,async (req , res)=>{


    const user = new MongoUser(req.body)
    await user.save()
    res.send({
        message : "user add sucesssfully"
    })
})

module.exports = router;
