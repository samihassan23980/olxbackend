const express = require("express");
const Users = require("../models/Users");
const { exists } = require("../models/Ads");
const router = express.Router();

router.get("/", async (req, res) => {
  const user = await Users.find({});
  res.send({
    message: "sucess",
    data: user,
  });
});
router.post("/register", async (req, res) => {
  console.log("ok");
  const credentials = req.body;

  const user = new Users(credentials);
  await user.save();

  res.send({
    message: "user add sucseefully",
  });
});

router.post('/sigin' , async(req, res)=>{

  const {email , password} = req.body
  const user = await Users.findOne({email})

  if(!user){
    res.send({
      message : "user doesn't exist"
    })
    return
  }

  const isPasswordCorrect = user.comparePaswword(password)
  console.log('isPasswordCorect ' + isPasswordCorrect)


  if(!isPasswordCorrect){
    
    res.send({
      message : 'password not correct'
    })
  }


  const token = user.generateToken()
user.token = token
await user.save()

  res.send({
    message : 'user sucsessfully login',
    token
  })
                   
})


module.exports = router;
