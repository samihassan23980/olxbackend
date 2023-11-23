const express = require("express");
const router = express.Router();
const Ads = require("../models/Ads");
const olxAds = require("../models/AdsPost");
const verificationToken = require('../middileware/verifytoken')

//localhost:3000/ads

router.get("/", async (req, res) => {
  //get data from db
  try {
    const ads = await Ads.find({}).limit(10);
    res.send({
      message: "data fetched successfully",
      data: ads,
    });
  } catch (e) {
    console.log(e.message);
  }
  return;
});

router.get("/demo", (req, res) => {
  res.send({
    message: "GET",
  });
});

router.get("/getOlxAds", async (req, res) => {
  const olxad = await olxAds.find({});

  res.send({
    data: olxad,
  });
});

router.post("/olxPostAd", verificationToken, async (req, res) => {
  try {
    const getRes = new olxAds(req.body);
    await getRes.save();
    res.send({
      message: "olx ad sucessfully post",
    });
  } catch (e) {
    res.send({ message: 'olxPostAd waly section me masla aya he'})
   
  }
});



router.get("/olxPostAd/:id" , async (req , res) =>{

 const ad = await olxAds.findOne({ _id: req.params.id });
 res.send({
  message: req.params.id ,
  data: ad,
});
})

//localhost:3000/ads/addData

router.post("/addData", async (req, res) => {
  try {
    const ad = new Ads(req.body);
    await ad.save();
    res.send({
      message: "data added successfully",
    });
  } catch (e) {
    console.log(e.message);
  }
  //add data into db
});

router.get("/:id", async (req, res) => {
  const ad = await Ads.findOne({ _id: req.params.id });

  res.send({
    message: "kam hogaza",
    data: ad,
  });
});

//localhost:3000/ads/updateData
router.put("/updateData/:id", async (req, res) => {
  const { _id } = req.body;
  const data = await Ads.findOneAndUpdate({ _id: req.params.id }, req.body);
  //update data into db
  res.send({
    message: "data updated successfully",
    data,
  });
});

//localhost:3000/ads/deleteData
router.delete("/deleteData/:id", async (req, res) => {
  try {
    const det = await Ads.deleteOne({ _id: req.params.id });
    //delete data from db
    res.send({
      message: "data deleted successfully",
      det,
    });
  } catch (e) {
    {
      message: e;
    }
  }
});

module.exports = router;
