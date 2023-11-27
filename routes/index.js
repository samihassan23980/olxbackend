const express = require("express");
const router = express.Router();

//localhost:3000/ads
router.use('/ads', require('./ads'))

//localhost:3000/users
router.use('/users', require('./users'))

router.use('/muser', require('./muser'))

module.exports = router